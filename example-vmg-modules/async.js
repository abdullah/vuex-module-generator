import { createAction, createAsyncActionTypes } from 'vuex-module-generator';
import { fetchRoles } from '../api';

export const types = {
  ROLE: createAsyncActionTypes('ROLE', 'INDEX')
};

export const roleState = () => ({
  isLoading: false,
  isLoaded: false,
  data: {},
  errors: {}
});

export const mutations = {
  [types.ROLE.REQUEST](state) {
    state.isLoading = true;
    state.isLoaded = false;
    state.errors = {};
    state.data = {};
  },
  [types.ROLE.FAILURE](state, payload) {
    state.isLoading = false;
    state.isLoaded = true;
    state.errors = payload.error;
    state.data = {};
  },
  [types.ROLE.SUCCESS](state, payload) {
    state.isLoading = false;
    state.isLoaded = true;
    state.errors = {};
    state.data = payload.data;
  }
};

export default {
  state: roleState,
  mutations,
  actions: {
    async fetchRoles({ commit }) {
      commit(createAction(types.ROLE.REQUEST));
      try {
        const res = await fetchRoles();
        const { data } = res.data;
        commit(createAction(types.ROLE.SUCCESS, { data }));
        return res;
      } catch (error) {
        commit(createAction(types.ROLE.FAILURE, { error }));
        return Promise.reject(error);
      }
    }
  }
};
