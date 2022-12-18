<template>
  <navbar/>
    <div class="wrapper">
      <RouterView />
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
import Home from "./views/HomeView.vue";
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
.wrapper{
  background-color: #dcdcdc;
}
</style>
