<template>
    <div v-if="backLinkRoute">
      <router-link :to="backLinkRoute">← Back</router-link>
    </div>
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
  div {
    font-size: 1rem;
  }
  </style>
  