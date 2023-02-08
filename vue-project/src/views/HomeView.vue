<script setup>
//import { onMounted } from "vue";
import HeroImage from "../components/HeroImage.vue";
import SpaOffers from "../components/SpaOffers.vue";
</script>
<template>
  <!-- Lägger in komponent HeroImage -->
  <HeroImage />
  <!-- Textinterpolering -->
  <h1 class="title">{{ message }}</h1>
  <div id="offers">
    <div class="container text-center">
      <div class="row align-items-start">
        <spa-offers v-for="spa in spas" :key="spa.id" :offer="spa" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Vilket paket önskas?",
      spas: [],
    };
  },

  components: { "spa-offers": SpaOffers },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const res = await fetch("spa.json");
      const result = await res.json();
      this.spas = result;
    },
  },
};
</script>
<style scoped>
#offers {
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
}
.title,
h1 {
  display: flex;
  justify-content: center;
  margin-top: 10vh;
}
</style>
