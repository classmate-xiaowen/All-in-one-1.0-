<template>
   <el-alert
      :title="this.alertTxt"
      type="success">
   </el-alert>
</template>

<script>
export default {
   name:"AlertTip",
   data(){
      return{
         drinkTime:180000,
         timer:"",
         alertTxt:""
      }
   },
   mounted() {
      this.timer = setInterval(()=>{
         this.$notify({
         title: '过去30分钟了(健康小提醒)',
         message: this.$createElement('i', { style: 'color: teal'}, '不要长时间盯着屏幕喔，可以喝口水或者站起来运动一下哦')
        });
      },this.drinkTime)

      this.$bus.$on('successTip', (alertTxt) => {
         this.alertTxt = alertTxt
         this.$message({
            showClose: true,
            message:alertTxt,
            type: 'success'
         })
         console.log('@@@',this.alertTxt)
      }),

      this.$bus.$on('errorTip',()=> {
         this.$message({
            showClose: true,
            message: this.alertTxt,
            type: 'error'
         })
         console.log('@@@',this.alertTxt)
      }),

      this.$bus.$on('warningTip',()=> {
         this.$message({
            showClose: true,
            message: this.warningTxt,
            type: 'warning'
         })
         console.log('@@@',this.warningTxt)
      })
   },
}
</script>