<template>
   <div>
      <el-dialog :title=this.form.title :visible.sync="dialogFormVisible">
         <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
               <el-input v-model="form.name" autocomplete="off" placeholder="请输入活动名称"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
               <el-input v-model="form.region" placeholder="请选择活动区域"></el-input>
            </el-form-item>
            <el-form-item label="具体事情" :label-width="formLabelWidth">
               <el-input v-model="form.detail" placeholder="请输入具体事情"></el-input>
            </el-form-item>
         </el-form>
         <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addCalendar">确 定</el-button> 
         </div>
      </el-dialog>

      <!-- <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button> -->
   </div>
</template>


<script>
  export default {
   name:"DiaLog",
    data() {
      return {
        dialogFormVisible: false,
        dateLine:"",
        form: {
         name: '',
         region: '',
         date1: '',
         date2: '',
         delivery: false,
         type: [],
         resource: '',
         desc: '',
         title:'',
         detail:'',
        },
        formLabelWidth: '80px'
      };
    },
    methods:{
      addCalendar(){
         localStorage.setItem('calendarNote',JSON.stringify({name:this.form.name,region:this.form.region,detail:this.form.detail,dateLine:this.dateLine}))
         this.dialogFormVisible = !this.dialogFormVisible;
         // this.$bus.$emit('addNoteToday',this.dateLine);
         this.$router.go(0)
      }
    },
    mounted(){
      this.$bus.$on('isNoteDay',(data,date)=>{
         this.dialogFormVisible = true
         this.form.title = data
         this.dateLine = date
      })
    }
  };
</script>