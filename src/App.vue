<template>
  <div class="container-app">
    <div class="menu">
      <!-- enlaces de navegación-->

      <!--vista menu-->
      <router-link to="/menu" class="menu-button" :class="{ 'active': $route.path === '/menu' }">
        <h3>Menu</h3>
      </router-link>

      <!--vista about-->
      <router-link to="/about" class="about-button" :class="{ 'active': $route.path === '/about' }">
        <h3>About</h3>
      </router-link>

      <!--vista promo-->
      <router-link to="/promo" class="promo-button" :class="{ 'active': $route.path === '/promo' }">
        <h3>Promo</h3>
      </router-link>
    </div>

    <!--vista activa-->
    <div id="route-view-container">
      <router-view>
      </router-view>
    </div>
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
#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

.menu {
  width: 100%;
  height: 80px;
  background: #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  align-items: center;
}

.menu .router-link-exact-active {
  color: #ff6a00;

}

.container-app {
  width: 100%;
  overflow: hidden;
}
</style>
