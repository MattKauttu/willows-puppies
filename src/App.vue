<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>


<style scoped>
#app {
  position: relative;
  min-height: 100vh;
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
