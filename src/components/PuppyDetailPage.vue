<template>
  <section class="text-center p-4 mb-4">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold font-dancing-script mb-8">
      {{ puppy.name }}'s Details
    </h1>
    <section class="text-center p-4">
      <h2 class="text-xl md:text-2xl lg:text--3xl font-bold mb-2">Bio</h2>
      <p class="text-md md:text-lg lg:text-xl">
        {{ puppy.bio }}
      </p>
    </section>
  </section>

  <section class="container mx-auto p-4">
    <!-- Main Grid Layout -->
    <div
      v-if="puppy"
      class="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <!-- Gallery Widget -->
      <div class="rounded-lg shadow-md p-4">
        <Gallery :images="puppy.gallery" />
      </div>

      <!-- Growth Chart Widget -->
      <div class="rounded-lg shadow-md p-4">
        <WeightOverTimeChart
          :data="puppy.growthChart"
          :chartLabel="'Weight By Day'"
          :weightUnit="'oz'"
          :gender="puppy.gender"
        />
      </div>
    </div>
    <div v-else>Error loading puppy...</div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Gallery from './Gallery.vue';
import puppiesData from '../assets/puppies.json';
import WeightOverTimeChart from './WeightOverTimeChart.vue';

const route = useRoute();
const puppyName = route.params.puppyName;

const puppy = computed(() => {
  const puppy = puppiesData.find(p => p.name.toLowerCase() === puppyName.toLowerCase());
  console.log(puppy);
  return puppy;
});
</script>

<style scoped>
/* Importing the Dancing Script font */
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

/* Applying the Dancing Script font to Tailwind's utility class */
.font-dancing-script {
  font-family: 'Dancing Script', cursive;
}
</style>
