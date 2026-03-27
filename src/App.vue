<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<style>
:root {
  --primary-color: #75a3e1;
  --secondary-color: #4285f4;
  --text-color: #333;
  --light-text: #666;
  --background-color: #fff;
  --light-bg: #f8f9fa;
  --border-color: #eaeaea;
  --accent-color: #ffde7c;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--background-color);
  padding: 0;
  margin: 0;
}

#app {
  min-height: 100vh;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}
</style>
