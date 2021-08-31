import { computed, defineComponent, ref } from "vue";
import { Button, Image, ImagePreviewGroup, Space } from "ant-design-vue";
import { useStore } from "vuex";
import List from "components/List";
import Tabs, { TabPaneProps } from "components/Tabs";

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
    const tabExtraOptions = ref<TabPaneProps>({});
    const cardListsData = ref({});

    const handleClickTabPane = (tabPane: TabPaneProps) => {
      tabExtraOptions.value = tabPane;
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
                  清空{tabExtraOptions.value.label}
                </Button>
                <Button type="primary">全部借出</Button>
              </Space>
            );
          },
          default: () => (
            <List grid={5} class="h-full" dataSource={cardListsData.value}>
              {{
                card: ({ item, index }) => (
                  <>
                    <section class="dark:bg-navy-2 dark:hover:bg-navy-3 rounded">
                      {/* Card Header Start */}
                      <div class="flex flex-row items-center justify-between py-8 border-b border-navy-1">
                        {/* title */}
                        <h3 class="flex flex-row text-16 px-16 overflow-auto">
                          <span class="truncate">{item.label}</span>
                          {item.quantity && (
                            <span
                              class={
                                item.quantity.total == item.quantity.remain
                                  ? "text-success"
                                  : "text-danger"
                              }
                            >
                              ({item.quantity.remain}/{item.quantity.total})
                            </span>
                          )}
                        </h3>
                        {/* extra */}
                        {/* <button class="text-14 text-danger flex-shrink-0"></button> */}
                        <Button danger type="text">
                          移出
                        </Button>
                      </div>
                      {/* Card Header End */}

                      {/* Card Body Start */}
                      <section class="flex flex-row p-16">
                        {/* thumbnail */}
                        <div>
                          <ImagePreviewGroup>
                            {item.thumbnail.map((image, key) => {
                              return (
                                <div v-show={!key}>
                                  <Image
                                    class="w-full h-full object-cover rounded"
                                    src={image.fileUrl}
                                    fallback="/icon_empty_search.png"
                                    width={108}
                                    height={108}
                                  ></Image>
                                </div>
                              );
                            })}
                          </ImagePreviewGroup>
                        </div>
                        {/* descriptions */}
                      </section>
                      {/* Card Body End */}
                    </section>
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
