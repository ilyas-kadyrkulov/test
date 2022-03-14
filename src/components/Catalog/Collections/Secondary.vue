<template>
  <div class="container">
    <div class="collection__secondary">
      <div class="collection__secondary_row">
        <div class="collection__secondary-item">
          <img :src="secondaryCollectionImage1" />
          <span>Ножи с покрытием</span>
        </div>
        <div class="collection__secondary-item">
          <img :src="secondaryCollectionImage2" />
          <span>Ножи с покрытием</span>
        </div>
        <div class="collection__secondary-item">
          <img :src="secondaryCollectionImage3" />
          <span>Ножи с покрытием</span>
        </div>
        <div class="collection__secondary-item">
          <img :src="secondaryCollectionImage4" />
          <span>Ножи с покрытием</span>
        </div>
        <div class="collection__secondary-item">
          <img :src="secondaryCollectionImage5" />
          <span>Ножи с покрытием</span>
        </div>
        <div class="collection__secondary-item">
          <img :src="secondaryCollectionImage6" />
          <span>Ножи с покрытием</span>
        </div>
        <div class="collection__secondary-item">
          <img :src="secondaryCollectionImage7" />
          <span>Ножи с покрытием</span>
        </div>
        <div class="collection__secondary-item">
          <img :src="secondaryCollectionImage8" />
          <span>Ножи с покрытием</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import secondaryCollectionImage1 from "@/assets/secondary-collection-item-1.png";
import secondaryCollectionImage2 from "@/assets/secondary-collection-item-2.png";
import secondaryCollectionImage3 from "@/assets/secondary-collection-item-3.png";
import secondaryCollectionImage4 from "@/assets/secondary-collection-item-4.png";
import secondaryCollectionImage5 from "@/assets/secondary-collection-item-5.png";
import secondaryCollectionImage6 from "@/assets/secondary-collection-item-6.png";
import secondaryCollectionImage7 from "@/assets/secondary-collection-item-7.png";
import secondaryCollectionImage8 from "@/assets/secondary-collection-item-8.png";
</script>

<style scoped>

.collection__secondary_row {
  display: flex;
}
.collection__secondary_row img {
  width: 100%;
}
.collection__secondary-item {
  position: relative;
  height: 100%;
  width: 12%;
  margin: 0 5px;
}
.collection__secondary-item span {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 15px;
}
</style>