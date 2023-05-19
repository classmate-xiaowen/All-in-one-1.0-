<template>
   <div class="emailLIst">
      <div class="emailSelect">
         <div class="emailSelectCard" :class="{active:this.isDisplay}" @click="changeItem">
            网易邮箱
         </div>
         <div class="emailSelectCard" :class="{active:!this.isDisplay}" @click="changeItem">
            QQ邮箱
         </div>
      </div>
      <div style="marginTop:30px">
         <div class="email_item_163 email_item" v-for="email in emails_Netease" :key="email.id" v-show="isDisplay">
            <div class="email_header">
               <p>from：{{email.from}}</p>
            </div>
            <h1>{{email.content}}</h1>
            <div class="email_footer">
               <span>{{email.date}}</span>
               <span>{{email.resoure}}</span>
            </div>
         </div>
         <div class="email_item_163 email_item" v-for="email in emails_QQ" :key="email.id" v-show="!isDisplay">
            <div class="email_header">
               <p>from：{{email.from}}</p>
            </div>
            <h1>{{email.content}}</h1>
            <div class="email_footer">
               <span>{{email.date}}</span>
               <span>{{email.resoure}}</span>
            </div>   
         </div>
      </div>
   </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default({
   name:"emailManage",  
   data(){
      return{
         isDisplay:true,
         emails_Netease:[
            {id:nanoid(),from:'系统',content:'系统通知：国庆节快乐！',date:'2022/10/1',resoure:'网易邮箱'},
            {id:nanoid(),from:'李老师',content:'这次线性代数的期中考试将会在11月5号进行开考，本次成绩算进平时成绩的一部分，请同学们认真复习。',date:'2022/10/20',resoure:'网易邮箱'},
            {id:nanoid(),from:'学校',content:'根据上级发布的防疫工作规章制度，每一位同学都要每天进行一次核酸检测，并且上报核酸结果',date:'2022/11/01',resoure:'网易邮箱'},
            {id:nanoid(),from:'陈老师',content:'这次概率论的期末考试将会在12月10号进行开考，请同学们认真复习。',date:'2022/11/03',resoure:'网易邮箱'},
            {id:nanoid(),from:'雷老师',content:'这次高等数学的期末考试将会在12月30号进行开考，并且占比70%，请同学们认真复习。',date:'2022/11/03',resoure:'网易邮箱'},
            {id:nanoid(),from:'刘同学',content:'这周有空吗？和你去学校体育馆打羽毛球怎么样，并且准备一下比赛的事情。',date:'2022/11/07',resoure:'网易邮箱'},
            {id:nanoid(),from:'章同学',content:'本次作品的PPT和设计文档我已经发给指导老师已经看过了，他说有些地方需要修改一下。',date:'2022/11/10',resoure:'网易邮箱'},
            {id:nanoid(),from:'系统',content:'双十一购物节到了',date:'2022/11/11',resoure:'网易邮箱'},
         ],
         emails_QQ:[
            {id:nanoid(),from:'朋友',content:'国庆节早上一起去看升旗。',date:'2022/9/30',resoure:'QQ邮箱'},
            {id:nanoid(),from:'系统',content:'系统通知：国庆节快乐！',date:'2022/10/1',resoure:'QQ邮箱'},
            {id:nanoid(),from:'同班同学',content:'明天晚上一起上机吃鸡。',date:'2022/10/06',resoure:'QQ邮箱'},
            {id:nanoid(),from:'游戏平台',content:'您在游戏中兑换的礼包已到您的游戏邮箱，请尽快上线领取。',date:'2022/10/21',resoure:'QQ邮箱'},
            {id:nanoid(),from:'同班同学',content:'我们小组讨论的方案已经发到群上面了，你了解一下方案的分工，关注一下',date:'2022/11/08',resoure:'QQ邮箱'},
            {id:nanoid(),from:'系统',content:'双十一购物节到了',date:'2022/11/11',resoure:'QQ邮箱'},
         ]
      }
   },
   methods:{
      changeItem(){
         this.isDisplay = !this.isDisplay
      }
   },
   mounted(){
      console.log('emailManage以加载')
   }
})
</script>

<style scoped>
   .emailLIst{
      display: flex;
      flex-direction: column;
      align-items: center;
      width:64vw;
      height:100vh;
   }
   .emailLIst .emailSelect{
      margin-top:30px;
      display: flex;
      justify-content: space-between;
      width:300px;
      height:50px;
      border-radius: 50px;
   }
   .active{
      background-color: white;
   }
   .emailSelectCard{
      width:50%;
      text-align: center;
      height:50px;
      line-height:50px;
      border-bottom:1px solid white;
   }
   .email_item{
      padding:0 20px;
      margin-top:10px;
      height:80px;
      width:50vw;
      border-radius: 30px;
      background-color: white;
   }
   .email_header{
      font-size: 8px;
   }
   .email_item h1{
      margin: 0 auto;
      font-size:12px;
      width:70%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
   }
   .email_footer{
      margin-top:15px;
      font-size: 8px;
      display: flex;
      justify-content:space-between;     
   }
</style> 