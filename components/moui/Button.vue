<template>
    <div >
      <button
      v-if="!isLink"
    type="submit"
    class="w-full px-5 py-5 rounded-md text-2xl sm:px-3 sm:py-2 sm:text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
    <NuxtLink
    :to="to"
      v-else
    class="w-full px-5 py-5 rounded-md text-2xl sm:px-3 sm:py-2 sm:text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
  </NuxtLink>
    </div>
  
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
  isLink: {
    type: Boolean,
    required: true,
    default: false
  },
  to:{
    type: String,
    required: false,
    validator(value, props) {
      if (props.isLink && !value) {
        console.error('The "to" prop is required when "isLink" is true.');
        return false;
      }
      return true;
    }
  }
});

const isDefaultState = !props.isPrimary && !props.isSecondary && !props.isDanger;
</script>
