/* eslint-disable no-param-reassign */
import crudState from '../state/crud';

function createCrudMutation(ACTION_TYPES) {
  return {
    // CLEAN
    [ACTION_TYPES.CLEAN.LIST](state) {
      state.list = { ...crudState().list };
    },
    [ACTION_TYPES.CLEAN.ACTIVE](state) {
      state.active = { ...crudState().active };
    },
    [ACTION_TYPES.CLEAN.DESTROY](state) {
      state.destroying = { ...crudState().destroying };
    },
    // INDEX
    [ACTION_TYPES.INDEX.REQUEST](state) {
      state.list.isLoading = true;
      state.list.hasError = false;
      state.list.errors = {};
    },
    [ACTION_TYPES.INDEX.SUCCESS](state, payload) {
      state.list.isLoading = false;
      state.list.isLoaded = true;
      state.list.hasError = false;
      state.list.data = payload.data;
      state.list.meta = payload.meta;
      state.list.errors = {};
    },
    [ACTION_TYPES.INDEX.FAILURE](state, payload) {
      state.list.isLoading = false;
      state.list.isLoaded = false;
      state.list.hasError = true;
      state.list.data = [];
      state.list.meta = {};
      state.list.errors = payload.error;
    },

    // SHOW
    [ACTION_TYPES.SHOW.REQUEST](state) {
      state.active = {
        ...state.active,
        isLoading: true,
        hasError: false,
        errors: {}
      };
    },
    [ACTION_TYPES.SHOW.SUCCESS](state, payload) {
      state.active = {
        ...state.active,
        isLoading: false,
        hasError: false,
        isLoaded: true,
        data: payload.data,
        meta: payload.meta,
        errors: {}
      };
    },
    [ACTION_TYPES.SHOW.FAILURE](state, payload) {
      state.active = {
        ...state.active,
        isLoading: false,
        hasError: true,
        isLoaded: true,
        errors: payload.error
      };
    },
    // CREATE
    [ACTION_TYPES.CREATE.REQUEST](state, payload) {
      state.creating = {
        ...state.creating,
        formData: payload.formData,
        isLoading: true,
        hasError: false,
        errors: {}
      };
    },
    [ACTION_TYPES.CREATE.SUCCESS](state, payload) {
      state.creating = {
        ...state.creating,
        data: payload.data,
        isLoading: false,
        hasError: false,
        errors: {}
      };
    },
    [ACTION_TYPES.CREATE.FAILURE](state, payload) {
      state.creating = {
        ...state.creating,
        isLoading: false,
        hasError: true,
        isLoaded: true,
        errors: payload.error
      };
    },
    // UPDATE
    [ACTION_TYPES.UPDATE.REQUEST](state, payload) {
      state.updating = {
        ...state.updating,
        id: payload.id,
        formData: payload.formData,
        isLoading: true,
        hasError: false,
        errors: {}
      };
    },
    [ACTION_TYPES.UPDATE.SUCCESS](state, payload) {
      state.active = {
        isLoading: false,
        hasError: false,
        isLoaded: true,
        data: payload.data,
        errors: {}
      };
      state.updating = {
        ...state.updating,
        data: payload.data,
        isLoading: false,
        hasError: false,
        errors: {}
      };
    },
    [ACTION_TYPES.UPDATE.FAILURE](state, payload) {
      state.updating = {
        ...state.updating,
        isLoading: false,
        hasError: true,
        errors: payload.error
      };
    },
    // DESTROY
    [ACTION_TYPES.DESTROY.REQUEST](state, payload) {
      state.destroying = {
        ...state.destroying,
        data: payload.data,
        isLoading: true,
        hasError: false,
        errors: {}
      };
    },
    [ACTION_TYPES.DESTROY.SUCCESS](state, payload) {
      state.active = {
        ...state.active,
        isLoaded: false,
        data: {}
      };
      state.destroying = {
        isLoading: false,
        hasError: false,
        data: payload.data,
        errors: {}
      };
    },
    [ACTION_TYPES.DESTROY.FAILURE](state, payload) {
      state.destroying = {
        ...state.destroying,
        isLoading: false,
        hasError: true,
        errors: payload.error
      };
    },
    // ACTIVE
    [ACTION_TYPES.ACTIVE.SELECT](state, payload) {
      state.active = {
        isLoading: false,
        hasError: false,
        isLoaded: true,
        data: state.list.data
          .find(item => parseInt(item.id, 10) === parseInt(payload.id, 10)) || {},
        errors: {}
      };
    },
    [ACTION_TYPES.ACTIVE.UPDATE](state, payload) {
      state.active = {
        isLoading: false,
        isLoaded: true,
        hasError: false,
        data: payload.data,
        errors: {}
      };
    },
    [ACTION_TYPES.ACTIVE.CLEAR](state) {
      state.active = {
        isLoading: false,
        isLoaded: false,
        hasError: false,
        data: {},
        errors: {}
      };
    }
  };
}

export default createCrudMutation;
