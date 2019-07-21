export { moveResource } from './api';
// Helpers
import {
  createMoveActions,
  createMoveActionTypes,
  createMoveMutation,
  createMoveState
} from 'vuex-module-generator';

export const types = {
  ...createMoveActionTypes('SOME_RESOURCE')
};

export const moveState = () => ({
  ...createMoveState()
});

export const mutations = {
  ...createMoveMutation(types)
};

export const actions = createMoveActions(types);

export default {
  state: moveState,
  mutations,
  actions: {
    // Fetch all resources
    async moveResource({ commit }) {
      commit(actions.move.request());
      try {
        const res = await moveResource();
        commit(actions.move.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.move.failure(error));
        return Promise.reject(error);
      }
    },
  }
};
