<template>
  <div class="wrapper">
    <div class="content-item" v-for="item in items" :key="item.name">
      <div class="text-item">
        {{ item.name }}
        <div class="price">
          <p>Цена: {{ item.price }} рублей</p>
          <button class="basketbtn">В корзину</button>
        </div>
      </div>
      <img class="img-item" :src="item.imageSrc" :alt="item.imageAlt">
    </div>
  </div>
</template>

<script>
import router from "@/router";
import {getMenuData} from "@/helpers";

export default {
  name: "Product",
  data: () => ({
    items: getMenuData(router.currentRoute.path)
  })
}
</script>

<style scoped>
.wrapper {
  margin-top: 24px;
  padding-right: 48px;
}

.content-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 200px;
  box-shadow: rgb(255 255 255) 2px 2px 2px;
  background: rgba(231, 231, 231, 0.76);
  margin-left: 20px;
}

.img-item {
  display: flex;
  flex-direction: column;
  align-items: end;
  max-height: 240px;
  max-width: 280px;
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

.price {
  display: flex;
  flex-direction: column;
}

.basketbtn {
  background: antiquewhite;
  border: 2px solid #7c2121 ;
  font-size: 15px;
  padding: 5px;
  color: #7c2121;
  font-weight: bold;
}

.wrapper {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
}
</style>