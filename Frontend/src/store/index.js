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

    //set a class to toggle
    show: {
      showCart: false,
      showMenu: false,
      showFamilyAirBean: true,
      showProfile: false
    }
  },
  mutations: {
    //show the menu
    showProducts(state, data) {
      state.menu = data
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

    //when pressing the button "take my money" it creates an order
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

    //toggle the profile
    toggleProfile(state) {
      state.show.showFamilyAirBean = !state.show.showFamilyAirBean;
      state.show.showProfile = !state.show.showProfile;
    }
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
        items: ctx.state.cart
      });
      ctx.commit('orderConfirmed', data)
      ctx.commit('emptyTheCart')
      ctx.commit('toggleCart')
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
