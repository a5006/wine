<template>
  <div class="type_container">
    <div class="flex">
      <img :src="icon" alt />
      <p class="title">{{title}}</p>
      <p v-if="subTitle" class="subTitle">{{subTitle}}</p>
    </div>
    <div class="flex time_content" v-if="time">
      <p>距离结束还有</p>
      <van-count-down class="time" :time="time">
        <template v-slot="timeData">
                    <span class="item">{{ timeData.days }}天</span>
          <span class="item">{{ timeData.hours }}时</span>
          <span class="item">{{ timeData.minutes }}分</span>
          <span class="item">{{ timeData.seconds }}秒</span>
        </template>
      </van-count-down>
    </div>
    <div class="flex">
<router-link :to="to" tag="span"> 更多</router-link>
      <van-icon name="arrow" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    time: {
      type: [Number || String]
    },
    icon: {
      type: [String]
          },
    title: {
      type: [String]
    },
    subTitle: {
      type: [String]
    },
    to:{
      type:[String],
      default:"/"
    }
  },
  mounted() {
    console.log(this.time)
  }
}
</script>
<style lang="css" scoped>
.type_container {
  margin: .2rem 0;
padding-right: .3rem;
box-sizing: border-box;
  display: flex;
  font-size: 0.3467rem;
  color: #666;
height: 1rem;
align-items: center;
  justify-content: space-between;
}
.flex{
  display: flex;
height: 1rem;
align-items: center;
}
img {
  width: 0.7rem;
  height: 0.6rem;
}
.title {
color:#333;
  font-size: 0.4rem;
  margin: 0 .2rem;
}
.time{
  margin-left: .2rem;
}
.item {
  display: inline-block;
  width: .5rem;
  margin-right: 5px;
  color: #fff;
  font-size: 0.16rem;
  text-align: center;
  background-color: #e70002;
}
.time_content{
  flex:2;
  font-size: .2rem;
}
</style>