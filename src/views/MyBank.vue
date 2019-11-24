<template>
  <div>
    <Gheader title="我的银行卡" back="1" />
    <!-- 银行卡列表 -->
  <div v-if="bankList.length"> 

      <router-link v-for="item in bankList" :key="item.id"  class="myBank" tag="div" :to="'/editBank?id='+item.id">
      <div class="flex_bet">
        <!-- 头部 -->
        <div class="flex">
          <div class="img">
            <img :src="item.logo" />
          </div>
          <div>
            <p class="title">{{item.bank_name}}</p>
            <p class="subTitle">{{item.type}}</p>
          </div>
        </div>
        <div class="flex">
          <p class="edit">修改</p>
          <van-icon name="arrow" color=" rgba(255, 255, 255, 0.795)" />
        </div>
      </div>
      <p class="num">{{item.bank_number}}</p>
    </router-link>
  </div>

    <!-- 添加银行卡 -->
    <div v-else-if="!bankList.length&&!loading">
      <router-link class="banBtn" tag="button" to="/editBank">+添加银行卡</router-link>
      <p class="word">银行卡用于余额提现，请谨慎填写</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require('../assets/icons/home/zgbank.png'),
      num: '123213123123121233',
      bankInfo: null
    }
  },
  methods: {
    formatNum(num) {
      var arr = []
      num.split('').forEach((item, idx) => {
        if (idx === 3 || idx === 7 || idx === 11 || idx === 15) {
          arr.push(' ')
        }
        arr.push(item)
      })
      return arr.join('')
    },
    queryBankList() {
      this.$store.dispatch('getBankList')
    },
    getBankIcon(bankName) {
      switch (bankName) {
        case '中国建设银行':
          return require('../assets/icons/home/jsbank.png')
        case '中国农业银行':
          return require('../assets/icons/home/nybank.png')
        case '中国招商银行':
          return require('../assets/icons/home/zsbank.png')
        case '中国工商银行':
          return require('../assets/icons/home/gsbank.png')
        case '中国银行':
          return require('../assets/icons/home/zgbank.png')
        default:
          return require('../assets/icons/home/zgbank.png')
      }
    }
  },
  watch: {
    bankList(list) {
    
    }
  },
  computed: {
        loading() {
      return this.$store.state.loading
    },
    bankList() {
      return this.$store.state.bankList
    }
  },
  mounted() {
    this.num = this.formatNum(this.num)
    this.queryBankList()
  }
}
</script>
<style scoped>
.word {
  font-size: 0.4rem;
  color: #999;
  margin: 1rem auto;
  text-align: center;
}
.banBtn {
  display: block;
  width: 5.3333rem;
  height: 1.2rem;
  line-height: 1.2rem;
  text-align: center;
  background: rgba(231, 0, 2, 1);
  border-radius: 0.1333rem;
  color: #fff;
  font-size: 0.5333rem;
  margin: 1rem auto;
}
.myBank {
  margin: 0.2rem auto;
  width: 9.5733rem;
  height: 3.44rem;
  border:none;
  background: rgba(231, 0, 2, 1);
  box-shadow: 0px 2px 0.08rem 0px rgba(192, 192, 192, 0.15);
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem;
  box-sizing: border-box;
  font-size: 0.4267rem;
}
p {
  color: #fff;
}
.img {
  width: 1.1067rem;
  height: 1.1067rem;
  background: #fff;
  border-radius: 50%;
  margin-right: 0.2333rem;
}
.img img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.title {
  font-size: 0.4533rem;
}
.subTitle {
  font-size: 0.4rem;
  color: rgba(255, 255, 255, 0.795);
}
.edit {
  color: rgba(255, 255, 255, 0.795);
}

.num {
  font-size: 0.5333rem;
  margin-top: 0.2rem;
}
</style>