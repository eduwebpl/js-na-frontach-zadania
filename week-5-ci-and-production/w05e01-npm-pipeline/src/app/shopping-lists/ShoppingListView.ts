import { computed, defineComponent, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductItem from './ProductItem'
import { shoppingListsService } from './shopping-lists.service'
import { ShoppingList } from './model/ShoppingList'

export default defineComponent({
  setup() {
    const route = useRoute()
    const list = ref<ShoppingList | undefined>()
    const message = ref('')
    const totalPrice = computed(() => {
      if (list.value) {
        return (list.value?.products)
          .map((p) => p.price)
          .reduce((a, b) => a + b, 0)
      }
      return 0
    })
    async function reloadList(id: string) {
      message.value = ''
      list.value = await shoppingListsService.getOne(id)
      if (!list.value) {
        message.value = `No list with id: ${id} found :(`
      }
    }

    watch(
      () => route.params.id,
      async (newId) => {
        await reloadList(newId.toString())
      },
      { immediate: true }
    )
    return {
      list,
      message,
      totalPrice,
    }
  },
  components: {
    ProductItem,
  },
  template: `
    <article v-if="list" class="panel is-primary my-6 w-75 mx-auto">
      <p class="panel-heading">{{list.name}}</p>
      <ProductItem v-for="product of list.products" :key="product.id" :product="product"/>
      <div class="panel-block is-justify-content-end">Total price: {{totalPrice}} PLN</div>
    </article>
    <article v-if="message" class="notification is-danger">
      {{message}}
    </article>
  `,
})
