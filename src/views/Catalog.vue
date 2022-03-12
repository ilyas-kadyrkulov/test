<script setup>
import CatalogHero from '../components/Catalog/Hero.vue'
import KnivesCollection from '../components/Catalog/KnivesCollection.vue'
</script>


<template>
  <div class="catalog">
    <CatalogHero />
    <KnivesCollection />
  </div>
</template>


<style>
.catalog {
  min-height: 500vh;
  background: #373737;;
}
</style>