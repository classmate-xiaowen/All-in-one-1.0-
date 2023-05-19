<template>
  <div>
    <div class="login_Card">
      <div class="login_left">
        <div class="login_title">
          <span>专属自己全方位服务工作的百宝箱。</span>
          <h1>   —— all in one个人综合平台</h1>
        </div>
      </div>
      <div class="login_Right">
        <div class = "login">
          <h1>账号登录</h1>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="email">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <button @click="login">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default({
  name:'Login',
  data(){
    return{
      email:'',
      password:'',
    }
  },
  // 跳转会有bug：body和app选择器没清理，应使用路由守卫
  methods:{
    login(){
      if(this.email == 'admin' && this.password == 123){
        this.$router.push('/home')
        // document.getElementsByTagName('body')[0].className = ''
        // document.getElementsByTagName('div')[0].className = 'app'
      }
    }
  },
  // beforeCreate :function(){
  //   document.getElementsByTagName('body')[0].className = 'body-bg'
  //   document.getElementsByTagName('div')[0].className = 'app-bg'
  // }

})
</script>

<style scoped>
  .login_Card{
    width:100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url("./images/work.jpg");
    background-size: cover;
    display: flex;
  }

  .login_left{
    width:40vw;
    height:100vh;
  }

  .login_left .login_title{
    width:100%;
    margin-left:50px;
    height:20vh;
    margin-top:200px;
  }

  .login_left span{
    font-family: '楷体';
    font-size: 45px;
    color:white;
    text-transform:upercase;
  }

  .login_left h1{
    font-size: 30px;
    color:white;
  }

  .login_Right{
    width:60vw;
    height:100vh;
    background-color:rgba(255, 255, 255, 0.297);
    backdrop-filter:saturate(160%) blur(10px);
    clip-path: polygon(0% 0%, 30% 100%, 100% 100%, 100% 0%);
  }

  .login_Right .login{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    border:0;
    margin:100px 0 0 350px;    
    border-radius:20px;
    width:320px;
    height:450px;
    background-color: white;
  }

  .login_Right .login h1{
    text-indent: 1cm;
    font-family: '楷体';
    font-size: 35px;
  }

  .login .input{
    display: flex;
    width:25vw;
    flex-direction: column;
    align-items: center;
  }

  .login input[type="text"],.login input[type="password"]{
    border:0;
    background:none;
    margin:15px 0;
    text-align:left;
    border-bottom:1px #dddd solid;
    padding:10px 10px; 
    width:70%;
    outline:none;
    color:black; 
    transition:0.3s;
  }

  .login input[type="text"]:focus,.login input[type="password"]:focus
  {
    width:80%;
    border-color:pink;
  }

  button{
    border:0;
    background:rgba(27, 232, 27, 0.585);
    display:block;
    margin:15px auto;
    border:3px solid none;
    padding:10px 30px; 
    border-radius:20px;
    cursor:pointer;
    color:white;
  }

  .login a{
      color:white;
  }

  .login input[type="submit"]:hover
  {
          background-color:rgb(0,180,100);
  }

</style>