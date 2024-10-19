<template>
  <div>
    <AppNav />
    <div class="mt-16">
      <AuthLayoutSidebar />
      <div class="lg:pl-72">
        <main class="py-10 sm:py-16">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-gray-800 text-xl sm:text-2xl">
              Welcome back, <span class="font-semibold">Olamide </span>🤭
            </h2>
            <small class="text-xs">Get access to all your activities via our quick links.</small>
          </div>

          <div class="max-w-7xl px-4 py-6 sm:py-8 sm:px-6 lg:px-8 w-full sm:w-2/3">
            <div
              class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 sm:gap-y-8 gap-x-8 sm:gap-x-[14rem]"
            >
              <NuxtLink
                to="/account/orders?tab=in-progress"
                class="relative w-full sm:w-72 flex cursor-pointer rounded-lg border bg-white p-4 lg:p-6 shadow-sm hover:bg-gray-50 hover:border-transparent focus:outline-none"
              >
                <ShoppingBagIcon class="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 self-start" />
                <div class="flex flex-col ml-2">
                  <span class="text-lg sm:text-xl text-gray-600">Current Order</span>
                  <small class="text-xs text-gray-500">Manage all processing orders.</small>
                </div>
              </NuxtLink>
              <NuxtLink
                to="/account/settings?tab=payment-methods"
                class="relative w-full sm:w-72 flex cursor-pointer rounded-lg border bg-white p-4 lg:p-6 shadow-sm hover:bg-gray-50 hover:border-transparent focus:outline-none"
              >
                <CreditCardIcon class="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 self-start" />
                <div class="flex flex-col ml-2">
                  <span class="text-lg sm:text-xl text-gray-600">My Cards</span>
                  <small class="text-xs text-gray-500">Add, edit, and remove payment methods.</small>
                </div>
              </NuxtLink>
              <NuxtLink
                to="/account/settings?tab=addresses"
                class="relative w-full sm:w-72 flex cursor-pointer rounded-lg border bg-white p-4 lg:p-6 shadow-sm hover:bg-gray-50 hover:border-transparent focus:outline-none"
              >
                <TruckIcon class="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 self-start" />
                <div class="flex flex-col ml-2">
                  <span class="text-lg sm:text-xl text-gray-600">Delivery Address</span>
                  <small class="text-xs text-gray-500">Add, edit, and remove addresses.</small>
                </div>
              </NuxtLink>
              <NuxtLink
                to="/account/dashboard"
                class="relative w-full sm:w-72 flex cursor-pointer rounded-lg border bg-white p-4 lg:p-6 shadow-sm hover:bg-gray-50 hover:border-transparent focus:outline-none"
              >
                <QuestionMarkCircleIcon class="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 self-start" />
                <div class="flex flex-col ml-2">
                  <span class="text-lg sm:text-xl text-gray-600">Contact Us</span>
                  <small class="text-xs text-gray-500">Send us a message.</small>
                </div>
              </NuxtLink>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  AdjustmentsHorizontalIcon,
  UserIcon,
  ShoppingBagIcon,
  QuestionMarkCircleIcon,
  TrashIcon,
  ReceiptPercentIcon,
  CreditCardIcon,
  KeyIcon,
  TruckIcon
} from "@heroicons/vue/24/outline";
</script>
