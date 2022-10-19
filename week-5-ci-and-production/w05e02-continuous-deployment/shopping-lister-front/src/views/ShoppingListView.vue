<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { shoppingListsService } from '@/services/shopping-lists.service';
import type { ShoppingList } from '@/model/ShoppingList';
import ProductItem from '@/components/ProductItem.vue';

const route = useRoute();
const list = ref<ShoppingList | undefined>();
const message = ref('');
const totalPrice = computed(() => {
  if (list.value) {
    return (list.value?.products || [])
      .map((p) => p.price)
      .reduce((a, b) => a + b, 0);
  }
  return 0;
});
async function reloadList(id: string) {
  message.value = '';
  list.value = await shoppingListsService.getOne(id);
  if (!list.value) {
    message.value = `No list with id: ${id} found :(`;
  }
}

watch(
  () => route.params.id,
  async (newId) => {
    await reloadList(newId.toString());
  },
  { immediate: true }
);
</script>

<template>
  <article v-if="list" class="panel is-primary my-6 w-75 mx-auto">
    <p class="panel-heading">{{ list.name }}</p>
    <ProductItem
      v-for="product of list.products"
      :key="product.id"
      :product="product"
    />
    <div class="panel-block is-justify-content-end">
      Total price: {{ totalPrice }} PLN
    </div>
  </article>
  <article v-if="message" class="notification is-danger">
    {{ message }}
  </article>
</template>
