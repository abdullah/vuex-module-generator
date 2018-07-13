# VuexFactory

`vuex-module-generator` allows you to create a `vuex` module easly.

### Motivation

Most of web applications contains CRUD actions. Vuex or other state management libraries like `redux` implement `stores` which handle CRUD actions.
Acording to some store patterns each module must contain `isLoading`, `isLoaded`, `data` and `errors` properties in own state therefore a module's state can be implemented like this;

```
const customerState = {
  list: {
    isLoading: false,
    isLoaded: false,
    data: [],
    errors: {}
  },
  ....
};
```

Sure, there must be other module members `type`,`actions` and `mutations`. Check completed vuex module acording to module pattern.

This module contains `list` state with `isLoading`, `isLoaded`, `data` and `errors` properties. When `fetchCustomer` action calls,these state will be changed acording to three action type.

1.`INDEX.REQUEST`, it sets `isLoading` true, this means list has been being fetching.
2.`INDEX.SUCCESS`, it sets `isLoading` false, `isLoaded` true and data with `payload.data`, this means list has been fetched and there is no problem when it was happening.
3.`INDEX.FAILURE`, it sets `isLoading` false, `isLoaded` false, `data`: empty array (b/c it is a list), this means there is an error and it was failed.


Finally, developer can use these different states of module in different cases. For instance `isLoading` state can be used by a list to show an indicator or `error` can be used to show an error component.

Purpose of `vuex-module-generator` is reducing code lines and making development easy.

## Use cases

If you have a large application which contains **CRUD** actions in each page/module/component.
If you want to control **async** states.
If you want to set a rule which limits to do **CRUD** actions.


## Usage


Import generator members.

```
import { createCrudActions, createCrudActionTypes, createCrudMutation, createCrudState } from 'vuex-module-generator';
```

`createCrudState` return an object which contains `list`, `active`, `creating`, `updating`, `destroying` properties.
These properties contains some sub properties. Check [CRUD state](https://github.com/Vispera/vuex-module-generator/blob/master/src/state/crud.js)

`createCrudActions` returns CRUD methods to manage `index`, `show`, `create` etc. resource.
Check [CRUD actions](https://github.com/Vispera/vuex-module-generator/blob/master/src/action/crud.js)


`createCrudActionTypes` returns action types which will be used by `createCrudActions`.
`createCrudMutation` return functions which handle `CRUD` state mutations.
Check Check [CRUD actions](https://github.com/Vispera/vuex-module-generator/blob/master/src/mutations/crud.js)

```
/* eslint-disable no-param-reassign */
import { createCrudActions, createCrudActionTypes, createCrudMutation, createCrudState } from 'vuex-module-generator';

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
        const { data, meta } = res.data;
        commit(actions.index.success({ data }));
        return { data, meta };
      } catch (error) {
        commit(actions.index.failure(error));
        return Promise.reject(error);
      }
    }
  }
};
```



