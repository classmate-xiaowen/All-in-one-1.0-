<template>
   <div class="header">
      <div class="left">
         <span>all in one</span>
      </div>
      <div class="right">
         <router-link to="/home" style="color:white">首页</router-link>
         <router-link to="/navigation" style="color:white">起始页</router-link>
         <el-popover
            placement="top-start"
            title="健康提醒"
            width="200"
            trigger="hover"
            content="空气很好，在家要开窗通风，在外活动遵守防疫规章制度，注意佩戴好口罩。">
            <el-button slot="reference">         
               <div class = "weather">
                  <p class="address">当前城市：{{weather.address}}</p>
                  <div class="temp">
                     <p>天气：{{weather.weather}}</p>
                     <p style="margin-left:15px">温度：{{weather.temp}}</p>
                  </div>
               </div>  
            </el-button>
         </el-popover>
        <span style="fontSize:16px">退出登录
            <i class="iconfont icon-daosanjiao"></i>
         </span>
         <div>
            <i class="iconfont tongzhi1" style="height:8vh;width:30px"></i>                       
         </div>

      </div>  
   </div>
</template>

<script> 
import {mapState} from 'vuex'
export default({
   name:"Header",
   data(){
      return{

      }
   },
   mounted(){
   setTimeout(()=>{
      this.$store.dispatch('getWeather')
   },3000)

      console.log(this.$store)
   },
   computed: {
      ...mapState({
         weather:state=>state.home.weather
      })
   },
})
</script>

<style scoped>
   .header{
      width:100vw;
      height:8vh;
      background-color:#353b48;
      display: flex;
      justify-content: space-between;
   }

   .header .left{
      width:15vw;
      height:8vh;
      min-width:150px;
      text-align: center;
      line-height: 8vh;
   }

   .header .left span{
      font-size: 30px;
      color: white;
   }

   .header .right{
      display: flex;
      align-items: center;
      height:8vh;
      width:35%;
      column-gap: 30px;
      padding:0 10px;
      color:white;
      overflow: hidden;
   }

   .header .right .weather{
      font-size: 12px;
      height:100%;
   }

   .header .right .weather .address{
      margin-top:10px;
   }

   .header .right .weather p{
      margin:0;
   }

   .header .right .weather .temp{
      display: flex;
   }

   .el-button{
      background-color: #353b48;
      color:white;
      outline: 0;
      border:0;
   }
</style>