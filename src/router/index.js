import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserDetails from "../views/UserDetails.vue";
import UpdateUser from "../views/UpdateUser.vue";

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:id",
    name: "UserDetails",
    component: UserDetails,
  },
  {
    path: "/update-user/:id",
    name: "UpdateUser",
    component: UpdateUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
