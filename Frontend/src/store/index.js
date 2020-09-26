import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:3000',
    menu: Array,
    cart: [],
    item: Object
  },
  mutations: {
    showProducts(state, data) {
      state.menu = data
    },
    addItemToCart(state, item) {
      state.cart.push(item)
    },
    orderConfirmed(state, item) {
      state.item = item.data
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
    }
  },
  getters: {
    menu: state => {
      return state.menu
    }
  }
})
