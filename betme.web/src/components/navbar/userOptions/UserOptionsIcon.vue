<template>
  <div class="container">
    <div class="user-options-icon-container" @mousedown.prevent="toggleUserOptionsDrawer()">
      <img src="https://media.giphy.com/media/MziKDo6gO7x8A/giphy.gif" class="user-options-icon">
    </div>
    <UserOptionsDrawer v-if="showUserOptions" @close-user-options-drawer="closeUserOptions()" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserOptionsDrawer from '@/components/navbar/userOptions/UserOptionsDrawer.vue';

export default Vue.extend({
  components: {
    UserOptionsDrawer
  },
  data() {
    return {
      showUserOptions: false
    };
  },
  methods: {
    toggleUserOptionsDrawer(): void {
      this.showUserOptions = !this.showUserOptions;
    },
    closeUserOptions(): void {
      this.showUserOptions = false;
    }
  }

});
</script>

<style lang="scss" scoped>
  .user-options-icon {
    @extend .icon;

    height: 45px;
    width: 45px;
    border-radius: 50%;
    margin-top: -13px;

    &-container {
      @extend .icon-container;

      height: 40px;
    }
  }

  .container {
    position: flex;
  }
</style>
