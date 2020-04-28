<template>
  <div>
    <router-link to="/" class="logo">
      <span>BetMe.</span>
      <span class="logo-accent">gg</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.logo {
  color: #ffffff;
  text-decoration: none;
  transition: all 0.3s;
  margin: 0px 30px 0px 40px;
  font: {
    size: 30px;
    weight: 700;
    family: "Ubuntu", sans-serif;
  }

  &:hover {
    color: $logo-accent;
    text-shadow: 0 5px 20px rgba(186, 64, 245, 0.55);
  }

  &-accent {
    color: $logo-accent;
    text-shadow: 0 5px 20px rgba(186, 64, 245, 0.55);
  }
}
</style>
