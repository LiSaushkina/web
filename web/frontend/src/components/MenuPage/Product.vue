<template>
  <div class="content-item">
    <div class="text-item">
      {{title}}
      <div class="price">
        <p>{{price}}</p>
        <button class="basketbtn">В корзину</button>
      </div>
    </div>
    <img class="img-item" :src="imageSrc" :alt="imageAlt">
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    title: String,
    imageSrc: String,
    price: String,
    imageAlt: String
  }
}
</script>

<style scoped>

  .content-item {
    display: flex;
    flex-direction: row;
    position: relative;
    width: 40%;
    height: 50%;
    box-shadow: rgb(255 255 255) 2px 2px 2px;
    background: rgba(231, 231, 231, 0.76);
    margin-left: 20px;
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

  .basketbtn {
    background: antiquewhite;
    border: 2px solid #7c2121 ;
    font-size: 15px;
    padding: 5px;
    color: #7c2121;
    font-weight: bold;
  }

  .img-item {
    display: flex;
    flex-direction: column;
    align-items: end;
    max-height:240px;
    max-width: 280px;
  }

  .price button {
    bottom: 0;
    position: absolute;
  }
</style>