import { ConfigProvider, Empty } from "ant-design-vue";
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default defineComponent({
  setup() {
    const emptyRender = {
      renderEmpty: () => (
        <>
          <Empty image="/icon_empty_data.png" />
        </>
      ),
    };

    return () => (
      <ConfigProvider locale={zhCN} v-slots={emptyRender}>
        <RouterView />
      </ConfigProvider>
    );
  },
});
