import {
  createMoveActions,
  createMoveActionTypes,
  createMoveMutation,
  createMoveState
} from '../../';


describe('MOVE MUTATION', () => {
  let actions;
  let types;
  let mutations;
  let state;

  beforeEach(() => {
    types = createMoveActionTypes('TEST');
    actions = createMoveActions(types);
    mutations = createMoveMutation(types);
    state = createMoveState();
  });

  it('should work move request and mutation', () => {
    const payload = actions.move.request({ test: 1 });
    mutations[types.MOVE.REQUEST](state, payload);
    expect(state.moving.moveData.test).toEqual(1);
    expect(state.moving.data).toEqual({});
    expect(state.moving.isLoading).toEqual(true);
    expect(state.moving.errors).toEqual({});
  });


  it('should work move success and mutation', () => {
    const payload = actions.move.success({ test: 1 });
    mutations[types.MOVE.SUCCESS](state, payload);
    expect(state.moving.moveData).toEqual({});
    expect(state.moving.data.test).toEqual(1);
    expect(state.moving.isLoading).toEqual(false);
    expect(state.moving.errors).toEqual({});
  });

  it('should work move failure and mutation', () => {
    const payload = actions.move.failure({ test: 1 });
    mutations[types.MOVE.FAILURE](state, payload);
    expect(state.moving.moveData).toEqual({});
    expect(state.moving.data).toEqual({});
    expect(state.moving.isLoading).toEqual(false);
    expect(state.moving.errors.test).toEqual(1);
  });
});
