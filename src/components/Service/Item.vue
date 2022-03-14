<script setup>
import Care from "./Care.vue";

const inputItems = [
  {
    text: "Тема",
    content: "Неполадки с ножом",
  },
  {
    text: "Email",
    content: "Ваша почта",
  },
  {
    text: "Имя",
    content: "Алексей ",
  },
  {
    text: "Телефон",
    content: "+7 (___) ___-__-__ ",
  },
];
</script>

<template>
  <div class="service-reg">
    <div class="background">
      <div class="content-item">
        <div v-for="item in inputItems" :key="item">
          <Care :inputItems="inputItems" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.background {
  background-color: white;
}
.content-item {
  display: flex;
  padding: 45px 75px;
  flex-wrap: wrap;
  margin: 0 20px;
  justify-content: space-between;
}
.content-item div {
  width: 360px;
  padding: 15px 19px;
}
</style>
