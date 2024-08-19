<template>
  <div class="puppies-page">
    <router-link
      v-for="puppy in puppies"
      :key="puppy.id"
      :to="{ name: 'PuppyDetailPage', params: { id: puppy.id } }"
      class="puppy-card"
      :class="puppy.gender === 'male' ? 'male' : 'female'"
    >
      <img :src="puppy.image" :alt="puppy.name" class="puppy-thumbnail" />
      <div class="puppy-info">
        <h2>{{ puppy.name }}</h2>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import puppiesData from '../assets/puppies.json';

const puppies = ref(puppiesData);
</script>

<style scoped>
.puppies-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.puppy-card {
  width: 250px; /* Adjusted width */
  height: 300px; /* Set fixed height */
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-decoration: none; /* Remove underline from links */
  overflow: hidden;
  position: relative;
}

.puppy-thumbnail {
  width: 100%;
  height: 250px; /* Fixed height for images */
  object-fit: cover; /* Cover the container without distorting */
  border-radius: 10px;
  margin-bottom: 10px;
}

.puppy-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
}

:root[data-theme='dark'] .puppy-info {
  color: #000000;
}

.puppy-card h2 {
  font-size: 1.5rem;
  margin: 0 0 5px 0;
}

.puppy-card p {
  font-size: 1rem;
  margin: 0;
  flex-grow: 1;
}

.puppy-card:hover {
  transform: translateY(-5px);
  transition: transform 0.2s ease-in-out;
}

.puppy-card:active {
  transform: translateY(0);
}

.male {
  background-color: #add8e6;
}

.female {
  background-color: #ffb6c1;
}
</style>
