<template>
   <div class="quickNote">
      <div class="quick-note">
         <div class="quickNote-title" ref="a">
            <img src="../images/R-C.jpg" alt="">
            <h1>快速记录</h1>
            <p>简单、快速、方便地记录下你想要的</p>
            <span>记录生活中的灵感</span>     
         </div>
         <div class="quickNote-write">
            <div class="quickNote-list">
               <li v-for="note in notes" :key="note.id"
                @dblclick="editorLi(note,$event)"
               >
                  <span v-show="!note.isEditor">{{note.title}}</span>
                  <input type = "text"
                     :style = {height:editorHeight}
                     :value = "note.title" 
                     v-show = "note.isEditor"
                     @blur ="editorLi(note)"
                     ref="note.id"
                     v-focus
                  >
                  <button class = "btn-danger" @click="deleteLi(note.id)">X</button>
               </li>           
            </div>
            <div class="note-write">
               <button>+</button>
               <input type="text" placeholder="请写下一些信息"
                @keyup.enter="addQuickNote"
                v-model="value"> 
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { nanoid } from "nanoid"

export default({
   name:"QuickNote",
   data(){
      return{
         value:'',
         isHeight:0,
         notes:[
            {id:nanoid(),title:'像往常一样，他们发现玛丽对低音提琴和人性的研究非常深入，有一些精华可以欣赏，也有一些对陈腐道德的新观察可以听。凯瑟琳和莉迪亚掌握着另一种情报',isEditor:false},
            {id:nanoid(),title:'They found Mary, as usual, deep in the study of thorough-bass and human nature; and had some extracts to admire, and some new observations of threadbare morality to listen to. Catherine and Lydia had information for them of a different sort',isEditor:false},
            {id:nanoid(),title:'像往常一样，他们发现玛丽对低音提琴和人性的研究非常深入，有一些精华可以欣赏，也有一些对陈腐道德的新观察可以听。凯瑟琳和莉迪亚掌握着另一种情报',isEditor:false},
         ],
      }
   },
   methods:{
      addQuickNote(){
         this.notes.push({id:nanoid(),title:this.value,isEditor:false})
         this.value = ''
      },
      deleteLi(id){
         console.log(id)
      },
      editorLi(note,e){
         note.isEditor = !note.isEditor
         this.isHeight = e.target.offsetHeight
         this.$nextTick(()=>{
            e.target.nextElementSibling.focus()
         })
         // console.log(this.$refs.a,e.target.nextElementSibling)        
      }
   },
   computed:{
      editorHeight(){
         return this.isHeight + 'px'
      }
   }
})
</script>

<style scoped>
   .quickNote{
      width:64vw;
      min-height:200vh;
      /* backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.335); */
   }

   .quick-note{
      width:80%;
      min-height: 120vh;
      margin:0 auto;
   }

   .quickNote-title{
      min-height:25vh;
      margin-top:20px;
   }

   .quickNote-title img{
      width:100px;
      height:100px;
      object-fit: cover;
   }

   .quickNote-title h1{
      font-size:35px;
   }

   .quickNote-title p{
      font-size: 12px;
      color:#dddd;
   }

   .quickNote-title span{
      font-size:20px;
      margin-top:30px;
   }

   .note-write{
      width:100%;
      display: flex;
      border-bottom:1px solid #dddd;
   }

   .quickNote-write{
      width:100%;
      min-height:13vh;
   }

   .quickNote-list li{
      font-size:18px;
      font-family: '楷体';
      padding:10px 0;
      min-height:6vh;
   }

   .quickNote-list li input{
      width:98%;
   }

   .quickNote-list li .btn-danger{
      display: none;
      font-size: 12px;
      width:15px;
      height:15px;
      line-height: 15px;
      border-radius:50%;
      text-align: center;
      background-color: rgb(189, 35, 35);
   }

   .quickNote-list li span:hover .btn-danger{
      display:inline-block;
   }

   .note-write input{
      border:0;
      width:100%;
      padding:10px 0;
      outline:none;
      background-color:rgba(255,255,255,0.1);
      /* color:#dddd; */
   }

   .note-write button{
      background-color:rgba(255,255,255,0.1);
      border:0;
      font-size:25px;
   }
</style>