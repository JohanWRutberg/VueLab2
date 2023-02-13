<script setup>
import { useStore } from "vuex";
import GetJokes from "../components/GetJokes.vue";

const store = useStore();

const fetchJokes = async () => {
  await store.dispatch("fetchJokes");
};
</script>

<template>
  <GetJokes @fetch-jokes="fetchJokes" />
</template>

<script></script>
