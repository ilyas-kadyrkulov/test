<script setup>
import Header from "./components/Header/Header.vue";
import Footer from './components/Footer/Footer.vue';
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<style>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
hr {
  margin: 0;
  padding: 0;
}
</style>
