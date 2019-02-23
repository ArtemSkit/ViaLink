import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    buttonIsPressed: false,
    styleList: {
      transition: 'all 2s ease 0s',
      height: '10em',
      'text-align': 'center',
      opacity: '0'
    }
  },

  getters: {
    buttonPressed: (state) => {
      return state.buttonIsPressed
    },
    styleList: (state) => {
      return state.styleList
    }
  },
  mutations: {
    pressButton: (state, payload) => {
      state.buttonIsPressed = true
    },
    changeListStyle: state => {
      setTimeout(() => {
        state.styleList.height = '4em'
        state.styleList.opacity = '1'
      }, 30);
    }
  },
  actions: {
    pressButton: (context, payload) => {
      context.commit('pressButton', payload);
    }
  }
});