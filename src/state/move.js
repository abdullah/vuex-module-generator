export default function createMoveState() {
  return {
    moving: {
      isLoading: false,
      hasError: false,
      moveData: {},
      data: {},
      errors: {}
    }
  };
}
