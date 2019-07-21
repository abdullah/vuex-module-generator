<template>
   <div class="home">
      <Customer />
      <ModuleDetail />
   </div>
</template>

<script>
// @ is an alias to /src
import Customer from '@/components/Customer.vue';
import ModuleDetail from '@/components/ModuleDetail.vue';

export default {
  name: 'home',
  components: {
    Customer,
    ModuleDetail,
  },
};
</script>

<style>
  .home {
    display: flex;
  }
  .tails {
    min-width: 400px;
    margin-left: 30px;
  }
</style>
