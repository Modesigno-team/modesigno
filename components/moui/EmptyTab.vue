<template>
  <div class="ml-16 flex flex-col mt-6 px-2 justify-center items-center w-1/3">
    <FolderOpenIcon class="h-16 w-16 text-gray-400" aria-hidden="true" />
    <h3 class="mt-2 text-sm text-gray-900">{{ title}}</h3>
    <p class="mt-1 text-sm text-gray-500" v-show="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
import { FolderOpenIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
    title: {
        required: true,
        type: String
    },
    subtitle: {
        required: false,
        type: String
    }
});
</script>