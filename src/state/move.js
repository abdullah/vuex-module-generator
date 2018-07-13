export default function createMoveState() {
  return {
    moving: {
      isLoading: false,
      moveData: {},
      data: {},
      errors: {}
    }
  };
}
