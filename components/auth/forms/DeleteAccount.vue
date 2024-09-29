<template>
  <div
    class="grid max-w-7xl grid-cols-1 gap-y-4 px-4 py-8 sm:py-2 sm:px-0 lg:px-0"
  >
    <div>
      <h2 class="text-base font-semibold leading-7 text-gray-600">
        Delete account
      </h2>
      <p class="mt-1 text-sm leading-6 text-gray-400">
       You can delete your account here.
        This action is not reversible. All information related to this account
        will be deleted permanently.
      </p>
    </div>

    <form class="flex items-start md:col-span-2">
      <div class="mt-5 w-24">
          <SharedButton is-danger is-rounded />
        </div>
    </form>
  </div>
</template>
