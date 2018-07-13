import {
  createImportActionTypes,
  createImportActions
} from '../../';


describe('CRUD ACTIONS', () => {
  let actions;

  beforeEach(() => {
    actions = createImportActions(createImportActionTypes('TEST'));
  });

  it('should work with import request, success, failure', () => {
    const { data } = actions.import.request({ test: 1 });
    expect(data.test).toEqual(1);
    const { data: dataSuccess } = actions.import.success({ importSuccess: 1 });
    expect(dataSuccess.importSuccess).toEqual(1);
    const { error } = actions.import.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });
});
