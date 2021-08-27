import { defineComponent } from "vue";
import { findUserData } from "api/user";
import { Button } from "ant-design-vue";

export default defineComponent({
  setup() {
    const handleClick = () => {
      findUserData({ account: "张三" }).then((response) => {
        console.log(response);
      });
    };

    return () => (
      <>
        <h1>模拟数据请求</h1>
        <Button type="primary" onClick={handleClick}>
          点击发起请求
        </Button>
      </>
    );
  },
});
