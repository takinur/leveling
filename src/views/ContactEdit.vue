<script setup lang="ts">
import { useRoute } from 'vue-router'

//Contact ID from URL
const { id } = useRoute().params

console.log(id)
</script>

<template>
  <div class="w-full">This is the contact edit page for contact ID: {{ id }}</div>
</template>
