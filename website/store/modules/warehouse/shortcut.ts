import {
  findShortcutCountData,
  findSpecifiedShortcutData,
} from "api/warehouse/shortcut";

const state = () => ({
  total: { all: 0, maintain: 0, repair: 0, lend: 0 },
});

const getters = {};

const actions = {
  // 获取待操作清单数量
  getTotals: ({ commit }) => {
    return new Promise<void>((reslove) => {
      findShortcutCountData().then((count) => {
        commit("SET_TOTAL", {
          all: count.totalNum,
          maintain: count.baoYangNum,
          repair: count.weiXiuNum,
          lend: count.outNum,
        });
        reslove();
      });
    });
  },

  // 获取待操作清单列表
  getLists: ({ dispatch }) => {
    return new Promise((reslove) => {
      dispatch("getTotals").then(() => {
        findSpecifiedShortcutData().then((response) => {
          reslove({
            pagination: {
              current: response.currentPage,
              total: response.totalNum,
              pageSize: response.pageSize,
            },
            data: response.content.map((lists) => {
              switch (lists.resourceType) {
                case MaterialType.box:
                  return {
                    id: lists.id,
                    label: lists.warehouseBoxInfo.boxName || "暂无数据",
                    thumbnail: lists.warehouseBoxInfo.boxImages,
                    quantity: {
                      remain: lists.warehouseBoxInfo.materialRemainNumber,
                      total: lists.warehouseBoxInfo.materialTotalNumber,
                    },
                  };
                  break;

                case MaterialType.goods:
                  return {
                    id: lists.id,
                    label:
                      lists.warehouseMaterialInfo.materialName || "暂无数据",
                    thumbnail: lists.warehouseMaterialInfo.materialImages,
                  };
                  break;
              }
            }),
          });
        });
      });
    });
  },
};

const mutations = {
  SET_TOTAL: (state: State, totals: State) => {
    state.total = totals;
  },
};

export enum MaterialType {
  goods = 1,
  box,
}

export interface State {
  total: { all: number; maintain: number; repair: number; lend: number };
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
