<template>
  <div class="flex-ai-c">
    <Gheader title="订单详情" back="1" />
    <div class="status">
      <div class="course">
        <div class="title">{{status}}</div>
        <div class="navTitle" v-if="active == 1">感谢您的购买。</div>
      </div>
      <img :src="icon.purse" class="purse" />
    </div>
    <!-- 信息卡片，包含快递和个人信息相关 -->
    <div class="infoBox" v-if="active>0">
      <div class="infoCard aduit" v-if="active == 1">您已成功申请商品提货，系统正在审核中，审核通过后将尽快安排发货。</div>
      <!-- 快递卡片 -->
      <div class="infoCard" v-if="active > 1">
        <img :src="icon.express" />
        <div class="infoDetail">
          <div class="infoDes">
            物流公司：
            <span class="express">{{kd.kd_company}}</span>
          </div>
          <div class="infoDes sec">
            物流单号：
            <span>{{kd.kd_num}}</span>
          </div>
        </div>
      </div>
      <!-- 个人信息卡片 -->
      <div class="infoCard" v-if="active > 1">
        <img :src="icon.address" />
        <div class="infoDetail">
          <div class="infoDes">
            {{kd.rev_name}}
            <span>{{kd.rev_mobile}}</span>
          </div>
          <div class="addressBox">
            <div class="address">{{kd.rev_province}}{{kd.rev_city}}{{kd.rev_area}}{{kd.rev_address}}</div>
            <img :src="icon.edit" class="edit" />
          </div>
        </div>
      </div>
    </div>
    <!-- 商品卡片 -->
    <div class="item">
      <div class="imgBox">
        <img :src="formatImg(detail.goods_info.goods_cover)" class="itemImg" />
        <img :src="icon.mark" class="mark" />
      </div>
      <div class="txtBox">
        <div class="txtTitle">{{detail.goods_info.goods_name}}</div>
        <div class="txtDes">{{detail.goods_info.goods_attr}}</div>
        <div class="count">
          <span class="singlePrice">¥{{detail.goods_info.goods_price}}</span>
          <span class="num">x{{detail.th_nums}}</span>
        </div>
      </div>
    </div>
    <!-- 支付卡片 -->
    <div class="item flex-col">
      <div class="split">
        <div class="splitItem">
          订单来源：
          <span>代理区</span>
        </div>
        <div class="splitItem">
          订单编号：
          <span>{{detail.order_num}}</span>
        </div>
        <div class="splitItem">
          下单时间：
          <span>{{formatDate(detail.order_time)}}</span>
        </div>
      </div>
      <div class="split">
        <div class="splitItem">
          支付方式：
          <span></span>
        </div>
        <div class="splitItem">
          支付时间：
          <span>{{formatDate(detail.paid_time)}}</span>
        </div>
        <div class="splitItem" v-if="active>1">
          发货时间：
          <span>{{formatDate(detail.fh_time)}}</span>
        </div>
      </div>
    </div>
    <!-- 结算卡片 -->
    <div class="item flex-col">
      <div class="costItem">
        <span class="infoDes">商品总额</span>
        <span>¥{{detail.order_amount}}</span>
      </div>
      <div class="costItem">
        <span class="infoDes">钱包抵扣</span>
        <span>-¥{{detail.qbdk_amount}}</span>
      </div>
      <div class="costTotal">
        总计：
        <span class="totalPrice">¥{{detail.pay_amount}}</span>
      </div>
    </div>
    <div class="fill" v-if="active == 0||active == 2"></div>
    <!-- 按钮 -->
    <div class="btnBox" v-if="active == 0||active == 2">
      <div class="btn" @click="handle">{{btn}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: '',
      id: '',
      status: '',
      kd: '',
      detail: '',
      btn: '',
      icon: {
        purse: require('$a/icons/other/pay_suc.png'),
        express: require('$a/icons/other/none_send.png'),
        address: require('$a/icons/other/address.png'),
        edit: require('$a/icons/home/edit.png'),
        mark: require('$a/icons/other/w_pay.png')
      }
    }
  },
  methods: {
    handle() {
      let path = {
        0: 'my/thbl/sqth',
        2: 'my/thbl/qdsh'
      }[this.active]
      this.$store.dispatch('operateOrder', {
        path,
        order_id: this.id
      })
    },
    queryDetail() {
      this.$store.dispatch('orderDetail', {
        order_id: this.id
      })
    }
  },
  computed: {
    orderDetail() {
      return this.$store.state.orderDetail
    },
    operateOrder() {
      return this.$store.state.operateOrder
    }
  },
  watch: {
    orderDetail(d) {
      this.kd = d.order_kd
      this.detail = d.my_thbl_order_detail
      this.active = this.detail.status - 1
      this.status = {
        // 0: '提货中',
        0:'可提货',
        1: '提货审核中',
        2: '已发货',
        3: '订单已完成'
      }[this.active]
      this.btn = {
        0: '提货',
        2: '确认收货'
      }[this.active]
    },
    operateOrder(d) {
      let successMessage = {
        0: '提货申请已提交，等待发货~~',
        2: '已确认收货，感谢您的惠顾~~'
      }[this.active]
      if (d.data) {
        this.$dialog
          .alert({
            message: successMessage
          })
          .then(() => {
            //点击确认按钮后的调用
            this.queryDetail()
          })
      } else {
        this.$dialog.alert({
          message: '提交失败，请稍后重试'
        })
      }
    }
  },
  created() {
    let { active, id } = this.$route.params
    this.active = active
    this.id = id
    this.queryDetail()
  }
}
</script>

