<script setup>
import CatalogHero from '../components/Catalog/Hero.vue'
import PrimaryCollection from '../components/Catalog/Collections/Primary.vue'
import SecondaryCollection from '../components/Catalog/Collections/Secondary.vue'
import Novelties from '../components/Catalog/Novelties.vue'
</script>


<template>
  <div class="catalog">
    <CatalogHero />
    <PrimaryCollection />
    <hr>
    <SecondaryCollection />
    <hr>
    <Novelties />
  </div>
</template>


<style>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.catalog {
  min-height: 500vh;
  background: #373737;;
}
hr {
  border: 1px solid #535353;
  width: 100%;
  margin: 15px 0;
}
</style>