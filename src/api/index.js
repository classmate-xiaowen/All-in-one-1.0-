import requests from './requests'

export const requestWeather = () => {
   return requests({
      method: 'get' ,
      url:''
   })  
}

export const requestEpidemic = () => {
   return requests({
      method:'get',
      url:'/epidemic-api/wuhan/app/data/list-total'
   })
}

export const requestMusicCharts = () => {
   return requests({
      method:'get',
      url:'/one-ming/wytop?t=4'
   })
}

export const requestNews = () => {
   return requests({
      method: 'get',
      url : ''
   })
}

export const requestNewDetail = (id) => {
   console.log(id)
   return requests({
      url: ``
   })
}

