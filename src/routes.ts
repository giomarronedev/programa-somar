import { createWebHistory, createRouter } from "vue-router";
import LandingPage from './Pages/Landing.vue'
import LoginPage from './Pages/Login.vue'

const routes = [
    {
      path: "/",
      name: "Home",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;