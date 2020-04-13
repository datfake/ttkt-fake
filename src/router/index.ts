import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {requireAuth: true}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/auth/Login.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach(async(to, from, next) => {

//   //await store.dispatch("fetchToken");
//   if(!store.getters['auth/getUserToken']) {
//     next("./login");
//   }
//   if(store.getters['auth/getUserToken']) {
//     next("./");
//   }
//   next();
// })

// router.beforeEach(async(to, from, next) => {
  
//   const check = to.matched.some(record => {return record.meta.requireAuth})

//   //await store.dispatch("fetchToken");
//   if(check && (!store.getters['auth/getUserToken'])) {
//     next("./login");
//   }
//   if((store.getters['auth/getUserToken'])&&(to.name==="login")) {
//     next("./home");
//   }
//   next();
// })

// router.beforeEach(async(to, from, next) => {
  
//   const check = to.matched.some(record => {return record.meta.requireAuth})

//   await store.dispatch("fetchToken");
//   if(check && (!store.getters['auth/getUserToken'])) {
//     next("./login");
//   }
//   if((store.getters['auth/getUserToken'])) {
//     next("./");
//   }
//   next();
// })

export default router
