import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import UpdateUser from "../views/UpdateUser.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/update-user",
    name: "UpdateUser",
    component: UpdateUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
