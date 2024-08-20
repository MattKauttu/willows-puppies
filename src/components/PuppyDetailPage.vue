<template>
  <main v-if="puppy">
    <h3>{{ puppy.name }}'s Details</h3>
    <p>{{ puppy.bio }}</p>

    <Gallery :gallery="puppy.gallery" />
    <GrowthChart :growthChart="puppy.growthChart" />
  </main>
  <section v-else>Loading puppy details...</section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import puppiesData from '../assets/puppies.json';
import Gallery from './Gallery.vue';
import GrowthChart from './GrowthChart.vue';

const route = useRoute();
const puppy = ref(null);

onMounted(() => {
  puppy.value = puppiesData.find(p => p.id === parseInt(route.params.id));
  console.log("Got puppy: " + puppy)
});
</script>

<style scoped>
</style>
