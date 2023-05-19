<template>
   <div class="aside" ref="asider">
      <div class = "avatar">
         <img src="./images/002.jpg" alt="">
         <h1>小文同学</h1>
         <p>all in one</p>
      </div>
      <el-row class="tac" @click="routerJump">
         <el-col :span="12">
            <el-menu
               default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose">
               <el-submenu index="1">
                  <template slot="title">
                     <!-- <i class="el-icon-location"></i> -->
                     <span>计划与清单</span>
                  </template>
                  <el-menu-item-group>
                     <!-- <template slot="title">速记</template> -->
                     <router-link to="/home/quickNote">
                        <el-menu-item index="1-1">速记</el-menu-item>                     
                     </router-link>
                     <router-link to="/home/todoList">
                        <el-menu-item index="1-2">待办清单</el-menu-item>
                     </router-link>
                  </el-menu-item-group>
               </el-submenu>
               <el-submenu index="2" @click="routerJump">
                  <template slot="title">
                     <!-- <i class="el-icon-location"></i> -->
                     <span>生活记录</span>
                  </template>
                  <el-menu-item-group>
                     <router-link to="/home/note">
                        <el-menu-item index="2-1" @click="routerJump">日记</el-menu-item>
                     </router-link>
                     <router-link to="/home/TodayList">
                       <el-menu-item index="2-2">生活回忆</el-menu-item>                        
                     </router-link>
                     <!-- <router-link to="/home/draggable">
                        <el-menu-item index="2-3">临时记录</el-menu-item>                        
                     </router-link> -->
                  </el-menu-item-group>
               </el-submenu>
               <el-submenu index="3">
                  <template slot="title">
                     <!-- <i class="el-icon-location"></i> -->
                     <span>消息管理</span>
                  </template>
                  <el-menu-item-group>
                     <router-link to="/home/emailManage">
                        <el-menu-item index="3-1">邮件管理</el-menu-item>                        
                     </router-link>
                     <!-- <el-menu-item index="3-3">任务计划</el-menu-item> -->
                  </el-menu-item-group>
               </el-submenu>
            </el-menu>
         </el-col>
      </el-row>
   </div>
</template>

<script>

export default({
   name:"asideList",
   data(){
      return{
         isCollapse: true,
      }
   },
   methods:{
      handleOpen(key, keyPath) {
         console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
         console.log(key, keyPath);
      },
      routerJump(){
         console.log('aside提哦啊转')
      }
   },
   // mounted(){
   //    new BScroll(this.$refs.asider,{
   //       // scrollX: true,
   //       scrollY: true,
   //       click: true,
   //       // ObserveDom: true
   //    })
   // }
})
</script>

<style scoped>
   .aside{
      width:13vw;
      height:100%;
      overflow-x:hidden;
      overflow-y: auto;
      border-right:1px solid #dddd;
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.335);
   }

   .avatar{
      margin-top:5vh;
      text-align: center;
   }

   .avatar h1{
      font-size: 17px;
      height:5px;
   }

   .avatar p{
      margin-top:20px;
      font-size: 12px;
   }

   .avatar img{
      width:80px;
      height:80px;
      border-radius: 50%;
   }

   .el-submenu__title{
      text-align: center !important;
      width:100px;
   }

   .el-menu-vertical-demo:not(.el-menu--collapse) {
      width:13vw;
      min-height: 400px;
      min-width:150px;
      background-color: rgba(0, 0, 0, 0);
   }

   .el-calendar{
      width:250px;
      height:200px;
   }

   .el-calendar__header{
      padding:3px;
   }

   .el-calendar__body{
      padding:5px 10px;
   }

   .el-calendar-table thead th{
      padding:2px;
   }

   .el-calendar-table .el-calendar-day{
      height:25px;
      width:25px;
   }

   .el-button-group>.el-button{
      padding:2px;
   }
</style>