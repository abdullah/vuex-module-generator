
function createImportMutation(ACTION_TYPES) {
  return {
    [ACTION_TYPES.IMPORT.REQUEST](state, payload) {
      state.importing = {
        data: {},
        importData: payload.data,
        errors: {},
        isLoading: true,
        hasError: false,
      };
    },

    [ACTION_TYPES.IMPORT.SUCCESS](state, payload) {
      state.importing = {
        ...state.importing,
        data: payload.data,
        isLoading: false,
        hasError: false,
        errors: {}
      };
    },

    [ACTION_TYPES.IMPORT.FAILURE](state, payload) {
      state.importing = {
        ...state.importing,
        isLoading: false,
        hasError: true,
        errors: payload.error
      };
    }
  };
}

export default createImportMutation;
