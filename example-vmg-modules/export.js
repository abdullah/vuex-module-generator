export { exportResource } from './api';

// Helpers
import {
  createExportActions,
  createExportActionTypes,
  createExportMutation,
  createExportState
} from 'vuex-module-generator';

export const types = {
  ...createExportActionTypes('SOME_RESOURCE')
};

export const imporState = () => ({
  ...createExportState()
});

export const mutations = {
  ...createExportMutation(types)
};

export const actions = createExportActions(types);

export default {
  state: imporState,
  mutations,
  actions: {
    // Fetch all resources
    async exportResource({ commit }) {
      commit(actions.export.request());
      try {
        const res = await exportResource();
        commit(actions.export.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.export.failure(error));
        return Promise.reject(error);
      }
    },
  }
};
