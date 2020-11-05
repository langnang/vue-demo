import Vue from "vue";
import VueRouter from "vue-router";

import HomeRoute from "./../views/home.vue";
import ErrorRoute from "./../views/error.vue";
import DynamicRoute from "./../views/dynamic.vue";

import VueAwesomeRoute from "./../views/vue-awesome.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      component: HomeRoute,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/vue-awesome",
      component: VueAwesomeRoute,
      meta: {
        title: "VueAwesome",
      },
    },
    {
      path: "/dynamic/:id",
      component: DynamicRoute,
      meta: {
        title: "Dynamic",
      },
    },
    {
      path: "*",
      component: ErrorRoute,
      meta: {
        title: "Error",
      },
    },
  ],
});
router.beforeEach((to, from, next) => {
  to.meta.title += " | Vue Template";
  next();
});

export default router;
