<template>
  <div class="con">
    <div class="now-data-myself">
      <div class="now-data-myself-time">{{ date }}</div>
      <div class="now-data-myself-week">{{ week }}</div>
    </div>
    <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      v-on:isToday="clickToday"
    ></Calendar>
  </div>
</template>
 
<script>
/* eslint-disable */
import Calendar from 'vue-calendar-component';
export default {
  components: {
    Calendar
  },
  data() {
    return {
      date: "",
      week: "",
      dateLine:""
    };
  },
  created() {
    var now = new Date();
    this.date = now.getDate();//得到日期
    var day = now.getDay();//得到周几
    var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    this.week = arr_week[day];
  },
  methods: {
    clickDay(data) {
      // console.log(data); //选中某天
      this.dateLine = (Number(data.slice(8,10)) - this.date) + (Number(data.slice(5,7)) - 11)*30
      this.$bus.$emit('isNoteDay',data,this.dateLine)
      // console.log(data.slice(8,10),this.date,furData,Number(data.slice(5,7)),this.date)
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); // 跳到了本月
    }
  },
};
</script>
 
<style>
.now-data-myself {
  width: 40%;
  position: absolute;
  border-right: 1px solid rgba(227, 227, 227, 0.6);
}
.con {
  position: relative;
  max-width: 200px;
  margin: auto;
  border:0.5px solid #dddd;
  border-radius: 15px;
}
.con .wh_content_all {
  background: transparent !important;
}
.wh_top_changge li {
  color: #F56C6C !important;
  font-size: 15px !important;
  text-align: center;
}
.wh_content_item, .wh_content_item_tag {
  color: #303133 !important;
  width:26px !important;
  height:26px !important;
}
.wh_content_item .wh_isToday {
  background: #00d985  !important;
  transform: scale(0.7);
  color: #fff  !important;
}
.wh_content_item .wh_chose_day {
   background: #409EFF  !important;
   color: #ffff  !important;
   transform: scale(0.7);
}
.wh_item_date:hover {
   transform: scale(0.7);
    background: rgb(217, 236, 255) !important;
    border-radius: 40px !important;
    color: rgb(102, 177, 255)  !important;
}
.wh_jiantou1[data-v-2ebcbc83] {
    border-top: 2px solid #909399;
    border-left: 2px solid #909399;
    width: 7px;
    height: 7px;
}
.wh_jiantou2[data-v-2ebcbc83] {
    border-top: 2px solid #909399;
    border-right: 2px solid #909399;
    width: 7px;
    height: 7px;
}

.wh_top_tag[data-v-2ebcbc83] {
  color: #409EFF;
  height:30px;
  border-top: 0.5px solid rgba(227, 227, 227, 0.6);
  border-bottom: 0.5px solid rgba(227, 227, 227, 0.6);
}

.wh_container[data-v-2ebcbc83] {
    max-width: 200px;
}

.wh_top_changge[data-v-2ebcbc83] {
    display: flex;
    width: 50%;
    margin-left: 43%;
}

.now-data-myself-time {
   text-align: center;
   color: #F56C6C;
   font-size: 28px;
   height: 30px;
   font-family: "Helvetica Neue";
}

.now-data-myself-week {
   text-align: center;
   font-size: 10px;
   color: #909399;
}
.wh_top_changge .wh_content_li[data-v-2ebcbc83] {
   font-family: Helvetica;
}
</style>