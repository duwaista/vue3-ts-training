import { createWebHistory, createRouter } from "vue-router";

import MainView from "../views/MainView.vue";
import PostsView from "../views/PostsView.vue";
import PostView from "../views/PostView.vue";
import ToDoView from "../views/ToDoView.vue";

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
  {
    path: "/todo",
    name: "ToDo",
    component: ToDoView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
