import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('views/About.vue'),
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('views/Catalog.vue'),
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('views/Cart.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
