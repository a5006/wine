<template>
  <div>
    <Gheader title="我的订单" back="1" />
    
    <!-- tabs -->
    <van-tabs v-model="active" sticky @click="switchTab">
      <van-tab class="con" :title="item.title" v-for="item in menuList" :key="item.title"></van-tab>
    </van-tabs>
    <!-- 按钮 -->
    <van-radio-group v-model="source" class="flex_bet radio_box">
      <van-radio checked-color="#E70002" name="1" shape="square" class="radio_item">零售区</van-radio>
      <van-radio
        checked-color="#E70002"
        name="3"
        shape="square"
        class="radio_item"
        v-if="this.active===0"
      >代理区</van-radio>

      <van-radio checked-color="#E70002" name="2" shape="square" class="radio_item">会员尊享区</van-radio>
    </van-radio-group>
    <!-- 列表 -->
    <div class="list pad_container">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="list_item" v-for="item in list" :key="item.order_id">
          <SaleCard
            :type="type"
            :sale_nums="item.sale_nums"
            :remain_nums="item.remain_nums"
            :desc="item.goods_attr"
            :title="item.goods_name"
            :id="item.order_id"
            :order_num="item.order_num"
            :img="formatImg(item.goods_cover)"
            :price="item.goods_price"
            :nums="item.buy_num"
            :total="item.order_amount"
            @handleCancelPay="handleCancelOrder"
            @handleConfirm="handleReceipt"
            @handlePay="handlePay"
          />
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import SaleCard from '../components/SaleCard'
export default {
  components: {
    SaleCard
  },
  data() {
    return {
      source: '1',
      list: [],
      menuList: [
        { title: '待付款' },
        { title: '待发货' },
        { title: '待收货' },
        { title: '已完成' }
      ],
      active: 0,
      loading: false,
      finished: false,
      start: 0,
      limit: 10,
      total: 0
    }
  },
  methods: {
    queryOrderList() {
      let { start, limit, source } = this
      let obj = {
        1: 4,
        2: 5,
        3: 7
      }

      switch (this.active) {
        case 0:
          this.$store.dispatch('waitPayOrderList', {
            start,
            source,
            limit
          })
          return
        default:
          this.$store.dispatch('queryMyOrderList', {
            start,
            status: obj[this.active],
            source,
            limit
          })
          return
      }
    },
    // 支付
    handlePay(d){
      console.log(d)
      window.location.href = `https://jhhy.vsapp.cn/mobile/pay/index?order_num=${this.order_num}&backup=/me`
    },
    onLoad() {
      this.queryOrderList()
      this.start += this.limit
      this.loading = false
    },
    switchTab() {
      this.resetQuery()
    },
    resetQuery() {
      this.start = 0
      this.list = []
      // this.list = []
      // this.loading =false
      this.queryOrderList()
    },
    // 取消订单
    handleCancelOrder(order_id) {
      this.$store.dispatch('handleCancelOrder', {
        order_id
      })
    },
    // 确认收货
    handleReceipt(order_id) {
      this.$store.dispatch('handleReceipt', {
        order_id
      })
    }
  },
  computed: {
    handleOrder(){
      return this.$store.state.handleOrder
    },
    myOrderList() {
      return this.$store.state.myOrderList
    },
    type() {
      switch (this.active) {
        case 0:
          return 'pay'
        case 2:
          return 'confirm'

        default:
          return ''
      }
    }
  },
  watch: {
    // 如果操作了就要刷新页面
    handleOrder:{
      handler(d){
        console.log(d)
        if(d.data){
          this.queryOrderList()
        }
      },
      deep:true,
    },
    myOrderList(d) {
      console.log(d)
      let { list, nums } = d
      list = list.map(item => {
        console.log(item)
        item.img = this.formatImg(item.goods_cover)
        item.getTime = this.formatDate(item.ctime)
        item.endTime = isNaN(item.etime * 1000) ? null : item.etime * 1000
        console.log(item.endTime)
        return item
      })
      this.list = [...this.list, ...list]
      this.total = nums * 1
      if (this.list.length >= this.total) {
        this.finished = true
        console.log(this.list.length, this.total)
      } else {
        this.finished = false
      }
    },
    active(a) {
      if (a != 0 && this.source == '3') {
        this.source = '1'
      }
    },
    source() {
      this.resetQuery()
    }
  },
  mounted(){
  this.active = this.$route.query.active||0
  },
}
</script>
<style scoped>
.radio_box {
  width: 7rem;
  margin: 0 auto;
}
.radio_item {
  font-size: 0.4rem !important;
}
.header_con {
  width: 9.5733rem;
  height: 4.24rem;
  background-color: rgba(231, 0, 2, 1);
  background-image: url('../assets/icons/other/bg_d.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  margin: 0.2rem auto;
}
.header_con {
  font-size: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header_con p,
.header_con div,
small {
  color: rgba(255, 255, 255, 0.753);
}
.list_item {
  margin-bottom: 0.2rem;
}
.header_con .num {
  color: #fff;
  font-size: 0.96rem;
}
.header_con .right {
  display: flex;
  width: 2.0133rem;
  height: 0.7467rem;
  border: 0.0267rem solid rgba(255, 255, 255, 1);
  border-radius: 0.3733rem;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.van-tab__pane {
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.1333rem;
  overflow: hidden;
  width: 9.6rem;
  margin: 0.2rem auto;
}
.right::before {
  content: '';
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url('../assets/icons/other/exchange.png');
}
.van-cell {
  background: transparent;
  padding: 0;
  margin-bottom: 0.3rem;
}
</style>