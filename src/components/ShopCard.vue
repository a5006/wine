<template>
  <div class="relative">
    <div class="shop_card">
      <van-card :num="num" :price="price" :title="title" :origin-price="originPrice" :thumb="img" @click="handleGetDetail">
        <div slot="tags" v-if="tag" class="tags">
          <van-tag :plain="!tagFullColor" :class="tagFullColor?'fullColor':''" type="danger">{{tag}}</van-tag>
          <p class="tag_p">{{tagP}}</p>
        </div>
      </van-card>
      <div class="footer">
        <div class="footer_box" @click="handleClick">
          <img :src="bgImg" alt />
          <p class="btn">{{btnName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    num: {},
    tagFullColor: {
      default: false
    },
    price: {},
    bgImg: {},
    title: {},
    img: {},
    tag: {},
    originPrice:{},
    tagP: {},

    btnName: {
    }
  },
  data() {
    return {
      bol: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('buy')
    },
    handleGetDetail() {
      this.$emit('choose')
    }
  },
  mounted(){
console.log(this.num)
  }
}
</script>
<style lang="css" scoped>
.relative {
  position: relative;
  margin: 0.25rem 0;
}
.shop_card {
  width: 9.4rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  background: #fff;
  border-radius: 0.2rem;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
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
.footer {
  position: absolute;
  width: 2.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  right: 0.8rem;
  bottom: 0.2rem;
}
.footer_box {
  width: 100%;

  position: relative;
  font-size: 0.36rem;
  color: #fff;
}
.footer p {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  width: auto;
}
.footer img {
  position: relative;
  width: 2.8933rem;
  height: 0.8rem;
}
.van-card__title {
  color: #333;
}
.btn {
  color: #fff;
}
.tags {
  margin: 0.1rem 0;
}
.fullColor {
  color: #fff;
}
</style>