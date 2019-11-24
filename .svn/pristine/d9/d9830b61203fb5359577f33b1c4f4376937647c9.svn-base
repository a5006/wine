<template>
  <div>
    <Gheader title="寄售商品" back="1" />
    <!-- tabs -->
    <van-tabs v-model="active" sticky @click="switchTab">
      <van-tab class="con" :title="item.title" v-for="item in menuList" :key="item.title"></van-tab>
    </van-tabs>
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
            :img="formatImg(item.goods_cover)"
            :price="item.goods_price"
            :nums="item.goods_nums"
            :id="item.order_id"
            :total="item.total_amount"
            @handleSale="handleSale"
            @handleCancelSale="handleCancelSale"
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
      list: [],
      menuList: [{ title: '可寄售' }, { title: '寄售中' }, { title: '已售完' }],
      active: 0,
      loading: false,
      finished: false,
      start: 0,
      limit: 10,
      total: 0
    }
  },
  methods: {
    querySaleList() {
      let { start, limit } = this
      switch (this.active) {
        case 0:
          this.$store.dispatch('mySaleList', {
            start,
            limit
          })
          return
        case 1:
          this.$store.dispatch('mySalingList', {
            start,
            limit
          })
          return
        case 2:
          this.$store.dispatch('mySaledList', {
            start,
            limit
          })
          return

        default:
          return
      }
    },
    // 寄售操作
    handleSale(order_id) {
      this.$store.dispatch('handleSale', {
        order_id
      })
    },
    // 取消寄售
    handleCancelSale(order_id) {
      this.$store.dispatch('handleCancelSale', {
        order_id
      })
    },
    onLoad() {
      this.querySaleList()
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
      this.querySaleList()
    }
  },
  computed: {
    mySaleList() {
      return this.$store.state.mySaleList
    },
    type() {
      switch (this.active) {
        case 0:
          return 'sale'
        case 1:
          return 'saling'

        default:
          return ''
      }
    },
    salingData() {
      return this.$store.state.salingData
    }
  },
  watch: {
    salingData:{
      handler(d){
      console.log(d)
      if (d.data ) {
        this.resetQuery()
      }
      },
      deep:true,
    },
    mySaleList(d) {
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
    }
    // active(a) {
    //   this.resetQuery()

    // }
  }
}
</script>
<style scoped>
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