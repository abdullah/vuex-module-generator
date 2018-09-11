export default function createImportState() {
  return {
    importing: {
      isLoading: false,
      hasError: false,
      data: {},
      importData: {},
      errors: {}
    }
  };
}
