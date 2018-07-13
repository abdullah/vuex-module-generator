const createAction = (type, payload = {}) => ({
  type,
  ...payload
});

export default createAction;
