<template>
  <div>
    <van-nav-bar
      :title="title"
      :left-arrow="!!back"
      fixed
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>
<script>
export default {
  name:'Gheader',
props:{
  title:{
    type:String,
  },
  back:{
    default:false
  }
},
  data(){
    return{
    }
  },
  methods: {
    onClickLeft() {
   this.$router.back(-1)
    },
    onClickRight() {
      this.$toast('按钮')
    }
  }
}
</script>
<style>
.van-nav-bar__title,
.van-nav-bar .van-icon,
.van-nav-bar__text {
  color: #fff!important;
}  
.van-nav-bar{
  background: #E70002!important;
  color: #fff!important;
}
[class*=van-hairline]::after{
  border:none;
}
</style>