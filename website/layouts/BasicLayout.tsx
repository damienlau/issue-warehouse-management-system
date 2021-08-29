import { computed, defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";
import { Spin } from "ant-design-vue";

export default defineComponent({
  setup() {
    const store = useStore();
    // 初始化加载状态
    const spinning = computed(() => store.state.spinning);

    return () => (
      <>
        <header class="h-72 px-32 dark:bg-navy-3"></header>
        <Spin
          delay={233}
          wrapperClassName="flex-auto"
          spinning={spinning.value}
        >
          <main class="h-full p-16">
            <RouterView />
          </main>
        </Spin>
      </>
    );
  },
});
