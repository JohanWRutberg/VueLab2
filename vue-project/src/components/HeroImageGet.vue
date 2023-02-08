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
    <!--<img
      src="../assets/img/victor-larracuente-4vl6TQYUwvI-unsplash.jpg"
      class="img-fluid"
      alt="Bild"
    />-->
    <div class="centered">
      <div id="app">
        <ul v-if="jokes !== null" style="margin-top: 350px; padding: 0">
          <li v-for="joke in jokes" style="display: flex; gap: 15px">
            <div>
              <h6>{{ joke.setup }}</h6>
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
#app {
  border: 2px;
  border-color: black;
  border-width: 2px;
}
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
