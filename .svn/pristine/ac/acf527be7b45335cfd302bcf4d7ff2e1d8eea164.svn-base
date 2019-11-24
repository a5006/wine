<template>
  <div>
    <div class="card">
      <div class="head flex_bet">
        <p class="title">代理资格券</p>
        <div class="time flex"  v-if="endTime">
          于
          <van-count-down :time="endTime">
            <template v-slot="timeData">
           <div class="flex">   <span class="item">{{ timeData.days }}</span><p>天</p>
              <span class="item">{{ timeData.hours }}</span><p>时</p>
              <span class="item">{{ timeData.minutes }}</span><p>分</p>
              <span class="item">{{ timeData.seconds }}</span></div>
            </template>
          </van-count-down>后过期
        </div>
      </div>
      <van-card price="2.00" desc="描述信息" title="商品标题" :thumb="img">
        <p class="stitle" slot="title">订单号:{{orderNum}}</p>
        <p class="desc" slot="desc">{{desc}}</p>
        <p class="getTime" slot="price">获得时间：{{getTime}}</p>
      </van-card>
      <img v-if="type&&icon" class="img" :src="icon" alt />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {},
    img: {},
    title: {},
    endTime: {},
    desc: {},
    getTime: {},
    orderNum: {}
  },
  data() {
    return {
      used: require('../assets/icons/other/used.png'),
      expired: require('../assets/icons/other/outDate.png')
    }
  },
  computed: {
    icon() {
      return this[this.type]
    }
  },
  mounted() {
    console.log(this.type)
  }
}
</script>
<style scoped>
.card {
  position: relative;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  overflow: hidden;
  padding: 0.3rem;
  box-sizing: border-box;
}
.time {
  font-size: 0.3467rem;
  color: #999;
}
.title{
  font-size: .4rem;
}
.stitle {
  color: #999;
}
.desc {
  color: #333;
  font-size: 0.4rem;
}
.getTime {
  color: #fa3652;
  font-size: 0.2933rem;
}
.van-card {
  background: #fff;
}
.img {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 3rem;
  height: 3rem;
}
</style>