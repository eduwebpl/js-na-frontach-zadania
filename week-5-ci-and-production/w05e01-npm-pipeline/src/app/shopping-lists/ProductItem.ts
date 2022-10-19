import { defineComponent, PropType } from 'vue'
import { Product } from './model/Product'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  template: `
    <div class="panel-block" 
         v-if="product" 
         :style="{ textDecoration: product.status === 'BOUGHT' ? 'line-through' : '' }"
    >
      <div >{{product.name}}</div>
      <div class="ml-auto">{{product.quantity}}</div>
      <div class="tag">{{product.unit}}</div>
      <div class="ml-4">{{product.price}} PLN</div>
    </div>
  `,
})
