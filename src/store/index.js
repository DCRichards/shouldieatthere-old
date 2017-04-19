import Vue from 'vue';
import Vuex from 'vuex';
import establishment from './modules/establishment';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    establishment,
  },
  strict: true,
});
