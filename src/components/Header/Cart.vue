<template>
  <div>
    <img :src="CartIcon" alt="" />
  </div>
</template>

<script setup>
import CartIcon from "@/assets/headerimg/Cart.svg";
</script>

<style scoped>
div {
  height: 23px;
  width: 23px;
}
img {
  height: 23px;
  width: 19px;
}
</style>