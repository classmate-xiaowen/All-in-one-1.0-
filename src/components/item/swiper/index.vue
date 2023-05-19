<template>
   <div class="swiper" v-if="this.news.length && this.$route.path === '/home'">
      <el-carousel :interval="4000" type="card" height="270px" >
         <el-carousel-item v-for="item in newsArr" :key="item.newsId" >
            <img :src="item.imgList[0]" :alt="item.newsId" @click="jumpDetail($event)">
            <h3 class="medium">{{item.title}}</h3>
         </el-carousel-item>
      </el-carousel>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default({
   name:"swiper",

   methods:{
      jumpDetail(e){
         // if(this.$refs.imgUrl.style.height == 270){
         // }
         // console.log(this.$refs.box.style)
         // console.log(e.target.style.height)
         this.$router.push({
            path:'/home/newDetail',
            query:{
               id: e.target.alt
            }
         })
      }
   },

   computed:{
      ...mapGetters(['newsArr']),
   },

   mounted(){
      console.log(this.$route.path)
   },

   props:['news']
})
</script>

<style scoped>
   .swiper{
      margin-top:20px;
      height: 15vh;
      width:95%;
      border-bottom: 1px solid #ccc;
   }

   .el-carousel__item{
      text-align: center;
   }

   .el-carousel__item img{
      width:100%;
      height:100%;
      object-fit: cover;
   }

   .el-carousel__item h3 {
      font-family: '楷体';
      color:white;
      font-size: 14px;
      margin: -70px auto 0;
      opacity: 0.75;
      background-color: rgba(11, 9, 9, 0.675);
   }
  
   .el-carousel__item:nth-child(2n) {
      background-color: #505357;
   }
  
   .el-carousel__item:nth-child(2n+1) {
      background-color: #505357;
   }
</style>