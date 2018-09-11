
function createCloneMutation(ACTION_TYPES) {
  return {
    [ACTION_TYPES.CLONE.REQUEST](state, payload) {
      state.cloning = {
        id: payload.id,
        data: payload.data,
        isLoading: true,
        hasError: false,
        errors: {}
      };
    },

    [ACTION_TYPES.CLONE.SUCCESS](state, payload) {
      state.cloning = {
        ...state.cloning,
        isLoading: false,
        hasError: false,
        data: payload.data,
        errors: {}
      };
    },

    [ACTION_TYPES.CLONE.FAILURE](state, payload) {
      state.cloning = {
        ...state.cloning,
        isLoading: false,
        hasError: true,
        errors: payload.error
      };
    }
  };
}

export default createCloneMutation;
