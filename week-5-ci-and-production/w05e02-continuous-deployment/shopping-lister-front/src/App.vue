<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheMenu from '@/components/TheMenu.vue';
</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="columns">
      <div class="column is-3">
        <TheMenu />
      </div>
      <div class="column">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
