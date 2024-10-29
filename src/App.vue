<template>
  <section class="Game" ref="game"></section>
  <button @click="testMove()">1/4 ROTATE</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Logic } from "./three/scene";

const game = ref();
let logic;

const testMove = () => {
  logic.moveOnClick();
};

onMounted(() => {
  logic = new Logic(game.value);
});
</script>

<style scoped>
.Game {
  height: 100vh;
  width: 100vw;
  background-color: hsla(0, 100%, 50%, 1);
  background-image: radial-gradient(
      at 40% 20%,
      hsla(28, 100%, 74%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 80% 0%, hsla(189, 100%, 56%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355, 100%, 93%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 50%, hsla(340, 100%, 76%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, hsla(22, 100%, 77%, 1) 0px, transparent 50%),
    radial-gradient(at 80% 100%, hsla(242, 100%, 70%, 1) 0px, transparent 50%),
    radial-gradient(at 0% 0%, hsla(343, 100%, 76%, 1) 0px, transparent 50%);
}

button {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
