import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeIndex from '../components/HomeIndex.vue';
import Services from '../components/MassageServices.vue';
import MassageUpgrades from '../components/MassageUpgrades.vue';
import MassageSpecials from '../components/MassageSpecials.vue';
import BusinessPolicies from '../components/BusinessPolicies.vue';
import BookingPage from '../components/BookingPage.vue';
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeIndex
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/upgrades',
    name: 'MassageUpgrades',
    component: MassageUpgrades
  },
  {
    path: '/specials',
    name: 'MassageSpecials',
    component: MassageSpecials
  },
  {
    path: '/policies',
    name: 'BusinessPolicies',
    component: BusinessPolicies
  },
  {
    path: '/book',
    name: 'BookingPage',
    component: BookingPage
  }
]
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})
export default router
