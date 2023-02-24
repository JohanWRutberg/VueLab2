<script setup>
import SomeHeadline from "../components/SomeHeadline.vue";
import GetRules from "../components/GetRules.vue";
</script>

<template>
  <SomeHeadline :someProp="'Jag är en typsäker prop'" />

  <GetRules />
</template>

<style>
body {
  background-color: #ebecf0;
}
</style>
