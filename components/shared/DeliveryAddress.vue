<template>
  <div class="mt-4">
    <h2 class="text-lg font-medium text-gray-900">Delivery methods</h2>
    <small class="text-xs text-gray-400">Manage all delivery mthods</small>

    <fieldset aria-label="Delivery method" class="mt-4">
      <RadioGroup class="flex" v-model="selectedAddress">
        <div
          @click="toggleAddressForm"
          class="relative cursor-pointer flex justify-center items-center rounded-lg border border-dashed bg-white p-4 shadow-sm focus:outline-none mr-5"
        >
          <PlusIcon class="w-8 h-8 text-3xl" />
        </div>
        <RadioGroupOption
          as="template"
          v-for="deliveryAddress in deliveryAddresses"
          :key="deliveryAddress.id"
          :value="deliveryAddress"
          :aria-label="deliveryAddress.city"
          :aria-description="`${deliveryAddress.street} for ${deliveryAddress.city}`"
          v-slot="{ checked }"
        >
          <div
            :class="[
              checked ? 'border-transparent' : 'border-gray-300',
              deliveryAddress.isActive ? 'ring-2 ring-yellow-500' : '',
              'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none mr-5',
            ]"
            @click="selectAddress(deliveryAddress)"
          >
            <span class="flex flex-1">
              <span class="flex flex-col">
                <span class="block text-sm font-medium text-gray-900">{{
                  deliveryAddress.city
                }}</span>
                <span class="mt-1 flex items-center text-sm text-gray-500">{{
                  deliveryAddress.country
                }}</span>
                <span class="mt-6 text-sm font-medium text-gray-900"
                  >{{ deliveryAddress.street }},
                  {{ deliveryAddress.postcode }}</span
                >
              </span>
            </span>
            <CheckCircleIcon
              v-if="deliveryAddress.isActive"
              class="h-5 w-5 text-yellow-600"
              aria-hidden="true"
            />
            <span
              :class="[
                deliveryAddress.isActive ? 'border' : 'border-2',
                checked ? 'border-yellow-500' : 'border-transparent',
                'pointer-events-none absolute -inset-px rounded-lg',
              ]"
              aria-hidden="true"
            />
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </fieldset>

    <div class="mt-10 border-t border-gray-200 pt-10" v-if="isNewAddress">
      <h2 class="text-lg font-medium text-gray-900">Create new address</h2>
      <small class="text-xs text-gray-400">Please add new address.</small>

      <form class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <label
            for="first-name"
            class="block text-sm font-medium text-gray-700"
            >First name</label
          >
          <div class="mt-1">
            <input
              type="text"
              id="first-name"
              name="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="last-name" class="block text-sm font-medium text-gray-700"
            >Last name</label
          >
          <div class="mt-1">
            <input
              type="text"
              id="last-name"
              name="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="address"
              id="address"
              autocomplete="street-address"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="apartment" class="block text-sm font-medium text-gray-700"
            >Apartment, suite, etc.</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="apartment"
              id="apartment"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="city" class="block text-sm font-medium text-gray-700"
            >City</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="city"
              id="city"
              autocomplete="address-level2"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label for="country" class="block text-sm font-medium text-gray-700"
            >Country</label
          >
          <div class="mt-1">
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        <div>
          <label for="region" class="block text-sm font-medium text-gray-700"
            >State / Province</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="region"
              id="region"
              autocomplete="address-level1"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            for="postal-code"
            class="block text-sm font-medium text-gray-700"
            >Postal code</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autocomplete="postal-code"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >Phone</label
          >
          <div class="mt-1">
            <input
              type="text"
              name="phone"
              id="phone"
              autocomplete="tel"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>
        <div class="mt-5 w-24">
          <SharedButton is-secondary is-rounded />
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import {
  RadioGroup,
  RadioGroupOption,
} from "@headlessui/vue";
import {
  CheckCircleIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/vue/20/solid";
const addresses = [
  {
    id: 1,
    street: "457 James world",
    postcode: "5567",
    city: "OHIO",
    country: "GERMANY",
    isActive: true,
  },
  {
    id: 2,
    street: "Anike ibikunle street",
    postcode: "80980",
    city: "MÜNCHEN",
    country: "GERMANY",
    isActive: false,
  },
];

const deliveryAddresses = reactive(addresses);

const toggleAddressForm = () => (isNewAddress.value = !isNewAddress.value);

const selectAddress = (addresss) => {
  deliveryAddresses.map((add) => (add.isActive = false));
  const addressIndex = deliveryAddresses.findIndex(
    (add) => add.id === addresss.id
  );
  deliveryAddresses[addressIndex].isActive = true;
};

const selectedAddress = ref(
  deliveryAddresses.find((address) => address.isActive)
);

const isNewAddress = ref(false);
</script>
