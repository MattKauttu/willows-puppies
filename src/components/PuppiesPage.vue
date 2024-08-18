<template>
  <div class="puppies-page">
    <h1 class="header">The Puppies</h1>
    <div class="puppy-card-container">
      <router-link
        v-for="puppy in puppies"
        :key="puppy.id"
        :to="`/puppy/${puppy.id}`"
        class="puppy-card-link"
      >
        <div
          class="puppy-card"
          :class="puppy.gender === 'male' ? 'male' : 'female'"
        >
          <img :src="puppy.image" :alt="puppy.name" />
          <h3>{{ puppy.name }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import puppiesData from '../assets/puppies.json'; // Import the JSON file

const puppies = ref([]);

onMounted(() => {
  // Load data from JSON
  puppies.value = puppiesData;
});
</script>

<style scoped>
.puppies-page {
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.puppy-card-link {
  text-decoration: none;
  color: inherit;
}

.puppy-card {
  height: 300px; /* Set a uniform height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  text-align: center;
  background-color: var(--background-color-light);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

:root[data-theme='dark'] .puppy-card {
  color: var(--text-color-dark);
}

.puppy-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.puppy-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.puppy-card h3 {
  margin-top: 15px;
  font-size: 1.2rem;
  color: var(--text-color-light); /* Matches the global text color */
}

:root[data-theme='dark'] .puppy-card h3 {
  margin-top: 15px;
  font-size: 1.2rem;
  color: var(--text-color-light); /* Matches the global text color */
}

@media (max-width: 768px) {
  .puppies-page {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    padding: 10px;
  }

  .puppy-card {
    padding: 15px;
  }

  .puppy-card h3 {
    font-size: 1.2rem;
  }
}

body {
  font-family: 'Roboto', sans-serif;
  color: #333;
  background-color: #f5f5f5;
}

h2 {
  color: #444;
}

h3 {
  color: #666;
}

.male {
  background-color: #add8e6;
}

.female {
  background-color: #ffb6c1;
}

.puppy-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
}

</style>
