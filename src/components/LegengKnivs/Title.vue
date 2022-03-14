<script setup>
import MeateIcon from "@/assets/meat.png";
</script>

<template>
  <div class="title">
    <div>
      <img :src="MeateIcon" alt="" />
    </div>
    <div class="subtitle">
      <div>
        <h1>«Tuotown» – легендарные ножи, создающие шедевры</h1>
        <p>
          Компания «Tuotown» – эксклюзивный представитель профессиональных
          кухонных ножей, изготовленных лучшими мастерами Восточной Азии с
          применением передового европейского оборудования и современных
          материалов. Они отличаются идеальным балансом и фантастической
          остротой. Сочетают в себе вековые традиции и новейшие разработки.
          Также предлагаем широкий ассортимент сопутствующих товаров.
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.title {
  display: flex;
  background-color: #373737;
}
.subtitle {
  padding: 0 80px;
}
.subtitle h1 {
  font-weight: 500;
  font-size: 35px;
  margin-bottom: 50px;
  color: white;
}
.subtitle p {
  color: white;
  font-weight: 400;
  font-size: 16px;
}
</style>
