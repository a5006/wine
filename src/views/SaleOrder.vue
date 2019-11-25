<template>
  <div>
    <Gheader title="订单详情" back="1" />
    <div class="title_card flex_bet">
      <p>{{statusType}}</p>
      <img src="../assets/icons/other/wait_pay.png" alt />
    </div>
    <div class="pad_container">
      <van-card :title="order_goods.goods_name" :thumb="formatImg(order_goods.goods_cover)">
        <div slot="desc" class="flex_bet">
          <p class="price_s">{{order_goods.goods_attr}}</p>
          <p class="price_s">x{{order_goods.buy_num}}</p>
        </div>

        <div slot="price" class="flex price">
          <p class="price_p">￥{{order_goods.goods_price}}</p>
        </div>
      </van-card>
      <!-- 代理寄售 -->
      <div class="flex_bet order_content">
        <p>代理寄售-零售</p>
        <div>
          <p>实付金额</p>
          <p class="price">￥1000</p>
        </div>
        <p>获得分利</p>
        <p class="price">￥1000</p>
      </div>
      <!-- 订单来源 -->
      <div class="order_content">
        <div class="flex">
          <p>订单来源</p>
          <p class="gray">{{order_info.source}}</p>
        </div>
        <div class="flex">
          <p>订单编号</p>
          <p class="gray">{{order_info.order_num}}</p>
        </div>
        <div class="flex">
          <p>下单时间</p>
          <p class="gray">{{ formatDate(order_info.order_time)}}</p>
        </div>
        <!-- <div class="flex">
          <p>支付方式</p>
          <p class="gray">{{order_info.order_num}}</p>
        </div>-->
        <div class="flex">
          <p>支付时间</p>
          <p class="gray">{{ formatDate(order_info.paid_time)}}</p>
        </div>
      </div>
      <div class="order_content">
        <div class="flex_bet">
          <p>钱包抵扣</p>
          <p class="gray">￥{{order_info.qbdk_amount}}</p>
        </div>
        <div class="flex_bet">
          <p>商品总额</p>
          <p class="gray">￥{{order_info.goods_amount}}</p>
        </div>
        <div class="footer_p">
          <p>实付金额：</p>
          <p class="footer_price">￥{{order_info.pay_amount}}</p>
        </div>
      </div>
      <!-- 尾部 -->
      <div class="footer" v-if="statusType==='可寄售'||statusType==='寄售中'">
        <div class="btn" @click="handleSale" v-if="statusType==='可寄售'">寄售</div>
        <div class="btn" @click="handleCancelSale" v-if="statusType==='寄售中'">取消寄售</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order_goods: {
        buy_num: '',
        goods_attr: '',
        goods_cover: '',
        goods_id: '',
        goods_name: '',
        goods_price: ''
      },
      order_info: {
        source: '',
        goods_amount: '',
        order_id: '',
        order_num: '',
        order_time: '',
        paid_time: '',
        pay_amount: '',
        qbdk_amount: ''
      },
      status: ''
    }
  },
  methods: {
    // 寄售操作
    handleSale() {
      let { order_id } = this.order_info
      this.$store.dispatch('handleSale', {
        order_id
      })
    },
    // 取消寄售
    handleCancelSale() {
      let { order_id } = this.order_info
      this.$store.dispatch('handleCancelSale', {
        order_id
      })
    },
    saleOrder() {
      let { order_id } = this.$route.query
      this.$store.dispatch('saleOrder', {
        order_id
      })
    }
  },
  computed: {
    myOrder() {
      return this.$store.state.saleOrder
    },
    statusType() {
      switch (this.status) {
        case 1:
          return '可寄售'
        case 2:
          return '寄售中'
        case 3:
          return '寄售完成'
        case 4:
          return '只可提货'

        default:
          return ''
      }
    }
  },
  watch: {
    myOrder(d) {
      let { order_goods, order_info, status } = d
      this.order_goods = order_goods
      this.order_info = order_info
      this.status = status
      var obj = {
        1: '零售区',
        2: '会员区',
        3: '代理区'
      }
      this.order_info.source = obj[order_info.source]
      console.log(d)
    }
  },
  mounted() {
    this.saleOrder()
  }
}
</script>
<style scoped>
.footer {
  width: 10rem;
  margin: 0 auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 1.4933rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: flex-end;
  padding: .4rem;
  align-items: center;
  box-sizing: border-box;

}
div .title_card {
  background: #e70002;
  margin: 0;
  height: 3rem;
  padding: 0 1rem;
}
.title_card img {
  width: 2rem;
}
.title_card p {
  font-size: 0.4rem;
  color: #fff;
}
.flex_bet,
.flex {
  margin: 0.2rem 0;
}
.footer_p {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.order_content {
  background: #fff;
  margin: 0.2rem auto;
  box-sizing: border-box;
  padding: 0.4rem;
}
p {
  font-size: 0.36rem;
}
div p.gray {
  color: #999;
  font-size: 0.32rem;
  margin-left: 0.2rem;
}
.footer_price {
  font-size: 0.45rem;
  color: #e70002;
}
.btns {
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
.price {
  color: #e70002;
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
.cancel {
  width: 2.2133rem;
  height: 0.76rem;
  line-height: 0.76rem;
  text-align: center;
  background: rgba(255, 255, 255, 1);
  border: 0.0267rem solid rgba(200, 200, 200, 1);
  border-radius: 0.3733rem;
  color: #c8c8c8;
  margin-right: 0.4rem;
}
</style>