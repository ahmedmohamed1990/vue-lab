import { createRouter, createWebHistory } from 'vue-router'

import WrapperComponent from '../WrapperComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import CatchComponent from '../components/CatchComponent.vue'
import StudentDetailsComponent from '../components/StudentDetailsComponent.vue'

const routes = [
  { path: '/', component: WrapperComponent },
  { path: '/about', component: AboutComponent },
  { path: '/contact', component: ContactComponent },
  { path: '/studentdetails/:id', component: StudentDetailsComponent },
  { path: '/:catchAll(.*)', component: CatchComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
