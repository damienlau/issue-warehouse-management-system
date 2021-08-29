import { createStore } from "vuex";

export default createStore({
  state: () => ({
    // 用于页面和区块的加载中状态
    spinning: false,
  }),
  getters: {},
  mutations: {
    SET_SPINNING: (state) => {
      state.spinning = !state.spinning;
    },
  },
  actions: {},
  modules: {},
});
