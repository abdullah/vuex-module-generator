/**
 * Creates Move Action Creators
 * @param  {object} TYPES
 * @return {object}
 */
import createAction from './plain';

export default function createMoveActions(TYPES) {
  const { MOVE } = TYPES;

  return {
    move: {
      request: moveData => createAction(MOVE.REQUEST, { moveData }),
      success: data => createAction(MOVE.SUCCESS, { data }),
      failure: error => createAction(MOVE.FAILURE, { error })
    }
  };
}
