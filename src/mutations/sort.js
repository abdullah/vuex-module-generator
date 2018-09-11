/* eslint-disable no-param-reassign */

function createSortMutation(ACTION_TYPES) {
  return {
    [ACTION_TYPES.SORT.REQUEST](state, payload) {
      state.sorting = {
        ...state.sorting,
        sortData: payload.sortData || {},
        isLoading: true,
        hasError: false,
      };
    },

    [ACTION_TYPES.SORT.SUCCESS](state, payload) {
      state.sorting = {
        ...state.sorting,
        isLoading: false,
        hasError: false,
        data: payload.data || {},
        errors: {}
      };
    },

    [ACTION_TYPES.SORT.FAILURE](state, payload) {
      state.sorting = {
        ...state.sorting,
        isLoading: false,
        hasError: true,
        errors: payload.error
      };
    }
  };
}

export default createSortMutation;
