<script>
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
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist&type=twopart&amount=10"
      );
      const result = await response.json();
      this.jokes = result.jokes;
    },
  },
};
</script>
<template>
  <div id="wrapper-hero">
    <img
      src="../assets/img/victor-larracuente-4vl6TQYUwvI-unsplash.jpg"
      class="img-fluid"
      alt="Bild"
    />
    <div class="centered">
      <h1>Get-page</h1>
      <div id="app">
        <p>Press the button to randomly generate 10 new jokes.</p>
        <input @click="fetchJokes" type="button" value="Get newJokes" />
        <ul v-if="jokes !== null" style="margin-top: 165px; padding: 0">
          <li v-for="joke in jokes" style="display: flex; gap: 20px">
            <div>
              <h5>{{ joke.setup }}</h5>
              <p>{{ joke.delivery }}</p>
            </div>
          </li>
        </ul>

        <p v-else>Laddar...</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
#wrapper-hero img {
  margin: 0 auto;
  height: auto;
  overflow-x: hidden;
}
/* Center the text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
}
</style>
