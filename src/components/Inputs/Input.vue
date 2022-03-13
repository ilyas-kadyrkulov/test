<template>
  <div class="wrapper">
    <input type="text" placeholder="Ваш e-mail" />
  </div>
</template>

<script setup>
</script>

<style>
.wrapper {
    
  position: relative;
  width: 260px;
  height: 60px;
}
input {
  background: #272727;
  border-radius: 6px;
  border: none;
  width: 100%;
  height: 100%;
  padding-left: 20px;
}
.wrapper::before {
  content: "";
  position: absolute;
  top: 28px;
  right: 5px;
  height: 10px;
  width: 16px;
  background: url(../src/assets/arrow.svg) no-repeat center;
}
input::placeholder {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  opacity: 0.5;
}
</style>