<script setup></script>

<template>
  <div class="comment">
    <div class="wrapper">
      <h3>Комментарий</h3>
      <textarea placeholder="Впишите ваше сообщение...."> </textarea>
      <div>
        <button>
          <span>отправить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment {
  background-color: white;
  display: flex;
  align-items: center;
  padding: 0 115px;
}
h3 {
  color: #4f4f4f;
  padding: 20px 10px;
  font-weight: 500;
  font-size: 12px;
  opacity: 0.87;
}
textarea {
  width: 900px;
  height: 180px;
  resize: none;
  padding: 15px 0 0 25px;
  font-weight: 400;
  font-size: 16px;
  opacity: 0.5;
}
button {
  display: flex;
  border: 2px solid #c80000;
  box-sizing: border-box;
  border-radius: 27px;
  padding: 15px 35px;
  margin: 25px 340px;
  cursor: pointer;
}
button:hover {
  background-color: #c80000;
  color: white;
}
</style>
