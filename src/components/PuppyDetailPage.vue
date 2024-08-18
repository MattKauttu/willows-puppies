<template>
  <div v-if="puppy" class="puppy-detail-page">
    <h1 class="header">{{ puppy.name }}'s Details</h1>
    <p>{{ puppy.bio }}</p>

    <h3>Gallery</h3>
    <div v-for="(images, week) in puppy.gallery" :key="week" class="week-section">
      <h4>{{ week }}</h4>
      <div class="gallery">
        <img v-for="image in images" :src="image" :key="image" class="gallery-image" />
      </div>
    </div>

    <h3>Growth Chart</h3>
    <div class="growth-chart">
      <table>
        <tr v-for="record in puppy.growthChart" :key="record.date">
          <td>{{ record.date }}</td>
          <td>{{ record.weight }} oz</td>
        </tr>
      </table>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import puppiesData from '../assets/puppies.json'; // Import the JSON file

const route = useRoute();
const puppy = ref(null);

onMounted(() => {
  console.log('Route ID:', route.params.id);
  console.log('Puppies Data:', puppiesData);

  puppy.value = puppiesData.find(p => p.id === parseInt(route.params.id));
  console.log('Found Puppy:', puppy.value);
});
</script>

<style scoped>
.puppy-detail-page {
  padding: 20px;
}

.puppy-image {
  max-width: 100%;
  height: auto;
}

.week-section {
  margin-bottom: 20px;
}

.week-section h4 {
  margin-bottom: 10px;
}

.gallery {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.gallery-image {
  width: 100px;
  height: 100px;
  border-radius: 5px;
}

.growth-chart {
  margin-top: 20px;
}

.growth-chart table {
  width: 100%;
  border-collapse: collapse;
}

.growth-chart td {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
</style>
