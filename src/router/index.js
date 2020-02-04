import  Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/home/Home.vue')
const Category=()=>import('../views/category/Category')
const Profile=()=>import('../views/profile/Profile')
const ShopCart=()=>import('../views/shopcart/ShopCart')
// 1.　安裝插件
Vue.use(VueRouter)

// 2 创建router
const routes=[
  {
    path:'',
    redirect:'/home'
  },{
    path:'/home',
    component:Home
  },{
    path:'/category',
    component:Category
  },{
    path:'/profile',
    component:Profile
  },{
    path:'/shopcart',
    component:ShopCart
  }
]
const router=new VueRouter({
routes,
  mode:'history'
})

export default router
