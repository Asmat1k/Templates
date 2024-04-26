<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <main class="main">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
@import url('./index.css');
header {
  max-width: 1200px;
  margin: 20px auto;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

main {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
