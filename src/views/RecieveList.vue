<template>
  <div>
    <Gheader title="提货办理" back="1" />
    <!-- tabs -->
    <van-tabs v-model="active" sticky @click="switchTab">
      <van-tab class="con" :title="item.title" v-for="item in menuList" :key="item.title"></van-tab>
    </van-tabs>
    <!-- 列表 -->
    <div class="list pad_container">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        van-clearfix
      >
        <div class="list_item" v-for="item in list" :key="item.order_id">
          <ReceiveCard
            :desc="item.goods_attr"
            :title="item.goods_name"
            :id="item.order_id"
            :img="formatImg(item.goods_cover)"
            :price="item.goods_price"
            :nums="item.th_nums"
            :total="item.total_amount"
            :btn="btn"
            @handle="handle"
          />
        </div>
      </van-list>
    </div>
  </div>
</template>
<script>
import ReceiveCard from '../components/ReceiveCard'
export default {
  components: {
    ReceiveCard
  },
  data() {
    return {
      list: [],
      menuList: [
        { title: '可提货' },
        { title: '待发货' },
        { title: '待收货' },
        { title: '已完成' }
      ],
      active: 0,
      loading: false,
      finished: false,
      start: 0,
      limit: 10,
      total: 0,
      btn: ''
    }
  },
  methods: {
    queryOrderList() {
      let { start, limit } = this
      let path = {
        0: 'my/thbl/kth/list',
        1: 'my/thbl/dfh/list',
        2: 'my/thbl/dsh/list',
        3: 'my/thbl/ywc/list'
      }[this.active]
      this.btn = {
        0: '提货',
        1: '',
        2: '确认收货',
        3: ''
      }[this.active]
      this.$store.dispatch('queryReceiveList', {
        start,
        limit,
        path
      })
    },
    // 可提货和待收货状态，点击按钮触发事件
    handle(d) {
      // let path = {
      //   0: 'my/thbl/sqth',
      //   2: 'my/thbl/qdsh'
      // }[this.active]
      console.log(d)
    switch (this.active) {
      case 0:
         this.$store.dispatch('deleveryGoods', {
        order_id: d
      })
        break;
    
      default:
    this.$store.dispatch('confirmRecieveGoods', {
        order_id: d
      })
        break;
    }


 
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
    }
  },
  computed: {
    operateOrder() {
      return this.$store.state.operateOrder
    },
    receiveList() {
      return this.$store.state.receiveList
    },

  },
  watch: {
    // 如果操作了就要刷新页面
    operateOrder: {
      handler(d) {
     let successMessage = {
        0: '提货申请已提交，等待发货~~',
        2: '已确认收货，感谢您的惠顾~~'
      }[this.active]
      if (d.data) {
          this.queryOrderList()
        console.log(d,'suc')
        this.$dialog.alert({
          message: successMessage
        })
       
      } else {
        this.$dialog.alert({
          message: '提交失败，请稍后重试'
        })
      }
   // console.log(d)
        // if (d.data) {
        //   console.log(d.data,'afsdd')
        //   this.queryOrderList()
        // }
      },
      deep: true
    },
    receiveList(d) {
      let { list, nums } = d
      list = list.map(item => {
        item.img = this.formatImg(item.goods_cover)
        item.getTime = this.formatDate(item.ctime)
        item.endTime = isNaN(item.etime * 1000) ? null : item.etime * 1000
        return item
      })
      this.list = [...this.list, ...list]
      this.total = nums * 1
      if (this.list.length >= this.total) {
        console.log('yes')
        this.finished = true
      } else {
        this.finished = false
      }
    },
    // operateOrder(d) {
    
    // },
    active(a) {
      if (a != 0 && this.source == '3') {
        this.source = '1'
      }
    },
    source() {
      this.resetQuery()
    }
  },
  mounted() {
    this.active = this.$route.query.active || 0
  }
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