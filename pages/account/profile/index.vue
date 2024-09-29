<template>
  <div>
    <AppNav />
    <div class="mt-16">
      <AuthLayoutSidebar />
      <div class="lg:pl-72">
        <main class="py-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-gray-800 text-2xl">My Profile</h2>
            <small class="text-xs">Personal Information.</small>

              <div
                class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
              >
                <form class="md:col-span-2">
                  <div
                    class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
                  >
                    <div class="col-span-full flex items-center gap-x-8">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                        class="h-24 w-24 flex-none bg-gray-800 object-cover rounded-full"
                      />
                    </div>

                    <div class="sm:col-span-3">
                      <label
                        for="first-name"
                        class="block text-sm font-medium leading-6"
                        >First name</label
                      >
                      <div class="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autocomplete="given-name"
                          class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label
                        for="last-name"
                        class="block text-sm font-medium leading-6"
                        >Last name</label
                      >
                      <div class="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autocomplete="family-name"
                          class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="col-span-3">
                      <label
                        for="email"
                        class="block text-sm font-medium leading-6"
                        >Email address</label
                      >
                      <div class="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          dirname="true"
                          autocomplete="email"
                          class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                          disabled
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label
                        for="phone"
                        class="block text-sm font-medium leading-6"
                        >Phone</label
                      >
                      <div class="mt-2">
                        <div
                          class="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset "
                        >
                          <span
                            class="flex select-none items-center pl-3 text-gray-400 sm:text-sm"
                            >+234</span
                          >
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            autocomplete="phone"
                            class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-span-full">
                      <label
                        for="address"
                        class="block text-sm font-medium leading-6"
                        >Address</label
                      >
                      <div class="mt-2">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            autocomplete="address"
                            class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                            placeholder="Light road avenue, 16 FVB"
                          />
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label
                        for="city"
                        class="block text-sm font-medium leading-6"
                        >City</label
                      >
                      <div class="mt-2">
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autocomplete="city"
                          class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-3">
                      <label
                        for="country"
                        class="block text-sm font-medium leading-6"
                        >Country</label
                      >
                      <div class="mt-2">
                        <select
                          id="country"
                          name="country"
                          class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
                        >
                        <option value="">Please choose a country</option>
                          <option>Nigeria</option>
                          <option>Germany</option>
                          <option>USA</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="mt-8 flex">
                    <button
                      type="submit"
                      class="rounded-md text-gray-50 bg-gray-800 px-3 py-2 text-sm font-semibold shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
