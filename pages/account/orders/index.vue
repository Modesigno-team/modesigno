<template>
  <div>
    <AppNav />
    <div class="mt-16">
      <AuthLayoutSidebar />
      <div class="lg:pl-72">
        <main class="py-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-gray-800 text-2xl">My Orders</h2>
            <small class="text-xs">Manage all orders.</small>
            <div class="max-w-7xl px-4 py-8 sm:px-1 lg:px-1 w-2/3">
              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select
                  id="tabs"
                  name="tabs"
                  class="block w-full rounded-md border-none bg-white/5 py-2 pl-3 pr-10 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm"
                >
                  <option
                    v-for="tab in tabs"
                    :key="tab.name"
                    :selected="selectedTab === tab.name"
                    @click="changeTab(tab.name)"
                  >
                    {{ tab.name }}
                  </option>
                </select>
              </div>
              <div class="hidden sm:block">
                <nav class="flex border-b border-white/10 py-4">
                  <ul
                    role="list"
                    class="flex min-w-full flex-none gap-x-6 px-2 text-sm font-semibold leading-6 text-gray-700"
                  >
                    <li v-for="tab in tabs" :key="tab.name">
                      <span
                        @click="changeTab(tab.name)"
                        :class="[
                        selectedTab === tab.name ? 'text-yellow-400 border-b-2 p-2 border-b-yellow-400': '', 
                        'capitalize cursor-pointer'
                        ]"
                        >{{ tab.name }}</span
                      >
                    </li>
                  </ul>
                </nav>
              </div>
              <template v-if="tabOrders.length > 0">
                <div
                v-for="order in tabOrders"
                :key="order.orderId"
                class="bg-white shadow-sm sm:rounded-lg sm:border mb-5 p-2 lg:p-2"
              >
                <h3 class="sr-only">
                  Order placed on
                  <time :datetime="order.createdDatetime">{{
                    order.createdDate
                  }}</time>
                </h3>

                <div class="p-1 sm:p-2 flex justify-between">
                  <dl class="flex flex-col text-sm space-y-2">
                    <div class="flex items-center">
                      <dt class="font-light text-gray-900">Order ID:</dt>
                      <dd class="ml-1 text-gray-500">#{{ order.orderId }}</dd>
                    </div>
                    <div class="flex items-center">
                      <dt class="font-light text-gray-900">Date placed:</dt>
                      <dd class="ml-1 text-gray-500">
                        <time :datetime="order.createdDatetime">{{
                          order.createdDate
                        }}</time>
                      </dd>
                    </div>
                    <div class="flex items-center">
                      <dt class="font-light text-gray-900">Total amount:</dt>
                      <dd class="ml-1 text-gray-500">
                        {{ order.currency }}{{ order.price }}
                      </dd>
                    </div>
                  </dl>
                  <div class="flex flex-col justify-between">
                    <span
                      :class="[
                      order.status === 'delivered' ? 'bg-gray-50 text-gray-600 ring-gray-500/10' : '',
                      order.status === 'returns' ? 'bg-red-50 text-red-600 ring-red-500/10' : '',
                      order.status === 'shipped' ? 'bg-green-50 text-green-600 ring-green-500/10' : '',
                      order.status === 'in-progress' ? 'bg-blue-50 text-blue-600 ring-blue-500/10' : '',
                      'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset']"
                      >{{ order.status }}</span
                    >
                    <div class="flex justify-between">
                      <NuxtLink to="/orders/3">
                        <EyeIcon class="w-5 h-5" />
                      </NuxtLink>
                      <NuxtLink to="/orders/3">
                        <PrinterIcon class="w-5 h-5" />
                      </NuxtLink>
                      <NuxtLink to="/orders/3">
                        <EllipsisVerticalIcon class="w-5 h-5" />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
              </template>
              
              <SharedEmptyTab :title="`No ${selectedTab} order found.`" v-else/>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  EyeIcon,
  EllipsisVerticalIcon,
  PrinterIcon,
} from "@heroicons/vue/24/outline";

const route = useRoute()

const currentTab = route.query.tab ? route.query.tab : 'delivered';

const selectedTab = ref(currentTab);

const tabOrders = computed(() => {
  return orders.filter(order => order.status === selectedTab.value);
});

const changeTab = (tab) => selectedTab.value = tab;

const orders = [
  {
    id: 1,
    orderId: "0000140",
    name: "Black Basic Tee",
    currency: "$",
    price: "320.00",
    items: "12",
    status: "delivered",
    createdDate: "29th September, 2020",
  },
  {
    id: 2,
    orderId: "0000141",
    name: "White Hoodie",
    currency: "$",
    price: "150.00",
    items: "3",
    status: "returns",
    createdDate: "30th September, 2020",
  },
  {
    id: 3,
    orderId: "0000142",
    name: "Blue Denim Jeans",
    currency: "$",
    price: "500.00",
    items: "5",
    status: "shipped",
    createdDate: "1st October, 2020",
  },
  {
    id: 4,
    orderId: "0000143",
    name: "Red Sneakers",
    currency: "$",
    price: "120.00",
    items: "2",
    status: "shipped",
    createdDate: "2nd October, 2020",
  },
  {
    id: 5,
    orderId: "0000144",
    name: "Green Cargo Pants",
    currency: "$",
    price: "200.00",
    items: "6",
    status: "delivered",
    createdDate: "3rd October, 2020",
  },
  {
    id: 6,
    orderId: "0000145",
    name: "Yellow T-Shirt",
    currency: "$",
    price: "80.00",
    items: "10",
    status: "delivered",
    createdDate: "4th October, 2020",
  },
  {
    id: 7,
    orderId: "0000146",
    name: "Black Leather Jacket",
    currency: "$",
    price: "450.00",
    items: "1",
    status: "shipped",
    createdDate: "5th October, 2020",
  },
  {
    id: 8,
    orderId: "0000147",
    name: "Pink Dress",
    currency: "$",
    price: "300.00",
    items: "4",
    status: "returns",
    createdDate: "6th October, 2020",
  },
  {
    id: 9,
    orderId: "0000148",
    name: "Brown Loafers",
    currency: "$",
    price: "220.00",
    items: "2",
    status: "shipped",
    createdDate: "7th October, 2020",
  },
  {
    id: 10,
    orderId: "0000149",
    name: "Gray Sweater",
    currency: "$",
    price: "250.00",
    items: "3",
    status: "shipped",
    createdDate: "8th October, 2020",
  },
  {
    id: 11,
    orderId: "0000150",
    name: "Blue Cap",
    currency: "$",
    price: "60.00",
    items: "7",
    status: "delivered",
    createdDate: "9th October, 2020",
  },
  {
    id: 12,
    orderId: "0000151",
    name: "Orange Scarf",
    currency: "$",
    price: "40.00",
    items: "12",
    status: "returns",
    createdDate: "10th October, 2020",
  },
  {
    id: 13,
    orderId: "0000152",
    name: "Purple Gloves",
    currency: "$",
    price: "35.00",
    items: "8",
    status: "delivered",
    createdDate: "11th October, 2020",
  },
];

const tabs = [
  { name: 'delivered', href: '#'},
  { name: 'shipped', href: '#'},
  { name: 'in-progress', href: '#'},
  { name: 'returns', href: '#'},
];


</script>
