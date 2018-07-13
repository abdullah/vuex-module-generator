import {
  createCloneActionTypes,
  createCloneActions
} from '../../';


describe('CRUD ACTIONS', () => {
  let actions;

  beforeEach(() => {
    actions = createCloneActions(createCloneActionTypes('TEST'));
  });

  it('should work with clone request, success, failure', () => {
    const { id, data } = actions.clone.request(1, { test: 1 });
    expect(id).toEqual(1);
    expect(data.test).toEqual(1);
    const { data: dataSuccess } = actions.clone.success({ cloneSuccess: 1 });
    expect(dataSuccess.cloneSuccess).toEqual(1);
    const { error } = actions.clone.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });

  it('should work with clone request, success, failure without prop', () => {
    const { id, data } = actions.clone.request(1);
    expect(id).toEqual(1);
    expect(data).toEqual({});
  });
});
