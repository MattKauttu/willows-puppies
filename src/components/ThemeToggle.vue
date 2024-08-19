<template>
    <div>
      <button @click="toggleTheme" class="nowrap">
        <span>{{ currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode' }}</span>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const currentTheme = ref('light');
  
  onMounted(() => {
    // Check if the user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      currentTheme.value = savedTheme;
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no preference is saved, check if the user prefers dark mode
      currentTheme.value = 'dark';
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  });
  
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme.value);
    localStorage.setItem('theme', currentTheme.value);
  };
  </script>
  
  <style scoped>
  
  button {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    color: var(--text-color);
  }

  .nowrap {
    text-wrap: nowrap;
  }
  </style>
  