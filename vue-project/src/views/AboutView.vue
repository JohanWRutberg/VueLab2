<script setup>
import SomeHeadline from "../components/SomeHeadline.vue";
import BlackJack from "../components/BlackJack.vue";
import GetRules from "../components/GetRules.vue";
</script>

<template>
  <SomeHeadline :someProp="'Jag är en typsäker prop'" />
  <BlackJack />
  <GetRules />
</template>

<style>
body {
  background-color: #ebecf0;
}
</style>
