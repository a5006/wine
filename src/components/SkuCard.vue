<template>
  <div class="content">
    <van-card :price="price" :desc="desc" :title="title" :thumb="img">
      <div slot="tag" class="tag">
        <img src="../assets/icons/other/w_pay.png" alt />
      </div>
      <div slot="bottom" class="flex_bet">
        <p>{{tickP}}</p>
    <p class="num">x{{num}}</p>
         </div>
    </van-card>

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
    tickP:{}
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
border-radius:0.2rem;
}
.van-card {
  background: #fff;
  padding: 0;
  /* border-bottom: 1px solid rgb(233, 233, 233); */
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