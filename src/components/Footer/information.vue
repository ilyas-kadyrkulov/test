<script setup>
import facebookIcon from "@/assets/Social/facebook.svg";
import instagramIcon from "@/assets/Social/instagramm.svg";
import vkIcon from "@/assets/Social/vk.svg";
import youtubeIcon from "@/assets/Social/youtube.svg";

const information = ["Главная", "Новости", "О компании", "Контакты"];
const catalog = [
  "Кухонные ножи",
  "Складные ножи",
  "Точилки для ножей",
  "Аксессуары",
];
// const socialIcons = {
//   img: {},
// };
</script>

<template>
  <div class="information">
    <div class="info">
      <h3>Информация</h3>
      <div class="informationList">
        <li v-for="item in information" :key="item">{{ item }}</li>
      </div>
    </div>
    <div class="footer-catalog">
      <h3>Каталог</h3>
      <div class="catalogList">
        <li v-for="item in catalog" :key="item">
          {{ item }}
        </li>
      </div>
    </div>
    <div class="social">
      <h3>Мы в соцсетях</h3>
      <a
        href="https://www.facebook.com/business/news?campaign_id=1635645059&extra_1=s|c|313664562371|e|facebook%27|&placement=&creative=313664562371&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1635645059%26adgroupid%3D61926940465%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1009827%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAiAprGRBhBgEiwANJEY7PBh5CNU-DMM2ryfKGwJFP-QbkXS-o8kjV8eCD7VJdpMyxA96psV_hoCwjAQAvD_BwE"
      >
        <img :src="facebookIcon" alt="" />
      </a>
      <a href="https://www.instagram.com/orozakunoov/">
        <img :src="instagramIcon" alt="" />
      </a>
      <a
        href="https://vk.com/login?u=2&to=/login?op=logout&hash=1647115811_fa0b3f130f1b3be9c1&rnd=161945119"
      >
        <img :src="vkIcon" alt="" />
      </a>
      <a href="https://www.youtube.com/channel/UCjU8SRkq31qdAgZx54iKvYw">
        <img :src="youtubeIcon" alt="" />
      </a>
    </div>
  </div>
</template>

<style>
.information {
  margin: 0 102px 0 64px;
  width: 385px;
}
h3 {
  font-weight: 600;
  font-size: 17px;
  color: white;
}
li {
  font-size: 14px;
  margin-left: 16px;
}
li:first-child {
  margin: 0;
}
.informationList {
  color: white;
  list-style: none;
  display: flex;
  opacity: 0.5;
}
.catalogList {
  color: white;
  list-style: none;
  display: flex;
  opacity: 0.5;
}
.social {
  display: flex;
  align-items: center;
}
.social h3 {
  margin-right: 20px;
}
.social a {
  margin: 0 7px;
}
</style>
