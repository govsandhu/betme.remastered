<template>
  <div class="icon-container">
    <router-link to="/">
      <img :src="game.path" class="icon">
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Prop } from 'vue/types/options';

export default Vue.extend({
  props: {
    game: {
      type: Object as Prop<{ name: string; path: string }>,
      required: true
    }
  }

});
</script>

<style lang="scss" scoped>
</style>
