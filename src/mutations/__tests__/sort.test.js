import {
  createSortActions,
  createSortActionTypes,
  createSortMutation,
  createSortState
} from '../../';


describe('SORT MUTATION', () => {
  let actions;
  let types;
  let mutations;
  let state;

  beforeEach(() => {
    types = createSortActionTypes('TEST');
    actions = createSortActions(types);
    mutations = createSortMutation(types);
    state = createSortState();
  });

  it('should work sort request and mutation', () => {
    const payload = actions.sort.request({ test: 1 });
    mutations[types.SORT.REQUEST](state, payload);
    expect(state.sorting.sortData.test).toEqual(1);
    expect(state.sorting.data).toEqual({});
    expect(state.sorting.isLoading).toEqual(true);
    expect(state.sorting.errors).toEqual({});
  });


  it('should work sort success and mutation', () => {
    const payload = actions.sort.success({ test: 1 });
    mutations[types.SORT.SUCCESS](state, payload);
    expect(state.sorting.sortData).toEqual({});
    expect(state.sorting.data.test).toEqual(1);
    expect(state.sorting.isLoading).toEqual(false);
    expect(state.sorting.errors).toEqual({});
  });

  it('should work sort failure and mutation', () => {
    const payload = actions.sort.failure({ test: 1 });
    mutations[types.SORT.FAILURE](state, payload);
    expect(state.sorting.sortData).toEqual({});
    expect(state.sorting.data).toEqual({});
    expect(state.sorting.isLoading).toEqual(false);
    expect(state.sorting.errors.test).toEqual(1);
  });
});
