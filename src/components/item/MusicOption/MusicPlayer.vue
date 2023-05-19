<template>
    <APlayer autoplay
        id="player"
        :music="audio[0]"
        :list="audio"
        :showlrc="true"
        :listFolded="true"
        float
        mode="circulation"
        repeat="repeat-all"
    />
</template>
 
<script>
import APlayer from 'vue-aplayer'
APlayer.disableVersionBadge = true

export default {
  name: 'MusicPlayer',
  data () {
    return {
      // 音频列表
      audio: [
        {
          title: '天空之城',
          artist: '黄叶',
          url: 'http://music.163.com/song/media/outer/url?id=1947208581.mp3',
          pic: 'http://p2.music.126.net/O-G03h3Y18Hb75ZzFXrxXg==/109951167515869204.jpg',
          lrc: '[00:12.09]作词：林夕[00:12.33]'
        }
      ],
      isShow: true
    }
  },
  mounted () {
    this.getMusic()
  },
  methods: {
    getMusic () {
      // this.$nextTick(() => {
      //   this.$axios.$request({
      //     url: '/songs/list',
      //     method: 'get'
      //   }).then((res) => {
      //     this.audio = res
      //     // 如果不使用 v-if，会导致播放器已经渲染好了才给值，那自动播放会失效
      //     this.isShow = true
      //   })
      // })
    }
  },
  components:{
    APlayer
  },
}
</script>

<style>
  /* #player{
    position: fixed;
    top:550px;
    width:350px;
  } */
</style>