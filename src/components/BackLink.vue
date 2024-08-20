<template>
    <router-link
      v-if="backLinkRoute"
      :to="backLinkRoute"
    >
      <button type="button">← Back</button>
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
  </style>
  