import { computed, defineComponent, ref } from "vue";
import { RouterView } from "vue-router";
import { useStore } from "vuex";
import { Spin } from "ant-design-vue";
import { findSpecifiedShortcutData } from "api/warehouse/shortcut";

export default defineComponent({
  setup() {
    const store = useStore();
    // 初始化加载状态
    const spinning = computed(() => store.state.spinning);

    findSpecifiedShortcutData().then((res) => {
      console.log(res);
    });

    return () => (
      <>
        <header class="h-72 px-32 dark:bg-navy-3"></header>
        <Spin
          wrapperClassName="flex-auto"
          spinning={spinning.value}
          size="large"
        >
          <main class="h-full p-16">
            <RouterView />
          </main>
        </Spin>
      </>
    );
  },
});
