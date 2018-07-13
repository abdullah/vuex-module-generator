import createAsyncActionType from './async';

export default function createCloneActionTypes(moduleName) {
  return {
    CLONE: createAsyncActionType(moduleName, 'CLONE')
  };
}
