<template>
  <div>
    <Gheader title="我的钱包" back="1" />
    <!-- 当前积分 -->
    <div class="header_con">
      <p>当前余额（元）</p>
      <div class="flex inputBox">
        <p>可提现</p>
        <p class="num">{{money}}</p>
        <p>元</p>
      </div>
      <router-link class="getMoney" to="/exchangeMoney">
        <p>立即提现</p>
      </router-link>
    </div>
    <!-- 金额状况 -->
    <div class="flex_bet moneyBox">
      <div>
        <p>提现中</p>
        <p class="money_item">{{moneyGrade.money_txz}}元</p>
      </div>
      <div>
        <p>已提现</p>
        <p class="money_item">{{moneyGrade.money_ytx}}元</p>
      </div>
    </div>

    <!-- 类型 -->
    <div class="top">
      <van-tabs v-model="active" sticky @click="switchTab">
        <van-tab class="con" :title="item.title" v-for="item in menuList" :key="item.title"></van-tab>
      </van-tabs>

      <!-- 列表 -->
      <div class="main_content">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="list_item" v-for="item in list" :key="item.id">
            <GradeCard
              :score="item.money/100"
              type="money"
              :status="item.status"
              :time="item.ctime"
              :after_score="item.remain/100"
              footer="余额￥"
            />
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import GradeCard from '../components/GradeCard'
export default {
  components: {
    GradeCard
  },
  data() {
    return {
      img: `https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3269503817,396596092&fm=26&gp=0.jpg`,
      money: '',
      list: [],
      menuList: [
        { title: '账单' },
        { title: '寄售收益' },
        { title: '积分转换' }
      ],
      active: 0,
      loading: false,
      finished: false,
start:0,
      limit: 10,
      total: 0
    }
  },
  methods: {
   
    // 团队人数
    queryMoney() {
      this.$store.dispatch('getMoneyGrade')
    },

    queryMoneyList() {
      let { start, limit } = this
      let obj = {
        0: '31',
        1: '21',
        2: '11'
      }
      this.$store.dispatch('queryMoneyList', {
        start,
        status: obj[this.active],
        limit
      })
    },
    onLoad() {
      this.queryMoneyList()
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
      this.queryMoneyList()
    }
  },
  computed: {
    // 钱包积分
    moneyGrade() {
      return this.$store.state.moneyGrade
    },
    moneyList() {
      return this.$store.state.moneyList
    },
    withdrawMoney() {
      return this.$store.state.withdrawMoney
    }
  },
  watch: {
    withdrawMoney(d) {
      console.log(d)
    },
    // 人数
    moneyGrade(data) {
      //  console.log(data)
      this.money = (data.money * 1) / 100
    },
    moneyList(d) {
      let { list, nums } = d
      console.log(list, nums)

      this.list = [...this.list, ...list]
      this.total = nums * 1
      if (this.list.length >= this.total) {
        this.finished = true
        console.log(this.list.length, this.total)
      } else {
        this.finished = false
      }
    }
  },
  mounted() {
    this.queryMoney()
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
  position: relative;
}

.header_con {
  font-size: 0.4rem;
  padding: 0.2rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.header_con p,
.header_con div,
small {
  color: rgba(255, 255, 255, 0.753);
}
.inputBox {
  width: 9rem;
  margin: 0 auto;
  font-size: 0.6rem;
  justify-content: center;
  margin-bottom: 0.2rem;
}
.header_con .num {
  color: #fff;
  font-size: 0.96rem;
  background: transparent;
  border: none;

  margin: 0 0.2rem;
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
.main_content {
  width: 9.4rem;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  padding: 0.2rem;
  box-sizing: border-box;
}
.getMoney {
  width: 4.72rem;
  text-align: center;
  line-height: 0.9333rem;
  height: 0.9333rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.4667rem;
}
.getMoney p {
  color: rgba(231, 0, 2, 1);
}
.moneyBox {
  width: 6rem;
  font-size: 0.4rem;
  margin: 0.4rem auto;
}
.moneyBox p {
  color: rgba(231, 0, 2, 1);
  text-align: center;
}
.money_item {
  border: 1px solid rgba(231, 0, 2, 1);
  background: #fff;
  margin-top: 0.2rem;
  padding: 0 0.2rem;
  border-radius: 2rem;
}
</style>

