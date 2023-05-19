import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// 全局挂载 VueQuillEditor
import VueQuillEditor from 'vue-quill-editor'
// 自定义全局事件
// import '@/directive/focus/index'

import {Alert,Menu,Card,Submenu,MenuItem,MenuItemGroup,Tag,Row,Col,Calendar,Carousel,CarouselItem,Dialog,Table,Form,FormItem,Select,Input,Option,Button,Popover,TableColumn,Breadcrumb,BreadcrumbItem} from 'element-ui'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {Notification,Message} from 'element-ui'

//应用插件
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.config.productionTip = false

// 引入路由器
import router from './router'
// 引入store
import store from './store';
Vue.use(VueQuillEditor);
Vue.use(VueRouter);
Vue.use(Alert);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Tag),
Vue.use(Row),
Vue.use(Col),
Vue.use(Card),
Vue.use(Calendar)
Vue.use(Carousel)
Vue.use(CarouselItem);
Vue.use(Table);
Vue.use(TableColumn); 
Vue.use(Popover);
Vue.use(Dialog);
Vue.use(CarouselItem);
Vue.use(Dialog);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Select);
Vue.use(Input);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);

const vm = new Vue({
  router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this
  },
  render: h => h(App),
}).$mount('#app')

export default vm;