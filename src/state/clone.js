export default function createCloneState() {
  return {
    cloning: {
      id: '',
      isLoading: false,
      data: {},
      errors: {}
    }
  };
}
