import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/characters/index.vue";
import Show from "./pages/characters/show.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/characters/:id",
      props: true,
      name: "characters.show",
      component: Show,
    },
  ],
});
export { router };
