<template>
  <div>
    <header>
      <div class="container">
        <nav>
          <nuxt-link :to="{ name: 'index' }">Find your country 😄</nuxt-link>
        </nav>
      </div>
    </header>
    <slot/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
header {
  background: #2b3945;
  color: #fff;
}

nav {
  padding: 2rem 63px;
}

nav a {
  font-size: 14px;
  font-weight: bold;
}
</style>