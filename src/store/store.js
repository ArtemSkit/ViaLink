import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    buttonIsPressed: false,
    styleList: {
      transition: 'all .8s ease 0s',
      height: '10em',
      'text-align': 'center',
      opacity: '0',
      cursor: 'pointer'
    },
    styleButton: {
      transition: 'all 0.5s ease 0s',
      'margin-top': '20%'
    },
    error: false,
    errorMessage: '',
    promptResolved: false
  },

  getters: {
    checkGPSService: (state) => {
      return !!navigator.geolocation
    },
    buttonPressed: (state) => {
      return state.buttonIsPressed
    },
    styleList: (state) => {
      return state.styleList
    },
    styleButton: (state) => {
      return state.styleButton
    },
    errorRetrievingGPS: (state) => {
      return state.error
    },
    promptResolved: (state) => {
      return state.promptResolved
    }
  },
  mutations: {
    noError: (state) => {
      state.error = false
      state.promptResolved = true
    },
    pressButton: (state, payload) => {
      state.buttonIsPressed = true
    },
    changeListStyle: state => {
      state.styleList.height = '4em'
      state.styleList.opacity = '1'
    },
    changeButtonStyle: state => {
      state.styleButton['margin-top'] = '0.5em'
    },
    error: (state, err) => {
      state.error = true
      state.errorMessage = err
      state.promptResolved = true
    }
  },
  actions: {
    pressButton: (context, payload) => {
      context.commit('pressButton', payload);
    },
    error: (context, payload) => {
      context.commit('error', payload);
    },
    noError: (context, payload) => {
      context.commit('noError', payload);
    }
  }
});