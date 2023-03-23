<script setup lang="ts">
import { ref } from 'vue'

const tasksCheckbox = ref([])
</script>

<template>
  <div class="card card-w-title tasks">
    <h5 class="text-lg font-semibold">Tasks</h5>
    <ul>
      <li>
        <PrimeCheckbox name="task" value="reports" v-model="tasksCheckbox" />
        <span>Sales Reports</span>
        <span class="task-badge red"></span>
      </li>
      <li>
        <PrimeCheckbox name="task" value="pay" v-model="tasksCheckbox" />
        <span>Pay Invoices</span>
        <span class="task-badge orange"></span>
      </li>
      <li>
        <PrimeCheckbox name="task" value="dinner" v-model="tasksCheckbox" />
        <span>Kate's Birthday</span>
        <span class="task-badge orange"></span>
      </li>
      <li>
        <PrimeCheckbox name="task" value="meeting" v-model="tasksCheckbox" />
        <span>Client Meeting</span>
        <span class="task-badge green"></span>
      </li>
      <li>
        <PrimeCheckbox name="task" value="theme" v-model="tasksCheckbox" />
        <span>New Themes</span>
        <span class="task-badge green"></span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e5e5;
}
</style>
