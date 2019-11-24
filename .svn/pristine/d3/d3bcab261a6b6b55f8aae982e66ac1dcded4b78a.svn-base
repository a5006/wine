<template>
  <div>
    <Gheader title="我的消息" back="1" />
    <div class="pad_container">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item.id" style="padding:0;">
          <MsgCard
            :title="item.title"
            :status="item.status"
            :time="formatDate(item.ctime)"
            :art="item.content"
            :to="'/myMsg?id='+item.id"
          />
        </van-cell>
      </van-list>
    </div>
  </div>
</template>
<script>
import MsgCard from '../components/MsgCard'
export default {
  components: {
    MsgCard
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      start: 0,
      limit: 10,
      total: 0
    }
  },
  methods: {
    onLoad() {
      this.queryMsgList()
      this.start += 10
      this.loading = false
    },
    queryMsgList() {
      let { start, limit } = this
      this.$store.dispatch('getMsgList', {
        start,
        limit
      })
    }
  },
  watch: {
    msgObj(d) {
      let { list, nums } = d
      console.log(list, nums)
      this.total = nums * 1
      this.list = [...this.list, ...list]
      if (this.list.length >= this.total) {
        this.finished = true
      }
    }
  },
  computed: {
    msgObj() {
      return this.$store.state.msgList
    }
  }
}
</script>
<style scoped>
.van-cell {
  background: transparent;
  padding: 0!important;
}
</style>