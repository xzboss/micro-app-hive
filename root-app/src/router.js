import microApp from "@micro-zoe/micro-app";
import Layout from "./Layout.vue";
import { createRouter, createWebHashHistory } from "vue-router";

// 所有路由
export const allRoutes = [
  { path: "/home", name: "home" },
  { path: "/menu-1", name: "menu-1" },
  { path: "/menu-2", name: "menu-2" },
  { path: "/menu-3", name: "menu-3" },
  { path: "/menu-4", name: "menu-4" },
];

export const refactorRoutes = [
  {
    path: "/",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("./views/Home.vue"),
      },
      {
        path: "menu-1",
        name: "menu-1",
        component: () => import("./views/menu-1.vue"),
      },
      {
        path: "menu-2",
        name: "menu-2",
        component: () => import("./views/menu-2.vue"),
      },
      {
        path: "/:page*",
        name: "old-app",
        component: () => import("./views/old-app.vue"),
      },
    ],
  },
  // 配置子应用试图组件
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: refactorRoutes,
});
router.beforeEach((to, form, next) => {
  next();
});
export default router;
