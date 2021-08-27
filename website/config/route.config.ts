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
        component: () => import("pages/sandbox"),
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
        children: [],
      },
    ],
  },
];

// 开发模式下增加沙盒环境
if (import.meta.env.MODE === "development") {
}

export default routesConfig;
