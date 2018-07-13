import createAsyncActionType from './async';

export default function createExportActionTypes(moduleName) {
  return {
    EXPORT: createAsyncActionType(moduleName, 'EXPORT')
  };
}
