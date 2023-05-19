<template>
  <div class="app">
    <router-view></router-view>
    <AlertTip v-show="$route.path=='/home'"></AlertTip>
  </div>
</template>

<script>
import AlertTip from "@/components/item/AlertTip"

export default {
  name:'App',
  components: {
    AlertTip,
  },
}
</script>

<style>
.app {
  width:100vw;
  min-height:100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-image: url("../static/background.jpg");
  background-size: cover;
}
.app-bg{
  background-color: rgba(0, 0, 0, 0);
  background-image:unset;
}
</style>
