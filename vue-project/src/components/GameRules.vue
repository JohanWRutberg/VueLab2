<script>
import gameData from "../../rules.json";
export default {
  data() {
    return {
      headlineBJ: "Black Jack",
      games: gameData,
    };
  },
};
</script>

<template>
  <div class="container">
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
<style scoped></style>
