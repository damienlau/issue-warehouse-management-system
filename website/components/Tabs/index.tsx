import { computed, defineComponent, onMounted, ref, toRefs } from "vue";
import { Badge, TabPane, Tabs } from "ant-design-vue";

export default defineComponent({
  name: "Tabs",
  emits: ["click"],
  props: {
    center: { type: Boolean, required: false, default: false },
    columns: { type: Array, required: true },
  },
  emits: ["click"],
  setup(props, { slots, emit }) {
    const { center, columns } = toRefs(props);
    const tabActiveKey = ref(columns.value[0].key);
    const tabNavbarCenterClasses = computed(() => {
      return {
        "ant-tabs-nav-center h-full dark:bg-navy-4 rounded": center.value,
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
        onTabClick={handleClick}
      >
        {{
          default: () => {
            return columns.value.map((row) => {
              return (
                <TabPane key={row.key}>
                  {{
                    default: () => slots.default?.(),
                    tab: () => (
                      <Badge count={22} overflowCount={999} offset={[16, 0]}>
                        {row.label}
                      </Badge>
                    ),
                  }}
                </TabPane>
              );
            });
          },
          tabBarExtraContent: () => slots.extra?.(),
        }}
      </Tabs>
    );
  },
});
