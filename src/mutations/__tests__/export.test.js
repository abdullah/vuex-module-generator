import {
  createExportActions,
  createExportActionTypes,
  createExportMutation,
  createExportState
} from '../../';


describe('EXPORT MUTATIOn', () => {
  let actions;
  let types;
  let mutations;
  let state;

  beforeEach(() => {
    types = createExportActionTypes('TEST');
    actions = createExportActions(types);
    mutations = createExportMutation(types);
    state = createExportState();
  });

  it('should work export request and mutation', () => {
    const payload = actions.export.request({ test: 1 });
    mutations[types.EXPORT.REQUEST](state, payload);
    expect(state.exporting.exportData.test).toEqual(1);
    expect(state.exporting.data).toEqual({});
    expect(state.exporting.isLoading).toEqual(true);
    expect(state.exporting.errors).toEqual({});
  });


  it('should work export success and mutation', () => {
    const payload = actions.export.success({ test: 1 });
    mutations[types.EXPORT.SUCCESS](state, payload);
    expect(state.exporting.exportData).toEqual({});
    expect(state.exporting.data.test).toEqual(1);
    expect(state.exporting.isLoading).toEqual(false);
    expect(state.exporting.errors).toEqual({});
  });

  it('should work export failure and mutation', () => {
    const payload = actions.export.failure({ test: 1 });
    mutations[types.EXPORT.FAILURE](state, payload);
    expect(state.exporting.exportData).toEqual({});
    expect(state.exporting.data).toEqual({});
    expect(state.exporting.isLoading).toEqual(false);
    expect(state.exporting.errors.test).toEqual(1);
  });
});
