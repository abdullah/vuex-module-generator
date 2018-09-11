export default function createCrudState(extraState = {}) {
  return {
    list: {
      isLoading: false,
      hasError: false,
      isLoaded: false,
      meta: {},
      data: [],
      errors: {}
    },

    active: {
      isLoading: false,
      hasError: false,
      isLoaded: false,
      data: {},
      meta: {},
      errors: {}
    },

    creating: {
      isLoading: false,
      hasError: false,
      formData: {},
      data: {},
      errors: {}
    },

    updating: {
      isLoading: false,
      hasError: false,
      id: '',
      formData: {},
      data: {},
      errors: {}
    },

    destroying: {
      isLoading: false,
      hasError: false,
      data: {},
      errors: {}
    },
    ...extraState
  };
}
