<script setup lang="ts">
import { ref } from 'vue'

//Temp data
const contacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '555-555-5555',
    type: 'personal',
    created_at: '2020-01-01'
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
    created_at: '2023-01-01'
  },
  {
    id: 4,
    name: 'Sara Jackson',
    email: 'sara@mail.com',
    phone: '222-222-2222',
    type: 'professional',
    created_at: '2021-01-01'
  },
  {
    id: 5,
    name: 'Silverhand',
    email: 'silver@cp.net',
    phone: '111-111-1111',
    type: 'professional',
    created_at: '2022-01-01'
  }
]

let searchInput = ref('')

function filteredList() {
  return contacts.filter((contact) => {
    //Name, Email and Phone
    return (
      contact.name.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchInput.value.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchInput.value.toLowerCase())
    )
  })
}
</script>

<template>
  <div class="w-full">
    <h1 class="text-gray-800">Contacts List</h1>
    <div class="w-full">
      <DataTable
        :value="filteredList()"
        tableStyle="min-width: 50rem"
        paginator
        dataKey="id"
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
      >
        <template #header>
          <div class="flex justify-between">
            <div class="pt-2 relative text-gray-600">
              <input
                class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
                v-model="searchInput"
              />
              <div class="absolute right-0 top-0 mt-5 mr-4">
                <svg
                  class="text-gray-600 h-4 w-4 fill-current cursor-text"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  style="enable-background: new 0 0 56.966 56.966"
                  xml:space="preserve"
                  width="512px"
                  height="512px"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-48">
              <button
                class="block w-full px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-darkblue rounded shadow ripple hover:shadow-lg hover:bg-opacity-80 focus:outline-none"
              >
                Add a Contact
              </button>
            </div>
          </div>
        </template>
        <template #empty> No customers found. </template>
        <TableColumn field="id" header="ID" style="width: 5%"></TableColumn>
        <TableColumn sortable field="name" header="Name" style="width: 30%"></TableColumn>
        <TableColumn field="phone" header="Telephone" style="width: 30%"></TableColumn>
        <TableColumn
          :class="`capitalize`"
          field="type"
          header="Type"
          style="width: 20%"
        ></TableColumn>
        <TableColumn field="created_at" header="Date Added" style="width: 30%"></TableColumn>
      </DataTable>
    </div>
  </div>
</template>

<style>
.p-datatable-header {
  background-color: #fff !important;
  border-bottom: none !important;
}
.p-datatable .p-datatable-thead > tr > th {
  background-color: #fff !important;
}
.p-column-title {
  font-weight: 500;
  color: #94a3b8;
}
</style>
