import { fetchCustomer } from '@/api';

export const types = {
  INDEX: {
    REQUEST: 'CUSTOMER_GROUPS/INDEX_REQUEST',
    SUCCESS: 'CUSTOMER_GROUPS/INDEX_SUCCESS',
    FAILURE: 'CUSTOMER_GROUPS/INDEX_FAILURE'
  }
};

export const customerState = {
  list: {
    isLoading: false,
    isLoaded: false,
    data: [],
    errors: {}
  }
};

export const mutations = {
  [types.INDEX.REQUEST](state) {
    state.list = {
      ...state.list,
      isLoading: true,
      errors: {}
    };
  },
  [types.INDEX.SUCCESS](state, payload) {
    state.list = {
      isLoading: false,
      isLoaded: true,
      data: payload.data,
      errors: {}
    };
  },
  [types.INDEX.FAILURE](state, payload) {
    state.list = {
      isLoading: false,
      isLoaded: false,
      data: [],
      errors: payload.error
    };
  }
};

export default {
  state: customerState,
  getters,
  mutations,
  actions: {
    async fetchCustomer({ commit }) {
      commit({ type: types.INDEX.REQUEST });
      try {
        const res = await fetchCustomer();
        commit({ type: types.INDEX.SUCCESS, payload: { data: res.data } });
      } catch (error) {
        commit({ type: types.INDEX.FAILURE, payload: { error } });
      }
    }
  }
};
