<template>
  <div>
    <img :src="Message" alt="" />
  </div>
</template>

<script setup>
import Message from '@/assets/headerimg/Message.svg'
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