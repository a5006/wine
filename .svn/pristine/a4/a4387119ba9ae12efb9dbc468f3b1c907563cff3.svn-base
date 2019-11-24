<template>
  <div>
    <Gheader title="我的消息" back="1" />
    <div class="pad_container">

          <div class="flex_bet item">
            <div>
              <p class="title">{{msgDetail.title}}</p>
              <p class="content">{{msgDetail.content}}</p>
            </div>
            <p class="time">{{formatDate(msgDetail.ctime*1000)}}</p>
          </div>
 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {


    }
  },

  methods: {
queryInfo(){
  let {id}= this.$route.query
  this.$store.dispatch('getMsgDetail',{
    id
  })
},
  },
  computed:{
    msgDetail(){
      return this.$store.state.msgDetail.my_user_msg_detail
    },
  },
  mounted(){
    this.queryInfo()
  },
}
</script>
<style scoped>
.item {
  align-items: flex-start;
  background: #fff;
  padding: .4rem;
    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.15);
  border-radius: 0.1333rem;
}
.title {
  color: #222;
  font-size: 0.4533rem;
}
.content {
  color: #666;
  font-size: .4rem;
}
.time {
  font-size: 0.32rem;
}
</style>