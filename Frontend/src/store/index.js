import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'
//import router from './../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:3000',
    menu: Array,
    cart: [],
    order: Object,
    ui: {
      showCart: false,
      showMenu: false
    }
  },
  mutations: {
    showProducts(state, data) {
      state.menu = data
    },
    addItemToCart(state, item) {
      state.cart.push(item)
    },
    orderConfirmed(state, item) {
      state.order = item.data
    },
    toggleMenu(state) {
      state.ui.showMenu = !state.ui.showMenu
    },
    toggleCart(state) {
      state.ui.showCart = !state.ui.showCart
    },
    removeItemFromCart(state, itemIndex) {
      state.cart.splice(itemIndex, 1)
    },
    buyItems() {
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
      ctx.commit('orderConfirmed', data);
      ctx.commit('toggleCart')
    }
  },
  getters: {
    menu: state => {
      return state.menu
    }
  }
})
