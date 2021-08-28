import { createStore } from "vuex";

export default createStore({
  state: () => ({
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
