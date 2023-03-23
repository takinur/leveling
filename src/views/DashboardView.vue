<script setup lang="ts">
import DashboardStats from '@/components/DashboardStats.vue'
import DashboardTasks from '@/components/DashboardTasks.vue'

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
</script>

<template>
  <main class="w-full bg-primary p-6">
    <h1>Hello from Dashboard Page</h1>
    <DashboardStats />
    <div class="md:flex gap-4 mt-8 w-full">
      <div class="md:w-3/5 rounded-md bg-white p-4 shadow-lg">
        <div class="card card-w-title global-sales p-fluid">
          <h5 class="font-semibold text-gray-800 mb-4">Recent Contacts</h5>
          <DataTable
            :value="contacts"
            responsiveLayout="scroll"
            dataKey="id"
            :rows="5"
            style="margin-bottom: 20px"
            :paginator="true"
          >
            <TableColumn field="name" header="Name" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Name</span>
                {{ slotProps.data.name }}
              </template>
            </TableColumn>
            <TableColumn field="email" header="Email" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Email</span>
                {{ slotProps.data.email }}
              </template>
            </TableColumn>
            <TableColumn field="type" header="Type" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Status</span>
                <span
                  :class="
                    'product-badge capitalize status-' +
                    (slotProps.data.type ? slotProps.data.type.toLowerCase() : '')
                  "
                  >{{ slotProps.data.type }}</span
                >
              </template>
            </TableColumn>
            <TableColumn field="created_at" header="Date" :sortable="true">
              <template #body="slotProps">
                <span class="p-column-title">Date</span>
                {{ slotProps.data.created_at }}
              </template>
            </TableColumn>
          </DataTable>
        </div>
      </div>
      <div class="md:w-2/5 mt-4 md:mt-0 rounded-md bg-white p-4 shadow-lg">
        <DashboardTasks />
      </div>
    </div>
  </main>
</template>
