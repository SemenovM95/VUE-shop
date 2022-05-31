import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from 'views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('views/About.vue'),
    meta: {
      title: 'About',
      breadcrumbs: [
        { name: 'Home' },
        { name: 'About' },
      ],
    },
  },
  {
    path: '/catalog',
    component: () => import('views/Catalog.vue'),
    children: [
      {
        path: '',
        name: 'Catalog',
        component: () => import('components/CatalogList.vue'),
        meta: {
          title: 'Catalog',
          breadcrumbs: [
            { name: 'Home' },
            { name: 'Catalog', link: 'CatalogList' },
          ],
        },
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('components/ProductComp.vue'),
        meta: {
          title: 'Product',
          breadcrumbs: [
            { name: 'Home' },
            { name: 'Catalog', link: 'CatalogList' },
          ],
        },
      },
      {
        path: '*',
        redirect: { name: 'Catalog' },
      },
    ],
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('views/Cart.vue'),
    meta: {
      title: 'Cart',
      breadcrumbs: [
        { name: 'Home' },
        { name: 'Cart' },
      ],
    },
  },
  {
    path: '*',
    name: '404',
    component: () => import('views/404.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        selector: savedPosition,
        behavior: 'smooth',
      };
    }
    return { x: 0, y: 0 };
  },
});

router.afterEach((route) => {
  document.title = route.meta.title || route.name;
});

export default router;
