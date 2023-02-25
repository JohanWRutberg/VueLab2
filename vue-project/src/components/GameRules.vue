<script>
import gameData from "../../rules.json";
export default {
  data() {
    return {
      headline: "Black Jack",
      games: gameData,
    };
  },
};
</script>
<template>
  <div class="container">
    <div>
      <h1>{{ headline }}</h1>
    </div>

    <div class="card">
      <div style="white-space: pre-line" class="card__content">
        <p class="card__text" v-for="game in games" :key="game.blackjack">
          {{ game.blackjack }}
        </p>
      </div>
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
.card {
  background-color: #ebecf0;
  border: 1px solid #bfbfbf;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.38);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 10vh;
}
.card__content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 1rem;
}
.card__text {
  color: #a5a5a5;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
}
</style>
