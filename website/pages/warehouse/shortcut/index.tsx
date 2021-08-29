import { defineComponent, ref } from "vue";
import { Button, Space } from "ant-design-vue";
import Tabs from "components/Tabs";

export default defineComponent({
  setup() {
    const tabColumns = ref([
      {
        label: "借货清单",
        key: "1",
      },
      {
        label: "维修清单",
        key: "2",
      },
      {
        label: "保养清单",
        key: "3",
      },
    ]);

    const handleClickTabPane = (active: object) => {};

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
        }}
      </Tabs>
    );
  },
});
