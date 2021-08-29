import { computed, defineComponent, onMounted, ref, toRefs } from "vue";
import { Badge, TabPane, Tabs } from "ant-design-vue";

export default defineComponent({
  name: "Tabs",
  emits: {
    click: (payload: string | number) => {
      return true;
    },
  },
  props: {
    center: { type: Boolean, required: false, default: false },
    columns: { type: Object, required: true },
  },
  setup(props, { slots, emit }) {
    const tabActiveKey = ref<string | number>(props.columns[0].key);
    const tabNavbarCenterClasses = computed(() => {
      return {
        "ant-tabs-nav-center h-full dark:bg-navy-4 rounded": props.center,
      };
    });

    const handleClick = (activeKey = tabActiveKey.value) => {
      emit("click", activeKey);
    };

    onMounted(() => {
      handleClick();
    });

    return () => (
      <Tabs
        class={tabNavbarCenterClasses.value}
        defaultActiveKey={tabActiveKey.value}
        animated={false}
        onTabClick={handleClick}
      >
        {{
          default: () => {
            return props.columns.map(
              (row: { label: string; key: string; count?: number }) => {
                return (
                  <TabPane key={row.key}>
                    {{
                      default: () => (
                        <section class="h-full overflow-hidden">
                          {slots.default?.()}
                        </section>
                      ),
                      tab: () => (
                        <Badge
                          count={row.count}
                          overflowCount={999}
                          offset={[16, 0]}
                        >
                          {row.label}
                        </Badge>
                      ),
                    }}
                  </TabPane>
                );
              }
            );
          },
          tabBarExtraContent: () => slots.extra?.(),
        }}
      </Tabs>
    );
  },
});
