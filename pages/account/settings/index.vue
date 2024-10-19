<template>
  <div>
    <AppNav />
    <div class="mt-16">
      <AuthLayoutSidebar />
      <div class="lg:pl-72">
        <main class="py-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-gray-800 text-2xl">Settings</h2>
            <small class="text-xs">All your configuration in one place.</small>

            <div class="max-w-7xl px-4 py-8 sm:px-0 lg:px-0 w-2/3">
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select
                  id="tabs"
                  name="tabs"
                  v-model="selectedTab"
                  class="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm"
                >
                  <option
                    v-for="tab in tabs"
                    :key="tab.tag"
                    :selected="selectedTab === tab.tag"
                    :value="tab.tag"
                  >
                    {{ tab.name }}
                  </option>
                </select>
              </div>
              <div class="hidden sm:block">
                <nav class="flex border-b border-white/10 py-4">
                  <ul
                    role="list"
                    class="flex min-w-full flex-none gap-x-6 px-2 sm:px-0 text-sm font-semibold leading-6 text-gray-700"
                  >
                    <li v-for="tab in tabs" :key="tab.tag">
                      <span
                        @click="changeTab(tab.tag)"
                        :class="[
                          selectedTab === tab.tag ? 'text-yellow-400 border-b-2 p-2 border-b-yellow-400' : '',
                          'capitalize cursor-pointer',
                        ]"
                        >{{ tab.name }}</span
                      >
                    </li>
                  </ul>
                </nav>
              </div>
              <div v-if="selectedTab == 'change-password'">
                <AuthFormsChangePassword />
              </div>
              <div v-if="selectedTab == 'addresses'">
                <SharedDeliveryAddress />
              </div>
              <div v-if="selectedTab == 'payment-methods'">
                <SharedPaymentMethod />
              </div>
              <div v-if="selectedTab == 'privacy'">
                <AuthFormsDeleteAccount />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const route = useRoute()

const currentTab = route.query.tab ? route.query.tab : 'change-password';

const tabs = [
  { name: "change password", tag: "change-password", href: "#" },
  { name: "addresses", tag: "addresses", href: "#" },
  { name: "payment methods", tag: "payment-methods", href: "#" },
  { name: "privacy", tag: "privacy", href: "#" },
];

const selectedTab = ref(currentTab);

const changeTab = (tab) => selectedTab.value = tab;
</script>
