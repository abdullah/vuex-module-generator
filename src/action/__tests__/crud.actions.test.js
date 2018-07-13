import {
  createCrudActionTypes,
  createCrudActions
} from '../../';


describe('CRUD ACTIONS', () => {
  let actions;

  beforeEach(() => {
    actions = createCrudActions(createCrudActionTypes('TEST'));
  });

  it('should work with index request, success, failure', () => {
    const { data } = actions.index.success({ data: 1 });
    expect(data).toEqual(1);
    const { error } = actions.index.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });

  it('should work with show request, success, failure', () => {
    const { id } = actions.show.request(1);
    expect(id).toEqual(1);
    const { data } = actions.show.success({ data: 1 });
    expect(data).toEqual(1);
    const { error } = actions.show.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });

  it('should work with create request, success, failure', () => {
    const { formData } = actions.create.request({ test: 1 });
    expect(formData.test).toEqual(1);
    const { data } = actions.create.success({ test: 1 });
    expect(data.test).toEqual(1);
    const { error } = actions.create.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });


  it('should work with update request, success, failure', () => {
    const { id, formData } = actions.update.request(1, { test: 1 });
    expect(formData.test).toEqual(1);
    expect(id).toEqual(1);
    const { error } = actions.update.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });


  it('should work with destroy request, success, failure', () => {
    const { data } = actions.destroy.request({ test: 1 });
    expect(data.test).toEqual(1);
    expect(actions.destroy.success().payload).toBeUndefined();
    const { error } = actions.destroy.failure({ test: 1 });
    expect(error.test).toEqual(1);
  });

  it('should work with active request, success, failure', () => {
    const { id } = actions.active.select(1);
    expect(id).toEqual(1);
    const { data } = actions.active.update(1);
    expect(data).toEqual(1);
    expect(actions.active.clear().payload).toBeUndefined();
  });
});
