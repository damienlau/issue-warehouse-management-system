import { computed, defineComponent, ref, toRefs, watch } from "vue";
import { List, ListItem } from "ant-design-vue";

export default defineComponent({
  name: "CardList",
  props: {
    dataSource: {
      type: Object,
      required: true,
    },
    grid: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  setup(props, { slots }) {
    const { dataSource } = toRefs(props);
    const cardListsData = ref([]);
    const cardListGrid = computed(() => {
      return {
        gutter: 16,
        column: props.grid,
      };
    });

    watch(dataSource, (lists) => {
      cardListsData.value = lists.content;
    });

    return () => (
      <List
        class="overflow-auto"
        dataSource={cardListsData.value}
        grid={cardListGrid.value}
      >
        {{
          renderItem: (render) => <ListItem>{slots.card?.(render)}</ListItem>,
        }}
      </List>
    );
  },
});
