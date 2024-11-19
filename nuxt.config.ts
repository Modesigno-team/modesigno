// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001/api'
    }
  },
  devtools: { enabled: false },
  modules: [
    "@nuxt/ui",
    "nuxt-headlessui",
    "@nuxt/eslint",
    "@pinia/nuxt",
    'pinia-plugin-persistedstate/nuxt',
  ],
  colorMode: {
    preference: "light",
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
});