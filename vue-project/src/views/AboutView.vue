<script setup>
import SomeHeadline from "../components/SomeHeadline.vue";
</script>

<template>
  <SomeHeadline :someProp="'Jag är en typsäker prop'" />
  <BlackJack />
</template>

<style>
body {
  background-color: #ebecf0;
}
</style>
