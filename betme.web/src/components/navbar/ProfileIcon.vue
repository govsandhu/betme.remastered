<template>
  <div class="icon-container">
    <img src="https://media.giphy.com/media/MziKDo6gO7x8A/giphy.gif" class="profile-icon">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.profile-icon {
  @extend .icon;

  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin-top: -13px;
}
</style>
