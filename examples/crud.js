/* eslint-disable no-param-reassign */
import { indexResource, updateResource, createResource, destoryResource, showResource } from './api';

// Helpers
import {
  createCrudActions,
  createCrudActionTypes,
  createCrudMutation,
  createCrudState
} from 'vuex-module-generator';

export const types = {
  ...createCrudActionTypes('SOME_RESOURCE')
};

export const resourceState = () => ({
  ...createCrudState()
});

export const mutations = {
  ...createCrudMutation(types)
};

export const actions = createCrudActions(types);

export default {
  state: resourceState,

  mutations,
  actions: {
    // Clean List
    cleanActivityList({ commit }) {
      commit(actions.clean.list());
    },
    // Fetch all resources
    async indexResource({ commit }) {
      commit(actions.index.request());
      try {
        const res = await indexResource();
        commit(actions.index.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.index.failure(error));
        return Promise.reject(error);
      }
    },
    // Create a resource
    async createResource({ commit }) {
      commit(actions.create.request());
      try {
        const res = await createResource();
        commit(actions.create.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.create.failure(error));
        return Promise.reject(error);
      }
    },
    // Update a resource
    async updateResource({ commit }) {
      commit(actions.update.request());
      try {
        const res = await updateResource();
        commit(actions.update.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.update.failure(error));
        return Promise.reject(error);
      }
    },
    // Destroy a resource
    async destoryResource({ commit }) {
      commit(actions.destory.request());
      try {
        const res = await destoryResource();
        commit(actions.destory.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.destory.failure(error));
        return Promise.reject(error);
      }
    },
    // Show a resource
    async showResource({ commit }) {
      commit(actions.show.request());
      try {
        const res = await showResource();
        commit(actions.show.success({ data: res.data, meta: res.meta }));
        return res;
      } catch (error) {
        commit(actions.show.failure(error));
        return Promise.reject(error);
      }
    },
  }
};
