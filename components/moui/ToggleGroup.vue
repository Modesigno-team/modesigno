<template>
  <div class="flex flex-col">
    <span class="flex flex-grow flex-col">
      <h3 class="text-sm font-medium leading-6 text-gray-900 capitalize">{{ title }}</h3>
      <span class="text-xs text-gray-500" v-show="subtitle"
        >{{ subtitle }}</span
      >
    </span>
    <slot></slot>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Switch } from "@headlessui/vue";
const props = defineProps({
    title: {
        require: true,
        type: String
    },
    subtitle: {
        require: false,
        type: String
    }
})
const enabled = ref(false);
</script>
