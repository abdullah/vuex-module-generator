/**
 * Creates Import Action Creators
 * @param  {object} TYPES
 * @return {object}
 */
import createAction from './plain';

export default function createImportActions(TYPES) {
  const { IMPORT } = TYPES;

  return {
    import: {
      request: data => createAction(IMPORT.REQUEST, { data }),
      success: data => createAction(IMPORT.SUCCESS, { data }),
      failure: error => createAction(IMPORT.FAILURE, { error })
    }
  };
}
