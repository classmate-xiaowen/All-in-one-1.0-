/*
vuex最核心的管理对象store
 */

import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

// 引入小仓库
import home from './home';
import navigation from './navigation';
import login from './login';

//对外暴露仓库
export default new Vuex.Store({
   modules: {
      home,
      navigation,
      login
   }
})