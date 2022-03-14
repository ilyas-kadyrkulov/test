<script setup>
import LogoIcon from "@/assets/headerimg/Logo.svg";
</script>

<template>
  <div class="description">
    <div class="logo">
      <a href="#">
        <img :src="LogoIcon" alt="" />
      </a>
      <p>легендарные ножи, создающие шедевры</p>
    </div>
    <p class="description">
      Компания «Tuotown» – эксклюзивный представитель профессиональных кухонных
      ножей, изготовленных лучшими мастерами Восточной Азии с применением
      передового европейского оборудования и современных материалов.
    </p>
    <p>
      Они отличаются идеальным балансом и фантастической остротой. Сочетают
      в себе вековые традиции и новейшие разработки. Также предлагаем широкий
      ассортимент сопутствующих товаров.
    </p>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
}
.logo p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  color: #ffffff;
  padding: 0 25px;
}
.description {
  margin: 20px 0;
}
.description p {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #adacac;
  max-width: 365px;
}
</style>
