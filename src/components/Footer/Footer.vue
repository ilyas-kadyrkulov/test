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
      <Support />
    </div>
  </footer>
</template>

<style>
.footer {
  margin-top: 44px;
  background-color: #272727;
}
.content {
  display: flex;
  justify-content: space-between;
  padding: 45px 0;
}
</style>
