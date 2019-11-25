<template>
  <div class="content">
    <van-card :title="title" :thumb="img" @click="routerLink">
      <div slot="desc" class="flex_bet">
        <p class="price_s">{{desc}}</p>
        <p class="price_s">x{{num}}</p>
      </div>
      <div slot="price" class="flex price">
        <p class="price_s" v-if="notTotal">共{{num}}件商品，合计</p>
        <p class="price_p">￥{{total}}</p>
      </div>
    </van-card>
    <!-- 科技手 -->
    <div class="flex_bet btn_box" v-if="type==='sale'">
      <p class="price_s">积分订单</p>
      <div class="btn" @click="handleSale(id)">寄售</div>
    </div>
   <div class="flex_bet btns" v-if="type==='saling'">
      <!-- <p class="price_s">已售*{{sale_nums}} 待售*{{remain_nums}}</p> -->
        <div class="btn "  @click=" handleCancelSale(id)">取消寄售</div>
    </div>

    <!-- 急售中 -->
    <div class="flex_bet btns" v-if="type==='pay'">
      <!-- <p class="price_s">已售*{{sale_nums}} 待售*{{remain_nums}}</p> -->
        <div class="btn cancel"  @click=" handleCancelPay(id)">取消订单</div>
        <div class="btn" @click="handlePay(order_num)">付款</div>
    </div>
    <!-- 待付款 -->
    <div class="flex_bet btn_box" v-if="type==='confirm'">
      <p class="price_s"></p>
      <div class="btn" @click="handleConfirm(id)">确认收货</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {},
    desc: {},
    total: {},
    order_id:{},
    num: {
      default: 1
    },
    img: {},
    notTotal: {
      default: true
    },
    order_num:{},
    price: {},
    type: {},
    id: {},
    sale_nums: {},
    remain_nums: {}
  },
  methods: {
    handleSale(e) {
      this.$emit('handleSale', e)
    },
    handleCancelSale(e) {
      this.$emit('handleCancelSale', e)
    },
    handlePay(e) {
      this.$emit('handlePay', e)
    },
    handleCancelPay(e) {
      this.$emit('handleCancelPay', e)
    },
    handleConfirm(e) {
      this.$emit('handleConfirm', e)
    },
    routerLink(){
        this.$emit('routerLink', this.order_id)
    },
  },
  watch:{
    order_num(d){
      console.log(d)
    }
  }
}
</script>
<style scoped>
.btns{
display: flex;
justify-content: flex-end;
}
.content {
  width: 9.5733rem;
  /* height: 5.1333rem; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  padding: 0.4rem;
  box-sizing: border-box;
}
.van-card {
  background: #fff;
}

.price {
  /* width: 6rem; */
  /* justify-content: flex-end; */
}
.price_s {
  color: #999999;
  font-size: 0.32rem;
}
.price_p {
  color: #e70002;
  font-size: 0.4rem;
}
.van-card__content {
  flex-direction: column;
  justify-content: space-between;
}
.btn {
  width: 2.2133rem;
  height: 0.76rem;
  background: rgba(255, 255, 255, 1);
  border: 0.0267rem solid rgba(231, 0, 2, 1);
  border-radius: 0.3733rem;
  color: #e70002;
  font-size: 0.36rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn_box {
  margin: 0.4rem auto;
}
.cancel{
  width:2.2133rem;
height:0.76rem;
line-height: .76rem;
text-align: center;
background:rgba(255,255,255,1);
border:0.0267rem solid rgba(200,200,200,1);
border-radius:0.3733rem;
color: #C8C8C8;
margin-right: .4rem;
}
</style>