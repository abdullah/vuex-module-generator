# Vuex Module Generator (VMG)

`VMG` allows you to create a `vuex` module easily.

See [All implementations](https://github.com/abdullah/vuex-module-generator/blob/master/example-vmg-modules). 

See [Customer Example](https://abdullah.github.io/vuex-module-generator/).  

### Supported module types

* Clone
* Crud
* Export
* Import
* Move
* Sort

## Motivation

Most of the web applications contain CRUD actions. Vuex or other state management libraries like `redux` implement `stores` which handle CRUD actions.
According to some store patterns each module must contain `isLoading`, `isLoaded`, `data` and `errors` properties in own state, therefore, a module's state can be implemented like this;

```javascript
const customerState = {
  list: {
    isLoading: false,
    isLoaded: false,
    data: [],
    errors: {}
  }
};
```

Sure, there must be other module members `type`, `actions` and `mutations`. Check completed [ vuex module](https://github.com/abdullah/vuex-module-generator/blob/master/example-module-patterns/example-module.js) according to module pattern.

This module contains `list` state with `isLoading`, `isLoaded`, `data` and `errors` properties. When `fetchCustomer` action is called, these states will be changed according to three action types.

  * `INDEX.REQUEST`, it sets `isLoading` true, this means list has been being fetching
  * `INDEX.SUCCESS`, it sets `isLoading` false, `isLoaded` true and data with `payload.data`, this means list has been fetched and there is no problem when it was happening
  * `INDEX.FAILURE`, it sets `isLoading` false, `isLoaded` false, `data`: empty array (b/c it is a list), this means there is an error and it was failed



Finally, the developer can use these different states of the module in different cases. For instance, `isLoading` state can be used by a list to show an indicator or `error` that can be used to show an error component.

The purpose of `VMG` is reducing code lines and making development easy.

## Use cases

* If you have a large application which contains **CRUD** actions in each page/module/component.
* If you want to control **async** states.
* If you want to set a rule which limits to do **CRUD** actions.


## Usage

Import generator members.

```
import { createCrudActions, createCrudActionTypes, createCrudMutation, createCrudState } from 'vuex-module-generator';
```

**`createCrudState`** returns an object which contains `list`, `active`, `creating`, `updating`, `destroying` properties.
These properties contain some sub-properties. Check [CRUD state](https://github.com/Vispera/vuex-module-generator/blob/master/src/state/crud.js) .

**`createCrudActions`** returns CRUD methods to manage `index`, `show`, `create` etc. resource.
Check [CRUD actions](https://github.com/Vispera/vuex-module-generator/blob/master/src/action/crud.js) .


**`createCrudActionTypes`** returns action types which will be used by `createCrudActions`.

**`createCrudMutation`** return functions which handle `CRUD` state mutations. Check [CRUD mutations](https://github.com/Vispera/vuex-module-generator/blob/master/src/mutations/crud.js) .


# Complete example

**Note**: This example can be used for other  `VMG` members.

```javascript
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


Credit

Thanks [Altay Aydemir](https://github.com/altayaydemir), he was my previous developer which wrote this factory for redux, I have implemented it for vuex. That's all :)
