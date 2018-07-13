/* eslint-disable no-param-reassign */

function createSortMutation(ACTION_TYPES) {
  return {
    [ACTION_TYPES.SORT.REQUEST](state, payload) {
      state.sorting = {
        ...state.sorting,
        sortData: payload.sortData,
        isLoading: true
      };
    },

    [ACTION_TYPES.SORT.SUCCESS](state, payload) {
      state.sorting = {
        ...state.sorting,
        isLoading: false,
        data: payload.data,
        errors: {}
      };
    },

    [ACTION_TYPES.SORT.FAILURE](state, payload) {
      state.sorting = {
        ...state.sorting,
        isLoading: false,
        errors: payload.error
      };
    }
  };
}

export default createSortMutation;
