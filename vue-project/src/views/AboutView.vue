<script setup>
import SomeHeadline from "../components/SomeHeadline.vue";
</script>

<template>
  <SomeHeadline :someProp="'Jag är en typsäker prop'" />
</template>

<style>
body {
  background: url(../assets/img/AdobeStock_460985268.jpeg) no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
