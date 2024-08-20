<template>
  <section>
    <h3>Gallery</h3>
    <div v-for="(images, week) in gallery" :key="week" class="week-section">
      <h4>{{ formatWeek(week) }}</h4>
      <div class="gallery">
        <img v-for="image in images" :src="image" :key="image" class="gallery-image" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
gallery: {
  type: Object,
  required: true,
},
});

function formatWeek(week) {
  return week.replace(/(\D+)(\d+)/, (match, p1, p2) => {
    return p1.charAt(0).toUpperCase() + p1.slice(1) + " " + p2;
  });
}
</script>

<style scoped>
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
</style>
  