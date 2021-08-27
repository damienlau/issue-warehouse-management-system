import { RouterView } from "vue-router";

const routesConfig = [
  {
    name: "Home",
    path: "/",
    component: () => import("layouts/BasicLayout"),
  },
];

export default routesConfig;
