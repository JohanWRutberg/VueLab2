<script setup>
defineProps({
  someProp: {
    type: String,
    required: true,
  },
});
</script>

<script>
export default {
  data() {
    return {
      headline: "- Jag är en rubrik -",
      headlineBJ: "Black Jack",
    };
  },
};
</script>

<template>
  <div class="container" id="app">
    <h1>{{ headline }}</h1>
    <p>{{ someProp }}</p>
    <div>
      <h1>{{ headlineBJ }}</h1>
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

#app {
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  left: 50%;
  transform: translate(-50%, -50%);
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
