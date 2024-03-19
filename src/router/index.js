import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'

const isAuthenticated = false;
const auth = false;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from) => {
  // console.log(`To: ${to.name} From: ${from.name}`);
  if (to.meta.auth && !isAuthenticated) {
    console.log("You are not authenticated!");
    return {name: 'login'}
  }
})

export default router
