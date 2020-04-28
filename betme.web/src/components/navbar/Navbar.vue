<template>
  <div class="navbar">
    <div class="navbar-left">
      <Logo />
      <GameIcon v-for="game in games" :key="game.name" :game="game" />
    </div>
    <div class="navbar-right">
      <NotificationIcon />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GameIcon from './GameIcon.vue';
import Logo from './Logo.vue';
import NotificationIcon from './NotificationIcon.vue';

export default Vue.extend({
  components: {
    GameIcon,
    Logo,
    NotificationIcon
  },
  data() {
    return {
      games: [
        { name: 'lol', path: '/images/lol.svg' },
        { name: 'cs', path: '/images/csgo.svg' },
        { name: 'ow', path: '/images/ow.svg' },
        { name: 'dota', path: '/images/dota.svg' }
      ]
    };
  }
});
</script>

<style scoped lang="scss">
.navbar {
  position: sticky;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  height: 70px;
  width: 100%;
  line-height: normal;
  align-items: center;
  background-color: #232f4d;

  &-left {
    display: flex;
    flex-direction: row;
    height: 52px;
    padding: 18px 0px 0px 0px;
  }

  &-right {
    @extend .navbar-left;
    justify-content: flex-end;
  }
}
</style>
