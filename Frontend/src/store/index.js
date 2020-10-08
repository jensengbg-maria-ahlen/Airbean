import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:3000',
    menu: Array,
    cart: [],
    order: {},
    user: {},

    //set a class to toggle
    show: {
      showCart: false,
      showMenu: false,
      showProfile: false,
      showLogin: true
    }
  },

  mutations: {
    //show the menu from backend
    showProducts(state, data) {
      state.menu = data
    },

    //show user from backend 
    showUser(state, data) {
      state.user = data
    },

    //add item to the cart from menu
    addItemToCart(state, product) {
      let cartItem = state.cart.find(item => item.id == product.id);

      if (cartItem) {
        cartItem.quantity++
        this.totalCost = (cartItem.quantity * cartItem.price)
      } else {
        state.cart.push(product);
        Vue.set(product, 'quantity', 1)
      }
    },

    //when pressing the button "take my money" it creates a new order
    orderConfirmed(state, order) {
      state.order = order.data
    },

    //add item when in the cart
    addItemInCart(state, product) {
      let cartItem = state.cart.find(item => item.id == product.id);
      if(cartItem) {
        cartItem.quantity++
      } 
    },

    //remove item when in the cart
    removeItemFromCart(state, product) {
      let index = state.cart.findIndex(item => item.id == product.id);
      let cartItem = state.cart[index]
      
      if(cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        state.cart.splice(index, 1)
      }
    },

    //empty the cart when order is placed
    emptyTheCart(state) {
      state.cart = []
    },

    //toggle the menu
    toggleMenu(state) {
      state.show.showMenu = !state.show.showMenu
    },

    //toggle the cart
    toggleCart(state) {
      state.show.showCart = !state.show.showCart
    },

    //toggle from FamilyAirBean to ProfileOrder
    toggleProfile(state) {
      state.show.showLogin = !state.show.showLogin;
      state.show.showProfile = !state.show.showProfile;
    },

  },

  actions: {
    //fetch the menu from the backend
    async fetchMenu(ctx) {
      let data = await ax.get(`${ctx.state.apiUrl}/menu`);
      ctx.commit('showProducts', data.data.menu);
    },

    //send the cartitems to the backends database
    async orderItems(ctx) {
      let data = await ax.post(`${ctx.state.apiUrl}/order`, {
        items: ctx.state.cart,
        user: JSON.parse(sessionStorage.getItem("user")),
      });
      ctx.commit('orderConfirmed', data)
      ctx.commit('emptyTheCart')
      ctx.commit('toggleCart')
    },

    //check if user is logged in
    async checkState(ctx) {
      if (sessionStorage.getItem("user") !== null) {
        ctx.commit("showUser", JSON.parse(sessionStorage.getItem("user")))
      } else {
        alert('Fel användarnamn eller lösenord');
      }
    },

    //login from backend
     async login(ctx, loginValue) {
      let data = await ax.post(`${ctx.state.apiUrl}/login`, loginValue);
      ctx.commit('showUser', data.data)
      sessionStorage.setItem('user', JSON.stringify(data.data))
    },

    //show history
    async showHistory(ctx) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      let data = await ax.get(`${ctx.state.apiUrl}/user/${user.id}`);
      ctx.commit("showUser", data.data)
    }
  },

  getters: {
    //calculate the total cost of the cart
    totalCost(state) {
      let items = state.cart.map(item => {
        return item.quantity * item.price
      })
      return items.reduce(function (price, product) {
        return price + product;
      }, 0)
    },

    //calculate the total order when logged in
    totalOrderCost(state) {
      return state.user.orderHistory.reduce((acc, item) => acc + item.totalCost, 0)
    },

    //calculate the total quantity to show in cart. 
    totalQuantity(state) {
      let items = state.cart.map(item => {
        return item.quantity
      })
      return items.reduce(function (quantity, product) {
        return quantity + product
      }, 0)
    }
  }
})
