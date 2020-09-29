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
    show: {
      showCart: false,
      showMenu: false
    }
  },
  mutations: {
    showProducts(state, data) {
      state.menu = data
    },

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
    orderConfirmed(state, order) {
      state.order = order.data
    },

    addItemInCart(state, product) {
      let cartItem = state.cart.find(item => item.id == product.id);
      if(cartItem) {
        cartItem.quantity++
      } 
    },
    removeItemFromCart(state, product) {
      let cartItem = state.cart.find(item => item.id == product.id);
      if(cartItem.quantity > 1) {
        cartItem.quantity--
      } else {
        state.cart.splice(product, 1)
      }
    },
    emptyTheCart(state) {
      state.cart = []
    },

    toggleMenu(state) {
      state.show.showMenu = !state.show.showMenu
    },
    toggleCart(state) {
      state.show.showCart = !state.show.showCart
    }
  },
  actions: {
    async fetchMenu(ctx) {
      let data = await ax.get(`${ctx.state.apiUrl}/menu`);
      ctx.commit('showProducts', data.data.menu);
    },
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
    totalCost(state) {
      let items = state.cart.map(item => {
        return item.quantity * item.price
      })
      return items.reduce(function (price, product) {
        return price + product;
      }, 0)
    },
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
