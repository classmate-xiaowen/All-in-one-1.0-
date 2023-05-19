<template>
   <div class = "note">
      <div class ="title">
         <div>
            <div class="small">
               <p class="p-title">笔记标题：</p>
               <input type="text" placeholder="请输入笔记名" v-model="note.title">
            </div>
            <div class="small">
               <p class="p-title">内容描述：</p>
               <input type="text" placeholder="请简述笔记内容" v-model="note.describe">
            </div>
         </div>
         <button class="btn" @click="add()">提交</button>
      </div>
      <div class="local-quill-editor">
         <p class="p-title">笔记内容：</p>
         <quill-editor
            ref="myLQuillEditor"
            v-model="note.content"
            :options="editorOption"
            class="editor"
            @blur="onEditorBlur"
            @focus="onEditorFocus"
            @change="onEditorChange">
         >
         </quill-editor>
      </div>
   </div>
</template>

<script>
   // 引入样式和quillEditor
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import { nanoid } from 'nanoid'

// 工具栏配置项
const toolbarOptions = [
  // 加粗 斜体 下划线 删除线 -----['bold', 'italic', 'underline', 'strike']
  ['bold', 'italic', 'underline', 'strike'],
  // 引用  代码块-----['blockquote', 'code-block']
  ['blockquote', 'code-block'],
  // 1、2 级标题-----[{ header: 1 }, { header: 2 }]
  [{ header: 1 }, { header: 2 }],
  // 有序、无序列表-----[{ list: 'ordered' }, { list: 'bullet' }]
  [{ list: 'ordered' }, { list: 'bullet' }],
  // 上标/下标-----[{ script: 'sub' }, { script: 'super' }]
  [{ script: 'sub' }, { script: 'super' }],
  // 缩进-----[{ indent: '-1' }, { indent: '+1' }]
  [{ indent: '-1' }, { indent: '+1' }],
  // 文本方向-----[{'direction': 'rtl'}]
  [{ direction: 'rtl' }],
  // 字体大小-----[{ size: ['small', false, 'large', 'huge'] }]
  [{ size: ['small', false, 'large', 'huge'] }],
  // 标题-----[{ header: [1, 2, 3, 4, 5, 6, false] }]
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  // 字体颜色、字体背景颜色-----[{ color: [] }, { background: [] }]
  [{ color: [] }, { background: [] }],
  // 字体种类-----[{ font: [] }]
  [{ font: [] }],
  // 对齐方式-----[{ align: [] }]
  [{ align: [] }],
  // 清除文本格式-----['clean']
  ['clean'],
  // 链接、图片、视频-----['link', 'image', 'video']
  ['image', 'video']
]

export default({
   name:"editor",
   data(){
      return{
         note:{
            title:'',
            describe:'',
            content: '',            
         },
         editorOption: {
         modules: {
            toolbar: toolbarOptions
         },
         theme: 'snow',
         placeholder: '请输入正文'
         // Some Quill optiosn...
         }
      }
   },
   methods: {
      add(){
         const dataObj = {
            id:nanoid(),
            title:this.note.title,
            describe:this.note.describe,
            content: this.note.content,   
         }
         if(this.note.content != ''){
            this.submit(dataObj)            
         }
         this.note.title=''
         this.note.describe=''
         this.note.content=''
      },
      // 失去焦点事件
      onEditorBlur (e) {
         console.log('onEditorBlur: ', e)
      },
      // 获得焦点事件
      onEditorFocus (e) {
         console.log('onEditorFocus: ', e)
      },
      // 内容改变事件
      onEditorChange (e) {
         console.log('onEditorChange: ', e)
      },
   },
   props:['submit'],
   // 注册 quillEditor
   components: {
      quillEditor
   },
})
</script>

<style scoped>
   .note{
      width:60vw;
      min-height:85vh;
      padding:10px 0;
      display:flex;
      flex-direction: column;
      align-items: center;
      margin-top:30px;
   }

   .note .title{
      display: flex;
      justify-content: space-between;
      height:13vh;
      width:100%;
   }

   .note .title .small{
      display: flex;
      margin:5px 0;
      align-items: center;
   }

   .note .title .small input{
      display: inline-block;
      height:15px;
      margin:0 10px;
      border:0;
      border-bottom:1px solid #dddd;
      background-color: rgba(0, 0, 0, 0);
      outline: 0;
   }

   .note .p-title{
      font-size: 12px;
   }

   .local-quill-editor{
      width:100%;
   }

   .editor {
      height:60vh;
      width:100%;
   }

   .btn{
      cursor: pointer;
      border:0;
      border-radius: 10px;
      outline: 0;
      margin:30px 50px 0 0;
      height:30px;
      width:60px;
      background-color: rgba(0, 119, 255, 0.786);
   }
</style> 