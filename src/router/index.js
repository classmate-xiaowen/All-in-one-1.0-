// 创建整个应用的路由器
import VueRouter from 'vue-router'

const home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const navigation = () => import('@/pages/navigation')

// 创建分别暴露,方便路由器权限检测
export default new VueRouter ({
   routes:[
      {
         path:'/login',
         component:login
      },
      {
         path:'/navigation',
         component:navigation
      },
      {
         path:'/home',
         component:home,
         children:[
            {
               path:'newDetail',
               components:{
                  newDetail: () => import("@/components/News/newDetail")
               },
               props($route){
                  return {
                     id:$route.query.id,
                  }
               },
               meta:{
                  title:"新闻详情"
               }
            },
            {
               path:'note',
               components:{
                  note: () => import("@/components/item/editor")
               },
               meta:{
                  title:"日记"
               }
            },
            {
               path:'quickNote',
               components:{
                  quickNote: () => import("@/pages/home/noteList/quickNote.vue")
               },
               meta:{
                  title:"速记"
               }
            },
            {
               path:'todoList',
               components:{
                  todoList: ()=> import("@/components/item/todo")
               },
               meta:{
                  title:"代办事项"
               }
            },
            {
               path:'TodayList',
               components:{
                  TodayList: () => import("@/pages/home/noteList/TodayList.vue")
               },
               meta:{
                  title:"生活回忆"
               }
            },
            {
               path:'emailManage',
               components:{
                  emailManage: () => import("@/components/item/emailManage")
               },
               meta:{
                  title:"邮件管理"
               }
            }
         ]
      },
      {
         path: '/',
         redirect: '/home'
      }
   ]
})