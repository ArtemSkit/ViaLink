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
    styleArrivalList: {
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
    promptResolved: false,
    listIsPressed: false,
    busSelected: null,
    tooFar: true,
    markers: [{
      position: {
        coords: {
          latitude: 1,
          longitude: 1
        }
      }
    }],
    loc: {}
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
    tooFar: (state) => {
      return state.tooFar
    },
    styleArrivalList: (state) => {
      return state.styleArrivalList
    },
    markers: (state) => {
      return state.markers
    },
    styleButton: (state) => {
      return state.styleButton
    },
    errorRetrievingGPS: (state) => {
      return state.error
    },
    promptResolved: (state) => {
      return state.promptResolved
    },
    listIsPressed: (state) => {
      return state.listIsPressed
    },
    getLocation: (state) => {
      return state.loc
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
    pressList: (state, payload) => {
      console.log(payload)
      state.listIsPressed = true
      state.busSelecteed = payload
    },
    changeListStyle: state => {
      state.styleList.height = '4em'
      state.styleList.opacity = '1'
    },
    changeArrvalListStyle: state => {
      state.styleArrivalList.height = '4em'
      state.styleArrivalList.opacity = '1'
    },
    resetListStyle: state => {
      state.styleList.height = '10em'
      state.styleList.opacity = '0'
      state.styleArrivalList.height = '10em'
      state.styleArrivalList.opacity = '0'
    },
    changeButtonStyle: state => {
      state.styleButton['margin-top'] = '0.5em'
    },
    error: (state, err) => {
      state.error = true
      state.errorMessage = err
      state.promptResolved = true
    },
    resetListIsPressed: (state, payload) => {
      state.listIsPressed = false
    },
    setLocation: (context, payload) => {
      context.loc = payload
    }
  },
  actions: {
    setLocation: (context, payload) => {
      context.commit('setLocation', payload);
    },
    pressList: (context, payload) => {
      context.commit('pressList', payload);
      context.commit('resetListStyle', payload);
      setTimeout(() => {
        context.commit('changeArrvalListStyle');
      }, 30)
    },
    pressButton: (context, payload) => {
      context.commit('pressButton', payload);
      context.commit('resetListIsPressed', payload);
      context.commit('resetListStyle', payload);
    },
    error: (context, payload) => {
      context.commit('error', payload);
    },
    noError: (context, payload) => {
      context.commit('noError', payload);
    }
  }
});