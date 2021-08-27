import { defineComponent } from "vue";
import { findUserData } from "api/user";

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
        <button onClick={handleClick}>点击发起请求</button>
      </>
    );
  },
});
