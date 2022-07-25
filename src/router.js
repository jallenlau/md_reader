import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: MainPage },
    { path: "/read", component: ReadPage },
  ],
});

export default router;
