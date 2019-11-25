<template>
  <div>
    <Gheader title="我的团队" back="1" />
    <div class="pad_container">
      <!-- 团队头部 -->
      <div class="top">
        <div class="header_title flex_bet sub_con">
          <div class="header_item" v-for="item in teamList" :key="item.id">
            <p class="item_title">{{item.val}}</p>
            <p class="small">{{item.name}}</p>
          </div>
        </div>
        <router-link to="/teamAchieve" tag="div" class="more flex">
          <p>查看团队业绩</p>
          <van-icon name="arrow" color="#E70002" />
        </router-link>
      </div>
      <!-- 类型 -->
      <div class="top">
        <van-tabs v-model="active" sticky @click="switchTab">
          <van-tab class="con" :title="item.title" v-for="item in menuList" :key="item.title"></van-tab>
        </van-tabs>

        <!-- 列表 -->
        <div class="list pad_container">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list_item" v-for="item in list" :key="item.order_id">
              <TeamCard :img="item.headimg" :name="item.nickname" :phone="item.phone" :level="item.grade_name" />
            </div>
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TeamCard from '../components/TeamCard'
export default {
  components: {
    TeamCard
  },
  data() {
    return {
      img: `https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3269503817,396596092&fm=26&gp=0.jpg`,

      teamList: [
        {
          id: 0,
          name: '一级',
          val: ''
        },
        // {
        //   id: 1,
        //   name: '二级',
        //   val: ''
        // },
        // {
        //   id: 2,
        //   name: '三级',
        //   val: ''
        // },
        {
          id: 3,
          name: '总人数',
          val: ''
        }
      ],
      list: [],
      menuList: [
        { title: '一级' },
        // { title: '二级' },
        // { title: '三级' },
        { title: '总人数' }
      ],
      active: 0,
      loading: false,
      finished: false,

      limit: 10,
      total: 0
    }
  },
  methods: {
    // 团队人数
    queryMember() {
      this.$store.dispatch('getTeamMember')
    },

    queryMemberList() {
      let { start, limit } = this
      let obj = {
        0: 'first',
        1: 'second',
        2: 'three',
        3: 'all'
      }
      this.$store.dispatch('getTeamMemberList', {
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
    // 团队人数
    teamMember() {
      return this.$store.state.teamMember
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
    // 人数
    teamMember(data) {
      let keys = Object.keys(data)
      this.teamList = this.teamList.map((item, idx) => {
        item.val = data[keys[idx]]
        return item
      })
    },
    teamMemberObj(d) {

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
.top {
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  padding: 0.3rem 0.6rem;
}
.header_title {
  box-sizing: border-box;
  font-size: 0.4rem;
}
.small_con {
  padding: 0.3rem;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
}
.order_title {
  padding: 0 0.7rem;
}

.header_con {
  flex: 2;
  margin: 0 0.3rem;
}
.header_con_titile {
  font-size: 0.5rem;
}
.header_con_phon,
.header_level,
.small {
  color: rgba(22, 22, 22, 0.699);
}
.small {
  font-size: 0.2667rem;
}

.header_item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 1rem;
  margin: 0.4rem .5rem;
}
p.item_title {
  color: #333;
}
.more {
  font-size: 0.4rem;
  text-align: right;
  display: flex;
  justify-content: flex-end;
}
.more p {
  color: #e70002;
}
.top:nth-child(2) {
  margin-top: 0.2rem;
}
.van-cell {
  padding: 0;
  padding: 0.4rem 0;
}
div .sub_con{
justify-content: center;
}
</style>