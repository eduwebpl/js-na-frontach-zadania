import { defineComponent, onMounted, ref } from 'vue'
import { shoppingListsService } from './shopping-lists/shopping-lists.service'

export default defineComponent({
  setup() {
    const lists = ref()
    onMounted(async () => {
      lists.value = await shoppingListsService.getAll()
    })
    return { lists }
  },
  template: `
     <aside>
        <p class='menu-label'>Your lists</p>
        <ul class='menu-list'>
          <li v-for="{id, name} of lists" :key="id">
            <router-link :to="'/lists/' + id">{{name}}</router-link>
          </li>
        </ul>
      </aside>
   `,
})
