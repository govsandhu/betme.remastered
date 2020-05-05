<template>
  <div class="notification-container notification-win">
    <div class="notification-win" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { INotification } from 'betme.backend/interfaces/notification';
import { Prop } from 'vue/types/options';

export default Vue.extend({
  props: {
    notification: {
      type: Object as Prop<INotification>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
  .notification {
    &-container {
      display: flex;
      height: 100px;
      width: 500px;
      padding: 10px;
      border-width: 1px;
      border-style: solid;
      border-radius: 4px;
      margin-bottom: 15px;
    }

    &-invite {
    }

    &-team-select {
    }

    &-win {
      background: #e6e6fa;
    }

    &-loss {
    }
  }
</style>
