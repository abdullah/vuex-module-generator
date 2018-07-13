
function createMoveMutation(ACTION_TYPES) {
  return {
    [ACTION_TYPES.MOVE.REQUEST](state, payload) {
      state.moving = {
        ...state.moving,
        moveData: payload.moveData,
        isLoading: true
      };
    },

    [ACTION_TYPES.MOVE.SUCCESS](state, payload) {
      state.moving = {
        ...state.moving,
        isLoading: false,
        data: payload.data,
        errors: {}
      };
    },

    [ACTION_TYPES.MOVE.FAILURE](state, payload) {
      state.moving = {
        ...state.moving,
        isLoading: false,
        errors: payload.error
      };
    }
  };
}

export default createMoveMutation;
