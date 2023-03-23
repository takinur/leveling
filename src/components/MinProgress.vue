<script setup lang="ts">
//Percentages as props

const props = defineProps<{
  progress: number
}>()
</script>

<template>
  <div class="relative h-8 w-full bg-gray-300 rounded-full overflow-hidden">
    <div class="absolute top-0 left-0 h-full bg-green-500 rounded-full" style="width: 20%"></div>
    <div class="absolute top-0 right-0 h-full w-0 overflow-hidden">
      <div
        class="bg-green-500 h-full w-8 transform rotate-45 origin-bottom-left absolute bottom-0"
      ></div>
    </div>
  </div>
</template>
