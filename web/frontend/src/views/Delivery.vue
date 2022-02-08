<template>
  <div class="wrapper">
    <div class="menu">
      <h1>Доставка</h1>
    </div>
    <div class="delivery-text">
      <p>Контактный телефон: 8-910-279-74-00</p>
      <p>Режим работы: 8:00 - 22:30</p>
      <p>Адресс: г. Белгород, ул. 5 Августа, д.44</p>
    </div>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2533.5328667800277!2d36.58063626853723!3d50.58004837358277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41266a7ab80bc211%3A0xd7fc9ac427647622!2z0YPQuy4gNSDQkNCy0LPRg9GB0YLQsCwgNDQsINCR0LXQu9Cz0L7RgNC-0LQsINCR0LXQu9Cz0L7RgNC-0LTRgdC60LDRjyDQvtCx0LsuLCAzMDgwMjQ!5e0!3m2!1sru!2sru!4v1642978411976!5m2!1sru!2sru" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Delivery',
  }
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.delivery-text {
  background-color: #fffdfd;
  padding: 16px;
  border-radius: 16px;
  margin: 32px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
}
</style>