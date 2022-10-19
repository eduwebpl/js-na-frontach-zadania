import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheHeader',
  setup() {
    return {
      title: 'Shopping-Lister',
      subTitle: 'Just make a list. I will track it down.',
    }
  },
  template: `
      <section class="hero is-link has-text-white mb-4">
        <div class="hero-body">
          <p class="title has-text-white">{{title}}</p>
          <p class="subtitle is-italic">{{subTitle}}</p></div>
      </section>
  `,
})
