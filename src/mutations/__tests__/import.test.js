import {
  createImportActions,
  createImportActionTypes,
  createImportMutation,
  createImportState
} from '../../';


describe('IMPORT MUTATION', () => {
  let actions;
  let types;
  let mutations;
  let state;

  beforeEach(() => {
    types = createImportActionTypes('TEST');
    actions = createImportActions(types);
    mutations = createImportMutation(types);
    state = createImportState();
  });

  it('should work import request and mutation', () => {
    const payload = actions.import.request({ test: 1 });
    mutations[types.IMPORT.REQUEST](state, payload);
    expect(state.importing.importData.test).toEqual(1);
    expect(state.importing.data).toEqual({});
    expect(state.importing.isLoading).toEqual(true);
    expect(state.importing.errors).toEqual({});
  });


  it('should work import success and mutation', () => {
    const payload = actions.import.success({ test: 1 });
    mutations[types.IMPORT.SUCCESS](state, payload);
    expect(state.importing.importData).toEqual({});
    expect(state.importing.data.test).toEqual(1);
    expect(state.importing.isLoading).toEqual(false);
    expect(state.importing.errors).toEqual({});
  });

  it('should work import failure and mutation', () => {
    const payload = actions.import.failure({ test: 1 });
    mutations[types.IMPORT.FAILURE](state, payload);
    expect(state.importing.importData).toEqual({});
    expect(state.importing.data).toEqual({});
    expect(state.importing.isLoading).toEqual(false);
    expect(state.importing.errors.test).toEqual(1);
  });
});
