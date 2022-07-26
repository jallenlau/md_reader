import { createRouter, createWebHistory } from "vue-router";
import MainPage from "./router/MainPage.vue";
import ReadPage from "./router/ReadPage.vue";
import SigninPage from "./router/SigninPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: MainPage },
    { path: "/read", component: ReadPage },
    { path: "/signin", component: SigninPage },
  ],
});

export default router;
