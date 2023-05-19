<template>
   <div class = "navigation">
      <Time></Time>
      <div class = "search">
         <input type="search" placeholder="搜索一下" v-model = "searchTxt" @keyup.enter="search">
      </div>
      <div class = "itemList" ref="wrapper">
         <div class="content">
            <div class = "item_cartory" v-for="category in categoryArr" :key="category.id">
               <h1>{{category[0].type}}</h1>
               <div class="item_cards">
                  <div class = "item" v-for = "item in category" :key="item.id" @click="jumpUrl(item.url)">
                     <img :src="item.imgUrl" :alt="item.name">
                     <p>{{item.name}}</p>
                  </div>
                  <div class = "addItem" @click="addItem">+</div>
               </div>
            </div>
         </div>
      </div>
      <div class="navigation_footer">
         <p>此作品UI及代码为小文同学（网名）独立开发，部分api接口来自网络，仅学习交流使用，若有侵犯请联系删除。</p>
      </div>
      <el-dialog
      title="请输入网站的信息"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
      <div class="dialog_Input">
         <input type="text" v-model="link.name" placeholder="请输入网站的名字">
         <input type="text" v-model="link.url" placeholder="请输入网站的网址">
         <input type="text" v-model="link.type" placeholder="请输入网站的类型">
      </div>
      <span slot="footer" class="dialog-footer">
         <el-button @click="centerDialogVisible = false">取 消</el-button>
         <el-button type="primary" @click="addLink">确 定</el-button>
      </span>
      </el-dialog>
   </div>
</template>
<script>
import BScroll from '@better-scroll/core'
// import ObserveDom from '@better-scroll/observe-dom'
import {nanoid} from 'nanoid'
import Time from '@/components/item/time'

export default({
   inject:['reload'],
   name:'navigation',
   data(){
      return{
         centerDialogVisible:false,
         searchTxt:'',
         bScroll:null,
         link:{
            name:'',
            url:'',
            type:''
         },
         linkType:['搜索','购物','新闻'],
         categoryArr:[],
         UrlItem:[
            {id:nanoid(),imgUrl:"https://www.baidu.com/favicon.ico",name:"百度",type:"搜索",url:"https://www.baidu.com"},
            {id:nanoid(),imgUrl:"https://www.sogo.com/favicon.ico",name:"搜狗",type:"搜索",url:"https://www.sogo.com"},
            {id:nanoid(),imgUrl:"https://www.bilibili.com/favicon.ico",name:"B站",type:"视频",url:"https://www.bilibili.com"},
            {id:nanoid(),imgUrl:"https://www.taobao.com/favicon.ico",name:"淘宝",type:"购物",url:"https://www.taobao.com"},
            {id:nanoid(),imgUrl:"https://www.toutiao.com/favicon.ico",name:"今日头条",type:"新闻",url:"https://www.toutiao.com"},
            {id:nanoid(),imgUrl:"https://news.cctv.com/favicon.ico",name:"央视网",type:"新闻",url:"https://news.cctv.com"},
            {id:nanoid(),imgUrl:"https://www.jd.com/favicon.ico",name:"京东",type:"购物",url:"https://www.jd.com"}
         ]
      }
   },
   methods:{
      addItem(){
         this.centerDialogVisible = true
      },
      addLink(){
         this.UrlItem.push({  id:nanoid(),
                              name:this.link.name,
                              imgUrl: `https://${this.link.url}/favicon.ico`,
                              url:this.link.url,
                              type:this.link.type
                           })
         this.centerDialogVisible = false
         if(this.linkType.indexOf(this.link.type) == -1){
            this.linkType.push(this.link.type)
         }
         // this.reload()    
         this.link.name = ''
         this.link.url = ''
         this.link.type = ''
      },
      jumpUrl(url){
         console.log(url)
         window.location.href = url; 
      },
      search(){
         window.location.href =`http://www.baidu.com/s?wd=${this.searchTxt}`; 
         this.searchTxt = ''
      }
   },
   watch:{
      UrlItem:{
         immediate:true,
         handler(newValue,oldValue){
            this.categoryArr.forEach(arr => {
               if(arr[0].type == newValue[newValue.length-1].type){
                  arr.push(newValue[newValue.length-1])
               }
            }),
            console.log(newValue[newValue.length-1])
         // new BScroll(this.$refs.wrapper,{
         //    scrollX: true,
         //    scrollY: false,
         //    click: true
         // })
         }
      }
   },
   // computed:{
   //    categories(){
   //       this.linkType.forEach(type => {
   //          this.categoryArr.push(
   //             this.UrlItem.filter(item => {
   //                return item.type == type
   //             })
   //          )
   //       })
   //       return this.categoryArr
   //    }
   // },
   mounted(){
      this.linkType.forEach(type => {
         this.categoryArr.push(
            this.UrlItem.filter(item => {
               return item.type == type
            })
         )
      })
      new BScroll(this.$refs.wrapper,{
         scrollX: true,
         scrollY: false,
         click: true,
         ObserveDom: true
      })
   },
   components:{
      Time
   }
})
</script>

<style scoped>
   .navigation{
      display: flex;
      flex-direction: column;
      align-items: center;
      width:100vw;
      height:100vh;
      overflow: hidden;
      background-image: url("./images/a.jpg");
      background-size: cover;
   }

   .search input{
      text-indent: 1cm;
      margin-top:50px;
      width:60vw;
      height:50px;
      border-radius: 20px;
      outline: none;
      border:0;
      background-color: #dddd;
   }

   .itemList{
      width:1000px;
      height:350px;
      margin-top:30px;
      display: flex;
      overflow: hidden;
   }

   .itemList .content{
      display: flex;
      width:3000px;
      height:350px;    
   }

   .item_cartory{
      text-align: center;
      width:1000px;
      height:350px;
   }

   .item_cartory h1{
      font-family: '楷体';
      /* width:1000px; */
      height:30px;
      font-size: 20px;
      border-bottom:1px solid #dddd;
      color:white;
   }

   .item_cartory .item_cards{
      display:flex;
      width:1000px;
      height:300px;
      padding:0 10px;
      column-gap: 20px;
      cursor: pointer;
   }

   .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width:60px;
      height:60px;
      border-radius: 50%;
      background-color: rgba(255, 250, 250, 0.993);
   }

   .item img{
      border-radius: 50%;
      width:32px;
      height:32px;
      object-fit: cover;
   }

   .item p{
      font-size: 10px;
      margin-top:-2px;
      /* color:white; */
   }

   .addItem{
      border-radius: 50%;
      width:50px;
      height:50px;
      font-size: 50px;
      background-color: aliceblue;
      line-height: 50px;
      text-align:center;
   }

   .dialog_Input{
      width:100%;
      height:100%;
      text-align: center;
   }

   .dialog_Input input{
      /* border-radius: 20px; */
      width:300px;
      height:40px;
      margin-top:20px;
      border:0;
      outline:0;
      text-indent: 1cm;
      border-bottom:1px solid #dddd;
   }

   .navigation_footer{
      text-align: center;
      font-size:13px;
      width:100%;
      height:30px;
      /* background-color: bisque; */
      margin-top:20px;
      color:white;
   }
</style>