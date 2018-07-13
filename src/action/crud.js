/**
 * Creates CRUD Action Creators
 * @param  {object} TYPES
 * @return {object}
 */
import createAction from './plain';

export default function createCrudActions(TYPES) {
  const {
    INDEX, SHOW, CREATE, UPDATE, DESTROY, ACTIVE, CLEAN
  } = TYPES;

  return {
    clean: {
      list: () => createAction(CLEAN.LIST),
      active: () => createAction(CLEAN.ACTIVE),
      destroy: () => createAction(CLEAN.DESTROY)
    },
    index: {
      request: () => createAction(INDEX.REQUEST),
      success: ({ data, meta }) => createAction(INDEX.SUCCESS, { data, meta }),
      failure: error => createAction(INDEX.FAILURE, { error })
    },

    show: {
      request: id => createAction(SHOW.REQUEST, { id }),
      success: ({ data, meta }) => createAction(SHOW.SUCCESS, { data, meta }),
      failure: error => createAction(SHOW.FAILURE, { error })
    },

    create: {
      request: formData => createAction(CREATE.REQUEST, { formData }),
      success: data => createAction(CREATE.SUCCESS, { data }),
      failure: error => createAction(CREATE.FAILURE, { error })
    },

    update: {
      request: (id, formData) => createAction(UPDATE.REQUEST, { id, formData }),
      success: ({ data, meta }) => createAction(UPDATE.SUCCESS, { data, meta }),
      failure: error => createAction(UPDATE.FAILURE, { error })
    },

    destroy: {
      request: data => createAction(DESTROY.REQUEST, { data }),
      success: data => createAction(DESTROY.SUCCESS, { data }),
      failure: error => createAction(DESTROY.FAILURE, { error })
    },

    active: {
      select: id => createAction(ACTIVE.SELECT, { id }),
      update: data => createAction(ACTIVE.UPDATE, { data }),
      clear: () => createAction(ACTIVE.CLEAR)
    }
  };
}
