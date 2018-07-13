import {
  createExportActionTypes,
  createExportActions
} from '../../';


describe('CRUD ACTIONS', () => {
  let actions;

  beforeEach(() => {
    actions = createExportActions(createExportActionTypes('TEST'));
  });

  it('should work with export request, success, failure', () => {
    const { exportData } = actions.export.request({ test: 1 });
    expect(exportData.test).toEqual(1);
    const { data: dataSuccess } = actions.export.success({ exportSuccess: 1 });
    expect(dataSuccess.exportSuccess).toEqual(1);
    const { error } = actions.export.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });
});