<style scoped>
.flex-ai-c {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.status {
  position: relative;
  width: 100%;
  height: 2.61rem;
  background-color: #e70002;
}
.course {
  position: absolute;
  top: 0.49rem;
  left: 1.45rem;
}
.title {
  font-size: 0.53rem;
  font-weight: 600;
  color: #fff;
}
.navTitle {
  width: 4.4rem;
  font-size: 0.33rem;
  margin-top: 0.33rem;
  word-break: break-all;
  color: #fff;
}
.purse {
  position: absolute;
  right: 1.89rem;
  bottom: 0.62rem;
  width: 1.93rem;
  height: 1.67rem;
}
.infoBox {
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #fff;
}
.infoCard {
  display: flex;
  width: 95.2%;
  align-items: center;
  border-bottom: 0.013rem solid #c7c7c7;
  padding: 0.53rem 0;
}
.aduit {
  font-size: 0.37rem;
  color: #f96b16;
}
.infoCard img {
  width: 1.04rem;
  height: 0.93rem;
}
.infoCard:last-child {
  border-bottom: none;
}
.infoDetail {
  margin-left: 0.33rem;
  width: 8.16rem;
  font-size: 0.4rem;
}
.infoDes {
  color: #000;
}
.infoDes span {
  margin-left: 0.33rem;
}
.express {
  color: #f96b16;
}
.sec {
  margin-top: 0.38rem;
}
.addressBox {
  display: flex;
  justify-content: space-between;
  margin-top: 0.32rem;
  font-size: 0.34rem;
}
.address {
  width: 5.92rem;
  color: #000;
  word-break: break-all;
}
.edit {
  width: 0.17rem !important;
  height: 0.3rem !important;
}
.item {
  display: flex;
  width: 95.73%;
  margin: 0.27rem 0;
  padding: 0.48rem 0;
  border-radius: 0.2rem;
  background-color: #fff;
}
.imgBox {
  position: relative;
  width: 2.67rem;
  height: 2.67rem;
  margin-left: 0.37rem;
}
.mark {
  position: absolute;
  width: 0.88rem;
  height: 0.76rem;
  top: 0;
  left: 0;
}
.itemImg {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
.txtBox {
  width: 5.64rem;
  margin-left: 0.25rem;
}
.txtTitle {
  width: 100%;
  font-size: 0.4rem;
  word-break: break-all;
  color: #333;
}
.txtDes {
  width: 100%;
  margin-top: 0.3rem;
  font-size: 0.35rem;
  word-break: break-all;
}
.count {
  display: flex;
  width: 100%;
  margin-top: 0.4rem;
  justify-content: space-between;
  align-items: center;
}
.singlePrice {
  font-size: 0.58rem;
  color: #e70002;
}
.num {
  font-size: 0.4rem;
  color: #333;
}
.split {
  width: 92.3%;
  margin: 0 auto;
  border-bottom: 0.013rem solid #c7c7c7;
}
.split:last-child {
  margin-top: 0.51rem;
  border: none;
}
.splitItem {
  margin-bottom: 0.48rem;
  margin-left: 0.16rem;
  font-size: 0.37rem;
  color: #333;
}
.flex-col {
  flex-flow: column nowrap;
}
.costItem {
  display: flex;
  justify-content: space-between;
  width: 92.3%;
  margin: 0 auto;
  font-size: 0.37rem;
  margin-bottom: 0.48rem;
}
.costTotal {
  width: 92.3%;
  margin: 0 auto;
  font-size: 0.37rem;
  text-align: right;
}
.totalPrice {
  margin-left: 0.28rem;
  font-size: 0.59rem;
  color: #fa3652;
}
.fill {
  height: 2.22rem;
  width: 100%;
}
.btnBox {
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 9;
  width: 100%;
  height: 1.56rem;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0.03rem 0.08rem 0 rgba(0, 0, 0, 0.15);
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.21rem;
  height: 0.76rem;
  font-size: 0.36rem;
  color: #e70002;
  background: rgba(255, 255, 255, 1);
  border: 0.02rem solid rgba(231, 0, 2, 1);
  border-radius: 0.37rem;
  margin-right: 0.61rem;
}
</style>
