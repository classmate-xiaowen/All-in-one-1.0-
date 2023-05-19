<template>
   <el-row style="marginTop:50px">
      <el-col :span="8" v-for="(note, index) in todayNotes" :key="index" :offset="index > 0 ? 2 : 0">
         <el-card :body-style="{ padding: '0px' }">
            <img src="./images/ceshi.jpg" class="image">
            <div style="padding: 14px;">
               <span>{{note.title}}</span>
               <p>{{note.content}}</p>
               <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
               </div>
            </div>
         </el-card>
      </el-col>
   </el-row>
</template>

<script>
export default({
   data(){
      return{
         currentDate: new Date()
      }
   },
   props:['todayNotes']
})
</script>

<style scoped>
   .el-row{
      width:64vw;
      min-height:100vh;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
   }

   .el-col{
      width:200px;
      height:350px;
      background-color: rgba(221, 221, 221, 0.215);
      backdrop-filter: blur(15px);
   }

   .time {
      font-size: 13px;
      color: #999;
   }
   
   .bottom {
      margin-top: 13px;
      line-height: 12px;
   }

   .button {
      padding: 0;
      float: right;
   }

   .image {
      width: 100%;
      height:200px;
      object-fit: cover;
   }

   .clearfix:before,
   .clearfix:after {
         display: table;
         content: "";
   }
   
   .clearfix:after {
         clear: both
   }
</style>