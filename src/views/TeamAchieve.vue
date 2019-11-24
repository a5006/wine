<template>
  <div>
    <Gheader title="团队业绩" back="1" />
    <!-- 下拉列表 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="year_month" :options="yearMonthDate"  @change="handleSelect" />
      <van-dropdown-item v-model="qs" :options="seasonDate"   @change="handleSelect"/>
    </van-dropdown-menu>

    <!-- 业绩展示 -->
    <div class="header_con">
      <!-- 业绩 -->
      <div class="achieveBox flex_bet">
        <p class="item" v-for="item in achiveTitleList" :key="item.id">￥{{item.value}}</p>
      </div>
      <!-- tab -->
      <van-tabs v-model="active" @click="switchTab">
        <van-tab
          class="con"
          :title="item.title"
          v-for="item in menuList"
          :key="item.title"
          :disabled="item.disabled"
        ></van-tab>
      </van-tabs>
      <router-link to="/myTeam" tag="div" class="router">
        <p>查看团队成员</p>
        <van-icon name="arrow" color="#E70002" />
      </router-link>
    </div>

    <!-- 第二个tab -->
    <div class="top">
      <van-tabs v-model="activeLevel" @click="switchTab">
        <van-tab class="con" :title="item.title" v-for="item in levelMenuList" :key="item.title"></van-tab>
      </van-tabs>

      <!-- 列表 -->
      <div class="list pad_container">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="list_item" v-for="item in list" :key="item.order_id">
            <AchieveCard
              :img="item.goods_cover"
              :price="item.price"
              :title="item.goods_name"
              :desc="item.goods_attr"
              :num="item.num"
            />
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>
<script>
import AchieveCard from '../components/AchieveCard'
export default {
  components: {
    AchieveCard
  },
  data() {
    return {
      activeAchieve: 0,
      activeLevel: 0,
      year_month: 0,
      start: 0,
      achiveTitleList: [
        { id: 0, value: 0 },
        { id: 1, value: 0 },
        { id: 2, value: 0 }
      ],
      menuList: [
        { title: '零售业绩' },
        { title: '代理业绩' },
        { title: '总业绩', disabled: true }
      ],
      levelMenuList: [
        { title: '我的' },
        { title: '一级' },
        { title: '二级' },
        { title: '三级' }
      ],
      qs: '',
      yearMonthDate: [],
      seasonDate: [],
      loading: false,
      finished: false,
      list: [
        {
          goods_cover:"asdf",
price:"asdf",
goods_name:"asdf",
num:1,
goods_attr:"asdf",
        }
      ],
      limit: 10,
      total: 0,
      active: 0
    }
  },
  methods: {
    // 获取年月日
    queryYearMonth() {
      this.$store.dispatch('queryYearMonth')
    },
    // 获取期数
    querySeason() {
      this.$store.dispatch('querySeason')
    },

    // 团队总业绩
    queryTeamAchieve() {
      let { year_month, qs } = this
      this.$store.dispatch('queryTeamAchieve', {
        year_month,
        qs
      })
    },

    queryTeamOrderList() {
      let { start, limit, year_month, qs } = this
      if(year_month===0) return
      let obj = {
        0: 'self',
        1: 'first',
        2: 'second',
        3: 'three'
      }
      var sObj = {
        0: 1,
        1: 3
      }
      this.$store.dispatch('queryTeamOrderList', {
        start,
        type: obj[this.activeLevel],
        limit,
        source: sObj[this.active],
        year_month,
        qs
      })
    },
    onLoad() {
      this.queryTeamOrderList()
      this.start += this.limit
      this.loading = false
    },
    handleSelect(){
      console.log(1)
           this.resetQuery()
    },
    switchTab() {
      this.resetQuery()
    },
    resetQuery() {
      this.start = 0
      this.list = []
      // this.list = []
      // this.loading =false
      this.queryTeamOrderList()
    }
  },
  computed: {
    // 年月日
    yearMonth() {
      return this.$store.state.yearMonth
    },
    // 期数
    season() {
      return this.$store.state.season
    },
    yearSeason() {
      return {
        yearMonth: this.yearMonth,
        season: this.season
      }
    },
    // 团队人数
    teamAchieve() {
      return this.$store.state.teamAchieve
    },
    teamMemberObj() {
      return this.$store.state.teamMemberList.result
    },
    type() {
      switch (this.active) {
        case 0:
          return 'use'
        case 1:
          return 'used'
        case 2:
          return 'expired'
        default:
          return 'use'
      }
    }
  },
  watch: {
    // 年月日
    yearMonth(d) {
      this.yearMonthDate = d.map(item => {
        item.text = item.year_month
        item.value = item.year_month
        return item
      })
      this.year_month = this.yearMonthDate[0].value
    },
    // 期数
    season(d) {
      this.seasonDate = d.map(item => {
        item.text = item.title
        item.value = item.title
        return item
      })
      this.qs = this.seasonDate[0].value
    },
    yearSeason(d) {
      let { yearMonth, season } = d
      if (Array.isArray(yearMonth) && Array.isArray(season)) {
        this.queryTeamAchieve()
        this.queryTeamOrderList()
      }
    },
    // 团队业绩
    teamAchieve(data) {
      if (!data) return
      let keys = Object.keys(data)
      this.achiveTitleList = this.achiveTitleList.map((item, idx) => {
        item.value = data[keys[idx]]
        return item
      })
    },
    teamMemberObj(d) {
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
    this.queryYearMonth()
    this.querySeason()
  }
}
</script>
<style scoped>
.header_con {
  margin: 0.2rem auto;
  width: 9.5733rem;
  height: 2.9867rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  overflow: hidden;
  padding: 0.4rem;
  box-sizing: border-box;
}
.item {
  flex: 1;
}
.achieveBox p {
  color: #e70002;
  font-size: 0.4rem;
  text-align: center;
}
.van-tab {
  height: 0.4rem !important;
}
.van-tab span {
  font-size: 0.3rem;
}
.router {
  font-size: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.router p {
  color: #e70002;
}
</style>