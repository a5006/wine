<template>
  <div class="content">
    <van-card :num="num" :price="price" :desc="desc" :title="title" :thumb="img">
      <div slot="tag" class="tag">
        <img src="../assets/icons/other/w_pay.png" alt />
      </div>
    </van-card>
    <div class="flex footer">
      <p>代理寄售-零售</p>
      <div class="mid">
        <p class="small">实付金额</p>
        <p>￥{{pay_amount}}</p>
      </div>
      <div>
        <p class="small">获得分利</p>
        <p>￥{{zt_score}}</p>
      </div>
    </div>
    <div class="small_box">
      <p class="small">分利者： {{ztr_name}}     {{ztr_phone}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    orderNum: {},
    num: {},
    price: {},
    desc: {},
    title: {},
    img: {},
    ztr_name:{},
ztr_phone:{},
pay_amount:{},
zt_score:{}
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.content{
  background: #fff;
  padding: .4rem;
  box-shadow:0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
border-radius:0.2rem;
margin: .2rem 0;
}
.van-card {
  background: #fff;
  padding: 0;
  padding-bottom: .4rem;
  margin-bottom: .4rem;
  border-bottom: 1px solid rgb(233, 233, 233);
}
.van-card__price {
  font-size: 0.5333rem;
}
.van-card__desc {
  color: #999;
  margin: 0.2rem 0;
}
.orderNum {
  display: block;
  padding: 0.2rem 0.5rem;
  color: #999;
}
.tag img {
  width: 0.8rem;
}
.van-card__title {
  font-size: 0.36rem;
}
.footer p{
  font-size: .4rem;
  color: #333;
  text-align: center;
}
div .small{
  font-size: 0.32rem;
  color: #999999;
}
.mid{
  margin: 0 .4rem;
}
.small_box{
  margin-top: .2rem;
}
</style>