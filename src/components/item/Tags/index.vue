<template>
   <div class="tags_Cards" style="marginTop:250px;width:80%">
      <h1>猜你喜欢</h1>
      <el-tag
         :key="tag.label"
         v-for="tag in dynamicTags"
         closable
         :disable-transitions="false"
         :type="tag.type"
         @close="handleClose(tag.label)"
         effect="light">
         {{tag.label}}
      </el-tag> 
      <el-input
         class="input-new-tag"
         v-if="inputVisible"
         v-model="inputValue"
         ref="saveTagInput"
         size="small"
         @keyup.enter.native="handleInputConfirm"
         @blur="handleInputConfirm"
         >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+添加新标签</el-button>
   </div>
</template>

<script>
export default({
    data() {
      return {
        dynamicTags: [
            { type: '', label: '音乐' },
            { type: 'success', label: 'coding' },
            { type: 'info', label: '军事' },
            { type: 'danger', label: '生活' },
            { type: 'warning', label: '防疫' }
        ],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        if (this.inputValue) {
          this.dynamicTags.push({type:'success',label:this.inputValue});
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
})
</script>


<style scoped>
   .tags_Cards{
      text-align: center;
   }
   .tags_Cards h1{
      font-family: '楷体';
   }
   .el-tag + .el-tag {
      margin-left: 10px;
   }
   .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
   }
   .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
   }
</style>