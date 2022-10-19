<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { shoppingListsService } from '@/services/shopping-lists.service';

const lists = ref();
onMounted(async () => {
  lists.value = await shoppingListsService.getAll();
});
</script>

<template>
  <aside>
    <p class="menu-label">Your lists</p>
    <ul class="menu-list">
      <li v-for="{ id, name } of lists" :key="id">
        <RouterLink :to="'/lists/' + id">{{ name }}</RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped></style>
