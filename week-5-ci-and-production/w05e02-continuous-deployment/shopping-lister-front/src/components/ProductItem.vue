<script setup lang="ts">
import type { PropType } from 'vue';
import type { Product } from '@/model/Product';

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>

<template>
  <div
    class="panel-block"
    v-if="product"
    :style="{
      textDecoration: product.status === 'BOUGHT' ? 'line-through' : '',
    }"
  >
    <div>{{ product.name }}</div>
    <div class="ml-auto">{{ product.quantity }}</div>
    <div class="tag">{{ product.unit }}</div>
    <div class="ml-4">{{ product.price }} PLN</div>
  </div>
</template>
