import Vue from 'vue';
import Vuex from 'vuex';
import Customer from './Customer';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Customer,
  },
});
