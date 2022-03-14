<template>
  <div class="header">
    <div class="wrapper">
      <div class="wrapper-left"><Burger /> <Pin /> <Number /></div>
      <div class="wrapper-center"><Logo /></div>
      <div class="wrapper-right"><Cart /> <Message /> <Search /></div>
    </div>
  </div>
</template>

<script setup>
import Burger from "./Burger.vue";
import Pin from "./Pin.vue";
import Number from "./Number.vue";
import Logo from "./Logo.vue";
import Cart from "./Cart.vue";
import Message from "./Message.vue";
import Search from "./Search.vue";
</script>

<style scoped>
.header {
  position: absolute;
  top: 0;

  width: 100%;
  z-index: 2;
}
.wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding-top: 18px;
}
.wrapper-left {
  display: flex;
  align-items: center;
}
.wrapper-right {
  display: flex;
  align-items: center;
}
.wrapper-center {
  display: flex;
  align-items: center;
  margin-right: 120px;
}
.header {
  width: 100%;
  height: 71px;
  left: 0px;
  top: 0px;
  background: rgba(33, 33, 33, 0.8);
  backdrop-filter: blur(11px);
}
</style> 
