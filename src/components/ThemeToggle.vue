<template>
  <button @click="toggleTheme" class="flex items-center p-2 rounded-full focus:outline-none">
    <span v-if="!isDarkMode" class="text-yellow-500">🌞</span>
    <span v-else class="text-gray-300">🌜</span>
  </button>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isDarkMode = computed(() => store.getters.isDarkMode);

const toggleTheme = () => {
  store.dispatch('toggleDarkMode');
};
</script>