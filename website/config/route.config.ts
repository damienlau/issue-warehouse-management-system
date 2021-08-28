import { RouterView } from "vue-router";

const routesConfig = [
  {
    name: "Home",
    path: "/",
    component: () => import("layouts/BasicLayout"),
    children: [
      {
        name: "Command",
        path: "command",
        meta: { label: "指挥调度", navigator: true },
        component: RouterView,
        children: [],
      },
      {
        name: "Sandbox",
        path: "sandbox",
        meta: { label: "沙盒环境" },
        component: RouterView,
        children: [
          {
            path: "",
            component: () => import("pages/sandbox"),
          },
        ],
      },
      {
        name: "User",
        path: "user",
        meta: { label: "个人中心" },
        component: RouterView,
        children: [
          {
            name: "Login",
            path: "login",
            meta: { label: "登录" },
            component: () => import("pages/user/login"),
          },
        ],
      },
      {
        name: "Warehouse",
        path: "warehouse",
        meta: { label: "应急仓库", navigator: true },
        component: RouterView,
        children: [
          {
            name: "Material",
            path: "material",
            meta: { label: "仓库" },
            component: () => import("pages/warehouse/material"),
          },
          {
            name: "Record",
            path: "record",
            meta: { label: "借还记录" },
            component: () => import("pages/warehouse/record"),
          },
          {
            name: "Shortcut",
            path: "shortcut",
            meta: { label: "一键操作" },
            component: () => import("pages/warehouse/shortcut"),
          },
          {
            name: "Scanner",
            path: "scanner",
            meta: { label: "出/归仓扫描" },
            component: () => import("pages/warehouse/scanner"),
          },
        ],
      },
    ],
  },
];

export default routesConfig;
