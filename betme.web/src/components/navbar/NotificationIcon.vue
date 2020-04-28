<template>
  <div class="icon-container">
    <font-awesome-icon :icon="faBell" class="bell" />
    <span class="notification-dot" />
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

.notification-dot {
  position: absolute;
  border-radius: 50%;
  background: #f5222d;
  height: 10px;
  width: 10px;
  box-shadow: 0 0 8px 1px rgb(245, 6, 6);
}
</style>
