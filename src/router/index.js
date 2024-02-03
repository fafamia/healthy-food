import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(){
    return{top:0}
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/foodmap',
      name: 'foodmap',
      component: () => import('../views/FoodMapView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue'),
    },
    {
      path: '/bmi',
      name: 'bmi',
      component: () => import('../views/BmiView.vue'),
    },
    {
      path: '/bmr',
      name: 'bmr',
      component: () => import('../views/BmrView.vue'),
    },
    {
      path: '/cal',
      name: 'cal',
      component: () => import('../views/CalView.vue'),
    },
    {
      path: '/gi',
      name: 'gi',
      component: () => import('../views/GiView.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('../views/ArticleView.vue'),
    },
    {
      path: '/cookbook',
      name: 'cookbook',
      component: () => import('../views/CookbookView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue'),
    },
    {
      path: '/game',
      name: 'game',
      component: () => import('../views/GameView.vue'),
    },
    {
      path: '/productinfo/:id',
      name: 'productinfo',
      component: () => import('../views/ProductInfo.vue'),
      props:true
    },
    {
      path: '/articleinfo',
      name: 'articleinfo',
      component: () => import('../views/ArticleInfo.vue'),
    },
    {
      path: '/cookbookinfo',
      name: 'cookbookinfo',
      component: () => import('../views/CookbookInfoView.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckOutView.vue'),
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue'),
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/ConfirmView.vue'),
    },
  ]
})

export default router
