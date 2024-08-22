import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import AccessDeniedView from '../views/AccessDeniedView.vue'
import { ref } from 'vue'

const isAuthenticated = ref(null)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/access-denied')
  } else {
    next()
  }
})

export const useAuth = () => {
  const loginAuth = () => {
    isAuthenticated.value = true
  }

  const loginNoAuth = () => {
    isAuthenticated.value = false
  }

  const logout = () => {
    isAuthenticated.value = null
  }

  return { isAuthenticated, loginAuth, loginNoAuth, logout }
}

export default router
