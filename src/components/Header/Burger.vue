<template>
  <div>
    <img :src="BurgerIcon" alt="" />
  </div>
</template>

<script setup>
import BurgerIcon from "@/assets/headerimg/Burger.svg";
</script>

<style scoped>
div {
  height: 23px;
  width: 23px;
  margin-left: 50px;
}
img {
  height: 23px;
  width: 23px;
}
</style>