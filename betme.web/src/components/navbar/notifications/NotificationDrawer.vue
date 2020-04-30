<template>
  <div ref="notificationList" class="notification-list" tabindex="0" @blur="closeNotificationDrawer()">
    <div>Notification</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  mounted() {
    this.focus();
  },
  methods: {
    focus(): void {
      this.$nextTick(() => {
        const notificationList = this.$refs.notificationList as HTMLDivElement;

        notificationList.focus();
      });
    },
    closeNotificationDrawer(): void {
      this.$emit('close-notification-drawer');
    }
  }
});
</script>

<style lang="scss" scoped>
  .notification-list {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: $logo-accent;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    margin: 2px 0px 0px -80px;
    padding: 20px;
    z-index: 10000;
    overflow-y: auto;
    outline: none;
  }
</style>
