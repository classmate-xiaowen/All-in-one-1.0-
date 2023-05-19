import requests from './requests'

export const requestWeather = () => {
   return requests({
      method: 'get' ,
      url:'/api/weather/current/广州市?app_id=jgbolkognjpsukwr&app_secret=alhGZEhKWW96ZVJiSDkrMzN0dVY1Zz09'
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
      url : '/api/news/list?typeId=511&page=1&app_id=jgbolkognjpsukwr&app_secret=alhGZEhKWW96ZVJiSDkrMzN0dVY1Zz09'
   })
}

export const requestNewDetail = (id) => {
   console.log(id)
   return requests({
      url: `/api/news/details?newsId=${id}&app_id=jgbolkognjpsukwr&app_secret=alhGZEhKWW96ZVJiSDkrMzN0dVY1Zz09`
   })
}

