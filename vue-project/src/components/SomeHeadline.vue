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
      headline: "{{Jag är en rubrik}}",
    };
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ headline }}</h1>
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
  margin-top: 10vh;
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
  font-size: 60px;
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
