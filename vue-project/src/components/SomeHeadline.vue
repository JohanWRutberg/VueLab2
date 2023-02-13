<script setup>
defineProps({
  someProp: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <h1>Rubrik</h1>
    <p>{{ someProp }}</p>
  </div>
  <div id="app"></div>
</template>

<style scoped>
.container {
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
}

#app {
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 40vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
