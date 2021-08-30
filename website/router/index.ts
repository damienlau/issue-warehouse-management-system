import { createRouter, createWebHashHistory } from "vue-router";
import routes from "config/route.config";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
