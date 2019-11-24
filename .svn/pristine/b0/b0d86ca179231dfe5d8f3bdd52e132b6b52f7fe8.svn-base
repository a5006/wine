<template>
  <div class="list">
    <Gheader title="添加银行卡" back="1" />
    <div class="list_content">
      <div class="item flex_bet">
        <p class="title">银行卡号</p>
        <van-field
          v-model="bank_number"
          placeholder="请输入用户名"
          :readonly="!isEdit"
          label-align="right"
        />
      </div>
      <div class="item flex_bet" @click="handleShowModal">
        <p class="title">银行名称</p>
        <p class="gray">{{bank_name}}</p>
      </div>
      <div class="item flex_bet">
        <p class="title">真实姓名</p>
        <van-field
          v-model="user_name"
          placeholder="请输入用户名"
          :readonly="!isEdit"
          label-align="right"
        />
      </div>
    </div>

    <van-button
      type="default"
      @click="handleBtn"
      :class="isEdit?'btn':'normalBtn'"
    >{{isEdit?'保存':'编辑'}}</van-button>
    <!-- 弹窗组件 -->
    <van-dialog
      v-model="editModal"
      :title="type"
      show-cancel-button
      @confirm="handleConfirmUserInfo"
      :beforeClose="beforeClose"
    >
      <van-picker :default-index="0" title="选择银行" :columns="allBankListName" @change="onChange" />
    </van-dialog>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      editModal: false,
      bank_number: '',
      bank_name: '',
      user_name: '',
      isEdit: false,
      type: '',
      modalVal: ''
    }
  },
  methods: {
    // 编辑银行卡
    editBank() {
      let { id } = this.$route.query
      let { bank_number, bank_name, user_name } = this

      this.$store.dispatch('editBank', {
        id,
        bank_number,
        bank_name,
        user_name
      })
    },
    handleBtn() {
      // 如果为编辑状态下
      let { id } = this.$route.query
      id = id * 1
      if (this.isEdit) {
        console.log('保存')
        let result = this.checkInput()
        if (!result) {
          this.$toast('请填写完整内容')
          return
        }
        if (id > 0) {
          this.editBank()
        } else {
          this.addBank()
        }
      }
      this.isEdit = !this.isEdit
    },
    // 新增英航卡
    addBank() {
      let { bank_number, bank_name, user_name } = this

      this.$store.dispatch('addBank', {
        bank_number,
        bank_name,
        user_name
      })
    },
    // 获取银行卡信息

    getBankInfo() {
      let { id } = this.$route.query
      this.$store.dispatch('getBankInfo', {
        id
      })
    },
    handleShowModal(e) {
      if (!this.isEdit) return
      this.editModal = true
    },
    handleConfirmUserInfo(d) {},
    onChange(picker, value, index) {
      this.modalVal = value
    },
    beforeClose(a, d) {
      if (a === 'cancel') {
        d()
      } else if (a === 'confirm') {
        this.bank_name = this.modalVal || this.allBankListName[0]
        d()
      }
    },
    getAllBankList() {
      this.$store.dispatch('getBankAllList')
    },
    queryBankInfo() {
      let { id } = this.$route.query
      id = id * 1
      if (id >= 0) {
        this.getBankInfo()
      }
    },
    checkInput() {
      let { bank_number, bank_name, user_name } = this
      let obj = {
        bank_number,
        bank_name,
        user_name
      }

      for (let k in obj) {
        if (!obj[k]) {
          console.log(k)
          return false
        }
        return true
      }
    }
  },
  watch: {
    allBankList(l) {},
    bankCard(d) {
   let { bank_number, bank_name, user_name } = d
   this.bank_name = bank_name
   this.bank_number = bank_number
   this.user_name = user_name
    }
  },
  computed: {
    
    bankCard() {
      return this.$store.state.bankCard
    },
    allBankList() {
      return this.$store.state.allBankList
    },
    allBankListName() {
      return (
        this.allBankList.length && this.allBankList.map(item => item.bank_name)
      )
    }
  },
  mounted() {
    // 获取银行卡的列表
    this.getAllBankList()
    // 获取单个银行卡信息
    this.queryBankInfo()
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
  padding: 0 0.4rem;
  height: 1.7rem;
  line-height: 1.7rem;
}
.gray {
  color: #999;
}
.title {
  color: #222;
  width: 4rem;
}
.van-cell {
  border: 1px solid #d6d6d6;
  border-radius: 0.0667rem;
  margin-top: 0.2rem;
  text-align: center;
}
.btn {
  width: 9rem;
  margin: 0.3rem auto;
  display: block;
  color: #fff;
  background: #e70002;
}
.normalBtn {
  width: 9rem;
  margin: 0.3rem auto;
  display: block;
}
.normalBtn .van-button__text {
  color: #222;
}
.van-button__text {
  color: #fff;
}
.van-cell {
  border: none;
}
</style>