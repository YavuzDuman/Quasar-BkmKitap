import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'uyeGiris', component: () => import('components/TheUyeGiris.vue') },
      { path: 'singup', component: () => import('components/SingUp.vue') },
      { path: 'icon', component: () => import('components/IconGeneral.vue') },
      { path: 'swiper', component: () => import('components/SwiperSlide.vue') },
      { path: 'footer', component: () => import('components/TheFooter.vue') },
      { path: 'header', component: () => import('components/TheHeader.vue') },
      { path: 'filtre', component: () => import('components/TheFiltre.vue') },
      { path: 'kargo', component: () => import('components/TheKargo.vue') },
      { path: 'sepet', component: () => import('components/TheSepet.vue') },
      { path: 'urun', component: () => import('components/TheUrun.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
