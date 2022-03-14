<script setup>
import Description from "./Description.vue";
import Information from "./information.vue";
import ContactInfarmation from "./ContactInfarmation.vue";
import Support from "./Support.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="content">
        <Description />
        <Information />
        <ContactInfarmation />
      </div>
    </div>
      <Support />
    
  </footer>
</template>

<style>
.footer {
  background-color: #272727;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 35px 0;
}
</style>
