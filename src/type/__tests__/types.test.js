import {
  createCrudActionTypes,
  createSortActionTypes,
  createCloneActionTypes,
  createMoveActionTypes,
  createImportActionTypes,
  createExportActionTypes,
  createAsyncActionTypes
} from '../../';


describe('ACTION TYPES', () => {
  it('should generate correct crud action name', () => {
    const types = createCrudActionTypes('TEST');
    expect(types.INDEX.REQUEST).toEqual('TEST/INDEX_REQUEST');
    expect(types.INDEX.SUCCESS).toEqual('TEST/INDEX_SUCCESS');
  });

  it('should generate correct sort action name', () => {
    const types = createSortActionTypes('TEST');
    expect(types.SORT.REQUEST).toEqual('TEST/SORT_REQUEST');
    expect(types.SORT.SUCCESS).toEqual('TEST/SORT_SUCCESS');
  });

  it('should generate correct clone action name', () => {
    const types = createCloneActionTypes('TEST');
    expect(types.CLONE.REQUEST).toEqual('TEST/CLONE_REQUEST');
    expect(types.CLONE.SUCCESS).toEqual('TEST/CLONE_SUCCESS');
  });

  it('should generate correct move action name', () => {
    const types = createMoveActionTypes('TEST');
    expect(types.MOVE.REQUEST).toEqual('TEST/MOVE_REQUEST');
    expect(types.MOVE.SUCCESS).toEqual('TEST/MOVE_SUCCESS');
  });

  it('should generate correct import action name', () => {
    const types = createImportActionTypes('TEST');
    expect(types.IMPORT.REQUEST).toEqual('TEST/IMPORT_REQUEST');
    expect(types.IMPORT.SUCCESS).toEqual('TEST/IMPORT_SUCCESS');
  });


  it('should generate correct export action name', () => {
    const types = createExportActionTypes('TEST');
    expect(types.EXPORT.REQUEST).toEqual('TEST/EXPORT_REQUEST');
    expect(types.EXPORT.SUCCESS).toEqual('TEST/EXPORT_SUCCESS');
  });

  it('should generate correct async action name', () => {
    const types = createAsyncActionTypes('TEST', 'BOMB');
    expect(types.REQUEST).toEqual('TEST/BOMB_REQUEST');
    expect(types.SUCCESS).toEqual('TEST/BOMB_SUCCESS');
  });
});
