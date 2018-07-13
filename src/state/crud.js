export default function createCrudState(extraState = {}) {
  return {
    list: {
      isLoading: false,
      isLoaded: false,
      meta: {},
      data: [],
      errors: {}
    },

    active: {
      isLoading: false,
      isLoaded: false,
      data: {},
      meta: {},
      errors: {}
    },

    creating: {
      isLoading: false,
      formData: {},
      data: {},
      errors: {}
    },

    updating: {
      isLoading: false,
      id: '',
      formData: {},
      data: {},
      errors: {}
    },

    destroying: {
      isLoading: false,
      data: {},
      errors: {}
    },
    ...extraState
  };
}
