import {
  createMoveActionTypes,
  createMoveActions
} from '../../';


describe('CRUD ACTIONS', () => {
  let actions;

  beforeEach(() => {
    actions = createMoveActions(createMoveActionTypes('TEST'));
  });

  it('should work with move request, success, failure', () => {
    const { moveData } = actions.move.request({ test: 1 });
    expect(moveData.test).toEqual(1);
    const { data: dataSuccess } = actions.move.success({ moveSuccess: 1 });
    expect(dataSuccess.moveSuccess).toEqual(1);
    const { error } = actions.move.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });
});
