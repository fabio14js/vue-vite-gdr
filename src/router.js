import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/characters/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
  ],
});
export { router };
