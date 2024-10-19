<template>
  <div class="mt-4">
    <h2 class="text-lg font-medium text-gray-900">Payment methods</h2>
    <small class="text-xs text-gray-400">Manage all payment methods</small>

    <fieldset aria-label="Payment methods" class="mt-4">
      <RadioGroup
        class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
        v-model="selectedPaymentMethod"
      >
        <div
          @click="togglePaymentMethodForm"
          class="relative cursor-pointer flex justify-center items-center rounded-lg border border-dashed bg-white p-4 shadow-sm focus:outline-none sm:mr-5"
        >
          <PlusIcon class="w-8 h-8 text-3xl" />
        </div>

        <RadioGroupOption
          as="template"
          v-for="paymentMethod in paymentMethods"
          :key="paymentMethod.id"
          :value="paymentMethod"
          :aria-label="paymentMethod.name"
          :aria-description="`${paymentMethod.name} for ${paymentMethod.id}`"
          v-slot="{ checked, disabled }"
        >
          <div>
            <div
              :class="[
                checked ? 'border-transparent' : 'border-gray-300',
                paymentMethod.isActive ? 'ring-2 ring-yellow-500' : '',
                disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
              ]"
              @click="selectPaymentMethod(paymentMethod)"
            >
              <font-awesome-icon
                :icon="paymentMethod.icon"
                :class="[
                  paymentMethod.isActive ? 'text-yellow-400' : '',
                  'text-3xl mr-4 w-8 h-8 self-center text-gray-400',
                ]"
              />
              <span class="flex flex-1 justify-between">
                <span class="flex flex-col">
                  <span
                    class="block text-sm font-medium text-gray-900 capitalize"
                  >
                    {{ paymentMethod.name }}
                  </span>
                  <small class="text-xs text-gray-400">
                    Ends in {{ paymentMethod.cardNo }}
                  </small>
                </span>
                <span class="text-xs text-gray-400 self-end">
                  Exp: {{ paymentMethod.expireAt }}
                </span>
              </span>
              <CheckCircleIcon
                v-if="paymentMethod.isActive"
                class="h-5 w-5 text-yellow-600"
                aria-hidden="true"
              />
              <span
                :class="[
                  paymentMethod.isActive ? 'border' : 'border-2',
                  checked ? 'border-yellow-500' : 'border-transparent',
                  'pointer-events-none absolute -inset-px rounded-lg',
                ]"
                aria-hidden="true"
              />
            </div>
            <div class="flex space-x-2 text-xs text-gray-400 mt-1">
              <span>Edit</span>
              <span class="text-red-400">Delete</span>
            </div>
          </div>
        </RadioGroupOption>
      </RadioGroup>
    </fieldset>

    <div class="mt-10 border-t border-gray-200 pt-10" v-if="isNewPaymentMethod">
      <h2 class="text-lg font-medium text-gray-900">Create new payment method</h2>
      <small class="text-xs text-gray-400">Please add valid payment details.</small>

      <form class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        <div class="col-span-4">
          <label for="card-number" class="block text-sm font-medium text-gray-700">
            Card number
          </label>
          <div class="mt-1">
            <input
              type="text"
              id="card-number"
              name="card-number"
              autocomplete="cc-number"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="col-span-4">
          <label for="name-on-card" class="block text-sm font-medium text-gray-700">
            Name on card
          </label>
          <div class="mt-1">
            <input
              type="text"
              id="name-on-card"
              name="name-on-card"
              autocomplete="cc-name"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="col-span-2 sm:col-span-3">
          <label for="expiration-date" class="block text-sm font-medium text-gray-700">
            Expiration date (MM/YY)
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="expiration-date"
              id="expiration-date"
              autocomplete="cc-exp"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="col-span-1 sm:col-span-1">
          <label for="cvc" class="block text-sm font-medium text-gray-700">
            CVC
          </label>
          <div class="mt-1">
            <input
              type="text"
              name="cvc"
              id="cvc"
              autocomplete="csc"
              class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
            />
          </div>
        </div>

        <div class="mt-5 w-full sm:w-24">
          <SharedButton is-secondary is-rounded />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
import { CheckCircleIcon, PlusIcon } from "@heroicons/vue/20/solid";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faPaypal, faCreditCard, faCoins } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faPaypal, faCreditCard, faCoins);

const methods = [
  { id: 1, name: "ikudayisi oluwatosin", cardNo: "4560", icon: ["fas", "credit-card"], expireAt: "09/25", isActive: false },
  { id: 2, name: "ezekiel oluwatosin", cardNo: "1566", icon: ["fas", "credit-card"], expireAt: "08/29", isActive: false },
  { id: 3, name: "olamide oluwatosin", cardNo: "1006", icon: ["fas", "credit-card"], expireAt: "01/29", isActive: true }
];
const paymentMethods = reactive(methods);

const togglePaymentMethodForm = () => (isNewPaymentMethod.value = !isNewPaymentMethod.value);

const selectPaymentMethod = (paymentMethod) => {
  paymentMethods.forEach((method) => (method.isActive = false));
  const paymentMethodIndex = paymentMethods.findIndex((method) => method.id === paymentMethod.id);
  paymentMethods[paymentMethodIndex].isActive = true;
};

const selectedPaymentMethod = ref(paymentMethods.find((method) => method.isActive));

const isNewPaymentMethod = ref(false);
</script>
