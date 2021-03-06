
const setStateFn = (stateName) => {
  return function (state, val) {
    state[stateName] = val

  }
}

let fnNameArr = [
  {setLoading: 'loading'}, //loading加载
  { setSuc: 'suc' }, //成功
  { setWarn: 'warn' }, //警告
  { setRegInfo: 'regInfo' },//是否注册
  { setErr: 'err' },//错误弹窗
  { setIndexInfo: 'indexData' },//首页
  { setHelpList: 'helpList' },//帮助列表
  { setHelpDetail: 'helpDetail' },//帮助详情
  { setMyInfo: 'myInfo' },//我的
  { setRetailList:'retailGoodsList'},//零售区
  { setAgentList: 'agentGoodsList' },//代理区
  { setMemberGoodsList: 'memberGoodsList' },//会员区
  { setSpecialList: 'specialGoodsList' },//定制区
  { setGoodsDetail:'goodsDetail'}, //零售区详情
  { setCouponList: 'couponObj' }, //代理券
  {setMsgList:'msgList'},//消息列表
  { setMsgDetail: 'msgDetail' },//消息列表
  { setBankList: 'bankList' },//银行卡列表
  { setAllBankList: 'allBankList' },//银行卡列表
  { editBank: 'bankInfo' },//银行卡编辑
  { addBank: 'bankInfo' },//银行卡添加
  { setBankInfo: 'bankCard' },//银行卡信息
  { setAddrList: 'addrList' },//地址列表
  { addAddr: 'addAddr' },//增加地址
  { editArr: 'addAddr' },//增加地址
  { delAddr: 'delAddr' },//删除地址
  { getAddr: 'addrInfo' },//获取地址
  { getTeamMember: 'teamMember' },//团队人数
  { getTeamMemberList: 'teamMemberList' },//团队人数列表
  { getCode: 'code' },//推广二维码
  { editName: 'realName' },//真实姓名
  { queryGrade: 'gradeList' },//积分记录
  { transToMoney: 'transToMoney' },//体现积分
  { getMoneyGrade: 'moneyGrade' },//钱包
  { getExchangeList: 'exchangeList' },//钱包
  { getMoneyList: 'moneyList' },//金额列表
  { withdrawMoney: 'withdrawMoney' },//提取金额
  { verifyMoney: 'verifyMoneyList' },//审核列表
  { mySaleList: 'mySaleList' },//科技手
  { mySalingList: 'mySaleList' },//急售中
  { mySaledList: 'mySaleList' },//遗迹手
  { queryTeamAchieve: 'teamAchieve' },//团队业绩总
  { queryYearMonth:'yearMonth'},//获取年月日
  { querySeason: 'season' },//获取期数
  { queryTeamOrderList: 'teamOrderList' },//获取团队订单列表
  { queryMyOrderList: 'myOrderList' },//我的订单
{handleSaling:'salingData'},//寄售和取消寄售操作
  { handleOrder: 'handleOrder' },//订单操作
  { getDoc: 'doc' },//协议
  { sendCode: 'sendCode' },//验证码
  { registerUser: 'registerUser' },//用户注册
  { createOrder: 'createOrder' },//创建订单
  { queryReceiveList: 'receiveList' },//可提货列表
  { operateOrder: 'operateOrder' },//对可提货列表订单操作
  { orderDetail: 'orderDetail' },//对可提货列表订单操作
  { orderInfo: 'orderInfo' },//常规订单

  { saleOrder: 'saleOrder' },//寄售订单
  



  // 
]
let obj = {}
fnNameArr.forEach(item => {
  obj[Object.keys(item)[0]] = setStateFn(Object.values(item)[0])
})

export default {
  ...obj
  // setLoading(state, bol) {
  //   state.loading = bol
  // },
  // setRegInfo(state, data) {
  //   state.regInfo = data
  // },
  // setErr(state, data) {
  //   state.err = data
  // },
  // // 首页
  // setIndexInfo(state, data) {
  //   state.indexData = data
  // },
  // setHelpList(state, data) {
  //   state.helpList = data
  // },
  // setHelpDetail(state, data) {
  //   state.helpDetail = data
  // },
  // setMyInfo(state, data) {
  //   state.myInfo = data
  // }
}