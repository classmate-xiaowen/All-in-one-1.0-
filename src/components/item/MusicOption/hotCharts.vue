<template>
   <div class = "hotChart_card" v-if="this.hotChartsArr.length && this.$route.path === '/home'">
      <h1>今日热歌排行榜</h1>
      <li v-for="item in hotChartsArr" :key="item.musicid">{{(hotChartsArr.indexOf(item)+1) + '、' +item.musicname}}</li>
      <p style="fontSize:12px;textIndent:0.5cm">数据来自网易云音乐</p>
   </div>
</template>

<script>
export default({
   name:"HotCharts",
   return() {

   },
   props:['hotChartsArr']
})
</script>

<style scoped>
   .hotChart_card{
      width:200px;
      height:400px;
      background-color: white;
      border-radius: 20px;
   }
   .hotChart_card h1{
      text-align: center;
      font-family: '楷体';
      font-size:20px;
      width:100%;
      color:orange;
   }
   .hotChart_card li{
      text-indent: 0.5cm;
      width:100%;
      height:35px;
      line-height: 35px;
   }   
</style>