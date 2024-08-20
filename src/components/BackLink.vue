<template>
  <router-link
    v-if="backLinkRoute"
    :to="backLinkRoute"
    class="flex items-center space-x-2 p-2 text-sm font-medium hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    tabindex="0"
    aria-label="Go back"
  >
    <svg class="h-5 w-5 transform rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 010-1.414L10.586 10 7.707 7.121a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
    </svg>
    <span>Back</span>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const backLinkRoute = computed(() => {
  if (route.path.startsWith('/puppy/')) return '/';
  return null;
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
