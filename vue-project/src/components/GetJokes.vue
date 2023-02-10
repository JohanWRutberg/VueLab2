<script></script>
<template>
    <div>

    </div>
  <div class="centered">
    <div id="app">
      <ul v-if="jokes !== null" style="margin-top: 450px; padding: 0">
        <li v-for="joke in jokes" style="display: flex; gap: 20px">
          <div>
            <h6>{{ joke.setup }}</h6>
            <p>{{ joke.delivery }}</p>
          </div>
        </li>
      </ul>
      <p v-else>
        <div class="flex flex-col items-center">
	<h1 class="text-4xl font-semibold mb-8">
		Laddar...
	</h1>
	<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
		<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
		<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
	</svg>

</div>
      </p>
    </div>
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
<style scoped>
html, body {
	height: 100%;
}
body {
	display: flex;
	align-items: center;
	justify-content: center;
}
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
