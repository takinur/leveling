<script setup lang="ts">
import router from '@/router'
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
    created_at: '2020-Jan-01'
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'karen@mail.com',
    phone: '444-444-4444',
    created_at: '2021-Mar-07'
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '333-333-3333',
    created_at: '2023-May-09'
  },
  {
    id: 4,
    name: 'Sara Jackson',
    email: 'sara@mail.com',
    phone: '222-222-2222',
    created_at: '2021-Apr-14'
  },
  {
    id: 5,
    name: 'Silverhand',
    email: 'silver@cp.net',
    phone: '111-111-1111',
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

//Set form data on load
contacts.value.forEach((contact) => {
  if (contact.id === Number(id)) {
    contactData.value = contact
  }
})

//Update form data
const updateContact = () => {
  console.log('Update Contact:', contactData.value)
  //TODO: Update contact in DB
  //Redirect to contacts page
  router.push('/contacts')
}
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
          @click="updateContact"
          class="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600 focus:outline-none"
        >
          Save
        </button>
      </div>
    </div>

    <div class="w-full p-8 bg-white min-h-screen grid grid-flow-row md:grid-cols-5">
      <div class="sidenav">
        <h4 class="text-gray-600 text-base font-semibold">Contact Details</h4>
      </div>
      <form class="col-span-2 md:pr-20">
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
      <div class="col-span-2 flex justify-center pt-4">
        <!-- Insight Card with Icon to show few Keywords -->
        <div class="w-64 h-52 rounded shadow-lg bg-darkblue">
          <div class="flex">
            <svg class="w-12 h-12 text-lightblue m-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-2-6a2 2 0 114 0 2 2 0 01-4 0z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-base text-primary mt-6"> Insights </span>
          </div>
          <div class="flex justify-center mt-4">
            <div class="flex flex-col">
              <span class="text-sm text-primary">Created</span>
              <span class="text-sm text-primary">Last Updated</span>
            </div>
            <div class="flex flex-col ml-4">
              <span class="text-sm text-lightblue">2020-Jan-01</span>
              <span class="text-sm text-lightblue">2021-Mar-07</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
