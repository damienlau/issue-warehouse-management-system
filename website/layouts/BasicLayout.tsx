import { defineComponent } from "vue";
import { RouterView } from "vue-router";

export default defineComponent({
  setup() {
    return () => (
      <>
        <header></header>
        <main>
          <RouterView />
        </main>
      </>
    );
  },
});
