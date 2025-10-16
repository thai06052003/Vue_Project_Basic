<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <img
      class="logo"
      width="60"
      height="60"
      src="@/assets/logo.svg"
      alt="Vue Logo"
    />
    <nav>
      <RouterLink to="/">
        <div class="btn-main">Home</div>
      </RouterLink>

      <RouterLink to="/create">
        <div class="btn-action">Create</div>
      </RouterLink>
    </nav>
  </header>

  <RouterView v-slot="{ Component, route }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 2rem;
    align-items: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
  }

  nav {
    display: flex;
    columns: 1rem;
  }
</style>
