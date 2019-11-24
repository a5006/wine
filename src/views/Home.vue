
<template>
  <div>
    <Gheader title="酒海会友" />
    <!-- 通知栏 -->
    <van-notice-bar :text="text" left-icon="volume-o" mode="link" @click="jumpNoticePage" />
    <!-- 轮播 -->
    <van-swipe :autoplay="3000" indicator-color="#E70002">
      <van-swipe-item v-for="(item, index) in banner" :key="index" @click="handleClickSwiper(item)">
        <img class="img" v-lazy="formatImg(item.img)" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格  -->
    <div class="menu">
      <van-grid :column-num="3" icon-size="50" :border="border" :clickable="!border">
        <van-grid-item
          v-for="item in MenuList"
          :key="item.id"
          :icon="item.img"
          :to="item.to"
          :text="item.name"
        />
      </van-grid>
    </div>
    <div class="space_container pad_bottom">
      <!-- 零售区 -->
      <TypeTitle
        :icon="typeTitle[0].icon"
        :time="retailTime"
        :title="typeTitle[0].title"
        :to="'/goodsList?type=retail&time='+retailTime+'&lsq_period_id='+lsq_period_id"
      />

      <ShopCard
        v-for="item in retailGoods"
        :key="item.goods_id"
        :title="item.goods_name"
        :img="item.img"
        :price="formatPrice(item.price)"
        :bgImg="item.bgImg"
        :btnName="item.btnName"
        :tag="item.tag"
        :tagP="item.tagP"
        @choose="handleChoose(item,'retail',lsq_period_id)"
        @buy="handleBuy(item.id)"
      />
      <!-- 代理区 -->
      <TypeTitle :icon="typeTitle[1].icon" :time="agentTime" :title="typeTitle[1].title"
        :to="'/goodsList?type=agent&time='+agentTime+'&dlq_period_id='+dlq_period_id"
       />
      <ShopCard
        v-for="item in agentList"
        :key="item.id"
        :title="item.goods_name"
        :img="item.img"
        :price="formatPrice(item.price)"
        :bgImg="item.bgImg"
        :btnName="item.btnName"
        :tag="item.tag"
        :tagP="item.tagP"
          @choose="handleChoose(item,'agent',dlq_period_id)"
      />

      <!-- 会员尊享 -->
      <TypeTitle :icon="typeTitle[2].icon" :time="typeTitle[2].time" :title="typeTitle[2].title" 
         to="/goodsList?type=member"
      />
      <div class="member_goods">
        <ShopCardCol
          v-for="item in memberGoods"
          :key="item.id"
          :title="item.goods_name"
          :price="formatPrice(item.price)"
          :btnName="item.btnName"
          :img="item.img"
              @choose="handleChoose(item,'member')"
        ></ShopCardCol>
      </div>
      <!-- 个性化定制 -->
      <TypeTitle :icon="typeTitle[3].icon" :time="typeTitle[3].time" :title="typeTitle[3].title" 
         to="/goodsList?type=special"
      />
      <div class="member_goods">
        <ShopCardCol
          v-for="item in specialList"
          :key="item.id"
          :title="item.goods_name"
          :price="formatPrice(item.price)"
          :btnName="item.btnName"
          :img="item.img"
            @choose="handleChoose(item,'special')"
        >
          <div slot="footer">
            <div class="price_box" @click="handleCheck(item.id)">
              <p class="price">￥{{formatPrice(item.price)}}</p>
              <img src="../assets/icons/home/r-contact.png" alt />
            </div>
          </div>
        </ShopCardCol>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import TypeTitle from '@/components/TypeTitle.vue'
import ShopCard from '@/components/ShopCard.vue'
import ShopCardCol from '@/components/ShopCardCol.vue'
import Footer from '@/components/Footer.vue'

