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

<template>
  <div class="container">
    <ul v-if="jokes !== null" style="padding: 0; margin-left: 20px">
      <h1>Random Computer Jokes</h1>
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
div {
  color: #363636;
  text-shadow: 1px 1px 1px #fff;
}
p {
  color: #363636;
  text-shadow: 1px 1px 1px #fff;
}
</style>
