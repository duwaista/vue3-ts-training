import { createWebHistory, createRouter } from "vue-router";

import MainView from "../views/MainView.vue";
import PostsView from "../views/PostsView.vue";
import PostView from "../views/PostView.vue";

const routes = [
  {
    path: "/",
    name: "App",
    component: MainView,
  },
  {
    path: "/posts",
    name: "PostsView",
    component: PostsView,
  },
  {
    path: "/posts/:id",
    name: "PostView",
    component: PostView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
