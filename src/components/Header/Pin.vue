<template>
  <div>
    <img :src="PinIcon" alt="" />
  </div>
</template>

<script setup>
import PinIcon from '@/assets/headerimg/Map.svg'
</script>

<style scoped>
div {
  height: 23px;
  width: 23px;
  margin: 0 30px;
}
img {
  height: 23px;
  width: 23px;
}
</style>