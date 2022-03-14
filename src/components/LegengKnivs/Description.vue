<script setup>
import MeatIcon2 from "@/assets/meat2.png";
</script>

<template>
  <div class="desc">
    <div>
      <p class="desc-item">
        Истинная красота ножа — совершённая функциональность и визуальная
        гармония. Этот предмет издревле сопутствовал человеку: от зари
        цивилизации до сегодняшних дней. На протяжении всей истории человечества
        он был верным помощником, незаменимым инструментом и грозным оружием.
        Предлагаем изделия Hi-end качества по доступным ценам настоящим
        ценителям японских ножей.
      </p>
      <p class="desc-item">
        Отличительной чертой нашего интернет-магазина являются уникальные
        торговые предложения, эксклюзивность продукции, неизменно высокое
        качество и выгодные цены. Осуществляем продажи элитных японских кухонных
        ножей для профессионалов и любителей. В обширной ассортиментной линейке
        представлены изделия для различных потребностей и любого бюджета —
        от столовых приборов до шеф-ножей.
      </p>
      <span>
        Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного
        мастерства
      </span>
    </div>
    <img :src="MeatIcon2" alt="" />
  </div>
  <div class="hr"></div>
</template>

<style scoped>
.desc {
  justify-content: space-between;
  display: flex;
}
.desc div {
  max-width: 810px;
}
.desc .desc-item {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
}
.desc-item:nth-child(2) {
  margin: 30px 0 40px;
}
.desc span {
  display: block;
  font-family: "Jura";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #ffffff;
  padding-top: 40px;
}
.hr {
  margin-top: 60px;
  opacity: 0.1;
  border: 1px solid #ffffff;
}
</style>
