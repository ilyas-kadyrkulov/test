<template>
  <div>
    <img :src="SearchIcon" alt="" />
  </div>
</template>

<script setup>
import SearchIcon from '@/assets/headerimg/Search.svg'
</script>

<style scoped>
div {
  height: 23px;
  width: 23px;
  margin-right: 50px;
}
img {
  height: 23px;
  width: 23px;
}
</style>