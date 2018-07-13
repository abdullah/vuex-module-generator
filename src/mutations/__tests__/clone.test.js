import {
  createCloneActions,
  createCloneActionTypes,
  createCloneMutation,
  createCloneState
} from '../../';


describe('CRUD ACTIONS', () => {
  let actions;
  let types;
  let mutations;
  let state;

  beforeEach(() => {
    types = createCloneActionTypes('TEST');
    actions = createCloneActions(types);
    mutations = createCloneMutation(types);
    state = createCloneState();
  });

  it('should work clone request mutation with recived params', () => {
    const payload = actions.clone.request(1, { test: 1 });
    mutations[types.CLONE.REQUEST](state, payload);
    expect(state.cloning.id).toEqual(1);
    expect(state.cloning.data.test).toEqual(1);
    expect(state.cloning.isLoading).toEqual(true);
    expect(state.cloning.errors).toEqual({});
  });

  it('should work clone success mutation with recived params', () => {
    const payload = actions.clone.success({ test: 1 });
    mutations[types.CLONE.SUCCESS](state, payload);
    expect(state.cloning.id).toEqual('');
    expect(state.cloning.data.test).toEqual(1);
    expect(state.cloning.isLoading).toEqual(false);
    expect(state.cloning.errors).toEqual({});
  });

  it('should work clone failure mutation with recived params', () => {
    const payload = actions.clone.failure({ test: 1 });
    mutations[types.CLONE.FAILURE](state, payload);
    expect(state.cloning.id).toEqual('');
    expect(state.cloning.data).toEqual({});
    expect(state.cloning.isLoading).toEqual(false);
    expect(state.cloning.errors.test).toEqual(1);
  });
});
