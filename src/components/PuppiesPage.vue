<template>
  <main>
    <router-link
      v-for="puppy in puppies"
      :key="puppy.id"
      :to="{ name: 'PuppyDetailPage', params: { id: puppy.id } }"
      :class="puppy.gender === 'male' ? 'male' : 'female'"
    >
      <img :src="puppy.image" :alt="puppy.name" />
      <h3>{{ puppy.name }}</h3>
    </router-link>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import puppiesData from '../assets/puppies.json';

const puppies = ref(puppiesData);
</script>

<style scoped>
</style>
