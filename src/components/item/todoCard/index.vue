<template>
   <div class="card">
      <!-- <div class="headerPage">
         <p style="textAlign:center;fontSize:13px;">按照抗疫相关规定,您今天记得做核酸哦</p>
      </div> -->
      <div class="todoCard">
         <div class="leftPage">
            <div class="time">
               <h1>今天的任务</h1>
            </div>
            <p v-for="todo in calendarTodos" :key="todo.id">{{todo.title}}</p>
         </div>
         <div class="rightPage">
            <div class="topCard">
               <h1>倒数15天后</h1>
               <div class="smallCard">
                  <li>和朋友一起去当志愿者</li>
                  <!-- <p>(工作)</p> -->
               </div>
               <p class="region_p">地点:学校</p>
            </div>
             <!-- v-if="Object.keys(this.calendarNote).length" -->
            <div class="bottomCard" v-if="Object.keys(this.calendarNote).length">
               <h1>倒数{{calendarNote.dateLine}}天后</h1>
               <div class="smallCard">
                  <li>{{calendarNote.detail}}</li>
                  <!-- <p>({{calendarNote.name}})</p> -->
               </div>
               <p class="region_p">地点:{{calendarNote.region}}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default({
   name:"todoCard",
   props:['calendarNote','calendarTodos']
})
</script>

<style scoped>
   h1{
      font-size:20px;
   }

   .card{
      display: flex;
      justify-content: center;
      width:23vw;
      min-height:40vh;
   }

   .headerPage{
      margin-top:10px;
      width:20vw;
      border-radius: 15px;
      background-color:white;
      padding:1px 2px;
   }

   .todoCard{
      margin-top:15px;
      display:flex;
      min-height:15vh;
      width:20vw;
   }

   .leftPage{
      border-radius: 10px;
      background-color:white;
      width:45%; 
      min-height:15vh;
      padding:10px 10px;
   }

   .leftPage h1{
      text-align: center;
      font-family: '楷体';
      font-size:18px;
   }

   .smallCard{
      box-sizing: border-box;
      display: flex;
      width:120px;
      height:20px;
      align-items: center;
      justify-content: center;
   }

   .smallCard li{
      text-indent: 0.5cm;
      height:10px;
   }

   .smallCard{
      font-size:12px;
   }

   .region_p{
      font-size:12px;
      margin-left:70px;
      color:#dddd;
      margin-top:10px
   }

   .rightPage{
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      width:45%;
      min-height:15vh;
      padding-left:10px;
   }

   .rightPage h1{
      text-align: center;
      font-size: 16px;
   }

   .rightPage .topCard{
      height:100px;
      background-color:white;
      border-radius: 10px;
   }

   .rightPage .bottomCard{
      margin-top:10px;
      height:120px;
      border-radius: 10px;
      background-color:white;
   }
</style>