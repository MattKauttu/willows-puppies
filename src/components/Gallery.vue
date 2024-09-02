<template>
  <section>
    <h1 class="text-2xl font-bold">Gallery</h1>
    <p class="text-lg mt-4">
        Click an image to view its full-size!
    </p>
    <section v-for="(weekImages, week) in images" :key="week" class="mt-4 mb-8">
      <h2 class="">{{ formatWeekTitle(week) }}</h2>
      <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        <figure
          v-for="(item, index) in weekImages"
          :key="index"
          class="bg-transparent flex items-center justify-center cursor-pointer aspect-w-1 aspect-h-1"
        >
          <img
            :src="item.thumbnail"
            :alt="`Thumbnail ${index + 1} for ${week}`"
            class="object-contain w-full h-full"
            @click="openLightbox(index, week)"
          />
        </figure>
      </div>
    </section>

    <vue-easy-lightbox
      :visible="visible"
      :imgs="currentImages"
      :index="currentIndex"
      @hide="closeLightbox"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import VueEasyLightbox from 'vue-easy-lightbox';

const props = defineProps({
  images: {
    type: Object,
    required: true
  }
});

const visible = ref(false);
const currentIndex = ref(0);
const currentImages = ref([]);

const formatWeekTitle = (week) => {
  return `Week ${week.replace('week', '')}`;
};

const openLightbox = (index, week) => {
  currentIndex.value = index;
  currentImages.value = props.images[week].map(image => image.image);
  visible.value = true;
};

const closeLightbox = () => {
  visible.value = false;
};
</script>
