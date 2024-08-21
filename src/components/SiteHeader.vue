<template>
  <header class="shadow-md py-4 px-6 flex items-center justify-between text-2xl md:text-3xl lg:text-4xl">
    <!-- BackLink Component -->
    <BackLink class="mr-4" aria-label="Back to previous page" />

    <!-- Site Title -->
    <h1 class="font-bold text-center flex-grow font-dancing-script">
      {{ siteTitle }}
    </h1>

    <!-- ThemeToggle Component -->
    <ThemeToggle class="ml-4" aria-label="Toggle theme" />
  </header>
</template>

<script setup>
import BackLink from './BackLink.vue';
import ThemeToggle from './ThemeToggle.vue';

// Define the props
const props = defineProps({
  siteTitle: {
    type: String,
    default: "Willow's Puppies"
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

.font-dancing-script {
  font-family: 'Dancing Script', cursive;
}
</style>
