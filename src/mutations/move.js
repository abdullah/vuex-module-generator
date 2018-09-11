
function createMoveMutation(ACTION_TYPES) {
  return {
    [ACTION_TYPES.MOVE.REQUEST](state, payload) {
      state.moving = {
        ...state.moving,
        moveData: payload.moveData,
        isLoading: true,
        hasError: false,
      };
    },

    [ACTION_TYPES.MOVE.SUCCESS](state, payload) {
      state.moving = {
        ...state.moving,
        isLoading: false,
        hasError: false,
        data: payload.data,
        errors: {}
      };
    },

    [ACTION_TYPES.MOVE.FAILURE](state, payload) {
      state.moving = {
        ...state.moving,
        isLoading: false,
        hasError: true,
        errors: payload.error
      };
    }
  };
}

export default createMoveMutation;
