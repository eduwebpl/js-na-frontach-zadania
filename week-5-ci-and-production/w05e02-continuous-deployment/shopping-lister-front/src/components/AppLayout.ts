import { defineComponent } from 'vue';
import TheHeader from './TheHeader.vue';
import TheMenu from './TheMenu.vue';

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
});
