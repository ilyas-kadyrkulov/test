<script setup>
import KnivsVue from "./Knivs.vue";

const knivs = [
  {
    id: 1,
    date: "4 августа 2021 12:24",
    // img:
    content: "Традиционные виды японских кухонных ножей",
  },
  {
    id: 2,
    date: "10 июля 2021 17:23",
    // img:
    content: "Как ухаживать за японскими кухонными ножами?",
  },
  {
    id: 3,
    date: "20 августа 2021 21:12",
    // img:
    content: "Всемирная история режущих клинков — взгляд в прошлое",
  },
];
</script>

<template>
  <div class="all-knivs">
    <div class="container">
      <h1>Всё самое интересное о ножах</h1>
      <div v-for="item in knivs" :key="item">
        <Knivs :knivs="knivs" />
      </div>
    </div>
  </div>
</template>

<style>
.all-knivs {
  padding: 60px 0 40px;
}
h1 {
  color: white;
  font-weight: 500;
  font-size: 35px;
}
.about-knivs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
