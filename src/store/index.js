import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:3000',
    menu: Array
  },
  mutations: {
    showProducts(state, data) {
      state.menu = data.menu
    }
  },
  actions: {
    async fetchMenu(ctx) {
      try {
        let respone = await fetch(`${ctx.state.apiUrl}/menu`);
        let data = await respone.json();
        ctx.commit('showProducts', data)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    menu: state => {
      return state.menu
    }
  }
})
