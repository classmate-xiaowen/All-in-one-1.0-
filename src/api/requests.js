// 对axios进行二次封装 
// 
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress';
//引入相关进度条的样式
import "nprogress/nprogress.css";

let requests = axios.create({
   baseURL : "http://localhost:8080",
   timeout : 8000
})

requests.interceptors.request.use(config => {
   nprogress.start();
   return config
})

requests.interceptors.response.use( res => {
   nprogress.done();
   return res.data;
})

export default requests;