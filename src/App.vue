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
