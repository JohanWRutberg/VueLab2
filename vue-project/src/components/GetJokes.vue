<script>
import axios from 'axios';

export default {
  created() {
    this.getJokes();
  },

  data() {
    return {
      jokes: null
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
<div class="container">
    <h1>Text</h1>
</div>
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
		        Please wait while loading...
	        </h1>
	        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
		        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
		        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
	        </svg>
        </div>
      </p>
    </div>
</template>

<script>

</script>
<style scoped>
.container {
  position:sticky;
  display: flex;
  justify-content: center;
  margin-top: 20vh;
}

#app {
  position:absolute;
  display: flex;
  justify-content: center;
  margin-top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
