<template>
   <div class="todo_Cards">
      <div class = "todoList">
         <input type="text" placeholder="输入待办的事项"
         v-model="title"
         @keyup.enter= "add">
         <div class = "list">
            <h1>待办事项</h1>
            <div class = "item" v-for="todo in calendarTodos" :key="todo.id">
               <input type="checkbox" v-model ="todo.done">
               <span :class="{checked : todo.done}">{{todo.title}}</span>
            </div>
         </div>
         <div class = "footer">
            <label>
               <span>全选</span>
               <input type="checkbox" 
               v-model ="isAll" 
               >
            </label>
            <span>已完成 {{doneTotal}} 个/共 {{calendarTodos.length}} 个</span>
            <button @click ="deleteTodo">清除已完成</button>
         </div>
      </div>
   </div>
</template>

<script>
import { nanoid } from 'nanoid'

export default({
   name:"todo",
   data(){
      return{
         title:'',
      }
   },
   methods:{
      deleteTodo(){
         // this.calendarTodos = this.calendarTodos.filter(todo => !todo.done)
         this.deleteAll()
      },
      add(){
         const dataObj = {
            id:nanoid(),
            title:this.title,
            done:false
         };
         this.addTodo(dataObj)
         this.title = ''
      }
   },
   computed:{
      isAll:{
         get(){
            return this.calendarTodos.length == this.doneTotal && this.calendarTodos.length > 0
         },
         set(value){
            return this.calendarTodos.forEach(todo => todo.done = value);
         }
      },
      doneTotal(){
         return this.calendarTodos.reduce((total,current) => total + (current.done ? 1 : 0),0)
      }
   },
   props:['addTodo','calendarTodos','deleteAll']
})
</script>

<style scoped>
   .todo_Cards{
      width:64vw;
      backdrop-filter: blur(50px);
      background-color: rgba(255, 255, 255, 0.461);
   }

   .todoList{
      margin:0 auto;
      width:55vw;
      padding:0 30px;
      min-height:90vh;
      padding:10px 0;
      display:flex;
      flex-direction: column;
      align-items: center;
   }

   input[type="text"]{
      margin-top:20px;
      width:50vw;
      height:5vh;
      border-radius: 10px;
      background: none;
   }

   .list{
      margin-top:50px;
      width:100%;
      text-align: left;
      min-height: 65vh;
   }

   .list .item input[type=checkbox]:checked{
      background-color: rgba(0, 255, 0, 0.676);
      color:rgba(0, 255, 0, 0.676);
   }

   .list h1{
      text-align:center;
      /* font-size:16px; */
      font-family: '楷体';
   }

   .list .item{
      height:3vh;
      margin:5px 0;
   }

   .checked{
      text-decoration: line-through;
      color:#dddd;
   }

   .footer{
      display: flex;
      justify-content: space-evenly;
      width:100%;
      height:5vh;
      align-items: center;
      margin-bottom:0;
      /* margin-top:100px; */
   }

   button{
      width:100px;
      height:4vh;
      line-height: 4vh;
      border-radius: 20px;
      border:0;
      cursor: pointer;
   }
</style>