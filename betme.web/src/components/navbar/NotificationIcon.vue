<template>
  <div class="icon-container">
    <font-awesome-icon :icon="faBell" class="bell" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { faBell } from '@fortawesome/free-regular-svg-icons';

export default Vue.extend({
  data() {
    return {
      faBell
    };
  }

});
</script>

<style lang="scss" scoped>
.bell {
  @extend .icon;
  color: #ffffff;
}
</style>
