import {requestWeather} from "@/api"
import {requestEpidemic} from '@/api'
import {requestNews} from "@/api"
import {requestNewDetail} from '@/api'
import {requestMusicCharts} from '@/api'

//可以处理业务逻辑【if、异步语句等等】
let actions = {
   async getWeather({ commit, state, dispatch}){
      let result = await requestWeather()
      if(result.code == 1){
         commit('GETWEATHER',result.data)
      }
   },

   async getEpidemic({commit, state, dispatch}){
      let result = await requestEpidemic()
      if(result.code != 0){
         commit('GETEPIDEMIC',result.data)
      }
   },

   async getMusicCharts({commit, state, dispatch}){
      let result = await requestMusicCharts()
      if(result.code == 200){
         commit('GETMUSICCHARTS',result.data)
      }
   },

   async getNewsList({ commit, state, dispatch}){
      let result = await requestNews()
      if(result.code == 1){
         commit('GETNEWS',result.data)
      }
   },

   async getNewDetail({ commit, state, dispatch},id){
      let result = await requestNewDetail(id)
      if(result.code == 1){
         commit('GETNEWDETAIL',result.data)
      }
   }
}

let mutations = {
   GETWEATHER(state,weather){
      state.weather = weather
      console.log(weather,'getWeather请求成功')
   },
   GETEPIDEMIC(state,epidemic){
      state.epidemic = epidemic
      console.log(epidemic,'getEpidemic请求成功')
   },
   GETMUSICCHARTS(state,hotCharts){
      state.hotCharts = hotCharts
      console.log(hotCharts,'getMusicCharts请求成功')
   },
   GETNEWS(state,news){
      state.news = news
      console.log(news,'getNews请求成功')
   },
   GETNEWDETAIL(state,newDetail){
      state.newDetail = newDetail
      console.log(newDetail,'GETNEWDETAIL请求成功')
   }
}

let state = {
   weather:{},
   news:[],
   newDetail:{},
   epidemic:[],
   hotCharts:[]
}

//仓库计算属性
let getters = {
   newsArr(state){
      return state.news.filter(item => {
         return item.imgList instanceof Array
      })
   },
   epidemicArr(state){
      let {chinaTotal,lastUpdateTime,overseaLastUpdateTime} = state.epidemic
      return [chinaTotal,lastUpdateTime,overseaLastUpdateTime]
   },
   epidemicGuangDong(state){
      return state.epidemic.areaTree[2].children[5]
   },
   hotChartsArr(state){
      return state.hotCharts.slice(0,9)
   }
}

export default {
   state,
   mutations,
   actions,
   getters
}