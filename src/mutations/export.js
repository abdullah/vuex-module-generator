
function createImportMutation(ACTION_TYPES) {
  return {
    [ACTION_TYPES.EXPORT.REQUEST](state, payload) {
      state.exporting = {
        data: {},
        exportData: payload.exportData,
        errors: {},
        isLoading: true,
        hasError: false,
      };
    },

    [ACTION_TYPES.EXPORT.SUCCESS](state, payload) {
      state.exporting = {
        ...state.exporting,
        data: payload.data,
        isLoading: false,
        hasError: false,
        errors: {}
      };
    },

    [ACTION_TYPES.EXPORT.FAILURE](state, payload) {
      state.exporting = {
        ...state.exporting,
        isLoading: false,
        hasError: true,
        errors: payload.error
      };
    }
  };
}

export default createImportMutation;
