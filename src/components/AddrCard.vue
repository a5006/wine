<template>
  <div class="content">
    <div class="flex_bet">
      <div class="left">
        <div class="title flex">
          <p class="name">{{name}}</p>
          <p class="num">{{phone}}</p>
          <p class="type" v-if="ifDefault">默认</p>
        </div>
        <p class="addr">{{addr}}</p>
      </div>
      <!-- 编辑按钮 -->
      <router-link :to="to" tag="p" class="right">编辑</router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: {},
    phone: {},
    type: {},
to:{},
    province: {},
    city: {},
    area: {},
    address: {}
  },
  computed: {
    ifDefault() {
      return this.type === '1'
    },
    addr() {
      let { province, city, area, address } = this
      return `${province}-${city}-${area}-${address}`
    }
  }
}
</script>
<style scoped>
.content {
  background: #fff;
  font-size: 0.4rem;
margin-bottom: .2rem;
  padding: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0px 0.0267rem 0.08rem 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
}
.content p {
  color: #999;
}
.content .name {
  color: #333;
}
.num {
  margin: 0 0.2rem;
}
.addr {
  margin-top: 0.2rem;
}
.right{
  width: 1rem;
  border-left: 1px solid #ccc;
  padding-left: .2rem;
  margin-left: .2rem;
  height: 1rem;
  line-height: 1rem;
}
</style>