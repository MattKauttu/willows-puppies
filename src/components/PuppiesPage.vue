<template>
  <div class="container mx-auto p-4">
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <router-link 
        v-for="puppy in puppies" 
        :key="puppy.name" 
        :to="{ name: 'PuppyDetailPage', params: { puppyName: puppy.name } }"
        class="cursor-pointer flex justify-center">
        <div 
          :class="[
            'rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg',
            puppy.gender === 'female' ? 'bg-pink-200 dark:bg-pink-400' : 'bg-blue-200 dark:bg-blue-400'
          ]"
          style="max-width: 250px; width: 100%;">
          <img 
            :src="puppy.image" 
            :alt="puppy.name" 
            class="w-full h-auto object-contain rounded-t-lg"
            style="max-width: 250px; max-height: 250px;"
          />
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold text-black dark:text-black">{{ puppy.name }}</h3>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import puppiesData from '../assets/puppies.json';

const puppies = ref(puppiesData);
</script>
