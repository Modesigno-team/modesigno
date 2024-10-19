<script setup lang="ts">
</script>
<template>
  <div
    class="bg-image flex flex-col bg-cover bg-center pt-24 min-h-screen sm:pt-0 sm:justify-center"
  >
    <AppNav />
    <div class="flex flex-col p-5 items-start sm:w-2/3 sm:p-24 sm:space-y-4">
      <h1
        class="font-poppins mt-10 max-w-lg text-7xl font-bold tracking-tight text-gray-900 sm:text-6xl"
      >
        Wear it like you mean it.
      </h1>
      <p class="font-poppins text-2xl text-left font-light text-gray-700 my-5 sm:my-0 sm:text-small">
        Everything made of quality materials for creative enthusiast <br />
        supporting technology at large.
      </p>
      <div class="flex items-center gap-x-6 w-full sm:w-1/3">
          <button class="w-2/3 border border-black text-gray-700 px-5 py-5 rounded-md text-2xl sm:px-4 sm:py-2 sm:text-lg">
            Shop now
          </button>
        </div>
      <ul class="hidden sm:flex w-full ml-5 sm:justify-between sm:ml-1 text-gray-800 sm:w-96">
        <li class="list-disc">Free sign up</li>
        <li class="list-disc">No charges</li>
        <li class="list-disc">Over 100+ Designs</li>
      </ul>
    </div>
    <div
      class="capitalize w-2/3 ml-5 text-xl absolute bottom-6 text-gray-700 flex justify-between items-start sm:w-1/3 sm:px-24"
    >
      <span>Men</span>
      <span>Women</span>
      <span>Kids</span>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background: url("/images/bg.png");
}
</style>
