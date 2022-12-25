import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import ChatroomView from '@/views/ChatroomView.vue'
import { projectAuth } from "../firebase/config"

// auth guard function - redirects users who are NOT signed/logged in
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in authGuard is: ', user);
  if (!user) {
    next({name: "WelcomeView"})
  } else {
    next()
  }
}
// auth guard function - redirect to chat if user IS logged in
const redirectToChat = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    next({name: "ChatroomView"})
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'WelcomeView',
    component: WelcomeView,
    beforeEnter: redirectToChat
  },
  {
    path: '/chatroom',
    name: 'ChatroomView',
    component: ChatroomView,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
