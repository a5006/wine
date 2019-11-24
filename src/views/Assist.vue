<template>
  <div>
    <Gheader title="帮助" back="1" />
    <!-- 列表 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,idx) in helpList" :key="item.id" @load="onLoad">
        <div class="item" @click="handleJumpTo(item)">
          <div class="item_title">
            <p class="item_title_red">0{{idx+1}}</p>
            <span>{{item.title}}</span>
          </div>
          <van-icon name="arrow" />
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      finished: true,
    }
  },
  methods: {
    onLoad() {
      this.$store.dispatch('getHelp', {
        start: 0,
        limit: 10
      })
    },
    handleJumpTo(item) {
      console.log(item)
      this.$router.push({
        name: 'news',
    query:{
      ...item,
      type:'assist'
    }
      })
    }
  },
  computed:{
    helpList(){

       let {helpList} = this.$store.state
      if(helpList){
        return helpList.list
      }else{
        return []
      }
    }
  },
  watch:{
    helpList(e){
    }
  },
  mounted() {
    this.onLoad()
  }
}
</script>
<style lang="postcss" scoped>
.item {
  height: 0.8rem;
  line-height: 0.8rem;
  background: rgba(255, 255, 255, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-size: 0.3733rem;
}
.item_title {
  display: flex;
  align-items: center;
}
.item_title > span {
  margin-left: 20px;
}
.item_title_red {
  color: #e70002;
}
.van-cell {
  border: 1px solid rgba(244, 244, 244, 1);
}
</style>
