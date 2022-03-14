<script setup>
import AllKnivsMeatIcon from "@/assets/AllKnivsIcon/AllKnivsMeat.png";
import AllKnivsIcon from "@/assets/AllKnivsIcon/AllKnivs.png";
import AllKnivsIcon2 from "@/assets/AllKnivsIcon/AllKnivs2.png";

defineProps(["knivs"]);
</script>

<template>
  <a href="#">
    <span>{{ knivs.date }}</span>
    <img :src="AllKnivsMeatIcon" alt="" />
    <p>{{ knivs.content }}</p>
  </a>
</template>

<style></style>
