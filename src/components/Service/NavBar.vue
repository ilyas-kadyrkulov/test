<script setup>
const service = [
  "Сервисные центры",
  "Служба заботы",
  "Запчасти",
  "Инструкции",
  "Сертификаты",
];

const handleActiveItem = (index) => {
  service === index;
};
</script>

<template>
  <div class="service">
    <div class="service-top">
      <h1>СЕРВИС</h1>
      <a href="#">
        <li
          @click="handleActiveItem"
          :class="{ active: handleActiveItem === index }"
          v-for="(item, index) in service"
          :key="item"
        >
          {{ item }}
        </li>
      </a>
      <p>+7 (981) 120-11-17</p>
    </div>
  </div>
</template>

<style>
.service-top {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.service-top a {
  text-decoration: none;
  display: flex;
  margin-bottom: 60px;
}
.service-top li {
  margin-left: 15px;
  font-weight: 500;
  font-size: 24px;
  opacity: 0.5;
  color: #adacac;
  list-style: none;
}
.service-top li:hover {
  border-bottom: 2px solid #ed0c0c;
  color: white;
  opacity: 1;
  /* background: #ed0c0c; */
}
.service-top p {
  font-weight: 500;
  font-size: 24px;
}
</style>
