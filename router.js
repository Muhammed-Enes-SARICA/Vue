import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Personal from './components/Personal.vue'
import TechNews from './components/TechNews.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/personal', component: Personal },
  { path: '/technews', component: TechNews },
  { path: '/contact', component: Contact }
]

const router = new VueRouter({
  routes
})

export default router
