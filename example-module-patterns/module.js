import {
  createCrudActions,
  createCrudActionTypes,
  createCrudMutation,
  createCrudState
} from 'vuex-module-generator';

export const types = {
  ...createCrudActionTypes('MODULE_NAME')
};

export const actions = createCrudActions(types);

export default {
  state: { ...createCrudState() },
  mutations: { ...createCrudMutation(types) },
  actions: {
    async fetchSomeResource({ commit }) {
      commit(actions.index.request());
      try {
        const res = await asyncSomeResourceAction();
        const { data } = res.data;
        commit(actions.index.success({ data }));

        return Promise.resolve(res.data);
      } catch (error) {
        commit(actions.index.failure(error));

        return Promise.reject(error);
      }
    }
  }
};
