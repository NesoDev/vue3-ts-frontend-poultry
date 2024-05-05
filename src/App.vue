<template>
  <div class="container-app">
    <header>
      <!-- enlaces de navegación-->
      <nav>
        <!--vista about-->
        <router-link to="/about" class="about-button" :class="{ 'active': $route.path === '/about' }">
          <h3>NOSOTROS</h3>
        </router-link>

        <!--vista menu-->
        <router-link to="/menu" class="menu-button" :class="{ 'active': $route.path === '/menu' }">
          <h3>MENU</h3>
        </router-link>

        
      </nav>

      <!--logo La Cresta-->
      <router-link to="/" class="home-button" :class="{ 'active': $route.path === '/' }">
        <img class="logo-img" src="./assets/Iconos/logo/5249ddb9-43ba-4d8e-b7ac-ece670ba68d7-removebg-preview.png"
          alt="">
      </router-link>
      <!--carrito de compras-->
      <div class="container-shopping-cart">
        <svg viewBox="0 0 1024 1024" focusable="false" data-icon="shopping-cart" width="25px" height="25px" fill="white"
          aria-hidden="true">
          <path
            d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 00-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 100 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 00-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 00-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 00-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 01-31.6 31.6z">
          </path>
        </svg>
        <h4>0</h4>
      </div>
    </header>

    <!--vista activa-->
    <div id="route-view-container">
      <router-view>
      </router-view>
    </div>

    <footer>
      <div class="container-services-payment-complaints">
        <div id="container-services">
          <h2 class="tittle">
            SERVICIOS
          </h2>
          <div class="content">
            <div class="service">
              <h3>SERVICIO EN LOCAL Y RECOJO</h3>
              <p>
                LUNES A DOMINGO DE 12:00 P.M. A 10:30 P.M. 
              </p>
            </div>
            <div class="service">
              <h3>SERVICIO DELIVERY</h3>
              <p>
                LUNES A DOMINGOS 11:30 A.M. A 10:00 P.M.<br>*CALL CENTER 12:00 P.M. A 10:00 P.M.
              </p>
            </div>
          </div>
        </div>
        <div id="container-methods-payment">
          <h2 class="tittle">
            MÉTODOS DE PAGO
          </h2>
          <div class="content">
            <img src="./assets/Iconos/Diseño+sin+título+(2).png" alt="">
          </div>
        </div>
        <div id="container-complaints">
          <h2 class="tittle">
            RECLAMOS
          </h2>
          <div class="content">
            <h3>LIBRO DE RECLAMACIONES</h3>
            <img src="./assets/Iconos/xlibro-de-reclamaciones.png.pagespeed.ic.NGfoQNRb3Y.png" alt="">
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onBeforeMount(() => {
  router.push('/');
});
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Oswald:wght@200..700&family=Rubik+Microbe&display=swap');

.container-app {
  width: 100%;
  overflow: hidden;
}

header {
  width: 100%;
  height: 117px;
  background: #E3AC26;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

header nav {
  position: absolute;
  left: 40px;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

header nav a {
  text-decoration: none;
  color: #C94527;
}

header nav a h3 {
  margin: 5px 0;
  font-family: "Oswald", sans-serif;
  font-size: 23px;
  font-weight: 500;
}

header .home-button {
  height: 80%;
  width: auto;
}

header .home-button .logo-img {
  height: 100%;
  width: auto;
  filter: brightness(80%);
}

header .container-shopping-cart {
  position: absolute;
  right: 40px;
  width: auto;
  height: 50px;
  background: #C94527;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px;
  cursor: pointer;
  transition: background ease-out 0.3s;
}

header .container-shopping-cart:hover {
  background: #000;
}

header .container-shopping-cart h4 {
  margin: 0;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: #fff;
}

header nav .router-link-exact-active {
  border-bottom: 2px solid #C94527;
}

footer {
  width: 100%;
  height: 320px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .container-services-payment-complaints {
  width: 90%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

footer .container-services-payment-complaints div {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#container-services {
  grid-column: 1 / 2;
}

#container-methods-payment {
  grid-column: 2 / 3;
}

#container-complaints {
  grid-column: 3 / 4;
}

footer .container-services-payment-complaints div .tittle {
  position: absolute;
  top: 0px;
  font-family: "Rubik Microbe", system-ui;
  font-size: 30px;
  background: #ebdeb6;
  color: #000;
}

footer .container-services-payment-complaints div .content {
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

footer .container-services-payment-complaints div .content img {
  width: 300px;
}

footer .container-services-payment-complaints #container-complaints .content {
  color: #ebdeb6;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 500;
  gap: 0;
}

footer .container-services-payment-complaints #container-complaints .content h3 {
  margin: 0;
  padding: 0;
}

footer .container-services-payment-complaints #container-complaints .content img {
  width: 200px;
}

footer .container-services-payment-complaints div .content .service {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  color: #ebdeb6;
}

footer .container-services-payment-complaints div .content .service h3 {
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  font-weight: 500;
}

footer .container-services-payment-complaints div .content .service p {
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
  font-size: 15px;
  font-weight: 300;
  text-align: center;
}

</style>
