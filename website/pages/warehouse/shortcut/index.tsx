import { computed, defineComponent, ref } from "vue";
import { Button, Space } from "ant-design-vue";
import { useStore } from "vuex";
import List from "components/List";
import Tabs from "components/Tabs";

export default defineComponent({
  setup() {
    const store = useStore();
    const tabColumns = ref([
      {
        label: "借货清单",
        key: "1",
        count: computed(() => store.state.warehouse.shortcut.total.lend),
      },
      {
        label: "维修清单",
        key: "2",
        count: computed(() => store.state.warehouse.shortcut.total.repair),
      },
      {
        label: "保养清单",
        key: "3",
        count: computed(() => store.state.warehouse.shortcut.total.maintain),
      },
    ]);
    const cardListsData = ref({});

    const handleClickTabPane = (active: object) => {
      store.dispatch("warehouse/shortcut/getLists").then((response) => {
        cardListsData.value = response;
      });
    };

    return () => (
      <Tabs
        class="dark:bg-navy-4"
        columns={tabColumns.value}
        onClick={handleClickTabPane}
      >
        {{
          extra: () => {
            return (
              <Space>
                <Button danger ghost>
                  清空借货清单
                </Button>
                <Button type="primary">全部借出</Button>
              </Space>
            );
          },
          default: () => (
            <List grid={5} class="h-full" dataSource={cardListsData.value}>
              {{
                card: (item) => (
                  <>
                    {console.log(item)}
                    <p>
                      <span>{item.item.createMan}</span>
                    </p>
                    <p>
                      <span>{item.index}</span>
                    </p>
                  </>
                ),
              }}
            </List>
          ),
        }}
      </Tabs>
    );
  },
});
