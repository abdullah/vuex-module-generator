import createAsyncActionType from './async';

export default function createImportActionTypes(moduleName) {
  return {
    IMPORT: createAsyncActionType(moduleName, 'IMPORT')
  };
}
