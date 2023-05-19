<template>
   <div>
      <div v-if="this.newDetail != {}" class="newDetail_Page">
         <div class="header_title">
            <i class="iconfont icon-guanbi" @click="$router.back()" style="marginLeft:20px"></i>
         </div>
         <header class="header">
            <img :src="newDetail.cover" alt="">
            <h1>{{newDetail.title}}</h1>
         </header>
         <div class="NewDetail_Card" ref = "mainPage">

         </div>
         <footer>
            <p>{{newDetail.ptime}}</p>
         </footer>
      </div>
      <div v-if="this.newDetail" >数据加载中，请稍后。。。。</div>
   </div>
</template>

<script>
import {mapState} from 'vuex'

export default({
   name:"newDatail",
   data(){
      return{

      }
   },
   watch:{
      newDetail(){
         this.$refs.mainPage.innerHTML = this.newDetail.content;
      },
   },
   computed:{
      ...mapState({
         newDetail:state => state.home.newDetail
      })
   },
   mounted(){
      setTimeout(()=>{
         this.$store.dispatch('getNewDetail',this.$route.query.id);             
      },1500)
   },
})
</script>

<style scoped>
   .newDetail_Page{
      backdrop-filter: blur(50px);
      background-color: rgba(255, 255, 255, 0.461);
      width:64vw;
      display: flex;
      flex-direction: column;
      align-items: center;
   }

   .NewDetail_Card{
      width:60vw;
      min-height:100vh;
   }

   .header{
      position: relative;
      text-align: center;
   }

   .header_title{
      width:100%;
      height:50px;
      line-height:50px;
      padding:0 15px;
   }

   .header h1{
      font-size:20px;
      padding:0 20px;
   }

   .header img{
      width:60vw;
      height: 250px;
      object-fit:cover;
   }
</style>