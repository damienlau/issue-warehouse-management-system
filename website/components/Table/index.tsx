import { defineComponent } from "vue";
import { Table } from "ant-design-vue";
import { tableProps } from "ant-design-vue/lib/table/interface";

interface TableProps {
  label: string;
  key: string;
}

export default defineComponent({
  name: "Table",
  props: {
    columns: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return () => <Table columns={tableConfig} dataSource={tableData} />;
  },
});
