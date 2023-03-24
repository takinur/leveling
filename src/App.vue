<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <div class="max-w-screen-2xl w-full app-wrapper">
    <HeaderNav />
    <div class="main-body-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  border-bottom: 2.5px solid #1d3557;
  color: #1d3557;
  font-weight: 600;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.mobile-nav-item a.router-link-exact-active {
  color: #1d3557;
  font-weight: 600;
}

/* nav a:first-of-type {
  border: 0;
} */

/* Mobile Nav Animation */
.slide-fade-enter-active {
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
}
.slide-fade-leave-active {
  transition: all 0.5s ease 0s;
  transform: translate3d(0px, 0px, 0px);
  -webkit-transition: all 0.5s ease 0s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translate3d(-100%, 0px, 0px);
  opacity: 0;
}
</style>
