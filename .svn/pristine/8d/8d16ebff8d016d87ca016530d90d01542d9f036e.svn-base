<template>
  <div>
    <Gheader title="专属二维码" back="1" />
    <router-link to="/myTeam" tag="div" class="title flex_bet">
      <div class="title_p flex">
        <p>我的团队</p>
        <p class="people">{{teamMember.total_nums}}人</p>
      </div>
      <van-icon name="arrow" color="#E70002" />
    </router-link>
    <!-- 海报 -->
    <div class="box">
      <img :src="code" alt />
      <p class="small">长按二维码保存</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: '',
      member: ''
    }
  },
  methods: {
    queryMember() {
      this.$store.dispatch('getTeamMember')
    },
    queryImg() {
      this.$store.dispatch('getCode')
    }
  },
  computed: {
    teamMember() {
      return this.$store.state.teamMember
    },
    code() {
      let code = this.$store.state.code
   if(code.imgurl){
     return this.formatImg(code.imgurl)
   }
      return '' 
    }
  },
  watch: {},
  mounted() {
    this.queryMember()
    this.queryImg()
  }
}
</script>
<style scoped>
.title {
  color: #e70002;
  font-size: 0.4rem;
  background: #fff;
  width: 9.5733rem;
  padding: 0.4rem;
  box-sizing: border-box;
  margin: 0.2rem auto;
  width: 9.5733rem;
  height: 1.4rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
}
.title p {
  color: #e70002;
}
.box {
  width: 9.5733rem;
  height: 10.7467rem;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.2rem;
  overflow: hidden;
  font-size: 0.36rem;
  text-align: center;
  position: relative;
  margin: 0.2rem auto;
}
.small {
  position: absolute;
  bottom: 0.4rem;
  left: 0;
  right: 0;
color: #fff;
}
.box img {
  width: 100%;
  height: 100%;
}
.people {
  margin-left: 0.2rem;
}
</style>