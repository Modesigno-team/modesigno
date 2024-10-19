<template>
  <div>
    <AppNav />
    <div class="mt-16">
      <AuthLayoutSidebar />
      <div class="lg:pl-72">
        <main class="py-10 sm:py-16">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-gray-800 text-xl sm:text-2xl">Coupons & Rewards</h2>
            <small class="text-xs">Access your rewards & earnings here.</small>

            <div class="max-w-7xl px-4 py-6 sm:py-8 sm:px-6 lg:px-0 w-full sm:w-2/3">
              <div class="overflow-hidden rounded-md bg-white shadow-md">
                <div class="px-4 py-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start">
                  <div class="mb-4 sm:mb-0">
                    <h1 class="text-gray-800 text-2xl sm:text-4xl">
                      Your virtual balance is:
                      <span class="text-green-600 font-bold">5,000</span>
                    </h1>
                    <small class="text-xs text-gray-800 font-semibold">
                      NGN50.00 in value.
                    </small>
                  </div>
                  <span class="self-start">
                    <SharedButton label="Top Up" is-secondary is-rounded />
                  </span>
                </div>
              </div>

              <div class="px-4 sm:px-6 lg:px-0">
                <div class="sm:flex sm:items-center">
                  <div class="sm:flex-auto">
                    <p class="mt-10 text-sm text-gray-700">
                      A list of all the transactions in your account including
                      coupons, rewards, and purchases.
                    </p>
                  </div>
                </div>
                <div class="mt-2 flow-root">
                  <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                      class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                    >
                      <table class="min-w-full divide-y divide-gray-300">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              class="py-3.5 pl-4 pr-3 text-left text-xs sm:text-sm font-semibold text-gray-900 sm:pl-0"
                            >
                              Type
                            </th>
                            <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-gray-900"
                            >
                              Amount (currency)
                            </th>
                            <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-gray-900"
                            >
                              Value (coin equivalence)
                            </th>
                            <th
                              scope="col"
                              class="px-3 py-3.5 text-left text-xs sm:text-sm font-semibold text-gray-900"
                            >
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                          <tr v-for="person in people" :key="person.id">
                            <td
                              class="whitespace-nowrap py-4 pl-4 pr-3 text-xs sm:text-sm font-medium text-gray-900 sm:pl-0"
                            >
                              {{ person.name }}
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-xs sm:text-sm text-gray-500"
                            >
                              {{ person.amount }}
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-xs sm:text-sm text-gray-500"
                            >
                              {{ person.value }}
                            </td>
                            <td
                              class="whitespace-nowrap px-3 py-4 text-xs sm:text-sm text-gray-500"
                            >
                              {{ person.date }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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

const people = [
  {
    name: "Coupon",
    amount: "-",
    value: "20,000.00",
    date: "28th Jun, 2021",
  },
  {
    name: "Coupon",
    amount: "-",
    value: "1,000.00",
    date: "3rd Jan, 2025",
  },
  {
    name: "Reward",
    amount: "-",
    value: "200.00",
    date: "19th Aug, 2023",
  },
  {
    name: "Purchase",
    amount: "NGN1000",
    value: "15,000.00",
    date: "29th May, 2024",
  },
];
</script>
