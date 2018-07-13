
function createImportMutation(ACTION_TYPES) {
  return {
    [ACTION_TYPES.IMPORT.REQUEST](state, payload) {
      state.importing = {
        data: {},
        importData: payload.data,
        errors: {},
        isLoading: true
      };
    },

    [ACTION_TYPES.IMPORT.SUCCESS](state, payload) {
      state.importing = {
        ...state.importing,
        data: payload.data,
        isLoading: false,
        errors: {}
      };
    },

    [ACTION_TYPES.IMPORT.FAILURE](state, payload) {
      state.importing = {
        ...state.importing,
        isLoading: false,
        errors: payload.error
      };
    }
  };
}

export default createImportMutation;
