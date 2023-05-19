<template>
   <div class="main">
      <HeaderPage></HeaderPage>
      <DiaLog></DiaLog>
      <div class = "mainPage">
         <aside class = "tab">
            <AsideList></AsideList>
         </aside>
         <div class="mainItem"  ref="mainItem">
            <div class="leftItem">
               <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item @click="this.$router.go(0)">{{$route.meta.title}}</el-breadcrumb-item>
               </el-breadcrumb>
               <SwiperPage :news = news></SwiperPage>
               <Tags v-if="this.$route.path === '/home'"></Tags>
               <div class="leftItem_detail" v-if="this.$route.path === '/home'">
                  <Epidemic :epidemicArr = epidemicArr
                            :epidemicGuangDong = epidemicGuangDong>
                  </Epidemic>
                  <HotCharts :hotChartsArr = hotChartsArr></HotCharts>
               </div>
               <router-view name="newDetail"></router-view>
               <router-view name="note" :todayNotes= "todayNotes"
                                        :submit = "submit"></router-view>
               <router-view name="quickNote"></router-view>
               <router-view name="todoList" :addTodo= "addTodo"
                                            :calendarTodos = "calendarTodos"
                                            :deleteAll = "deleteAll">
               </router-view>
               <!-- <router-view name="draggableList"></router-view> -->
               <router-view name="TodayList" :todayNotes="todayNotes"></router-view>
               <router-view name="emailManage"></router-view>
               <div class="leftItem-footer">
                  <h1 style="fontSize:12px;">此作品UI及代码为小文同学（网名）独立开发，部分api接口来自网络，仅学习交流使用，若有侵犯请联系删除。</h1>
               </div>
            </div>
            <div class="rightItem">
               <MusicPlayer></MusicPlayer>
               <TodoCard :calendarTodos = calendarTodos 
                           :calendarNote = calendarNote></TodoCard>
               <Calendar></Calendar>                  
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import HeaderPage from '@/components/header'
import AsideList from '@/components/aside'
import SwiperPage from '@/components/item/swiper'
import Calendar from '@/components/item/calendar' 
import TodoCard from '@/components/item/todoCard'
import DiaLog from '@/components/item/dialog'
import Epidemic from '@/components/News/epidemic'
import HotCharts from '@/components/item/MusicOption/hotCharts.vue'
import Tags from '@/components/item/Tags'
import MusicPlayer from '@/components/item/MusicOption/MusicPlayer.vue'

import {mapState,mapGetters} from 'vuex'
export default {
   name:"home",
   data(){
      return {
         value: new Date(),
         calendarTodos:JSON.parse(localStorage.getItem('calendarTodos')) || [],
         calendarNote:JSON.parse(localStorage.getItem('calendarNote')) || {},
         todayNotes:JSON.parse(localStorage.getItem('todayNotes')) || [],
      };
   },

   computed:{
      ...mapState({
         news:state => state.home.news,
         hotCharts:state => state.home.hotCharts
      }),
      ...mapGetters(['epidemicArr','epidemicGuangDong','hotChartsArr'])
   },

   methods:{
      addTodo(data){
         this.calendarTodos.unshift(data)
      },
      submit(data){
         this.todayNotes.unshift(data)
         this.$bus.$emit('successTip','提交成功')
      },
      deleteAll(){
         this.calendarTodos = this.calendarTodos.filter(todo => !todo.done)
         console.log(this.calendarTodos)
      }
   },

   watch:{
      calendarTodos:{
         deep:true,
         handler(value){
            localStorage.setItem('calendarTodos',JSON.stringify(value));
         }
      },
      todayNotes:{
        deep:true,
        handler(value){
          localStorage.setItem('todayNotes',JSON.stringify(value));
        }
      }
   },

   mounted(){
      this.$store.dispatch('getNews')
      this.$store.dispatch('getEpidemic')
      this.$store.dispatch('getMusicCharts')
      console.log(this.$route.meta,this.$route.path)
   },

   components:{
      HeaderPage,
      AsideList,
      SwiperPage,
      Calendar,
      // Editor,
      // TodoList,
      TodoCard,
      DiaLog,
      Epidemic,
      HotCharts,
      Tags,
      MusicPlayer,
      // emailManage
   }
}          
</script>

<style>
   .main{
      height:100vh;
      width:100vw;
   }

   .tab{
      height:100%;
   }
 
   .mainPage{
      height:92vh;
      width:100vw;
      overflow: hidden;
      display: flex;
      background-color: aliceblue;
   }

   .mainPage .mainItem{
      min-width:80vw;
      display: flex;
      justify-content: space-between;
   }

   .mainPage .mainItem .leftItem{
      width:64vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-x:hidden;
      overflow-y: auto;
   }

   .mainPage .mainItem .leftItem::-webkit-scrollbar
   {
      width: 3px;
      height: 3px;
   }

   .mainPage .mainItem .leftItem::-webkit-scrollbar-thumb 
   {
      border-radius: 10px;
      background-color: #dddd;
   }

   .el-breadcrumb{
      margin-left:-750px;
      margin-top:20px;
   }

   .mainPage .mainItem .leftItem .leftItem_detail{
      margin-top:50px;
      width:100%;
      justify-content: space-around;
      display: flex;
   }

   .leftItem-footer{
      text-align:center;
      height:30px;
      margin-top:50px;
      width:100%;
      background-color: #dddd;
   }

   .mainPage .mainItem .rightItem{
      display: flex;
      flex-direction: column;
      justify-content:space-evenly;
      align-items: center;
      width:23vw;
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.416);
      height: 92vh;
   }
</style>