/* eslint-disable no-param-reassign */
import { fetchCustomers } from '@/api/index';
import { createCrudActions, createCrudActionTypes, createCrudMutation, createCrudState } from 'vuex-module-generator';


export const types = {
  ...createCrudActionTypes('CUSTOMER'),
};

export const actions = createCrudActions(types);

export default {
  state: { ...createCrudState() },
  mutations: { ...createCrudMutation(types) },
  actions: {
    cleanCustomers({ commit }) {
      commit(actions.clean.list());
    },
    async fetchCustomers({ commit }, makeError = false) {
      commit(actions.index.request());
      try {
        const res = await fetchCustomers(makeError);
        const { data, meta } = res;
        commit(actions.index.success({ data, meta }));
        return { data, meta };
      } catch (error) {
        commit(actions.index.failure({ message: error.message }));
        return Promise.reject(error);
      }
    },
  },
};
