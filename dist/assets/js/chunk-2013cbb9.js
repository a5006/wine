(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2013cbb9"],{"426a":function(t,e,i){"use strict";var a=i("940a");i.n(a).a},"4ad6":function(t,e,i){"use strict";var a=i("e5fe");i.n(a).a},7176:function(t,e,i){"use strict";var a={props:{title:{},desc:{},total:{},num:{default:1},img:{},notTotal:{default:!0},order_num:{},price:{},type:{},id:{},sale_nums:{},remain_nums:{}},methods:{handleSale:function(t){this.$emit("handleSale",t)},handleCancelSale:function(t){this.$emit("handleSale",t)},handlePay:function(t){this.$emit("handlePay",t)},handleCancelPay:function(t){this.$emit("handleCancelPay",t)},handleConfirm:function(t){this.$emit("handleConfirm",t)}},watch:{order_num:function(){}}},n=(i("4ad6"),i("4e82")),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[i("van-card",{attrs:{title:t.title,thumb:t.img}},[i("div",{staticClass:"flex_bet",attrs:{slot:"desc"},slot:"desc"},[i("p",{staticClass:"price_s"},[t._v(t._s(t.desc))]),i("p",{staticClass:"price_s"},[t._v("x"+t._s(t.num))])]),i("div",{staticClass:"flex price",attrs:{slot:"price"},slot:"price"},[t.notTotal?i("p",{staticClass:"price_s"},[t._v("共"+t._s(t.num)+"件商品，合计")]):t._e(),i("p",{staticClass:"price_p"},[t._v("￥"+t._s(t.total))])])]),"sale"===t.type?i("div",{staticClass:"flex_bet btn_box"},[i("p",{staticClass:"price_s"},[t._v("积分订单")]),i("div",{staticClass:"btn",on:{click:function(e){return t.handleSale(t.id)}}},[t._v("寄售")])]):t._e(),"pay"===t.type?i("div",{staticClass:"flex_bet btns"},[i("div",{staticClass:"btn cancel",on:{click:function(e){return t.handleCancelPay(t.id)}}},[t._v("取消订单")]),i("div",{staticClass:"btn",on:{click:function(e){return t.handlePay(t.order_num)}}},[t._v("付款")])]):t._e(),"confirm"===t.type?i("div",{staticClass:"flex_bet btn_box"},[i("p",{staticClass:"price_s"}),i("div",{staticClass:"btn",on:{click:function(e){return t.handleConfirm(t.id)}}},[t._v("确认收货")])]):t._e()],1)}),[],!1,null,"efdb7d3e",null);e.a=s.exports},"7f83":function(t,e,i){"use strict";i.r(e),i("c1b2"),i("7298");var a=i("b8a6"),n={components:{SaleCard:i("7176").a},data:function(){return{source:"1",list:[],menuList:[{title:"待付款"},{title:"待发货"},{title:"待收货"},{title:"已完成"}],active:0,loading:!1,finished:!1,start:0,limit:10,total:0}},methods:{queryOrderList:function(){var t=this.start,e=this.limit,i=this.source;switch(this.active){case 0:return void this.$store.dispatch("waitPayOrderList",{start:t,source:i,limit:e});default:return void this.$store.dispatch("queryMyOrderList",{start:t,status:{1:4,2:5,3:7}[this.active],source:i,limit:e})}},handlePay:function(){window.location.href="https://jhhy.vsapp.cn/mobile/pay/index?order_num=".concat(this.order_num,"&backup=/me")},onLoad:function(){this.queryOrderList(),this.start+=this.limit,this.loading=!1},switchTab:function(){this.resetQuery()},resetQuery:function(){this.start=0,this.list=[],this.queryOrderList()},handleCancelOrder:function(t){this.$store.dispatch("handleCancelOrder",{order_id:t})},handleReceipt:function(t){this.$store.dispatch("handleReceipt",{order_id:t})}},computed:{handleOrder:function(){return this.$store.state.handleOrder},myOrderList:function(){return this.$store.state.myOrderList},type:function(){switch(this.active){case 0:return"pay";case 2:return"confirm";default:return""}}},watch:{handleOrder:{handler:function(t){t.data&&this.queryOrderList()},deep:!0},myOrderList:function(t){var e=this,i=t.list,n=t.nums;i=i.map((function(t){return t.img=e.formatImg(t.goods_cover),t.getTime=e.formatDate(t.ctime),t.endTime=isNaN(1e3*t.etime)?null:1e3*t.etime,t})),this.list=[].concat(Object(a.a)(this.list),Object(a.a)(i)),this.total=1*n,this.list.length>=this.total?this.finished=!0:this.finished=!1},active:function(t){0!=t&&"3"==this.source&&(this.source="1")},source:function(){this.resetQuery()}},mounted:function(){this.active=this.$route.query.active||0}},s=(i("426a"),i("4e82")),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Gheader",{attrs:{title:"我的订单",back:"1"}}),i("van-tabs",{attrs:{sticky:""},on:{click:t.switchTab},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.menuList,(function(t){return i("van-tab",{key:t.title,staticClass:"con",attrs:{title:t.title}})})),1),i("van-radio-group",{staticClass:"flex_bet radio_box",model:{value:t.source,callback:function(e){t.source=e},expression:"source"}},[i("van-radio",{staticClass:"radio_item",attrs:{"checked-color":"#E70002",name:"1",shape:"square"}},[t._v("零售区")]),0===this.active?i("van-radio",{staticClass:"radio_item",attrs:{"checked-color":"#E70002",name:"3",shape:"square"}},[t._v("代理区")]):t._e(),i("van-radio",{staticClass:"radio_item",attrs:{"checked-color":"#E70002",name:"2",shape:"square"}},[t._v("会员尊享区")])],1),i("div",{staticClass:"list pad_container"},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(e){return i("div",{key:e.order_id,staticClass:"list_item"},[i("SaleCard",{attrs:{type:t.type,sale_nums:e.sale_nums,remain_nums:e.remain_nums,desc:e.goods_attr,title:e.goods_name,id:e.order_id,order_num:e.order_num,img:t.formatImg(e.goods_cover),price:e.goods_price,nums:e.buy_num,total:e.order_amount},on:{handleCancelPay:t.handleCancelOrder,handleConfirm:t.handleReceipt,handlePay:t.handlePay}})],1)})),0)],1)],1)}),[],!1,null,"49698ca2",null);e.default=r.exports},"940a":function(t,e,i){},b8a6:function(t,e,i){"use strict";function a(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}i.d(e,"a",(function(){return a}))},e5fe:function(t,e,i){}}]);