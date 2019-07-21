export { cloneResource } from './api';

// Helpers
import {
  createCloneActions,
  createCloneActionTypes,
  createCloneMutation,
  createCloneState
} from 'vuex-module-generator';

export const types = {
  ...createCloneActionTypes('SOME_RESOURCE')
};

export const cloneState = () => ({
  ...createCloneState()
});

export const mutations = {
  ...createCloneMutation(types)
};

export const actions = createCloneActions(types);

export default {
  state: cloneState,
  mutations,
  actions: {
    async cloneResource({ commit }) {
      commit(actions.clone.request());
      try {
        const res = await cloneResource();
        commit(actions.clone.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.clone.failure(error));
        return Promise.reject(error);
      }
    },
  }
};
