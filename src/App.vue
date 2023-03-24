<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const showNav = ref(false)

const toggleNav = () => {
  showNav.value = !showNav.value
}

const navLinks = [
  {
    name: 'Dashboard',
    path: '/'
  },
  {
    name: 'Contacts',
    path: '/contacts'
  }
]
</script>

<template>
  <div class="max-w-screen-2xl w-full app-wrapper">
    <header class="w-full">
      <nav
        class="bg-white border-b-2 w-full flex relative justify-between items-center px-4 md:px-12 h-16"
      >
        <!-- logo -->
        <div class="inline-flex font-extrabold h-full">
          <div class="font-bold mr-4 flex items-center">
            <img src="@/assets/logo.png" alt="logo" class="h-12" />
          </div>
          <!-- Nav Links -->
          <div class="navlinlks hidden h-full ml-8 md:flex gap-12 pt-6 items-baseline">
            <RouterLink
              v-for="link in navLinks"
              :key="link.name"
              :to="link.path"
              class="h-full text-slate-600 font-semibold text-sm hover:text-slate-800"
              >{{ link.name }}</RouterLink
            >
          </div>
        </div>
        <!-- end logo & Nav Links -->
        <!-- User Actions -->
        <div class="flex-initial">
          <div class="flex justify-end items-center relative">
            <div class="block">
              <div class="inline relative">
                <button
                  type="button"
                  class="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div class="block flex-grow-0 flex-shrink-0 h-10 w-8">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style="display: block; height: 100%; width: 100%; fill: currentcolor"
                    >
                      <path
                        d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div class="flex ml-4 items-center">
              <div class="block relative">
                <button
                  type="button"
                  class="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative"
                >
                  <div class="flex items-center h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div class="flex ml-4 items-center mdd:hidden">
              <div class="block relative">
                <button
                  @click="toggleNav"
                  type="button"
                  class="inline-block py-2 px-3 hover:bg-gray-200 relative"
                >
                  <div class="flex items-center h-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- end User Actions -->
      </nav>
      <!-- mobile navbar -->
      <div class="mobile-navbar z-[999]">
        <transition name="slide-fade">
          <!-- navbar wrapper -->
          <div
            class="navbar-wrapper fixed md:hidden top-0 left-0 h-full bg-white z-30 w-64 shadow-lg p-5"
            v-show="showNav"
          >
            <div class="close-nav relative">
              <button class="absolute top-0 z-50 right-0 mt-1 mr-1" @click="toggleNav">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul class="divide-y pt-10">
              <li class="mobile-nav-item" v-for="item in navLinks" :key="item.path">
                <router-link
                  :to="item.path"
                  class="block mt-2 py-2 text-sm font-medium text-gray-700"
                  @click="toggleNav"
                >
                  {{ item.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </header>
    <div class="contents-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  border-bottom: 2.5px solid #1d3557;
  color: #1d3557;
  font-weight: 600;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

.mobile-nav-item a.router-link-exact-active {
  color: #1d3557;
  font-weight: 600;
}

/* nav a:first-of-type {
  border: 0;
} */

/* Mobile Nav Animation */
.slide-fade-enter-active {
  transition: all 0.5s ease 0s;
  -webkit-transition: all 0.5s ease 0s;
}
.slide-fade-leave-active {
  transition: all 0.5s ease 0s;
  transform: translate3d(0px, 0px, 0px);
  -webkit-transition: all 0.5s ease 0s;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translate3d(-100%, 0px, 0px);
  opacity: 0;
}
</style>
