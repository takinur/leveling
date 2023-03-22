<script setup lang="ts">
//Temp data
const contacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '555-555-5555',
    type: 'personal',
    created_at: '2021-01-01'
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'karen@mail.com',
    phone: '444-444-4444',
    type: 'personal',
    created_at: '2021-01-01'
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '333-333-3333',
    type: 'professional',
    created_at: '2021-01-01'
  }
]
</script>

<template>
  <div class="w-full">
    <h1 class="text-gray-800">Contacts List</h1>
    <div class="w-full">
      <DataTable
        :value="contacts"
        tableStyle="min-width: 50rem"
        paginator
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
      >
        <TableColumn field="id" header="ID" style="width: 5%"></TableColumn>
        <TableColumn field="name" header="Name" style="width: 30%"></TableColumn>
        <TableColumn field="phone" header="Telephone" style="width: 30%"></TableColumn>
        <TableColumn
          :class="`capitialize`"
          field="type"
          header="Type"
          style="width: 20%"
        ></TableColumn>
        <TableColumn field="created_at" header="Date Added" style="width: 30%"></TableColumn>
      </DataTable>
    </div>
  </div>
</template>
