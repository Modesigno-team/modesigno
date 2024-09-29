<template>
  <button
    type="submit"
    class="w-full px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="{
      'bg-yellow-500 text-gray-50 hover:bg-yellow-400 focus-visible:outline-yellow-500': isPrimary || isDefaultState,
      'bg-gray-800 text-gray-50 hover:bg-gray-400 focus-visible:outline-gray-500': isSecondary,
      'bg-red-500 text-gray-50 hover:bg-red-400 focus-visible:outline-red-500': isDanger,
      'rounded-full': isRoundedFull,
      'rounded-md': isRounded,
      'rounded-none': !isRounded && !isRoundedFull,
    }"
  >
    {{ label }}
  </button>
</template>
<script setup>
const props = defineProps({
  label: {
    type:String,
    default: 'Submit'
  },
  isPrimary: Boolean,
  isSecondary: Boolean,
  isDanger: Boolean,
  isRoundedFull: Boolean,
  isRounded: Boolean,
});

const isDefaultState = !props.isPrimary && !props.isSecondary && !props.isDanger;
</script>
