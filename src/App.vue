<template>
  <div 
    class="flex flex-col min-h-screen"
    :class="[
      $store.state.isDarkMode ? 'dark' : '', 
      'min-h-screen',
      $store.state.isDarkMode ? 'bg-[#2c2d34] text-[#e0e0e3]' : 'bg-[#f4e5d3] text-[#322920]'
    ]"
  >
    <a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>
    <SiteHeader />
    <main id="main-content" class="max-w-7xl mx-auto p-4 text-lg leading-relaxed flex-grow">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';

const store = useStore();
</script>
