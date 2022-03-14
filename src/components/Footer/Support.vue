<script setup>
import footerIcon from "@/assets/footer-icon.svg";
</script>

<template>
  <div class="support">
    <div class="container">
      <div class="supportList">
        <div>
          <p>
            TUOTOWN © 2021 Торговая марка TUOTOWN зарегистрирована. Все права
            защищены и принадлежат правообладателям.
          </p>
        </div>
        <div>
          <img :src="footerIcon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 1100px;
}
.support {
  background-color: #373737;
  padding: 35px 0;
}
.supportList {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p {
  font-family: "Atomic Alice";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  color: #adacac;
  opacity: 0.5;
}
</style>
