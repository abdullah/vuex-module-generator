export default function createExportState() {
  return {
    exporting: {
      isLoading: false,
      hasError: false,
      data: {},
      exportData: {},
      errors: {}
    }
  };
}
