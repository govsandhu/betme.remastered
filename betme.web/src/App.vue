<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/navbar/Navbar.vue';

export default Vue.extend({
  components: {
    Navbar
  }
});
</script>

<style lang="scss"> // eslint-disable-line vue-scoped-css/require-scoped
@import './styles/styles.scss';
</style>
