<template>
  <div class="novelties">
    <h3>Узнавайте первым о новинках и новостях</h3>
    <Input />
  </div>
</template>

<script setup>
import Input from "../Inputs/Input.vue";
</script>

<style scoped>
.novelties {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
}
h3 {
  font-family: "Jura";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-transform: uppercase;
  color: #ffffff;
  margin: 75px 0 30px;
}
</style>