function createAsyncActionType(moduleName, actionName) {
  return {
    REQUEST: `${moduleName}/${actionName}_REQUEST`,
    SUCCESS: `${moduleName}/${actionName}_SUCCESS`,
    FAILURE: `${moduleName}/${actionName}_FAILURE`
  };
}

export default createAsyncActionType;
