export default function createSortState() {
  return {
    sorting: {
      isLoading: false,
      sortData: {},
      data: {},
      errors: {}
    }
  };
}
