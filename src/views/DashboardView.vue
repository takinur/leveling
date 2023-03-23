<script setup lang="ts">
import DashboardStats from '@/components/DashboardStats.vue'
</script>

<template>
  <main class="w-full bg-primary p-6">
    <h1>Hello from Dashboard Page</h1>
    <DashboardStats />
    <div class="md:flex gap-4 mt-8 w-full">
      <div class="md:w-3/5 rounded-sm bg-white p-4 shadow-lg">1</div>
      <div class="md:w-2/5 mt-4 md:mt-0 rounded-sm bg-white p-4 shadow-lg">2</div>
    </div>
  </main>
</template>
