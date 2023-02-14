<script setup>
import { onMounted, computed, defineEmits } from "vue";
import { useStore } from "vuex";

const emit = defineEmits(["fetchJokes"]);

const store = useStore();

onMounted(async () => {
  await store.dispatch("fetchJokes");
});

const jokes = computed(() => store.getters.jokes);
</script>
<script>
export default {
  data() {
    return {
      headline: "Random Computer Jokes",
    };
  },
};
</script>
<template>
  <div class="container">
    <ul v-if="jokes !== null" style="padding: 0; margin-left: 20px">
      <h1>{{ headline }}</h1>
      <button @click="emit('fetchJokes')">Refresh</button>
      <p></p>
      <p></p>
      <li v-for="joke in jokes" :key="joke.id" style="display: flex; gap: 30px">
        <div>
          <h6>{{ joke.setup }}</h6>
          <p>{{ joke.delivery }}</p>
        </div>
      </li>
      <button @click="emit('fetchJokes')">Refresh</button>
    </ul>
    <div v-else>
      <div class="flex flex-col items-center">
        <h1 class="text-4xl font-semibold mb-8">
          Please wait while loading...
        </h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: sticky;
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

body,
html {
  background-color: #ebecf0;
}

body,
p,
input,
select,
textarea,
button {
  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.2px;
  font-size: 14px;
}

div,
p {
  color: #919194;
  text-shadow: 1px 1px 1px #fff;
  max-width: 500px;
}

.segment {
  padding: 32px 0;
  text-align: center;
}

button {
  color: #696969;
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  border-radius: 320px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
}

input {
  color: #696969;
  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  border-radius: 320px;
  padding: 16px;
  background-color: #ebecf0;
  text-shadow: 1px 1px 0 #fff;
}

label {
  display: block;
  margin-bottom: 24px;
  width: 100%;
}

input {
  margin-right: 8px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  appearance: none;
  -webkit-appearance: none;
}

input:focus {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
button {
  color: #61677c;
  font-weight: normal;
  box-shadow: -5px -5px 20px #fff, 5px 5px 20px #babecc;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 400;
}
button:hover {
  box-shadow: -2px -2px 5px #fff, 2px 2px 5px #babecc;
}
button:active {
  box-shadow: inset 1px 1px 2px #babecc, inset -1px -1px 2px #fff;
}
button .icon {
  margin-right: 8px;
}
button.unit {
  border-radius: 8px;
  line-height: 0;
  width: 48px;
  height: 48px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 8px 8px 8px 8px;
  font-size: 19.2px;
}
button.unit .icon {
  margin-right: 0;
}
button.red {
  display: block;
  width: 100%;
  color: #363433;
}
</style>
