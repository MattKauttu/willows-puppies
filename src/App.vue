<template>
  <div id="app">
    <div v-if="shouldShowBackLink" class="back-link">
      <router-link :to="backLinkRoute">← Back</router-link>
    </div>
    <ThemeToggle />
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ThemeToggle from './components/ThemeToggle.vue';

const route = useRoute();

const shouldShowBackLink = computed(() => {
  return route.path !== '/';
});

const backLinkRoute = computed(() => {
  if (route.path.startsWith('/puppy/')) return '/';
  return null;
});
</script>

<style scoped>
#app {
  position: relative;
  min-height: 100vh;
}

.theme-toggle {
  z-index: 1000; /* Ensure these are above other content */
}

.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
}

button {
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: var(--text-color);
}

.back-link {
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 1.2rem;
  z-index: 1000; /* Ensure it stays above other content */
}
</style>
