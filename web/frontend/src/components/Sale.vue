<template>
    <div class="content-item">
      <div class="text-item">
        {{title}}
      </div>
      <img class="img-item" :src="imageSrc" :alt="imageAlt">
    </div>
</template>

<script>
export default {
  name: "Sale",
  props: {
    title: String,
    imageSrc: String,
    imageAlt: String
  }
}
</script>

<style scoped>
  .content-item {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 400px;
    box-shadow: rgb(255 255 255) 2px 2px 2px;
    background: rgba(231, 231, 231, 0.76);
  }

  .text-item {
    text-align: center;
    align-items: center;
    color: #7c2121;
    font-size: 18px;
    font-weight: bold;
    padding: 15px;
    position: relative;
  }

  .img-item {
    max-height:240px;
    max-width: 275px;
  }
</style>