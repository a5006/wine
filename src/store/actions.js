import ajax from '../utils/httpRequest'
const ass = (r, d) => Object.assign({}, r, d)
export default {
  // 获取注册
  getReg: ({ commit }) => {
    ajax({
      url: '/kservice',
      method: 'POST',
      data: {
        path: 'user/isreg'
      }
    }).then(res => {
      commit("setRegInfo", res.data);
    })
  },
  // 首页数据
  getIndex: ({ commit }) => {
    ajax({
      url: '/kservice',
      method: 'POST',
      data: {
        path: 'index'
      }
    }).then(res => {
      commit("setIndexInfo", res.data);
    })
  },
  // 权益

  getHelp: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'help/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setHelpList", res.data);
    })
  },
  // 帮助详情页
  getHelpDetail: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'help/detail',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setHelpDetail", res.data);
    })
  },
  //零售区
  getRetailList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'lsq/goods/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setRetailList", res.data);
    })
  },
  // 零售区详情页
  getRetailDetail: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'lsq/goods/detail',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setGoodsDetail", res.data);
    })
  },
  // 代理区详情页

  getAgentDetail: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'dlq/goods/detail',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setGoodsDetail", res.data);
    })
  },
  // 定制区详情页

  getSpecialDetail: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'gxhdz/goods/detail',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setGoodsDetail", res.data);
    })
  },
  // 会员详情页

  getMemberDetail: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'hyzx/goods/detail',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setGoodsDetail", res.data);
    })
  },
  //代理区
  getAgentList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'dlq/goods/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setAgentList", res.data);
    })
  },
  //会员区
  getMemberGoodsList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'hyzxq/goods/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setMemberGoodsList", res.data);
    })
  },
  // 定制区
  getSpecialList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'gxhdz/goods/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setSpecialList", res.data);
    })
  },
  // 我的信息
  getMyInfo: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/index',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setMyInfo", res.data);
    })

  },
  // 已经过期代理券
  getCouponListExpired: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/dlq/list/expired',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setCouponList", res.data);
    })
  },
  // 没有使用代理券
  getCouponListUse: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/dlq/list/nouse',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setCouponList", res.data);
    })
  },
  // 已经使用代理券
  getCouponListUsed: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/dlq/list/use',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setCouponList", res.data);
    })
  },
  // 消息列表
  getMsgList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/msg/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setMsgList", res.data);
    })
  },
  // 消息详情
  getMsgDetail: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/msg/detail',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setMsgDetail", res.data);
    })
  },
  // 银行卡列表
  getBankList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/bank/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setBankList", res.data);
    })
  },
  // 银行卡信息
  getBankInfo: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: ' my/user/bank/info',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setBankInfo", res.data);
    })
  },
  // 各大银行卡列表
  getBankAllList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/bank/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("setAllBankList", res.data);
    })
  },
  // 修改银行卡
  editBank: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/bank/edit',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      if (res.data === 0) {
        commit('setSuc', ass(res, { msg: '添加成功' }))
      } else {
        commit('setWarn', res)
      }


      commit("editBank", res.data);
    })
  },
  // 新增银行卡
  addBank: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/bank/add',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.ret === 0) {
        commit('setSuc', { msg: '添加成功' })
      } else {
        commit('setWarn', res.msg || { msg: '信息不正确请重试' })
      }
      commit("editBank", res.data);
    })
  },
  // 收货地址列表
  getAddrList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'user/address/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("setAddrList", res.data);
    })
  },
  // 添加用户收货地址
  addAddr: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'user/address/add',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data === 1) {
        commit('setSuc', { msg: '添加成功' })
      } else {
        commit('setWarn', res)
      }
      commit("addAddr", res.data);
    })
  },
  // 修改用户收货地址
  editAddr: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'user/address/edit',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data === 1) {
        commit('setSuc', { msg: '添加成功' })
      } else {
        console.log(res)
        commit('setWarn', res)
      }
      commit("editArr", res.data);
    })
  },
  // 删除用户收货地址
  delAddr: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'user/address/del',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.ret === 0) {
        commit('setSuc', { msg: '删除成功' })
      } else {
        commit('setWarn', res.msg || { msg: '删除失败请重试' })
      }
      commit("delAddr", res.data);
    })
  },
  // 获取用户地址
  getAddr: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'user/address/one',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("getAddr", res.data);
    })
  },
  // 统计团队人数
  getTeamMember: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'team/user/count',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("getTeamMember", res.data);
    })
  },
  // 获取团队人员列表
  getTeamMemberList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'team/user/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("getTeamMemberList", res.data);
    })
  },

  // 获取二维码
  getCode: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/qrcode',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("getCode", res.data);
    })
  },
  // 编辑真名
  editName: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/edit_name',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data === 1) {
        commit('setSuc', ass(res, { msg: '修改成功' }))
      } else {
        commit('setWarn', res)
      }


      commit("editName", res);
    })
  },
  // 积分列表
  queryGrade: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/score/log/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("queryGrade", res.data);
    })
  },
  // 提取积分
  transToMoney: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'score/to/money',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', ass(res, { msg: '兑换成功' }))
      } else {
        commit('setWarn', res)
      }

      commit("transToMoney", res);
    })
  },
  // 提取积分
  withdrawMoney: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/withdraw',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', ass(res, { msg: '提现成功' }))
      } else {
        commit('setWarn', res)
      }

      commit("withdrawMoney", res);
    })
  },
  // 钱包
  getMoneyGrade: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/money',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("getMoneyGrade", res.data);
    })
  },
  // 兑换钱记录
  getExchangeList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/score/exchange/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("getExchangeList", res.data);
    })
  },
  // 兑换钱记录
  queryMoneyList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/withdraw/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("getMoneyList", res.data);
    })
  },
  // 审核
  verifyMoney: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/user/withdraw/list/sh',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("verifyMoney", res.data);
    })
  },

  // 可寄售列表
  mySaleList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/jssp/kjs/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("mySaleList", res.data);
    })
  },
  // 急售中
  mySalingList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/jssp/jsz/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("mySaleList", res.data);
    })
  },
  // 遗迹手

  mySaledList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/jssp/ycs/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("mySaleList", res.data);
    })
  },

  // 团队业绩

  queryTeamAchieve: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'team/yj/count',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("queryTeamAchieve", res.data);
    })
  },
  // 获取年月日
  queryYearMonth: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'period/ym/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("queryYearMonth", res.data);
    })
  },
  // 获取期数
  querySeason: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'period/qs/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("querySeason", res.data);
    })
  },
  // 团队业绩订单列表
  queryTeamOrderList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'team/yj/order',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("queryTeamOrderList", res.data);
    })
  },
  // 我的订单
  queryMyOrderList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/order/list',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("queryMyOrderList", res.data);
    })
  },
  // 待付款
  waitPayOrderList: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/order/list/wait_pay',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("queryMyOrderList", res.data);
    })
  },

  // 寄售和取消寄售操作
  handleSale: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/jssp/sqjs',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', ass(res, { msg: '寄售成功' }))
      } else {
        commit('setWarn', res)
      }
      commit("handleSaling", res);
    })
  },
  // 寄售和取消寄售操作
  handleCancelSale: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/jssp/qxjs',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', ass(res, { msg: '取消成功' }))
      } else {
        commit('setWarn', res)
      }
      commit("handleSaling", res);
    })
  },
  // 取消订单
  handleCancelOrder: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/order/cancel',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', ass(res, { msg: '取消成功' }))
      } else {
        commit('setWarn', res)
      }
      commit("handleOrder", res);
    })
  },
  // 确认收货
  handleReceipt: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/order/receive_done',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', res)
      } else {
        commit('setWarn', res)
      }
      commit("handleOrder", res);
    })
  },
  // 协议
  getDoc: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'xy',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {

      commit("getDoc", res.data);
    })
  },
  // 获取验证码
  sendCode: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'sms/send',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', ass(res, { msg: '发送成功' }))
      } else {
        commit('setWarn', res)
      }
      commit("sendCode", res.data);
    })
  },
  // 用户注册
  registerUser: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'user/reg',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', ass(res, { msg: '注册成功' }))
      } else {
        commit('setWarn', res)
      }
      commit("registerUser", res);
    })
  },
  // 创建订单
  createOrder: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'order/create',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      if (res.data) {
        commit('setSuc', ass(res, { msg: '创建成功' }))
      } else {
        commit('setWarn', res)
      }
      commit("createOrder", res.data);
    })
  },
  // 提货列表
  queryReceiveList: ({ commit }, oriData) => {
    ajax({
      url: '/kservice',
      method: 'POST',
      data: oriData
    }).then(res => {
      commit("queryReceiveList", res.data);
    })
  },
  //对提货列表订单的操作
  operateOrder: ({ commit }, oriData) => {
    ajax({
      url: '/kservice',
      method: 'POST',
      data: oriData
    }).then(res => {
      commit("operateOrder", res);
    })
  },
  orderDetail: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/thbl/order/detail',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data
    }).then(res => {
      commit("orderDetail", res.data);
    })
  },
  orderInfo: ({ commit }, oriData) => {
    ajax({
      url: '/kservice',
      method: 'POST',
      data: oriData
    }).then(res => {
      commit("orderInfo", res.data);
    })
  },
  //对提货列表订单的操作 申请提货
  deleveryGoods: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/thbl/sqth',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data: data
    }).then(res => {
      commit("operateOrder", res);
    })
  },
  //对提货列表订单的操作 收货
  confirmRecieveGoods: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'my/thbl/qdsh',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data: data
    }).then(res => {
      commit("operateOrder", res);
    })
  },


  // 寄售订单详情
  saleOrder: ({ commit }, oriData) => {
    let data = Object.assign({}, oriData, {
      path: 'js/order/detail',
    })
    ajax({
      url: '/kservice',
      method: 'POST',
      data: data
    }).then(res => {
      commit("saleOrder", res.data);
    })
  },
}
