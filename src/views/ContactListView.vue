<script setup lang="ts">
//Temp data
const contacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '555-555-5555',
    type: 'personal'
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'karen@mail.com',
    phone: '444-444-4444',
    type: 'personal'
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '333-333-3333',
    type: 'professional'
  }
]
</script>

<template>
  <div class="w-full">
    <h1 class="text-gray-800">Contacts List</h1>
    <div class="w-full">
      <DataTable :value="contacts" tableStyle="min-width: 50rem">
        <TableColumn field="id" header="ID"></TableColumn>
        <TableColumn field="name" header="Name"></TableColumn>
        <TableColumn field="phone" header="Telephone"></TableColumn>
        <TableColumn class="capitialize" field="type" header="Type"></TableColumn>
      </DataTable>
    </div>
  </div>
</template>
