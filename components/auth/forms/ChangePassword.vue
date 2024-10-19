<template>
  <div
    class="mt-4 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:py-0 sm:px-0 md:grid-cols-1 lg:px-0"
  >
    <div>
      <p class="mt-1 text-sm leading-6 text-gray-400">
        Update your password associated with your account.
      </p>
    </div>

    <form class="md:col-span-2">
      <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
        <div class="col-span-full">
          <label
            for="current-password"
            class="block text-sm font-medium leading-6 text-gray-700"
            >Current password</label
          >
          <div class="mt-2">
            <input
              id="current-password"
              name="current_password"
              type="password"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="col-span-full">
          <label
            for="new-password"
            class="block text-sm font-medium leading-6 text-gray-700"
            >New password</label
          >
          <div class="mt-2">
            <input
              id="new-password"
              name="new_password"
              type="password"
              autocomplete="new-password"
              class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div class="col-span-full">
          <label
            for="confirm-password"
            class="block text-sm font-medium leading-6 text-gray-700"
            >Confirm password</label
          >
          <div class="mt-2">
            <input
              id="confirm-password"
              name="confirm_password"
              type="password"
              autocomplete="new-password"
              class="block w-full rounded-md border-0 py-2.5 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>

      <div class="mt-5 w-24">
        <SharedButton is-secondary is-rounded/>
      </div>
    </form>
  </div>
</template>
