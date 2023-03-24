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
    created_at: '2020-Jan-01'
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'karen@mail.com',
    phone: '444-444-4444',
    type: 'personal',
    created_at: '2021-Mar-07'
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '333-333-3333',
    type: 'professional',
    created_at: '2023-May-09'
  },
  {
    id: 4,
    name: 'Sara Jackson',
    email: 'sara@mail.com',
    phone: '222-222-2222',
    type: 'professional',
    created_at: '2021-Apr-14'
  },
  {
    id: 5,
    name: 'Silverhand',
    email: 'silver@cp.net',
    phone: '111-111-1111',
    type: 'professional',
    created_at: '2022-Dec-30'
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
    <div class="text-gray-700 flex my-4 pl-8 text-4xl font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 mr-2 text-lightblue"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>

      <h1 class="mt-1">Contacts</h1>
    </div>
    <div class="w-full p-8 bg-white">
      <DataTable
        :value="filteredList()"
        tableStyle="min-width: 50rem"
        paginator
        dataKey="id"
        :rows="10"
        :rowsPerPageOptions="[10, 20, 50]"
      >
        <template #header>
          <div class="md:flex justify-between">
            <div class="pt-2 relative text-gray-600">
              <input
                class="border-2 border-gray-300 w-full md:w- bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
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
            <div class="w-48 mt-4 md:mt-0">
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
        <TableColumn
          class="text-sm"
          field="created_at"
          header="Date Added"
          style="width: 30%"
        ></TableColumn>
      </DataTable>
    </div>
  </div>
</template>

<style>
.p-datatable-header {
  background-color: #fff !important;
  border: none !important;
}
.p-datatable .p-datatable-thead > tr > th {
  background-color: #fff !important;
}
.p-column-title {
  font-weight: 500;
  color: #94a3b8;
}
</style>
