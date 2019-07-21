<template>
  <div class="tails">
    <h2>Customer List</h2>
    <p v-if="!isLoaded && !isLoading">
      <small>Click a button to fetch customer list or to see other cases</small>
    </p>
    <button @click="onClick">{{ isLoading ? 'Loading...': 'Fetch Customers' }}</button> <br>
    <button @click="cleanAndFetch">
      {{ isLoading ? 'Loading...': 'Clean & Fetch Customers' }}
      </button> <br>
    <button @click="showErrorCase">
      {{ isLoading ? 'Loading...': 'Fetch Customers & Show error case' }}
     </button>
    <p v-if="hasError">{{ Customer.list.errors.message }}</p>
    <ul v-if="isLoaded">
      <li v-for="customer in customerList" :key="customer.id">{{ customer.first_name }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';

export default {
  name: 'customer',
  computed: {
    ...mapState(['Customer']),
    customerList() {
      return this.Customer.list.data;
    },
    isLoading() {
      return this.Customer.list.isLoading;
    },
    isLoaded() {
      return this.Customer.list.isLoaded;
    },
    hasError() {
      return this.Customer.list.errors.message !== '';
    },
  },
  methods: {
    ...mapActions(['fetchCustomers', 'cleanCustomers']),
    cleanAndFetch() {
      this.cleanCustomers();
      this.onClick();
    },
    showErrorCase() {
      this.fetchCustomers(true /* error */);
    },
    onClick() {
      this.fetchCustomers();
    },
  },
};
</script>

<style>
button {
  padding: 7px 10px;
  background: white;
  border: 1px solid #ddd;
  margin-bottom: 15px;
}
</style>
