<template>
  <div>
    <Gheader title="我的积分" back="1" />
    <!-- 当前积分 -->
    <div class="header_con">
      <div class="left">
        <p>当前积分</p>
        <input class="num" v-model="money" placeholder type="number" />
        <small>现金：积分=1：1；满100倍数可兑换</small>
      </div>
      <div class="right"></div>
    </div>

    <!-- 兑换积分 -->
    <div class="exchange" @click="handleExchange">立即兑换</div>
    <p class="exNum">已经成功兑换{{num}}分</p>
    <div class="pad_container">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item.id">
          <GradeCard
            :score="item.score"
            :status="item.status"
            :time="item.ctime"
            :after_score="item.after_score"
          />
        </van-cell>
      </van-list>
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
      num: '',
      list: [],
      money: 0,
      loading: false,
      finished: false,

      limit: 10,
      total: 0
    }
  },
  methods: {
    // 兑换
    handleExchange() {
      if (this.money * 1 < 100) {
        this.$toast('金额必须大于100')
        return
      }
      this.$store.dispatch('transToMoney')
    },
    queryMemberList() {
      let { start, limit } = this
      this.$store.dispatch('getExchangeList', {
        start,
        limit
      })
    },
    onLoad() {
      this.queryMemberList()
      this.start += this.limit
      this.loading = false
    },
    // 获取我的钱包
    getMoneyGrade(){
      this.$store.dispatch('getMoneyGrade')
    },
  },
  computed: {
    // 我得钱包
    moneyGrade(){
      return this.$store.state.moneyGrade
    },
    // 兑换记录
    exchangeList() {
      return this.$store.state.exchangeList
    },
    transToMoney() {
      return this.$store.state.transToMoney
    }
  },
  watch: {
    // 我的钱包
    moneyGrade(d){
      this.num = d.score_exchange
      this.money = d.score
      console.log(d)
    },
    // 兑换是否成功
    transToMoney(d) {
      console.log(d)
    },
    exchangeList(d) {
      console.log(d)
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
    this.getMoneyGrade()
  }
}
</script>
<style scoped>
.header_con {
  width: 9.5733rem;
  height: 4.24rem;
  /* background-color: rgba(231, 0, 2, 1); */
  background-image: url('../assets/icons/other/bg_w.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  margin: 0.2rem auto;
  color: #e70002;
}
.header_con {
  font-size: 0.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem;
  box-sizing: border-box;
}
.header_con p,
.header_con div,
small {
  color: #e70002;
}
.header_con .num,
.van-field__control {
  color: #e70002;
  display: block;
  font-size: 0.8rem;
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
.exchange {
  width: 9rem;
  height: 1.3467rem;
  text-align: center;
  background: #e70002;
  line-height: 1.3467rem;
  margin: 0.2rem auto;
  margin-top: 0.3rem;
  color: #fff;
  border-radius: 0.7rem;
}
.exNum {
  color: #e70002;
  font-size: 0.4rem;
  padding: 0 0.4rem;
}
</style>