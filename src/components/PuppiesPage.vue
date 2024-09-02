<template>
  <div class="container mx-auto p-4"
    :class="[
      $store.state.isDarkMode ? 'text-[#e0e0e3]' : 'text-[#322920]'
    ]"
  >
    <!-- Introductory Section -->
    <section class="mb-8 p-4 rounded-lg shadow-sm"
    :class="[
        $store.state.isDarkMode ? 'bg-[#363844]' : 'bg-[#ddc4a4]'
      ]"
    >
      <h2 class="text-2xl font-bold text-center">
        Welcome to Willow's Puppies!
      </h2>
      <p class="text-lg text-center mt-4">
        Our sweet mini Goldendoodle, Willow, had a litter of adorable puppies with another mini Goldendoodle. The puppies are available to adopt for $1500 each. A $250 deposit is required to reserve a puppy, and after putting down the deposit, you are welcome to visit them once per week starting at their sixth week of age. They will be ready to go home with you by their eighth week of age, pending their eight week doctor's appointment.
      </p>
    </section>

    <!-- Instructional Text -->
    <section class="mb-4">
      <p class="text-lg font-medium text-center">
        Click on a puppy to view their details!
      </p>
    </section>

    <!-- Puppy Grid Section -->
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <router-link 
        v-for="puppy in puppies" 
        :key="puppy.name" 
        :to="{ name: 'PuppyDetailPage', params: { puppyName: puppy.name } }"
        class="cursor-pointer flex justify-center">
        <div 
          :class="[
            'rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:scale-105 hover:shadow-lg focus:shadow-lg',
            puppy.gender === 'female'
              ? ($store.state.isDarkMode ? 'bg-pink-400' : 'bg-pink-200')
              : ($store.state.isDarkMode ? 'bg-blue-400' : 'bg-blue-200')
          ]"
          style="max-width: 250px; width: 100%;">
          <img 
            :src="puppy.image" 
            :alt="puppy.name" 
            class="w-full h-auto object-contain rounded-t-lg"
            style="max-width: 250px; max-height: 250px;"
          />
          <div class="p-4 text-center">
            <h3 class="text-lg font-semibold"
              :class="[
                $store.state.isDarkMode ? 'text-[#e0e0e3]' : 'text-[#322920]'
              ]"
            >
              {{ puppy.name }}
            </h3>
          </div>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import puppiesData from '../assets/puppies.json';

const puppies = ref(puppiesData);
const store = useStore();
</script>
