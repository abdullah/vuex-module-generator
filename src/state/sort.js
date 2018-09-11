export default function createSortState() {
  return {
    sorting: {
      isLoading: false,
      hasError: false,
      sortData: {},
      data: {},
      errors: {}
    }
  };
}
