import {
  createSortActionTypes,
  createSortActions
} from '../../';


describe('CRUD ACTIONS', () => {
  let actions;

  beforeEach(() => {
    actions = createSortActions(createSortActionTypes('TEST'));
  });

  it('should work with sort request, success, failure', () => {
    const { sortData } = actions.sort.request({ test: 1 });
    expect(sortData.test).toEqual(1);
    const { data: dataSuccess } = actions.sort.success({ sortSuccess: 1 });
    expect(dataSuccess.sortSuccess).toEqual(1);
    const { error } = actions.sort.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });
});
