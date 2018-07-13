/**
 * Creates Export Action Creators
 * @param  {object} TYPES
 * @return {object}
 */
import createAction from './plain';

export default function createExportActions(TYPES) {
  const { EXPORT } = TYPES;

  return {
    export: {
      request: exportData => createAction(EXPORT.REQUEST, { exportData }),
      success: data => createAction(EXPORT.SUCCESS, { data }),
      failure: error => createAction(EXPORT.FAILURE, { error })
    }
  };
}
