<template>
  <div class="order_container">
    <PayHeader :time="time" payType="待支付" />

    <div class="pad_container">
      <!-- 地址 -->
      <OrderAddress :address="address"  :icon="addrIcon"/>
      <!-- 购物车 -->
      <div class="card">
        <!-- 商品图 -->
        <GoodsCard :num="num" :price="price" :desc="desc" :title="title" :thumb="thumb" />
        <!-- 购买数量 -->

        <div class="ticket">
          <p>赠送代理资格券</p>
          <p class="ticket_num">{{ticket_num}}张</p>
        </div>
      </div>
      <!-- 钱包抵扣 -->

      <div class="pocket ">
        <div class="flex">
          <p>订单来源：</p>
          <p class="gray">{{orderFrom}}</p>
        </div>
        <div class="flex">
          <p>订单编号：</p>
          <p class="gray">{{orderNum}}</p>
        </div>
        <div class="flex">
          <p>下单时间：</p>
          <p class="gray">{{orderTime}}</p>
        </div>
      </div>
      <!-- 金额 -->
            <div class="pocket ">
        <div class="flex_bet">
          <p>商品总额：</p>
          <p class="gray">￥{{orderMoney}}</p>
        </div>
        <div class="flex_bet">
          <p>钱包抵扣：</p>
          <p class="gray">￥{{orderDiscount}}</p>
        </div>
        <div class="flex_bet">
          <p></p>
          <p class="gray">需要支付： <b class="red"> ￥{{orderPay}}</b></p>
        </div>
      </div>
      <!-- 付款 -->
      <div class="footer">
        <div class="cancel orderBtn">
          取消订单
        </div>
        <div class="submit orderBtn">
          提交订单
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PayHeader from '../components/PayHeader.vue'
import OrderAddress from '../components/OrderAddress.vue'
import GoodsCard from '../components/GoodsCard.vue'
export default {
  components: {
    OrderAddress,
    GoodsCard,
    PayHeader
  },
  data() {
    return {
      addrIcon:require('../assets/icons/other/address.png'),
      orderMoney:'123123',
      orderPay:'312312',
      orderDiscount:'12312',
      orderTime: '2019-02-12',
      orderFrom: '零售专区',
      orderNum: '12312312sdfaf123',
      time: 100044400,

      btn_loading: false,
      all_num: 1,
      all_price: 10000,
      pocket_check: false,
      ticket_num: 6,
      step_num: 1,
      money: '123',
      title: '茅台迎宾53度茅台迎宾酒500ml礼盒装酒厂直供',
      desc: '度数：42°',
      price: '10000',
      num: 1,
      thumb: 'https://img.yzcdn.cn/vant/t-thirt.jpg',
      activeIcon: require('../assets/icons/other/radio_c.png'),
      inactiveIcon: require('../assets/icons/other/radio.png'),
      address: {
        name: '张三',
        phone: '123123123',
        addr: '广东省深圳市西丽区桃园街道某某某某社区某某某小区'
      },
      radioList: [
        {
          id: 0,
          name: '1',
          label: '测试1'
        },
        {
          id: 1,
          name: '2',
          label: '测试2'
        }
      ],
      orderWay: '1'
    }
  }
}
</script>
<style scoped>
.order_container {
  font-size: 0.4rem;
  margin-bottom: 2rem;
}

.icon {
  width: 0.5rem;
}
.card {
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  overflow: hidden;
  background: #fff;
  margin: 0.2rem 0;
}

.step {
  margin: 0 auto;
  margin-top: 0.2rem;
  padding: 0.5rem 0;
  width: 8.8rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e3e3e3;
}
.ticket {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 8.8rem;
  margin: 0 auto;
  margin-bottom: 0.3rem;
  font-size: 0.3733rem;
  padding: 0.4rem 0;
  margin-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-top: 1px solid #e7e7e7;
}
.ticket_num {
  color: #d2d2d2;
  max-width: 3.4rem;
}
.pocket {
  background: #fff;
  padding: 0.5rem 0.3rem;
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  margin-bottom: .2rem;
}
.money {
  margin-left: 0.2rem;
  font-size: 0.3467rem;
}
.footer {
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 10rem;
  margin: auto;
  display: flex;
  height: 1.6rem;
  padding-left: 4rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
}
b {
  font-size: 0.5333rem;
  color: #e70002;
}
.van-button--default {
  color: #fff;
  background-image: url('../assets/icons/home/buy.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-color: transparent;
  border: none;
  width: 3.5rem;
  padding-left: 0.1rem;
}
.van-button__text {
  color: #fff;
}
.pocket {
  font-size: 0.3733rem;
}
.pocket>div{
  margin: .12rem 0;
}
.gray {
  color: #999;
}
.red{
  color: #E70002;
  font-size: 0.5867rem;
}
.orderBtn{
  width:2.2133rem;
height:0.76rem;
background:rgba(255,255,255,1);
border:0.0267rem solid rgba(200,200,200,1);
border-radius:0.3733rem;
font-size: 0.3467rem;
text-align: center;
line-height: .76rem;
}
.submit{
 color: #E70002;
 border:0.0267rem solid #E70002;
}
</style>