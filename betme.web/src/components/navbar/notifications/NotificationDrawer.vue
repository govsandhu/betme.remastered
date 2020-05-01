<template>
  <div ref="notificationDrawer" tabindex="0" @blur="closeNotificationDrawer()">
    <div v-if="!notifications.length" class="notification-drawer-none">
      <div class="default-message-container">
        <font-awesome-icon :icon="faCheckCircle" class="default-message-check" />
        <span>All clear!</span>
      </div>
    </div>
    <div v-else class="notification-drawer">
      <Notification
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Notification from '@/components/navbar/notifications/Notification.vue';
import { INotification } from 'betme.backend/interfaces/notification';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

export default Vue.extend({
  components: {
    Notification
  },
  data() {
    return {
      faCheckCircle,
      // dummy data
      notifications: [{
        user_id: 1,
        bet_id: 1,
        notification_type: 'win',
        read: false,
        updated_at: new Date(),
        created_at: new Date()
      },
      {
        user_id: 2,
        bet_id: 2,
        notification_type: 'loss',
        read: false,
        updated_at: new Date(),
        created_at: new Date()
      },
      {
        user_id: 3,
        bet_id: 3,
        notification_type: 'invite',
        read: false,
        updated_at: new Date(),
        created_at: new Date()
      },
      {
        user_id: 2,
        bet_id: 2,
        notification_type: 'team-select',
        read: false,
        updated_at: new Date(),
        created_at: new Date()
      }] /* as INotification[] */
    };
  },
  mounted() {
    this.focus();
  },
  methods: {
    focus(): void {
      this.$nextTick(() => {
        const notificationDrawer = this.$refs.notificationDrawer as HTMLDivElement;

        notificationDrawer.focus();
      });
    },
    closeNotificationDrawer(): void {
      this.$emit('close-notification-drawer');
    }
  }
});
</script>

<style lang="scss" scoped>
  .default-message {
    &-check {
      margin: 0px 7px 0px 0px;
    }

    &-container {
      color: #ffffff;

      font: {
        family: "Ubuntu";
        size: 20px;
      }
    }
  }

  .notification-drawer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: $logo-accent;
    border-radius: 10px;
    margin: 2px 0px 0px -450px;
    padding: 20px;
    outline: none;
    overflow-y: auto;
  }

  .notification-drawer-none {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: $logo-accent;
    border-radius: 10px;
    margin: 2px 0px 0px -80px;
    padding: 20px;
    overflow-y: auto;
    outline: none;
    width: 200px;
  }
</style>
