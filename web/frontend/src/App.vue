<template>
  <div id="app">
    <header>
      <h1>Кофе & Крендель</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/">главная</router-link>
          </li>
          <li>
            <router-link :to="'Menu'">меню</router-link>
          </li>
          <li>
            <router-link :to="'Delivery'">доставка</router-link>
          </li>
          <li>
            <div class="profile">
              <a href="reg.html" class="personal-icon">p</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <hr>

    <div class="contentWrapper">
      <router-view/>
    </div>

    <footer>
      <hr>
      <p>Сеть кофеен "Кофе & Крендель"</p>
      <p>Контактный телефон: 8-910-279-74-00</p>
      <p>Режим работы: 8:00 - 22:30</p>
    </footer>
  </div>
</template>

<script>

</script>

<style>
* {
  margin: 0;
  font-family: 'Grechen Fuemen', cursive;
}

header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(245, 227, 202, 0.4);
}

header h1 {
  color: brown;
  font-size: 33px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 10%;
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #7c2121;
  padding-left: 100px;
  font-size: 25px;
}

nav ul li {
  list-style-type: none;
  padding-top: 7px;
  padding-bottom: 7px;
}

nav ul {
  display: flex;
  flex-direction: row;
  margin-left: 100px;
}

body {
  background-image: url("../media/65f4523d6f158cfbf0034ca179c2c38e.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}

.price button {
  bottom: 0;
  position: absolute;
}


footer {
  color: #4f0606;
  background: rgba(234, 230, 224, 0.3);
}

footer p {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.personal-icon {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAiCAYAAACnSgJKAAAABHNCSVQICAgIfAhkiAAAAWRJREFUWIXFltFVhDAQRV9oQOwAK5AS7MDtwO1AOpAStgQ7ECsQK9AOwAqIFTw/EpCzhwSSzIH7CSR3JiGZAQIgmZN8JvlGsqOhI/lhnxch84WIa5ID/QwkXySluc00hC+SuYS8CRRPAaSK60jxSO2bX3nEOYAOQOry3Sml+qUXmWfQSUA8zrPImlyCKLlE1gBwHyMvhOTOJHzyXkj+EyPXQvI+Rt4IyZ3zrJ3zHsBNgvgXQKGUWlxFZ+Z2QJUgBoCLS7wJkq+RV2ubGPhU1UIDaClR1WZBVCT1ilRzpZjMcf5wjgBymOtyvPdLAN8wx7IB0CTt8Z5sypymN3uEyfbB82kLswrvrjK6GZJn/jeKoXQkn2KkZYJ0KYhyq7gSkl5zPko8snxj0uzvHkwroKxYqlncgoZpKvVYWC47iWE9NQAom/Wwk3jObQa5LjWU0+Hyvfb6mlyR1EhrlWLRGUwxOILPP8sSk5ZDqjypAAAAAElFTkSuQmCCrto8R0yWEMmGLivr2ol0VcNdLg3JvQz7Y8bA58SwD9c5y7pHCUSm1cmpMFlQDCRGMnJ00C1TiUXLGS4cHYfIoKXDNGZjAtC5dE4uPwphZmtWdC/KD0OyB7Dz7dYY823JQwhfGFOs82kipHvE37TzYy5hJwH5r0rYiXMA8H8q8kUHvWk/8hp0fVj7pdOFV/sOMNozA5dyFd1VelID7m8Ic6+0Jybe77Wnjiw4n4TmndfQnlmHEQJVYE+RLoFtmbC/6PbJltffC+i1g8sU+2DVwRVjXwLNFusfrOrAmBPcB6vy1OK9Fbv2pFi/5BVpfwBCmUSY+2+lNwAAAABJRU5ErkJggg==");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  width: 36px;
  height: 36px;
  padding: 15px;
  font-size: 0;

}

.profile {
  display: block;
  border-radius: 50%;
  border: 2px solid #fffdfd;
  background-repeat: no-repeat;
  width: 36px;
  height: 36px;
  text-align: center;
  box-sizing: content-box;
  position: relative;
  margin-left: 100px;
}


</style>
