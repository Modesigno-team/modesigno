<template>
  <div>
    <AppNav />
    <div class="mt-16">
      <AuthLayoutSidebar />
      <div class="lg:pl-72">
        <main class="py-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-gray-800 text-2xl">My Favourites</h2>
            <small class="text-xs">Some the interesting items you liked.</small>
            <div class="max-w-7xl px-4 py-8 sm:px-1 lg:px-1 w-2/3">
            <ProductList />
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
