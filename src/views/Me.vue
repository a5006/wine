<template>
  <div>
    <Gheader title="我的" back="1" />
    <div class="header">
      <!-- 头部个人信息 -->
      <div class="header_title flex_bet" @click="handleJumpTo('/myInfo')">
        <van-image round width="1.3rem" height="1.3rem" lazy-load :src="avatar" />
        <div class="header_con">
          <p class="header_con_titile">{{name}}</p>
          <p class="header_con_phon">{{phone}}</p>
        </div>
        <p class="header_level">{{level}}</p>
      </div>
      <div class="header_title flex_bet sub_con">
        <router-link tag="div" to="/myMoney" class="header_item">
          <p class="item_title">{{formatPrice(money)}}</p>
          <p class="small">我的钱包</p>
        </router-link>
        <router-link tag="div" to="/myGrade" class="header_item">
          <p class="item_title">{{score}}</p>
          <p class="small">积分</p>
        </router-link>
        <router-link tag="div" to="/teamAchieve" class="header_item">
          <p class="item_title">{{team_money}}</p>
          <p class="small">团队业绩</p>
        </router-link>
        <router-link tag="div" to="/couponList" class="header_item">
          <p class="item_title">{{nums}}</p>
          <p class="small">代理资格券</p>
        </router-link>
      </div>
    </div>
    <div class="small_con">
      <!-- 订单 -->
      <div class="order_title flex_bet">
        <p>我的订单</p>
        <router-link to="/myOrderList" class="flex_bet">
          <p>全部订单</p>
          <van-icon name="arrow" />
        </router-link>
      </div>
      <van-grid>
        <van-grid-item v-for="item in gridList" :key="item.id" :text="item.name" :to="item.link">
          <img :src="item.img" slot="icon" class="menu_img" />
        </van-grid-item>
      </van-grid>
    </div>
    <div class="content">
      <van-grid :column-num="3">
        <van-grid-item v-for="item in menuList" :key="item.id" :text="item.name" :to="item.link">
          <img :src="item.img" slot="icon" class="menu_img" />
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  name: 'me',
  data() {
    return {
      avatar: '',
      name: '',
      phone: '',
      level: '',
      money: '',
      score: '',
      team_money: '',
      nums: '',
      gridList: [
        {
          id: 0,
          name: '待付款',
          img: require('../assets/icons/other/way_pay2.png'),
          link: '/myOrderList?active=0'
        },
        {
          id: 1,
          name: '待发货',
          img: require('../assets/icons/other/wait_get.png'),
          link: '/myOrderList?active=1'
        },
        {
          id: 2,
          name: '待收货',
          img: require('../assets/icons/other/send.png'),
          link: '/myOrderList?active=2'
        },
        {
          id: 3,
          name: '已完成',
          img: require('../assets/icons/other/suc_order.png'),
          link: '/myOrderList?active=3'
        }
      ],
      menuList: [
        {
          id: 0,
          name: '我的消息',
          img: require('../assets/icons/home/msg.png'),
          link: '/myMsgList'
        },
        {
          id: 1,
          name: '寄售商品',
          img: require('../assets/icons/home/bag.png'),
          link: '/mySaleList'
        },
        {
          id: 2,
          name: '提货办理',
          img: require('../assets/icons/home/write.png'),
          link: '/recieveList'
        },
        {
          id: 3,
          name: '专属二维码',
          img: require('../assets/icons/home/code.png'),
          link: '/myCode'
        },
        {
          id: 4,
          name: '我的团队',
          img: require('../assets/icons/home/team.png'),
          link: '/myTeam'
        },
        {
          id: 5,
          name: '地址管理',
          img: require('../assets/icons/home/addr.png'),
          link: '/myAddr'
        },
        {
          id: 6,
          name: '我的银行卡',
          img: require('../assets/icons/home/card.png'),
          link: '/myBank'
        }
      ]
    }
  },
  methods: {
    handleJumpTo(path) {
      console.log(path)
      this.$router.push({
        path
      })
    },
    formatGrade(grade) {
      switch (grade) {
        case '1':
          return '游客'
        case '2':
          return '注册会员'
        case '3':
          return '普通会员'
        case '4':
          return '初级代理'
        case '5':
          return '中级代理'
        case '6':
          return '高级代理'
        default:
          return '未知身份'
      }
    },
    queryInfo() {
      this.$store.dispatch('getMyInfo')
    }
  },
  computed: {
    myInfo() {
      return this.$store.state.myInfo
    }
  },
  watch: {
    myInfo(d) {
      // 个人信息
      let { my_user_info } = d
      let { headimg, phone, nickname, grade,name } = my_user_info

      this.avatar = headimg
      this.name = name||nickname
      this.phone = phone
      this.level = this.formatGrade(grade)

      // 钱包
      const {
        user_money: { money, score, team_money },
        user_dlq_count: {nums}
      } = d
      this.money = money
      this.score = score
      this.team_money = team_money
      this.nums = nums
    }
  },
  mounted() {
    this.queryInfo()
  }
}
</script>
<style scoped>
.header {
  background: #e70002;
  color: #fff;
  font-size: 0.4rem;
}
.header_title {
  width: 8rem;
  margin: 0 auto;
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
.small_con p {
  color: #666;
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
  color: rgba(255, 255, 255, 0.699);
}
.small {
  font-size: 0.2667rem;
}
p {
  color: #fff;
}
.header_item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 1rem;
  margin: 0.4rem 0;
}
.order_title {
  color: #666;
  font-size: 0.32rem;
}
.menu_img {
  width: 1.3333rem;
  height: 1.1867rem;
}
.content {
  margin: 0.3rem auto;
  width: 9.6rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  overflow: hidden;
}
</style>