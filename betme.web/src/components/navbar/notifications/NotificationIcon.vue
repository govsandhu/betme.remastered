<template>
  <div class="container">
    <div class="notification-icon-container" @click="openNotificationDrawer()">
      <div>
        <font-awesome-icon :icon="faBell" class="bell" />
        <span class="notification-dot" />
      </div>
      <NotificationDrawer v-if="showNotifications" class="notification-list" @close-notification-drawer="closeNotificationDrawer()" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import NotificationDrawer from './NotificationDrawer.vue';

export default Vue.extend({
  components: {
    NotificationDrawer
  },
  data() {
    return {
      faBell,
      showNotifications: false
    };
  },
  methods: {
    openNotificationDrawer(): void {
      this.showNotifications = true;
    },
    closeNotificationDrawer(): void {
      this.showNotifications = false;
    }
  }
});
</script>

<style lang="scss" scoped>
  .bell {
    @extend .icon;
    color: #ffffff;
  }

  .notification {
    &-dot {
      position: absolute;
      border-radius: 50%;
      background: #f5222d;
      height: 10px;
      width: 10px;
      box-shadow: 0 0 8px 1px rgb(245, 6, 6);
    }

    &-drawer {
      z-index: 1000;
    }

    &-icon-container {
      @extend .icon-container;
      height: 40px;
    }
  }

  .container {
    position: flex;
  }
</style>
