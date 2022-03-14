<template>
  <div class="header">
    <div class="container">
      <div class="wrapper">
        <div class="wrapper-left"><Burger /> <Pin /> <Number /></div>
        <div class="wrapper-center"><Logo /></div>
        <div class="wrapper-right"><Cart /> <Message /> <Search /></div>
      </div>
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
.wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
}
.wrapper-left {
  width: 20%;
  display: flex;
  align-items: inherit;
  justify-content: space-between;
}
.wrapper-right {
  width: 10%;
  align-items: inherit;
  display: flex;
  justify-content: space-between;
}
.wrapper-center {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.header {
  width: 100%;
  height: 71px;
  left: 0px;
  top: 0px;
  background: rgba(33, 33, 33, 0.8);
  backdrop-filter: blur(11px);
  align-items: center;
}
.container {
  max-width: 1100px;
  height: 100vh;
}
</style> 
