export default function createExportState() {
  return {
    exporting: {
      isLoading: false,
      data: {},
      exportData: {},
      errors: {}
    }
  };
}
