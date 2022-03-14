<script setup>
import LogoIcon from "@/assets/logo.svg";
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
.logo p {
  color: white;
}
.logo {
  display: flex;
}
.logo p {
  padding: 0 25px;
}
.description {
  color: white;
  max-width: 365px;
}
p {
  color: #ffffff;
}
</style>
