import createAsyncActionType from './async';

export default function createSortActionTypes(moduleName) {
  return {
    SORT: createAsyncActionType(moduleName, 'SORT')
  };
}
