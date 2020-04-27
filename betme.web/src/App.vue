<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Navbar from '@/components/navbar.vue';

export default Vue.extend({
  components: {
    Navbar
  }
});
</script>

<style lang="scss">
@import "./styles/styles.scss";
</style>
