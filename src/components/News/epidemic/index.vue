<template>
   <div class="epidemic_Card">
      <el-popover
      placement="right"
      width="400"
      trigger="click">
         <el-table :data="gridData">
            <el-table-column width="400" property="content" label="广州防疫政策(部分)(2022-11-18)----数据来源：网络"></el-table-column>
         </el-table>
         <el-button slot="reference">查看本地(广州市)部分出行防疫政策</el-button>
      </el-popover>
      <div class="cover_cards" v-if="this.epidemicArr.length && this.$route.path === '/home'">
         <div class="header_cards">
            <li class="country_cards item_card" @click="changeShow" :class="{active:this.isShow}">全国疫情数据(含港澳台)</li>
            <li class="area_cards item_card" @click="changeShow" :class="{active:!this.isShow}"><i class="iconfont icon-31dingwei">广东疫情数据</i></li>
         </div>
         <section class = "country_content content" v-show="this.isShow">
            <div class = "detail_card">
               <span>境外输入</span>
               <h1 style="color:orange">{{epidemicArr[0].total.input}}</h1>
               <p style="color:orange">较昨日+{{epidemicArr[0].today.input}}</p>
            </div>
            <div class = "detail_card">
               <span>无症状感染者</span>
               <h1 style="color:#6F1E51">{{epidemicArr[0].extData.noSymptom}}</h1>
               <p style="color:#6F1E51">较昨日+{{epidemicArr[0].extData.incrNoSymptom}}</p>
            </div>
            <div class = "detail_card">
               <span>现有确诊</span>
               <h1 style="color:red">{{epidemicArr[0].total.confirm - epidemicArr[0].total.dead - epidemicArr[0].total.heal}}</h1>
               <p style="color:red">较昨日+{{epidemicArr[0].today.storeConfirm}}</p>
            </div>
            <div class = "detail_card" style="color:#c0392b">
               <span>累计确诊</span>
               <h1>{{epidemicArr[0].total.confirm}}</h1>
               <p>较昨日+{{epidemicArr[0].today.confirm}}</p>
            </div>
            <div class = "detail_card">
               <span>累计死亡</span>
               <h1>{{epidemicArr[0].total.dead}}</h1>
               <p>较昨日+{{epidemicArr[0].today.dead}}</p>
            </div>
            <div class = "detail_card">
               <span>累计治愈</span>
               <h1 style="color:green">{{epidemicArr[0].total.heal}}</h1>
               <p style="color:green">较昨日+{{epidemicArr[0].today.heal}}</p>
            </div>
         </section>
         <!-- 分隔线 -->
         <section class = "area_content content" v-show="!this.isShow">
            <div class = "detail_card">
               <span>累计确诊</span>
               <h1 style="color:#c0392b">{{epidemicGuangDong.total.confirm}}</h1>
               <p style="color:#c0392b">较昨日+{{epidemicGuangDong.today.confirm}}</p>
            </div>
            <div class = "detail_card">
               <span>累计死亡</span>
               <h1>{{epidemicGuangDong.total.dead}}</h1>
               <p>较昨日+{{epidemicGuangDong.today.dead}}</p>
            </div>
            <div class = "detail_card">
               <span>累计治愈</span>
               <h1 style="color:green">{{epidemicGuangDong.total.heal}}</h1>
               <p style="color:green">较昨日+{{epidemicGuangDong.today.heal}}</p>
            </div>
         </section>
         <div class="footer_card">
            <span>截止{{epidemicArr[1]}}</span>
            <span>数据说明</span>
         </div>
      </div>
   </div>
</template>

<script>


export default({
   name:"epidemic",
   data(){
      return{
         isShow:true,
         gridData: [
            {content:'(一)7天内有本土病例报告的地级市旅居史人员，来穗后实施“三天三检”，引导在第5、7天各开展一次核酸检测，并做好健康监测。'},
            {content:'(二)高风险区所在城市来穗人员实施“三天三检”，期间居家健康监测，引导在第5、7天各开展一次核酸检测，并做好健康监测。管理期限自离开风险区域起算。'},
            {content:'(三)对7天内有高风险区旅居史的人员，采取7天居家隔离医学观察，在居家隔离第1、3、5、7天各开展一次核酸检测;管理期限自离开风险区域算起。'},
            {content:'(四)从外省陆地边境口岸城市的来(返)穗人员需持48小时核酸检测阴性证明。'},
            {content:'(五)10月29日(含)以来从澳门入境人员，须向所在社区、单位、酒店报备，落实三天居家健康监测(非必要不外出)，实施三天三检，不搭乘公共交通工具、不去公共场所、不聚集不聚餐。'},
            {content:'(六)对入境人员(不含澳门入境人员)实施“5天集中隔离医学观察+3天居家隔离”管理措施，在集中隔离医学观察的第 1 、2 、3 、5天各开展一次核酸检测，在居家隔离的第1、 3 天开展一次核酸检测。自外市入境且目的地为我市的人员，在外市完成集中隔离医学观察后，如不能做到点对点闭环转运，则应在入境地继续隔离管理。'},
            {content:'(七)对西藏自治区来(返)穗人员(高风险区域除外)，开展3天居家健康监测，居家健康监测期间不外出，第1、2、3天各开展1次核酸检测。并引导其在第5、7天各接受一次核酸检测。'},
            {content:'(八)新疆(含兵团，除高风险区域以外)来(返)穗人员开展3天居家隔离，及4天居家健康监测，居家健康监测期间不外出，第1、2、3、5、7天各开展1次核酸检测。'},
            {content:'(九)对内蒙古自治区(返)穗人员(高风险区域除外)开展3天居家隔离及4天健康监测，居家健康监测期间不外出，第1、2、3、5、7天各开展1次核酸检测。'},       
         ]
      }
   },
   methods:{
      changeShow(){
         this.isShow = !this.isShow
      }
   },
   mounted(){
      console.log(this.epidemicArr[0].today)
   },
   props:['epidemicArr','epidemicGuangDong']
})
</script>


<style scoped>
   .epidemic_Card{
      width:30vw;
   }
   .cover_cards{
      margin-top:20px;
      width:30vw;
      background-color: white;
      border-radius: 20px;
   }

   .cover_cards .header_cards{
      display: flex;
      width:30vw;
      height:60px;
      background-color: #dddd;
      border-radius:20px 20px 0 0;
   }

   .cover_cards .header_cards .active{
      background-color: white;
   }

   .header_cards .item_card{
      text-align: center;
      width:15vw;
      height:60px;
      line-height: 60px;
      border-radius:20px 20px 0 0;
   }

   .content{
      margin-top:10px;
      width:30vw;
      display: flex;
      flex-wrap: wrap;
   }

   .country_content{
      height:300px;
   }

   .area_content{
     height:150px;  
   }

   .content .detail_card{
      width:10vw;
      height:150px;
      text-align: center;
      background-color: white;
   }

   .content .detail_card h1{
      border-right: 1px solid #dddd;
   }

   .footer_card{
      display: flex;
      align-items: center;
      justify-content:space-around;
      height:30px;
      width:100%;
      border-radius: 20px;
   }
   .el-table{
      height:400px;
      overflow: auto !important;    
   }
   .el-button{
      border-radius: 30px;
   }
</style>