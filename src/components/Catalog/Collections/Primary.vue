<template>
  <div class="container">
    <div class="collection">
      <div class="collection__row">
        <div class="collection-item">
          <img :src="collectionImage1" alt="" />
          <span>Познакомьтесь с коллекцией ножей TUOTOWN</span>
        </div>
        <div class="collection-item">
          <img :src="collectionImage2" alt="" />
          <span>Познакомьтесь с коллекцией ножей TUOTOWN</span>
        </div>
      </div>
      <div class="collection__row">
        <div class="collection-item">
          <img :src="collectionImage3" alt="" />
          <span>Познакомьтесь с коллекцией ножей TUOTOWN</span>
        </div>
        <div class="collection-item">
          <img :src="collectionImage4" alt="" />
          <span>Познакомьтесь с коллекцией ножей TUOTOWN</span>
        </div>
      </div>
      <div class="collection__row">
        <div class="collection-item">
          <img :src="collectionImage5" alt="" />
          <span>Познакомьтесь с коллекцией ножей TUOTOWN</span>
        </div>
        <div class="collection-item">
          <img :src="collectionImage6" alt="" />
          <span>Познакомьтесь с коллекцией ножей TUOTOWN</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import collectionImage1 from "@/assets/collection-item-1.png";
import collectionImage2 from "@/assets/collection-item-2.png";
import collectionImage3 from "@/assets/collection-item-3.png";
import collectionImage4 from "@/assets/collection-item-4.png";
import collectionImage5 from "@/assets/collection-item-5.png";
import collectionImage6 from "@/assets/collection-item-6.png";
</script>

<style>
.collection {
  display: flex;
  flex-wrap: wrap;
}
.collection__row {
  display: flex;
  margin: 8px 0;
}
.collection__row:last-child {
  margin: 0;
}
.collection-item {
  position: relative;
  margin: 0 8px;
}
.collection-item::after {
  content: '';
  position: absolute;
  bottom: 5px;
  right: 5px;
}
.collection-item span {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 20px;
  color: #ffffff;
}
.collection-item img {
  width: 100%;
  height: 100%;
}
</style>