<template>
  <nav-bar></nav-bar>
  <hero-image></hero-image>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>

import NavBar from './components/Layout/NavBar.vue';
import HeroImage from './components/Layout/HeroImage.vue';
import TheHeader from './components/Layout/TheHeader.vue';

export default {
  components: {
    NavBar,
    HeroImage,
    TheHeader
    },
}
</script>


<style>


@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}


html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>