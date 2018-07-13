export default function createImportState() {
  return {
    importing: {
      isLoading: false,
      data: {},
      importData: {},
      errors: {}
    }
  };
}
