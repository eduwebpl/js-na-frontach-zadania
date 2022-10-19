import { defineComponent } from 'vue'

export default defineComponent({
  template: `
    <section>
      <div class="notification mt-5">
        <p>
          Mamy przed sobą aplikację <code>Vue</code> zrobioną z komponentów.
        </p>
        <p>
        Nie jest ona zrobiona jednak nowocześnie np. z <code>vite</code> lub chociażby z <code>create-vue</code>. Jednakże takie połączenie się "sprawdza" o tyle, 
        że działa dla takiego miniprojektu. Pokazuje również dużą elastyczność framework'a <code>vue</code>.
        </p> 
        <p>Oczywiście: wprowadzenie tutaj <code>vite</code>
        byłoby zasadne. To dobry pomysł, ale nie o to chodzi w tym zadaniu!
        </p> 
      </div>
    </section>
  `,
})
