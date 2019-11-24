<template>
  <div class="list">
    <Gheader title="个人信息" back="1" />
    <div class="list_content">
      <div class="item flex_bet auto">
        <p class="title">头像</p>
        <van-image width="1.5rem" height="1.5rem" round lazy-load :src="avatar" />
      </div>
      <div
        class="item flex_bet"
        v-for="item in list"
        :key="item.id"
        @click="showEditModal(item.title)"
      >
        <p class="title">{{item.title}}</p>
        <p class="gray">{{item.value}}</p>
      </div>
    </div>

    <!-- 弹窗组件 -->
    <van-dialog v-model="editModal" title="真实姓名" show-cancel-button :beforeClose="beforeClose">
      <van-field v-model="modalVal" placeholder="请输入真实姓名" />
    </van-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      editModal: false,
      userName: '',
      modalVal: '',
      petName: '',
      phone: '',
      avatar: '',
      list: [
        { id: 0, title: '昵称', type: 'nickname', value: '' },
        { id: 1, title: '真实姓名', type: 'name', value: '' },
        { id: 2, title: '电话号码', type: 'phone', value: '' }
      ]
    }
  },
  methods: {
    showEditModal(e) {
      this.editModal = e === '真实姓名'
    },
    queryInfo() {
      this.$store.dispatch('getMyInfo')
    },
    handleConfirmUserInfo(e) {
      console.log(e)
    },
    beforeClose(a, d) {
      console.log(a)
      if (a === 'cancel') {
        d()
      } else if (a === 'confirm') {
        if (!this.modalVal) {
          this.$toast('姓名不能为空')
          d(false)
          return
        }
        this.$store.dispatch('editName', {
          name: this.modalVal
        })
        d(true)
        
      }
      this.modalVal = ''
    }
  },
  computed: {
    myInfo() {
      return this.$store.state.myInfo
    },
    realName(){
      return this.$store.state.realName
    }
  },
  watch: {
    realName(d){
      if(d.data===1){
        this.queryInfo()
      }
    },
    myInfo(d) {
      // 个人信息
      let { my_user_info } = d
      let { headimg, phone, nickname, name } = my_user_info
      this.name = name
      this.avatar = headimg
      this.name = nickname
      this.phone = phone
      let arr = [nickname, name, phone]
      this.list = this.list.map((item, idx) => {
        item.value = arr[idx]
        return item
      })
    }
  },
  mounted() {
    this.queryInfo()
  }
}
</script>
<style scoped>
.list_content {
  background: #fff;
  border-bottom: 1px solid rgba(210, 210, 210, 1);
}
.img {
  width: 1rem;
  height: 1rem;
}
.item {
  /* height: 1.32rem; */
  background: rgba(255, 255, 255, 1);
  border-top: 1px solid rgba(210, 210, 210, 1);
  font-size: 0.4rem;
  padding: 0.3rem 0.4rem;
}
.gray {
  color: #999;
}
.title {
  color: #222;
}
.van-cell {
  border: 1px solid #d6d6d6;
  border-radius: 0.0667rem;
  margin-top: 0.2rem;
  text-align: center;
}
</style>