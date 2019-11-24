<template>
  <div class="content flex_bet">
    <div class="head flex">
      <p class="num">-￥{{score}}</p>
      <p :class="'default '+'default'+status" v-if="status">{{myStatus}}</p>
    </div>
    <div class="money">
      <p class="time">{{ctime}}</p>
      <p class="grade">{{footer}}{{after_score}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    score: {},
    status: {},
    time: {},
    after_score: {},
    type: {
      default: 'grade'
    },
    footer: {
      default: '积分余额'
    }
  },
  computed: {
    myStatus() {
      if (this.type === 'grade') {
        switch (this.status) {
          case '1':
            return '待审核'
          case '2':
            return '通过'
          case '3':
            return '拒绝'
          default:
            return '未知'
        }
      } else if (this.type === 'money') {
        switch (this.status) {
             case '0':
            return '待审核'
          case '-1':
            return '审核不通'
          case '1':
            return '同意提现'
          case '2':
            return '提现成功'
          case '11':
            return '积分兑换'
          case '21':
            return '急售收益'
            case '31':
              return '交易'
          default:
            return '未知'
        }
      } 
       
      else {
        return ''
      }
    },
    ctime() {
      return this.formatDate(this.time)
    }
  },
  mounted() {
    console.log(this.type, 'dafs')
  }
}
</script>
<style scoped>
.default {
  font-size: 0.32rem;
  margin-left: 0.2rem;
  height: 0.45rem;
  line-height: 0.45rem;
  padding: 0 0.2rem;
}
.default1 ,
.default-1{
  background: rgba(231, 0, 2, 1);
  border-radius: 0.2267rem;
  color: #fff;
  padding: 0 0.2rem;
}
.default3 {
  text-align: center;
  color: #fff;
  background: rgba(203, 203, 203, 1);
  border-radius: 0.2267rem;
}
.default0,
.default2,
.default11,
.default21,
.default31 {
  border-radius: 0.2267rem;
  color: #e70002;
  border: 1px solid #e70002;
}
.num,
.grade {
  color: #666;
  font-size: 0.48rem;
  margin: 0.3rem 0;
}
.content .time {
  color: rgba(153, 153, 153, 1);
  font-size: 0.32rem;
}
.money {
  text-align: right;
}
.content {
  height: 2rem;
  padding: 0.4rem;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(228, 228, 228);
}
.content p {
  font-size: 0.4rem;
}
</style>