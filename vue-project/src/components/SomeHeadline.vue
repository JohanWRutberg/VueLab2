<script setup>
defineProps({
  someProp: {
    type: String,
    required: true,
  },
});
</script>

<script>
import gameData from "../../rules.json";
export default {
  data() {
    return {
      headline: "- Jag är en rubrik -",
      headlineBJ: "Black Jack - Regler",
      games: gameData,
    };
  },
};
</script>
<template>
  <div class="container">
    <h1>{{ headline }}</h1>
    <p>{{ someProp }}</p>
    <div>
      <h1>{{ headlineBJ }}</h1>
    </div>
    <div style="white-space: pre-line">
      <p v-for="game in games" :key="game.blackjack">
        {{ game.blackjack }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
  margin-left: 10px;
}

#app {
  position: fixed;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
}
h1 {
  color: #babecc;
  text-shadow: 1px 1px 1px #fff;
  font-size: 40px;
}
div {
  color: #363636;
  text-shadow: 1px 1px 1px #fff;
}
p {
  color: #363636;
  text-shadow: 1px 1px 1px #fff;
}
</style>
