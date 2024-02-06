import {createRouter,createWebHashHistory} from 'vue-router'

const routers = [
  {
    path:"/",
    component:()=>import("../views/Main.vue"),
    children:[
      {
        path:"/",
        name:"home",
        component:()=> import("../views/home/Home.vue")
      }

    ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routers
})

export default router