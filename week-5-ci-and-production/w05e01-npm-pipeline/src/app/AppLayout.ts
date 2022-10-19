import { defineComponent } from 'vue'
import TheHeader from './TheHeader'
import TheMenu from './TheMenu'

export default defineComponent({
  components: {
    TheHeader,
    TheMenu,
  },
  template: `
    <div class="container">
      <TheHeader />
      <div class="columns">
        <div class="column is-3">
         <TheMenu />
        </div>
        <div class="column">
          <router-view/>
        </div>
      </div>
    </div>
  `,
})
