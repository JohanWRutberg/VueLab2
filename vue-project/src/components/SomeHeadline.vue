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
      headline: "How To Play",
      headlineBJ: "Black Jack",
      games: gameData,
    };
  },
};
</script>
<template>
  <div class="headline">
    <h1>{{ headline }}</h1>
    <!--<p>{{ someProp }}</p>-->
  </div>
  <div class="card">
    <div style="white-space: pre-line" class="card__content">
      <div>
        <h2>{{ headlineBJ }}</h2>
      </div>
      <p class="card__text" v-for="game in games" :key="game">
        {{ game.blackjack_swe }}
        {{ game.blackjack_eng }}
      </p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #ffffff;
  font-size: 40px;
}

h2 {
  color: #ffffff;
}

div p {
  color: #ffffff;
}
.headline,
h1 {
  color: #ffffff;
  margin: auto;
  width: 50%;
  margin-top: 15vh;
}
.card {
  background-color: #000000;
  border: 1px solid #000000;
  opacity: 0.75;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.38);
  display: flex;
  overflow: hidden;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
.card__content {
  display: flex;
  flex-direction: column;
  padding: 4rem;
}
.card__text {
  color: #ffffff;
  font-size: 0.975rem;
  line-height: 1.5;
  margin-bottom: 0.25rem;
}
</style>
