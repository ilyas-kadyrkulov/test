<script setup>
import { ref } from "@vue/reactivity";
import markIcon from "@/assets/mark.svg";

const showInputDropdown = ref(false);

const handleInputDropdown = () => {
  showInputDropdown.value = !showInputDropdown.value;
};

const inputTopic = ref("");
const inputEmail = ref("");
const inputName = ref("");
const inputPhone = ref("");
</script>

<template>
  <div
    @click="handleInputDropdown(index)"
    :class="{ active: handleInputDropdown === index }"
    class="inputs"
  >
    <h5>text</h5>
    <input type="text" placeholder="asd" />
    <img :src="markIcon" alt="" />
    <svg
      width="328"
      height="2"
      viewBox="0 0 328 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M328 2L-1.74843e-07 1.99997L0 0L328 2.86747e-05L328 2Z"
        fill="#4F4F4F"
      />
    </svg>
  </div>
</template>

<style scoped>
.inputs {
  position: relative;
  background: #f7f7f7;
  padding: 15px 20px;
  border-radius: 5px;
}
/* .inputs div {
    justify-content: space-between;
} */
input {
  background-color: #f6f6f6;
  border: none;
  font-weight: 400;
  font-size: 16px;
}
h5 {
  margin: 10px 0;
}
img {
  position: absolute;
  top: 60px;
  left: 320px;
}
img:active {
  transform: rotate(180deg);
}
</style>
