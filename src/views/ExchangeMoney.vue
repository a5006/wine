<template>
  <div>
    <Gheader title="余额提取" back="1" />
    <!-- 当前积分 -->
    <div class="header_con">
      <div class="left">
        <p>提取金额</p>
        <div class="flex money_box">
          ￥
          <input class="num" v-model="money" placeholder type="number" />
        </div>
        <small>可以提现金额￥{{avaliableMoney}}</small>
      </div>
      <div class="right"></div>
    </div>

    <!-- 兑换积分 -->
    <div class="exchange" @click="handleWithdrawMoney">立即兑换</div>

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
      money: '0',
      avaliableMoney: '',
      list: [],
      menuList: [{ title: '审核' }, { title: '提现中' }, { title: '已提现' }],
      active: 0,
      loading: false,
      finished: false,
  start:0,
      limit: 10,
      total: 0
    }
  },
  methods: {
    // 提取钱
    handleWithdrawMoney() {
      let { money } = this
      if (money < 100) {
        this.$toast('金额不能小于100元')
        return
      }

      this.$dialog
        .confirm({
          title: '提现',
          message: `是否提现${money}元`
        })
        .then(() => {
          // on confirm
          this.$store.dispatch('withdrawMoney', {
            money: money * 100
          })
        })
        .catch(() => {
          // on cancel
        })
    },
    // 团队人数
    queryMoney() {
      this.$store.dispatch('getMoneyGrade')
    },

    queryMoneyList() {
      let { start, limit } = this
      switch (this.active) {
        case 0:
          console.log(start)
          this.$store.dispatch('verifyMoney', {
            start,
            limit
          })
          return
        default:
          this.$store.dispatch('queryMoneyList', {
            start,
            status: this.active,
            limit
          })
          break
      }
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
    verifyMoney() {
      return this.$store.state.verifyMoney
    },
    withdrawMoney() {
      return this.$store.state.withdrawMoney
    }
  },
  watch: {
    verifyMoney(d) {
      console.log(d)
    },
    withdrawMoney(d) {
      if(d.data){
        console.log('提现')
        this.queryMoneyList()
        this.queryMoney()
      }
    },
    // 人数
    moneyGrade(data) {
      //  console.log(data)
      this.avaliableMoney = (data.money * 1) / 100
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
  padding: 0.8rem;
  box-sizing: border-box;
}
.header_con p,
.header_con div,
small {
  color: #e70002;
}
.money_box {
  font-size: 0.6rem;
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
</style>