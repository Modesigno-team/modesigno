<template>
  <div>
    <!-- Desktop Navigation -->
    <nav class="z-10 bg-gray-100 w-full fixed top-0 hidden sm:block">
      <div class="mx-auto max-w-8xl px-2 sm:px-12 lg:px-24">
        <div class="relative flex h-16 items-center justify-between">
          <!-- Shop link for desktop -->
          <div class="w-56">
            <NuxtLink to="/products" class="font-poppins text-xl text-gray-700"
              >Shop</NuxtLink
            >
          </div>

          <!-- Center logo for desktop -->
          <NuxtLink to="/" class="basis-2/4 flex justify-center">
            <img
              src="/images/modesigno-web.svg"
              alt="Modesigno"
              width="150"
              height="50"
            />
          </NuxtLink>

          <!-- Right-side menu items for desktop -->
          <div class="flex justify-between items-center pr-2 sm:pr-0 w-56">
            <NuxtLink
              to="/auth/login"
              class="border border-black text-gray-700 rounded-sm px-4 py-2"
            >
              Login
            </NuxtLink>
            <MagnifyingGlassIcon
              class="ml-2 h-8 w-8 text-gray-700"
              aria-hidden="true"
            />
            <NuxtLink to="/cart">
              <ShoppingCartIcon
                class="ml-2 h-8 w-8 text-gray-700 hover:-rotate-45 transition-transform duration-300 ease-in-out"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile Navigation -->
    <nav class="z-10 bg-gray-100 w-full fixed top-0 h-16 block sm:hidden">
      <div
        class="mx-auto max-w-8xl px-4 h-full flex items-center justify-between"
      >
        <div class="relative flex h-16 items-center justify-between">
          <!-- Logo for mobile -->
          <NuxtLink to="/" class="flex justify-start">
            <img
              src="/images/modesigno-web.svg"
              alt="Modesigno"
              width="150"
              height="50"
            />
          </NuxtLink>

          <!-- Right-side menu items for mobile -->
          <div class="flex justify-end items-center pr-2 w-56">
            <!-- Icon instead of login button on mobile -->
            <NuxtLink to="/auth/login">
              <UserIcon class="h-8 w-8 text-gray-700" aria-hidden="true" />
            </NuxtLink>

            <MagnifyingGlassIcon
              class="ml-2 h-8 w-8 text-gray-700"
              aria-hidden="true"
            />
            <NuxtLink to="/cart">
              <ShoppingCartIcon
                class="ml-2 h-8 w-8 text-gray-700 hover:-rotate-45 transition-transform duration-300 ease-in-out"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Mobile Menu (if needed, for further expansion) -->
      <div id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <!-- Add mobile menu links here -->
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>

<script setup>
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/vue/24/solid";
</script>
