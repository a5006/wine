<template>
  <div class="relative">
    <div class="shop_card" @click="handleClick">
      <img class="img" :src="img" alt />
      <p class="title van-multi-ellipsis--l2">{{title}}</p>
     
    <slot name="footer">
 <p class="price">￥{{price}}</p>
       <div class="footer_box" @click="handleBuy">
          <img :src="bgImg" alt />
          <p class="btn">{{btnName}}</p>
        </div>
    </slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    num: {},
    price: {},
    title: {},
    bgImg: {
      default: require('$a/icons/home/buy.png')
    },
    img: {},
    btnName: {}
  },
  data() {
    return {
      bol: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('choose')
    },
    handleBuy(){
      this.$emit('buy')
    }
  }
}
</script>
<style lang="css" scoped>
.relative {
  white-space: normal;
  position: relative;
  display: inline-block;
  margin: 0.25rem 0;
  margin-right: .2rem;

  width: 3.8rem;
}
.shop_card {
  width: 100%;
  padding: 0.3rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.2rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
}
.title {
  font-size: 14px;
  color: #333;
  margin: 0;
}
.img {
  width: 100%;
  height: 3rem;
}
.van-card {
  background: #fff;
  position: relative;
}
.van-card__price {
  font-size: 0.6rem;
}
.tag_p {
  color: #666;
  display: inline-block;
  margin-left: 0.1rem;
}

.footer_box {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  position: relative;
  font-size: 0.36rem;
  color: #fff;
}
.footer_box p {
  position: absolute;
  left: 0;
  right: 0.5rem;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  width: auto;
}
.footer_box img {
  position: relative;
  width: 100%;
}
.van-card__header,
.van-card__price {
  display: block;
  width: 100%;
}
.price {
  display: inline-block;
  color: #ee0a24;
  font-weight: 500;
  font-size: 18px;
  margin: .1rem 0;
}
.btn{
color: #fff;}
</style>