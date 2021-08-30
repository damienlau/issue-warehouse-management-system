import { createStore } from "vuex";

const state = () => ({
  // 用于页面和区块的加载中状态
  spinning: false,
});

const getters = {};

const actions = {};

const mutations = {
  SET_SPINNING: (state) => {
    state.spinning = !state.spinning;
  },
};

const modules = {};

export const store = createStore({
  state,
  getters,
  actions,
  mutations,
  modules,
});
