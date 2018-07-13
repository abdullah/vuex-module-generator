import createAsyncActionType from './async';
import createActiveActionType from './active';

export default function createCrudActionTypes(moduleName) {
  return {
    CLEAN: {
      LIST: `${moduleName}/LIST_CLEAN`,
      ACTIVE: `${moduleName}/ACTIVE_CLEAN`,
      DESTROY: `${moduleName}/DESTROY_CLEAN`
    },
    INDEX: createAsyncActionType(moduleName, 'INDEX'),
    SHOW: createAsyncActionType(moduleName, 'SHOW'),
    CREATE: createAsyncActionType(moduleName, 'CREATE'),
    UPDATE: createAsyncActionType(moduleName, 'UPDATE'),
    DESTROY: createAsyncActionType(moduleName, 'DESTROY'),
    ACTIVE: createActiveActionType(moduleName)
  };
}
