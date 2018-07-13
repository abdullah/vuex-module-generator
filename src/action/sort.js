import createAction from './plain';

export default function createSortActions(TYPES) {
  const { SORT } = TYPES;

  return {
    sort: {
      request: sortData => createAction(SORT.REQUEST, { sortData }),
      success: data => createAction(SORT.SUCCESS, { data }),
      failure: error => createAction(SORT.FAILURE, { error })
    }
  };
}
