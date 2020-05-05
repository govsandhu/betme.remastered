<template>
  <div ref="userOptionsDrawer" class="user-options-drawer" tabindex="0" @blur="closeUserOptions()">
    <div class="user-options-button">
      <router-link class="user-options-text" to="/profile">Profile</router-link>
    </div>
    <div class="user-options-button">
      <div class="user-options-text">
        Logout
      </div>
    </div>
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
        const userOptionsDrawer = this.$refs.userOptionsDrawer as HTMLDivElement;

        userOptionsDrawer.focus();
      });
    },
    closeUserOptions(): void {
      this.$emit('close-user-options-drawer');
    }
  }
});
</script>

<style lang="scss" scoped>
  .user-options {
    &-drawer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: $logo-accent;
      border-radius: 10px;
      margin: 2px 0px 0px -40px;
      padding: 10px;
      outline: none;
      width: 150px;
    }

    &-button {
      display: flex;
      border: 1px solid #ffffff;
      width: 90px;
      height: 20px;
      align-content: center;
      justify-content: center;
      margin: 5px 0px;
      border-radius: 50px;
      padding: 10px 20px;
      cursor: pointer;
      color: white;

      &:hover {
        background-color: #ffffff;
        color: $logo-accent;
      }
    }

    &-text {
      text-decoration: none;
      color: inherit;
      text-transform: uppercase;
      margin: 2px 0px 0px 0px;
      font: {
        weight: 700;
        size: 14px;
        family: sans-serif;
      }
    }
  }
</style>
