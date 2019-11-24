<template>
  <div>
    <Gheader back="1" :title="payType"/>
    <div class="content">
      <div class="payType">
        <h1>{{payType}}</h1>
        <div class="payType_time" v-if="time">
          <van-count-down :time="time">
            <template v-slot="timeData">
              剩余
              <span class="item">{{ timeData.hours }}时</span>
              <span class="item">{{ timeData.minutes }}分</span>
              <span class="item">{{ timeData.seconds }}秒</span>
              自动关闭
            </template>
          </van-count-down>
        </div>
        <p class="light" v-else>感谢您的购买。</p>
      </div>
      <!-- 图片 -->
      <img class="img" :src="payType==='待支付'?nonePaid:paid" alt="">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    payType: {},
    time: {}
  },
  data() {
    return {
      nonePaid: require('../assets/icons/other/wait_pay.png'),
      paid: require('../assets/icons/other/pay_suc.png')
    }
  }
}
</script>
<style scoped>
.content {
  color: #fff;
  width: 10rem;
  padding: 0 1.2rem;box-sizing: border-box;
  height: 2.6133rem;
  background: rgba(231, 0, 2, 1);
position: relative;
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
}
.content{
  display: flex;
align-items: center;
justify-content: space-between;
}
.payType h1,
.payType p {
  color: #fff;
  font-size: 0.48rem;
}
.payType p{
  font-size: 0.3467rem;
}
.light{
  margin-top: .2rem;
}
.payType_time{
  margin-top: .3rem;
}
.item,.van-count-down,.payType .light{
  color: rgba(255, 255, 255, 0.842);
}
.img{
width: 1.9333rem;
height: 1.6667rem;
}

</style>