import { createWebHistory, createRouter } from "vue-router";
import LandingPage from './Pages/Landing.vue'
import LoginPage from './Pages/Login.vue'
import ChoicePage from './Pages/Choice.vue'
import ODSPage from './Pages/Ods.vue'
import ProjectsPage from './Pages/Projects.vue'
import ProjectPage from './Pages/Project.vue'

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
    {
      path: "/ods",
      name: "ODS",
      component: ODSPage,
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectsPage,
    },
    {
      path: "/project",
      name: "Project",
      component: ProjectPage,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;