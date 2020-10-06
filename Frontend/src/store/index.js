import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:3000',
    menu: Array,
    cart: [],
    order: Object,
    user: {
      name: "",
      email: "",
    },
    userID: [],
    orders: Array,
    users: Array,

    //set a class to toggle
    show: {
      showCart: false,
      showMenu: false,
      showFamilyAirBean: true,
      showProfile: false,
    }
  },

  mutations: {
    //show the menu from backend
    showProducts(state, data) {
      state.menu = data
    },

    //show orders from backend
    showOrders(state, data) {
      state.orders = data
    },

    //show users from backend
    showUsers(state, data) {
      state.users = data
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
      state.show.showFamilyAirBean = !state.show.showFamilyAirBean;
      state.show.showProfile = !state.show.showProfile;
    },

    //value from the input that pushes in to the database.
    storeValue(state, inputValue) {
      state.userID.push(inputValue)
      state.user = inputValue;
    },

    //value that is going in the database
    valueFromUser(state, value) {
      state.userID = value
    },
  },

  actions: {
    //fetch the menu from the backend
    async fetchMenu(ctx) {
      let data = await ax.get(`${ctx.state.apiUrl}/menu`);
      ctx.commit('showProducts', data.data.menu);
      ctx.commit('showOrders', data.data.orders);
      ctx.commit('showUsers', data.data.users);
    },

    //send the cartitems to the backends database
    async orderItems(ctx) {
      let data = await ax.post(`${ctx.state.apiUrl}/order`, {
        items: ctx.state.cart
      });
      ctx.commit('orderConfirmed', data)
      ctx.commit('emptyTheCart')
      ctx.commit('toggleCart')
    },

    //send users to the backend
    async usersFromFrontend(ctx) {
      let data = await ax.post(`${ctx.state.apiUrl}/user`, {
        userID: ctx.state.userID
      });
      ctx.commit('valueFromUser', data)
    },

    //save userValue in sessionStorage
    userValue(ctx, inputValue) {
      ctx.commit('storeValue', inputValue);
      sessionStorage.setItem('user',  JSON.stringify(inputValue))
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

    //calculate the total cost of orderHistory 
    totalOrderCost(state) {
      let items = state.orders.map(item => {
        return item.totalCost
      })
      return items.reduce(function (totalCost, product) {
        return totalCost + product
      }, 0)
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
