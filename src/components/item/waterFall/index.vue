<template>
<div>
  <div class="content" v-infinite-scroll="load" infinite-scroll-distance="1">
      <div v-for="item in this.blocks" :key="item.id"  class="content_one">
          <img :src="item.imgUrl" />
      </div>
  </div>
  <!-- <div v-masonry transition-duration="0.3s" i tem-selector=".item">
    <div v-masonry-tile class="item" v-for="(item) in this.blocks" :key="item.id">
      <img :src="item.imgUrl" alt="图片消失了" />
    </div>
  </div> -->
</div>
</template>

<script>
import Masonry from 'masonry-layout'
import { nanoid } from 'nanoid'

export default {
  name: "waterFall",
  data() {
    return {
      blocks: [
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
        {id:nanoid(), imgUrl: "https://api.likepoems.com/img/sina/nature"},
      ],
    };
  },
  updated(){
      var elem = document.querySelector('.content');//图片父容器
      var msnry = new Masonry(elem, {
          // options
          itemSelector: '.content_one',//图片子容器
          columnWidth: 10,         //列宽
      });
  },
}
</script>


<style scoped>
  * {
      margin: 0;
      padding: 0;
  }

  .content {
      width: 100%;
      height: 100% !important;
  }

  .content>div {
      float: left;
      padding: 10px;
  }

  .content>div>img {
      width: 260px;
      object-fit: cover;
  }
</style>