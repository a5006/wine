<template>
  <div>
    <Gheader title="我的积分" back="1" />
    <!-- 当前积分 -->
    <div class="header_con">
      <div class="left">
        <p>当前积分</p>
        <p class="num">{{moneyGrade.score}}</p>
        <small>满100倍数积分兑换到”我的钱包“</small>
      </div>
      <router-link tag="p" class="right" to="/exchangeGrade">兑换</router-link>
    </div>

      <!-- 类型 -->
      <div class="top">
        <van-tabs v-model="active" sticky @click="switchTab">
          <van-tab class="con" :title="item.title" v-for="item in menuList" :key="item.title"></van-tab>
        </van-tabs>

        <!-- 列表 -->
        <div class=" main_content">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list_item" v-for="item in list" :key="item.id">
            <GradeCard :score="item.score" check="throuth" :time="item.ctime" :after_score="item.after_score" />
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

      list: [],
      menuList: [
        { title: '系统赠送' },
        { title: '直推获得积分' },
        { title: '业绩奖励积分' },
      ],
      active: 0,
      loading: false,
      finished: false,

      limit: 10,
      total: 0
    }
  },
  methods: {
    // 兑换
 
    // 团队人数
    queryMember() {
      this.$store.dispatch('getMoneyGrade')
    },

    queryMemberList() {
      let { start, limit } = this
      let obj = {
        0: '1',
        1: '2',
        2: '4',
      }
      this.$store.dispatch('queryGrade', {
        start,
        type: obj[this.active],
        limit
      })
    },
    onLoad() {
      this.queryMemberList()
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
      this.queryMemberList()
    }
  },
  computed: {
    // 钱包积分
    moneyGrade() {
      return this.$store.state.moneyGrade
    },
    gradeList() {
      return this.$store.state.gradeList
    },
 
  },
  watch: {
    // 人数
    moneyGrade(data) {
    //  console.log(data)
    },
    gradeList(d) {

      let { list, nums } = d
      console.log(list,nums)
 
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
    this.queryMember()
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
.right::before{
  content: "";
  display: inline-block;
  width: .4rem;
  height: .4rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url('../assets/icons/other/exchange.png')
}
.main_content{
  width: 9.4rem;margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  box-shadow:0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
border-radius:0.2rem;
padding: .2rem;box-sizing: border-box;
}
</style>