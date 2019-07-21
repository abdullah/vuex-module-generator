export { sortResource } from './api';
// Helpers
import {
  createSortActions,
  createSortActionTypes,
  createSortMutation,
  createSortState
} from 'vuex-module-generator';

export const types = {
  ...createSortActionTypes('SOME_RESOURCE')
};

export const sortState = () => ({
  ...createSortState()
});

export const mutations = {
  ...createSortMutation(types)
};

export const actions = createSortActions(types);

export default {
  state: sortState,
  mutations,
  actions: {
    // Fetch all resources
    async sortResource({ commit }) {
      commit(actions.sort.request());
      try {
        const res = await sortResource();
        commit(actions.sort.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.sort.failure(error));
        return Promise.reject(error);
      }
    },
  }
};
