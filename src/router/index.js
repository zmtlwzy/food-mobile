import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
  },
  {
    path: "/category",
    component: () =>
      import(/* webpackChunkName: "Category" */ "../views/Category.vue"),
  },
  {
    path: "/maps",
    component: () => import(/* webpackChunkName: "Maps" */ "../views/Maps.vue"),
  },
  {
    path: "/more",
    component: () => import(/* webpackChunkName: "More" */ "../views/More.vue"),
  },
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
})

export default router
