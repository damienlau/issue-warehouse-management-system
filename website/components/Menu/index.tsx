import { defineComponent, onMounted, ref } from "vue";
import { Badge, Menu, MenuItem } from "ant-design-vue";
import { menuProps } from "ant-design-vue/lib/menu/src/Menu";

export interface MenuItemProps {
  label: string;
  key: string;
  count?: number;
}

export interface MenuEventProps {
  key?: string;
  keyPath?: string[];
  item?: object;
}

export default defineComponent({
  name: "Menu",
  props: {
    columns: {
      type: Object,
      required: true,
    },
  },
  emits: ["change"],
  setup(props, { slots, emit }) {
    const menuActiveKey = ref<string[]>(Array.of(props.columns[0].key));

    const handleClick = (options?: MenuEventProps) => {
      if (options?.keyPath) {
        menuActiveKey.value = options?.keyPath;
      }
      emit("change", menuActiveKey.value);
    };

    onMounted(() => {
      handleClick();
    });
    return () => (
      <Menu
        class="dark:bg-transparent border-none"
        mode="horizontal"
        selectedKeys={menuActiveKey.value}
        onClick={handleClick}
      >
        {props.columns.map((item: MenuItemProps) => {
          return (
            <MenuItem class="mi" key={item.key}>
              <Badge class="w-96 text-16 text-center" count={item.count}>
                {item.label}
              </Badge>
            </MenuItem>
          );
        })}
      </Menu>
    );
  },
});
