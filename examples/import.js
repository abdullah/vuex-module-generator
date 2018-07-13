/* eslint-disable no-param-reassign */
import { importResource } from './api';

// Helpers
import {
  createImportActions,
  createImportActionTypes,
  createImportMutation,
  createImportState
} from 'vuex-module-generator';

export const types = {
  ...createImportActionTypes('SOME_RESOURCE')
};

export const imporState = () => ({
  ...createImportState()
});

export const mutations = {
  ...createImportMutation(types)
};

export const actions = createImportActions(types);

export default {
  state: imporState,
  mutations,
  actions: {
    // Fetch all resources
    async importResource({ commit }) {
      commit(actions.import.request());
      try {
        const res = await importResource();
        commit(actions.import.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.import.failure(error));
        return Promise.reject(error);
      }
    },
  }
};
