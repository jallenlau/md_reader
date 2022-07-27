import { createRouter, createWebHistory } from "vue-router";
import ReadPage from "@/views/ReadPage.vue";
import SigninPage from "@/views/SigninPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: () => import("@/views/MainPage.vue") },
    { path: "/read", component: ReadPage },
    { path: "/signin", component: SigninPage },
  ],
});

export default router;
