import Vue from "vue";
import Router from "vue-router";
import Layout from "../Layout.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home",
      component: Layout,
      children: [
        {
          path: "home",
          name: "home",
          component: () => import("@/views/Home.vue"),
        },
        {
          path: "menu-1",
          name: "menu-1",
          component: () => import("@/views/menu-1.vue"),
        },
        {
          path: "menu-2",
          name: "menu-2",
          component: () => import("@/views/menu-2.vue"),
        },
        {
          path: "menu-3",
          name: "menu-3",
          component: () => import("@/views/menu-3.vue"),
        },
        {
          path: "menu-4",
          name: "menu-4",
          component: () => import("@/views/menu-4.vue"),
        },
      ],
    },
  ],
});

// 拦截处理
const rootRoutesMap = new Map();
window.__MICRO_APP_ENVIRONMENT__ &&
  window.microApp.router
    .getBaseAppRouter()
    .getRoutes()
    .forEach((route) => {
      rootRoutesMap.set(route.path, route);
    });
router.afterEach((to, form) => {
  if (window.__MICRO_APP_ENVIRONMENT__) {
    // 如果已重构
    // if (rootRoutesMap.has(to.path)) {
    //   // 设置 params 参数给基座应用
    //   to.params && (window.rawWindow.history.state.params = to.params);
    //   window.microApp.router.getBaseAppRouter().replace({ path: to.path });
    // }
    // // 如果来自基座应用
    // if (rootRoutesMap.has(form.path)) {
    //   Object.assign(
    //     router.currentRoute.params,
    //     window.rawWindow.history.state.params
    //   );
    // }
  }
});

export default router;
