<script setup lang="ts">
import { useRoute } from 'vue-router'

//Contact ID from URL
const { id } = useRoute().params

console.log(id)
</script>

<template>
  <div class="w-full">
    <div class="text-gray-600 flex my-4 p-8 text-4xl font-semibold">
      <RouterLink to="/contacts" class="mr-3">
        <i class="pi pi-arrow-left text-green-500" style="font-size: 1.5rem"></i>
      </RouterLink>
      <h1 class="mt-1">Edit Contact</h1>
    </div>
    <div class="w-full p-8 bg-white">Form Goes Here</div>
  </div>
</template>
