<template>
    <header class="site-header">
      <div class="back-link">
        <BackLink />
      </div>
      <div class="site-title">
        <h1>Willow's Puppies</h1>
      </div>
      <div class="theme-toggle">
        <ThemeToggle />
      </div>
    </header>
  </template>
  
  <script setup>
  import BackLink from './BackLink.vue';
  import ThemeToggle from './ThemeToggle.vue';
  </script>
  
  <style scoped>
  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 10px;
    z-index: 1000;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .site-title {
    flex-grow: 1;
    text-align: center;
    }

    .site-title h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    }

    .back-link,
    .theme-toggle {
    flex-basis: 100px;
    }

    .back-link {
    text-align: left;
    }

    .theme-toggle {
    text-align: right;
    }
  </style>
  