import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'
import LoginVue from '../components/Login/LoginVue.vue'
import RegisterVue from '../components/Login/RegisterVue.vue'
import NoteVue from '../components/Note/NoteView.vue'
import NoteCreate from '../components/Note/NoteCreate.vue'
import useAuth from '@/stores/store'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginVue,
      meta: {
        requiresAuth: false
      }
    },
    
    {
      path: '/register',
      name: 'register',
      component: RegisterVue,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/note',
      name: 'note',
      component: NoteVue,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/note/create',
      name: 'note-create',
      component: NoteCreate,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuth()
  const isAuth = auth.token
  if (to.meta.requiresAuth && isAuth === null) {
    next('/login')
  }
   else {
    next()
  }
})

export default router
