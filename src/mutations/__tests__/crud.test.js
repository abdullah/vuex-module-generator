import {
  createCrudActions,
  createCrudActionTypes,
  createCrudMutation,
  createCrudState
} from '../../';


describe('CRUD MUTATIONS', () => {
  let actions;
  let types;
  let mutations;
  let state;

  beforeEach(() => {
    types = createCrudActionTypes('TEST');
    actions = createCrudActions(types);
    mutations = createCrudMutation(types);
    state = createCrudState();
  });

  it('should work crud index request and mutations', () => {
    const payload = actions.index.request();
    mutations[types.INDEX.REQUEST](state, payload);
    expect(state.list.isLoading).toEqual(true);
    expect(state.list.isLoaded).toEqual(false);
    expect(state.list.errors).toEqual({});
  });

  it('should work crud index request and mutations without params', () => {
    mutations[types.INDEX.REQUEST](state);
    expect(state.list.isLoading).toEqual(true);
    expect(state.list.isLoaded).toEqual(false);
    expect(state.list.errors).toEqual({});
  });

  it('should work crud index success and mutations', () => {
    const payload = actions.index.success({ data: 1 });
    mutations[types.INDEX.SUCCESS](state, payload);
    expect(state.list.isLoading).toEqual(false);
    expect(state.list.isLoaded).toEqual(true);
    expect(state.list.errors).toEqual({});
    expect(state.list.data).toEqual(1);
  });

  it('should work crud index failure and mutations', () => {
    const payload = actions.index.failure({ data: 1 });
    mutations[types.INDEX.FAILURE](state, payload);
    expect(state.list.isLoading).toEqual(false);
    expect(state.list.isLoaded).toEqual(false);
    expect(state.list.errors.data).toEqual(1);
    expect(state.list.data).toEqual([]);
  });


  it('should work crud show request and mutations', () => {
    const payload = actions.show.request(1);
    mutations[types.SHOW.REQUEST](state, payload);
    expect(state.active.isLoading).toEqual(true);
    expect(state.active.isLoaded).toEqual(false);
    expect(state.active.errors).toEqual({});
    expect(state.active.data).toEqual({});
  });

  it('should work crud show success and mutations', () => {
    const payload = actions.show.success({ data: 1 });
    mutations[types.SHOW.SUCCESS](state, payload);
    expect(state.active.isLoading).toEqual(false);
    expect(state.active.isLoaded).toEqual(true);
    expect(state.active.errors).toEqual({});
    expect(state.active.data).toEqual(1);
  });

  it('should work crud show failure and mutations', () => {
    const payload = actions.show.failure({ data: 1 });
    mutations[types.SHOW.FAILURE](state, payload);
    expect(state.active.isLoading).toEqual(false);
    expect(state.active.isLoaded).toEqual(true);
    expect(state.active.errors.data).toEqual(1);
    expect(state.active.data).toEqual({});
  });

  it('should work crud create request and mutations', () => {
    const payload = actions.create.request({ data: 1 });
    mutations[types.CREATE.REQUEST](state, payload);
    expect(state.creating.isLoading).toEqual(true);
    expect(state.creating.errors).toEqual({});
    expect(state.creating.formData.data).toEqual(1);
  });

  it('should work crud create success and mutations', () => {
    const requestPayload = actions.create.request({ data: 1 });
    const payload = actions.create.success({ data: 1 });
    mutations[types.CREATE.REQUEST](state, requestPayload);
    mutations[types.CREATE.SUCCESS](state, payload);
    expect(state.creating.isLoading).toEqual(false);
    expect(state.creating.errors).toEqual({});
    expect(state.creating.data.data).toEqual(1);
    expect(state.creating.formData.data).toEqual(1);
  });

  it('should work crud create failure and mutations', () => {
    const requestPayload = actions.create.request({ data: 1 });
    const payload = actions.create.failure({ data: 1 });
    mutations[types.CREATE.REQUEST](state, requestPayload);
    mutations[types.CREATE.FAILURE](state, payload);
    expect(state.creating.isLoading).toEqual(false);
    expect(state.creating.errors.data).toEqual(1);
    expect(state.creating.data).toEqual({});
    expect(state.creating.formData.data).toEqual(1);
  });


  it('should work crud update request and mutations', () => {
    const requestPayload = actions.update.request(1, { data: 1 });
    mutations[types.UPDATE.REQUEST](state, requestPayload);
    expect(state.updating.isLoading).toEqual(true);
    expect(state.updating.errors).toEqual({});
    expect(state.updating.data).toEqual({});
    expect(state.updating.formData.data).toEqual(1);
  });

  it('should work crud update success and mutations', () => {
    const requestPayload = actions.update.request({ id: 1, formData: 1 });
    const payload = actions.update.success({ data: 1 });
    mutations[types.UPDATE.REQUEST](state, requestPayload);
    mutations[types.UPDATE.SUCCESS](state, payload);
    expect(state.updating.isLoading).toEqual(false);
    expect(state.updating.errors).toEqual({});
  });

  it('should work crud update failure and mutations', () => {
    const payload = actions.update.failure({ data: 1 });
    mutations[types.UPDATE.FAILURE](state, payload);
    expect(state.updating.isLoading).toEqual(false);
    expect(state.updating.errors.data).toEqual(1);
    expect(state.updating.data).toEqual({});
    expect(state.updating.formData).toEqual({});
  });

  it('should work crud destroy request and mutations', () => {
    const payload = actions.destroy.request({ data: 1 });
    mutations[types.DESTROY.REQUEST](state, payload);
    expect(state.destroying.isLoading).toEqual(true);
    expect(state.destroying.errors).toEqual({});
    expect(state.destroying.data.data).toEqual(1);
  });

  it('should work crud destroy success and mutations', () => {
    const payload = actions.destroy.success({ data: 1 });
    mutations[types.DESTROY.SUCCESS](state, payload);
    expect(state.destroying.isLoading).toEqual(false);
    expect(state.destroying.errors).toEqual({});
    expect(state.destroying.data.data).toEqual(1);
  });

  it('should work crud destroy failure and mutations', () => {
    const payload = actions.destroy.failure({ data: 1 });
    mutations[types.DESTROY.FAILURE](state, payload);
    expect(state.destroying.isLoading).toEqual(false);
    expect(state.destroying.errors.data).toEqual(1);
    expect(state.destroying.data).toEqual({});
  });

  it('should work crud active select and mutations with empty param', () => {
    const payload = actions.active.select();
    mutations[types.DESTROY.FAILURE](state, payload);
    expect(state.active.data).toEqual({});
  });

  it('should work crud active select and mutations with id', () => {
    state.list.data = [{ id: 1, name: 'data' }];
    const payload = actions.active.select(1);
    mutations[types.ACTIVE.SELECT](state, payload);
    expect(state.active.data.name).toEqual('data');
  });

  it('should work crud active select and mutations without id', () => {
    state.list.data = [{ id: 1, name: 'data' }];
    const payload = actions.active.select();
    mutations[types.ACTIVE.SELECT](state, payload);
    expect(state.active.data).toEqual({});
  });

  it('should work crud active clear and mutations', () => {
    state.list.data = [{ id: 1, name: 'data' }];
    const payload = actions.active.select(1);
    mutations[types.ACTIVE.SELECT](state, payload);
    expect(state.active.data.name).toEqual('data');
    const clearPayload = actions.active.clear();
    mutations[types.ACTIVE.CLEAR](state, clearPayload);
    expect(state.active.data).toEqual({});
  });

  it('should work crud active update and mutations', () => {
    state.list.data = [{ id: 1, name: 'data' }];
    const payload = actions.active.select(1);
    mutations[types.ACTIVE.SELECT](state, payload);
    expect(state.active.data.name).toEqual('data');
    const clearPayload = actions.active.update({ name: 'name2' });
    mutations[types.ACTIVE.UPDATE](state, clearPayload);
    expect(state.active.data.name).toEqual('name2');
  });
});
