/**
 * Creates Clone Action Creators
 * @param  {object} TYPES
 * @return {object}
 */
import createAction from './plain';

export default function createCloneActions(TYPES) {
  const { CLONE } = TYPES;

  return {
    clone: {
      request: (id, data = {}) => createAction(CLONE.REQUEST, { id, data }),
      success: data => createAction(CLONE.SUCCESS, { data }),
      failure: error => createAction(CLONE.FAILURE, { error })
    }
  };
}
