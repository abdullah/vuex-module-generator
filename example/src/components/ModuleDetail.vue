<template>
  <div class="tails">
    <h2>Module Detail (just list)</h2>
    <small>You can check vue devtools to see other states</small>
    <h3>List state</h3>
    <p><b>isLoading</b> {{ Customer.list.isLoading }} </p>
    <p><b>isLoaded</b> {{ Customer.list.isLoaded }} </p>
    <p><b>errors</b> {{ Customer.list.errors }} </p>
    <p><b>data</b> {{ Customer.list.data }} </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'customer',
  computed: {
    ...mapState(['Customer']),
  },
};
</script>
