import createAsyncActionType from './async';

export default function createMoveActionTypes(moduleName) {
  return {
    MOVE: createAsyncActionType(moduleName, 'MOVE')
  };
}
