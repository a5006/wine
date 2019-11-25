<template>
  <div class="order_container">
    <Gheader title="确认订单" back="1" />

    <div class="pad_container">
      <!-- 地址 -->
<router-link  to="/myAddr" tag="div" >
    <OrderAddress :address="address" v-if="Object.keys(address).length"/>
      <div class="addAddr" v-else>
      添加地址
       <van-icon name="arrow" />
         </div>
</router-link>
    
    
      <!-- 购物车 -->
      <div class="card">
        <!-- 商品图 -->
        <GoodsCard :num="buy_num" :price="parseFloat(price)/100" :desc="desc" :title="title" :thumb="thumb" />
        <!-- 购买数量 -->
        <div class="step">
          <p>购买数量</p>
          <van-stepper v-model="buy_num" button-size="22px" />
        </div>
        <div class="ticket">
          <p>需要代理资格券</p>
          <p class="ticket_num">{{ticket_num}}张</p>
        </div>
      </div>
      <!-- 钱包抵扣 -->

      <div class="pocket flex_bet">
        <div class="flex">
          <van-checkbox v-model="pocket_check" shape="square" checked-color="#E70002">钱包余额</van-checkbox>
          <p class="money">(余额￥{{formatPrice(money)}})</p>
        </div>
        <p class="ticket_num small">可抵扣￥{{formatPrice(countMoney)}}</p>
      </div>
      <!-- 付款 -->
      <div class="footer">
        <p>
          共 {{buy_num}} 件，合计
          <b>￥{{parseFloat(all_price)/100}}</b>
        </p>
        <van-button type="default" :loading="btn_loading" loading-text="提交中.." @click="submitPay">付款</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import OrderAddress from '../components/OrderAddress.vue'
import GoodsCard from '../components/GoodsCard.vue'
export default {
  components: {
    OrderAddress,
    GoodsCard
  },
  data() {
    return {
      btn_loading: false,
      all_num: 1,
      all_price: 10000,
      pocket_check: false,
      ticket_num: 6,
      buy_num: 1,
      money: '',
      title: '',
      addr_id: '',
      countMoney:0,
      period_id: '',
      desc: '',
      price: '',
      qbdk: 0,
      midPrice:"",
      source: '',
      thumb: '',
      activeIcon: require('../assets/icons/other/radio_c.png'),
      inactiveIcon: require('../assets/icons/other/radio.png'),
      address: {
        name: '',
        mobie: '',
        address: ''
      },
      orderWay: '1'
    }
  },
  watch: {
    pocket_check(d) {
      console.log(d)
      this.qbdk = d ? 1 : 0
if(d){
  // 可抵扣余额变化
  this.countMoney = this.all_price>this.money?this.money:this.all_price
}else{
  // 可抵扣余额变化

this.countMoney = 0;
}

    // if(d){
    //    this.all_price= parseFloat(this.all_price) -parseFloat(this.money)<=0?0:parseFloat(this.all_price) -parseFloat(this.money)
    //    if(parseFloat(this.money)>parseFloat(this.all_price)){
    //          this.countMoney = this.midPrice/100
    //    }else{
    // this.countMoney = this.all_price/100
    //    }
   
    // }else{
    //   this.all_price = this.midPrice
    //   this.countMoney =0
    // }
    },
    buy_num(d) {
      this.all_price = d * this.price
    },
    moneyGrade(d) {
      this.money = d.money
    },
    //地址
    addrList(d) {
      if (d.length > 0) {
        // 获取默认地址
        let arr = d.map(item => item.default && item)
        //  没有默认地址,获取第一个
        if (arr.length === 0) {
          arr = d[0]
        }

        this.address = arr[0]
        this.addr_id = this.address.id
      } else {
        // 没有地址
      }
    },
    createOrder(d){
      console.log(d)
   if(d.topay){
        window.location.href = d.topay+'&backurl=https://jhhy.vsapp.cn/h5/#/me'
   }
    },
  },
  methods: {
    // 支付
    submitPay() {
      let {
        order_num,
        goods_id,
        attr_id,
        buy_num,
        qbdk,
        addr_id,
        period_id,
        source
      } = this
  
      this.$store.dispatch('createOrder',{
          order_num,
        goods_id,
        attr_id,
        buy_num,
        qbdk,
        addr_id,
        period_id,
        source
      })

    },
    queryAddrList() {
      this.$store.dispatch('getAddrList')
    },
    getParams() {
      let {
        source,
        goods_id,
        price,
        period_id,
        attr_id,
        name,
        dlq_add_nums,
        dlq_need_nums,
        img,
        goods_name,
        buy_num,
        order_num
      } = this.$route.query
      this.title = goods_name
      this.desc = `度数：${name}`
      this.price = price
      // this.num = buy_num
      this.buy_num = buy_num
      this.thumb = img
      this.ticket_num = dlq_need_nums || dlq_add_nums
      this.all_price = price * buy_num
      this.midPrice = this.all_price
      this.source = source
      this.goods_id = goods_id
      this.period_id = period_id
      this.attr_id = attr_id
      this.order_num = order_num
    },
    // 获取我的钱包
    getMoneyGrade() {
      this.$store.dispatch('getMoneyGrade')
    }
  },
  computed: {
    addrList() {
      return this.$store.state.addrList
    }, // 我得钱包
    moneyGrade() {
      return this.$store.state.moneyGrade
    },
    createOrder(){
      return this.$store.state.createOrder
    },
  },

  mounted() {
    this.getParams()
    // 地址列表
    this.queryAddrList()
    // 钱包
    this.getMoneyGrade()
  }
}
</script>
<style scoped>
.addAddr{
  background: #fff;
  padding: .4rem ;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
}
.order_container {
  font-size: 0.4rem;
}
.way {
  background: #fff;
  padding: 0.3rem 1rem;
  box-sizing: border-box;
}
.way p {
  color: #666;
}
.way_checkbox {
  display: flex;

  align-items: center;
  margin: 0.3rem 0;
}
.way_checkbox .van-radio {
  margin-right: 0.5rem;
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
.small {
  font-size: 0.3rem;
}
</style>