<template>
  <div>
    <p class="orderNum" v-if="orderNum">订单编号：{{orderNum}}</p>
    <van-card :num="num" :price="price" :desc="desc" :title="title" :thumb="thumb" >
      <div slot="tag" class="tag" v-if="tag">
        <img src="../assets/icons/other/w_pay.png" alt />
      </div>
    </van-card>
  </div>
</template>
<script>
export default {
  props: {
    orderNum: {},
    num: {},
    tag: {},
    price: {},
    desc: {},
    title: {},
    thumb: {},

  },
  data() {
    return {}
  }
}
</script>
<style scoped>
.van-card {
  background: #fff;
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
.van-card__title{
  font-size: 0.36rem;
}
</style>