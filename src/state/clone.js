export default function createCloneState() {
  return {
    cloning: {
      id: '',
      isLoading: false,
      hasError: false,
      data: {},
      errors: {}
    }
  };
}
