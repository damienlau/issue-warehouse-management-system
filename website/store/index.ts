import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

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

export interface State {
  spinning: boolean;
}
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state,
  getters,
  actions,
  mutations,
});
export function useStore() {
  return baseUseStore(key);
}
