<template>
  <div class="footer">
    <div :class="[active===item.name ?'item active':'item']" v-for="item in menu" :key="item.id" @click="handleJump(item)">
      <img :src="[active===item.name ?item.aIcon:item.icon]" alt />
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    active: {
      default: '首页'
    }
  },
  data() {
    return {
      menu: [
        { id: 0, name: '首页', icon: require('../assets/icons/home/home.png'),
        aIcon:require('../assets/icons/home/home_a.png'),
        path:'/'
        },
        { id: 1, name: '我的', icon: require('../assets/icons/home/me.png'),
        aIcon:require('../assets/icons/home/me_a.png'),
        path:'/me'
        }
      ]
    }
  },
  methods:{
    handleJump(e){
      this.$router.push({
        path:e.path
      })
    }
  }
}
</script>
<style lang="css" scoped>
.active{
  color: #ee0a24;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-around;

  box-sizing: border-box;
  align-items: center;
  width: 10rem;
  height: 1.5867rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  font-size: 12px;
}
.item {
  height: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.item img {
  width: 0.5867rem;
  height: 0.5867rem;
}
.item p {
  margin: 0;
}
</style>