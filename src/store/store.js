import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    test: 'Hello'
  },
  getters: {
    testGetter: (state) => {
      return state.test
    }
  },
  mutations: {
    testMutation: (state, payload) => {
      state.test = state.test + ' ' + payload
      alert(state.test)
    }
  },
  actions: {
    testAction: (context, payload) => {
      setTimeout(function () { // reach out for data
        context.commit('testMutation', payload);
      }, 2000);
    }
  }
});