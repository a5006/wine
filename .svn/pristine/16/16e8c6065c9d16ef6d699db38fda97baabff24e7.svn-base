<template>
  <div class="pad_container content">
    <div class="head flex_bet">
      <p class="title">{{title}}</p>
     <p class="time"> {{time}}</p>
    </div>
    <div class="art">
      {{art}}
    </div>
    <router-link class="footer flex_bet" :to="to">
      <p>查看详情</p>
      <van-icon name="arrow" />
    </router-link>
  </div>
</template>
<script>
export default {
  props:{
    title:{},
    time:{},
    art:{},
    to:{},

  }
}
</script>
<style scoped>
.content{
  padding: .3rem;
  background: #fff;
 font-size: 0.3467rem;
 box-sizing: border-box;
margin-bottom: .2rem;
box-shadow:0px 2px 0.08rem 0px rgba(0, 0, 0, 0.15);
border-radius:0.2rem;
}
.title{
  font-size: 0.48rem;
  color: #333;
}
.footer{
  border-top: 1px solid #E7E7E7;
  padding: .2rem 0;
  padding-top: .4rem;
}
.art{
margin: .5rem 0;}
</style>