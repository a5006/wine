<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="name"
        placeholder="请输入用户名"
        @input="handleInput(name,'name')"
        @blur="handleBlur(name,'name')"
        :error-message="errNameMsg"
      />
      <div class="flex_bet">
        <van-field
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
          :error-message="errPhoneMsg"
          @input="handleInput(phone,'phone')"
          @blur="handleBlur(phone,'phone')"
        />
        <button class="btn" @click="sendCode" :disabled="disabled">{{btnName}}</button>
      </div>
      <van-field
        v-model="code"
        placeholder="请输入验证码"
        @input="handleInput(code,'code')"
        :error-message="errCodeMsg"
      />
    </van-cell-group>
  </div>
</template>
<script>
export default {
  props: {
    value: {},
    errCodeMsg: {}
  },
  data() {
    return {
      btnName: '发送验证码',
      objData: {},
      name: this.value.name,
      phone: this.value.phone,
      code: this.value.code,
      errPhoneMsg: '',
      disabled: false,
      errNameMsg: ''
    }
  },
  watch: {
    value() {
      console.log(1)
    }
  },
  methods: {
    setInt(times) {
      var idx = 0
      this.disabled = true
      this.btnName = `${times - idx}后可再次发送`
     let timer= setInterval(() => {
        if (idx < times) {
          idx++
          this.disabled = true
          this.btnName = `${times - idx}后可再次发送`
        } else {
          clearInterval(timer)
          this.disabled = false
          this.btnName = '发送验证码'
        }
      }, 1000)
    },
    sendCode() {
      this.setInt(60)
      this.$emit('sendCode')
    },
    handleInput(v, k) {
      this.objData = Object.assign({}, this.value, {
        [k]: v
      })

      this.$emit('input', this.objData)
    },
    handleBlur(v, k) {
      console.log(v, k)
      var obj = {
        name: () => {
          if (v.length === 0) {
            this.errNameMsg = '姓名不能为空'
            this.value.err = true
          } else {
            this.errPhoneMsg = ''
            this.value.err = false
          }
        },
        phone: () => {
          if (!/^1[3456789]\d{9}$/.test(v)) {
            this.errPhoneMsg = '手机号格式错误'
            this.value.err = true
          } else {
            this.errPhoneMsg = ''
            this.value.err = false
          }
        },
        code: () => {}
      }
      obj[k]()
    }
  }
}
</script>
<style scoped>
.btn {
  border: none;
  height: 1rem;
  width: 4rem;
  border: 1px solid #e70002;
  color: #fff;
  background: #e70002;
font-size: .32rem;
}
</style>