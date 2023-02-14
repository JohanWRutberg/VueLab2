<script>
import axios from "axios";
export default {
  created() {
    this.getJokes();
  },

  data() {
    return {
      jokes: null,
    };
  },

  methods: {
    async getJokes() {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist&type=twopart&amount=10"
      );
      this.jokes = response.data.jokes;
    },
  },
};
</script>
<template>
  <div class="centered">
    <div id="app">
      <ul v-if="jokes !== null" style="margin-top: 350px; padding: 0">
        <li v-for="joke in jokes" style="display: flex; gap: 20px">
          <div>
            <h6>{{ joke.setup }}</h6>
            <p>{{ joke.delivery }}</p>
          </div>
        </li>
      </ul>

      <p v-else>Laddar...</p>
    </div>
  </div>
</template>
<style scoped>
#app {
  border: 2px;
  border-color: black;
  border-width: 2px;
}

.centered {
  display: flex;
  justify-content: center;
  margin-top: 220px;
  margin-bottom: 50vh;
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
