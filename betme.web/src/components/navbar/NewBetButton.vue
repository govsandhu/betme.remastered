<template>
  <div>
    <button class="new-bet-button">
      New Bet
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.new-bet-button {
  color: #ffffff;
  text-transform: uppercase;

  font: {
    family: sans-serif;
    size: 14px;
    weight: 700;
  }

  margin: -10px 20px 0px 20px;
  height: 50px;
  width: 130px;

  border: none;
  border-radius: 50px;
  background-color: $logo-accent;
  box-shadow: 0 5px 20px 0 rgba(186, 64, 245, 0.55);

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
}
</style>
