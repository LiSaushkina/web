<template>
  <div class="wrapper">
    <div class="menu">
      <h1>Меню</h1>
    </div>

    <div class="contentWrapper">
      <SideMenu/>

      <router-view :key="$route.path"/>
    </div>

  </div>
</template>

<script>
import SideMenu from "@/components/MenuPage/SideMenu";

export default {
  name: "Menu",
  components: {SideMenu}
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu h1 {
  color: #7c2121;
}

.contentWrapper {
  display: flex;
}
</style>