export default {
  name:'home',
  components: { TypeTitle, ShopCard, ShopCardCol, Footer },
  data() {
    return {
      border: false,
      retailTime: 0,
      agentTime: 0,
      dlq_period_id:'',
lsq_period_id:'',
      typeTitle: [
        {
          title: '零售区',
          icon: require('$a/icons/home/r-sale.png')
        },
        {
          title: '代理区',
          time: 1000000,
          icon: require('$a/icons/home/r-proxy.png')
        },
        {
          title: '会员尊享',
          icon: require('$a/icons/home/r-member.png')
        },
        {
          title: '个性化定制',
          icon: require('$a/icons/home/r-special.png')
        }
      ],
      time: 30 * 60 * 60 * 1000,
      MenuList: [
        {
          name: '会员权益',
          id: 0,
          to: '/assist',
          img: require('$a/icons/home/member.png')
        },
        {
          name: '线上代理商',
          id: 1,
       to: '/assist',
          img: require('$a/icons/home/proxy.png')
        },
        {
          name: '线下代理商',
          id: 2,
       to: '/assist',
          img: require('$a/icons/home/proxy2.png')
        },
        {
          name: '企业介绍',
          id: 3,
       to: '/assist',
          img: require('$a/icons/home/introduce.png')
        },
        {
          name: '产品介绍',
          id: 4,
       to: '/assist',
          img: require('$a/icons/home/about.png')
        },
        {
          name: '联系客服',
          id: 5,
       to: '/assist',
          img: require('$a/icons/home/contact.png')
        }
      ],
      text: '了解更多权益与升级规则 >>',
      banner: [],
      retailGoods: [],
      agentList: [],
      specialList: [],
      memberGoods: []
    }
  },
  methods: {
    handleGetDetail(item) {
      console.log(item)
    },
    jumpNoticePage() {
      this.$router.push('/assist')
    },
    handleBuy(e) {
      console.log(e, 'buy')
    },
    handleCheck(e) {
      console.log(e)
    },
    handleClickSwiper(item) {
      console.log(item)
    },
 
    handleChoose(item,type,id) {
      this.$router.push({
        path: '/goodsDetail',
        query:{
          goods_id:item.goods_id||item.id,
          period_id:id,
          type
        }
      })
    },
    formatGoodsList(list) {
      return list.map(item => {
        item.tag = '送'
        item.tagP = `${item.dlq_add_nums || item.dlq_need_nums}张代理券`
        item.img = this.formatImg(item.cover)
        item.bgImg = require('$a/icons/home/buy.png')
        item.btnName = '去抢购'
        return item
      })
    }
  },
  computed: {
    indexData() {
      return this.$store.state.indexData
    }
  },
  watch: {
    indexData(data) {
      console.log(data)
      this.banner = data.banner
      // 零售
      this.retailGoods = this.formatGoodsList(data.index_lsq_goods_list)
      // 代理
      this.agentList = this.formatGoodsList(data.index_dlq_goods_list)
      // 会员
      this.memberGoods = this.formatGoodsList(data.index_hyzx_goods_list)
      //个性
      this.specialList = this.formatGoodsList(data.index_gxhdz_goods_list)
      // 零售倒计时
      this.retailTime = data.index_lsq_remain_time * 1000
      this.agentTime = data.index_dlq_remain_time  * 1000
  //  跳转所需要id
  this.dlq_period_id = data.dlq_period_id
  this.lsq_period_id = data.lsq_period_id
   
   }
  },
  mounted() {
    this.$store.dispatch('getIndex')
  }
}
</script>

<style lang="postcss" scoped>
.van-swipe {
  background: #fff;
}
.img {
  width: 10rem;
  height: 6rem;
}
.menu {
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
}
.member_goods {
  white-space: nowrap;
  word-break: break-all;
  overflow-x: auto;
}
.price_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price_box p {
  font-size: 16px;
}
.price_box img {
  width: 0.5rem;
  height: 0.5rem;
}
.pad_bottom {
  padding-bottom: 2rem;
}
</style>