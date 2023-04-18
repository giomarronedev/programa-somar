import { createWebHistory, createRouter } from "vue-router";
import LandingPage from './Pages/Landing.vue'
import LoginPage from './Pages/Login.vue'
import ChoicePage from './Pages/Choice.vue'

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
    {
      path: "/escolha",
      name: "Choice",
      component: ChoicePage,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;