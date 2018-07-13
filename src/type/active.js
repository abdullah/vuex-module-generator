function createActiveActionType(moduleName) {
  return {
    SELECT: `${moduleName}/SELECT_ACTIVE`,
    UPDATE: `${moduleName}/UPDATE_ACTIVE`,
    CLEAR: `${moduleName}/CLEAR_ACTIVE`
  };
}

export default createActiveActionType;
