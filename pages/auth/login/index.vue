<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h3
        class="mt-10 text-center text-4xl leading-9 tracking-tight text-gray-600"
      >
        Login
      </h3>
      <AuthSocialProviderIcons />
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="handleSubmit">
        <div>
         <div class="relative">
           <EnvelopeIcon
            class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
            :class="[loginErrors.email ? 'text-red-400' : '', 'text-gray-400']"
          />
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              v-model="form.email"
              autocomplete="email"
              placeholder="Email"
              :class="[loginErrors.email ? 'border border-red-400' : '', '']"
              class="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
            />
          </div>
         </div>
          <p v-if="loginErrors.email" class="text-red-500 text-xs mt-1">
            {{ loginErrors.email }}
          </p>
        </div>

        <div>
          <div class="relative">
            <LockClosedIcon
            class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
            :class="[loginErrors.password ? 'text-red-400' : '', 'text-gray-400']"
          />
          <div class="mt-2">
            <input
              id="password"
              name="password"
              v-model="form.password"
              type="password"
              autocomplete="current-password"
              :class="[loginErrors.password ? 'border border-red-400' : '', '']"
              placeholder="Password"
              class="block w-full rounded-md border-0 py-2.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-300 sm:text-sm sm:leading-6"
            />
          </div>
          </div>
          <p v-if="loginErrors.password" class="text-red-500 text-xs mt-1">
            {{ loginErrors.password }}
          </p>
        </div>

        <div class="text-center">
          <p class="font-light">
            Don't have an account?
            <NuxtLink
              to="/auth/register"
              class="font-semibold text-yellow-600 hover:text-yellow-500"
              >Sign up now?</NuxtLink
            >
          </p>
          <div class="text-sm">
            <NuxtLink
              to="#"
              class="font-semibold text-yellow-600 hover:text-yellow-500"
              >Forgot password?</NuxtLink
            >
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2.5 pl-10 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            :class="[loginErrors.password ? 'text-red-400' : '', 'text-gray-400']"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
    <MouiLogo />
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from "vue";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/vue/24/outline";
import { useUserStore } from "~/store/user-store";
import type { LoginData } from "~/schema/login.schema";
import { LoginSchema } from "../../../schema/login.schema";
import { useRouter } from "vue-router";

const config = useRuntimeConfig()
const router = useRouter();

const userStore = useUserStore();

const form =reactive<LoginData>({
    email: "",
    password: "",
});

const loginErrors =reactive<LoginData>({
    email: "",
    password: "",
});

const handleSubmit = async (e: any) => {
  e.preventDefault();
  const { validate, errors } = useForm(form, LoginSchema);

  const { valid } = validate();

  if (!valid) {
    loginErrors.email = errors.email;
    loginErrors.password = errors.password;

    return;
  }


  const { data, status, error } = await useFetch(`${config.public.apiBase}/guest/login`, {
    method: 'POST',
    body: form,
    onRequest({ options }) {
      options.headers.set('Content-Type', 'Application/json')
    },
    // onResponse({ response }) {
    //   console.log(response)
    //   // await router.push('/');
    // },
    // onResponseError({ response }) {
    //   console.log(response)
    // }
  });


  console.log(data || 'no data');
  console.log(status || 'no status');
  console.log(error || 'no error');


};
</script>
