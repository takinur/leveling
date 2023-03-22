<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="max-w-screen-2xl w-full body-wrapper">
    <header class="w-full">
      <nav class="bg-white border-b-2 w-full flex relative justify-between items-center px-12 h-16">
        <!-- logo -->
        <div class="inline-flex font-extrabold h-full">
          <div class="font-bold mr-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
              />
            </svg>
          </div>
          <div class="navlinlks h-full ml-8 flex gap-12 pt-6 items-baseline">
            <RouterLink
              to="/"
              class="h-full text-slate-600 font-semibold text-sm hover:text-slate-800"
              >Dashboard</RouterLink
            >
            <RouterLink
              to="/contacts"
              class="h-full text-slate-600 font-semibold text-sm hover:text-slate-800"
              >Contacts</RouterLink
            >
          </div>
        </div>
        <!-- end logo -->
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
          </div>
        </div>
        <!-- end User Actions -->
      </nav>
    </header>
    <div class="contents-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
nav a.router-link-exact-active {
  border-bottom: 2px solid #1d3557;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

/* nav a:first-of-type {
  border: 0;
} */
</style>
