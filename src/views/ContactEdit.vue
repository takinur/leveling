<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

//Contact ID from URL
const { id } = useRoute().params

console.log('Edit This id:', id)

//More actions menu
const actionMenu = ref()
const menuItems = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh',
        command: () => {
          // toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
        }
      },
      {
        label: 'Delete',
        icon: 'pi pi-times',
        command: () => {
          // toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
        }
      }
    ]
  },
  {
    label: 'Navigate',
    items: [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        url: '/'
      },
      {
        label: 'Contacts',
        icon: 'pi pi-users',
        to: '/contacts'
      }
    ]
  }
])

const toggleActions = (event: Event) => {
  actionMenu.value.toggle(event)
}

//Temp data
const contacts = ref([
  {
    id: 1,
    name: 'John Doe',
    email: 'john@mail.com',
    phone: '555-555-5555',
    type: 'External',
    created_at: '2020-Jan-01'
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'karen@mail.com',
    phone: '444-444-4444',
    type: 'Internal',
    created_at: '2021-Mar-07'
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '333-333-3333',
    type: 'External',
    created_at: '2023-May-09'
  },
  {
    id: 4,
    name: 'Sara Jackson',
    email: 'sara@mail.com',
    phone: '222-222-2222',
    type: 'Google',
    created_at: '2021-Apr-14'
  },
  {
    id: 5,
    name: 'Silverhand',
    email: 'silver@cp.net',
    phone: '111-111-1111',
    type: 'Facebook',
    created_at: '2022-Dec-30'
  }
])

//Form data
const contactData = ref({
  id: 0,
  name: '',
  email: '',
  phone: '',
  created_at: ''
})
</script>

<template>
  <div class="w-full">
    <div class="md:flex justify-between">
      <div class="text-gray-600 flex my-4 p-8 text-4xl font-semibold">
        <RouterLink to="/contacts" class="mr-3">
          <i class="pi pi-arrow-left text-lightblue" style="font-size: 1.5rem"></i>
        </RouterLink>
        <h1 class="mt-1">Edit Contact</h1>
      </div>
      <div class="grid grid-flow-col mb-4 md:mb-0 items-center gap-4 px-8">
        <button
          label="Toggle"
          @click="toggleActions"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          class="inline-block px-4 py-2 text-xs font-semibold leading-6 text-center text-gray-700 uppercase transition rounded ripple border hover:bg-gray-200 focus:outline-none"
        >
          More Actions <i class="pi pi-chevron-down ml-1" style="font-size: 0.7rem"></i>
        </button>
        <PrimeMenu ref="actionMenu" id="overlay_menu" :model="menuItems" :popup="true" />
        <button
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>

    <div class="w-full p-8 bg-white grid grid-cols-5">
      <div class="sidenav">
        <h4 class="text-gray-600 text-base font-semibold">Contact Details</h4>
      </div>
      <form class="col-span-2 pr-20">
        <div class="input-wrapper grid grid-flow-row">
          <label class="text-gray-600 font-medium" for="name">Name</label>
          <InputText id="name" v-model="contactData.name" aria-describedby="name-help" />
        </div>
        <div class="input-wrapper grid grid-flow-row mt-4">
          <label class="text-gray-600 font-medium" for="email">Email</label>
          <InputText id="email" v-model="contactData.email" aria-describedby="email-help" />
        </div>
        <div class="input-wrapper grid grid-flow-row mt-4">
          <label class="text-gray-600 font-medium" for="phone">Phone</label>
          <InputText id="phone" v-model="contactData.phone" aria-describedby="phone-help" />
        </div>
      </form>
      <div class="col-span-2">Right Side</div>
    </div>
  </div>
</template>
