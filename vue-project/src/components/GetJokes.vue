<script></script>
<template>
  <div id="app">
    <ul v-if="jokes !== null" style="margin-top: 35px; padding: 0">
      <li v-for="joke in jokes" style="display: flex; gap: 20px">
        <div>
          <p>Press the button to randomly generate 10 new jokes.</p>
          <input @click="fetchJokes" type="button" value="Get newJokes" />
          <h3>{{ joke.setup }}</h3>
          <p>{{ joke.delivery }}</p>
        </div>
      </li>
    </ul>

    <p v-else>Laddar...</p>
  </div>
</template>

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
<style scoped></style>
