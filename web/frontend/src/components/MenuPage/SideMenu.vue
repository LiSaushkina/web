<template>
  <div class="list">
    <ul>
      <li>
        <router-link to="/menu/coffee">кофе</router-link>
      </li>
      <li>
        <router-link to="/menu/tea">чай</router-link>
      </li>
      <li>
        <router-link to="/menu/baked" href="">выпечка</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  render: {}
}
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: column;
  background: rgba(245, 227, 202, 0.7);
  width: 20%;
  border: 3px solid #7c2121;
  margin: 20px;
}

.list ul li {
  list-style-type: none;
  padding-top: 40px;
  padding-bottom: 20px;

}

.list ul li a {
  text-decoration: none;
  font-size: 27px;
  color: #7c2121;
}
</style>