<template>
		<div class="itemBox">
			<div class="itemDetail">
				<img class="itemImg" :src='img'>
				<div class="itemDesc">
					<div class="itemTitle">{{title}}</div>
					<div class="attr">{{desc}}</div>
					<div class="num">x{{num}}</div>
					<div class="clear"></div>
					<div class="count">共{{num}}件商品，合计:<span class="cost">¥{{total}}</span></div>
				</div>
			</div>
			<div class="btn" @click="handle(id)" v-if='btn'>{{btn}}</div>
			<div class="clear" v-if='btn'></div>
		</div>
</template>

<script>
export default {
  props: {
    title: {},
    desc: {},
    total: {},
    num: {
      default: 1
    },
    img: {},
    notTotal: {
      default: true
    },
    price: {},
    type: {},
    id: {},
				btn:{}
  },
  methods: {
    handle(e) {
      this.$emit('handle', e)
    }
  }
}
</script>

<style scoped>
		.itemBox{
			width:100%;
			padding: 0.38rem 0;
			background:rgba(255,255,255,1);
			box-shadow:0px 0.02px 0.08px 0px rgba(0, 0, 0, 0.15);
			border-radius:0.2rem;
		}
		.itemDetail{
			display: flex;
			width: 8.56rem;
			margin: 0 auto;
			justify-content: space-between;
		}
		.itemImg{
			height: 2.6rem;
			width: 2.6rem;
		}
		.itemDesc{
			width: 5.64rem;
		}
		.itemTitle{
			font-size: 0.43rem;
			color: #333;
			word-break:break-all;
		}
		.num{
			float: right;
			font-size: 0.37rem;
			color: #999999;
		}
		.clear{
			clear:both;
		}
		.attr{
			font-size: 0.35rem;
			color: #999999;
		}
		.count{
			float: right;
			margin-top: 0.1rem;
			font-size: 0.35rem;
			color: #999999;
		}
		.cost{
			margin-left: 0.1rem;
			font-size: 0.4rem;
			color: #E70002;
		}
		.btn{
			display: flex;
			justify-content: center;
			align-items: center;
			width:2.2rem;
			height:0.75rem;
			float: right;
			margin-top: 0.62rem;
			margin-right: 0.53rem;
			background:rgba(255,255,255,1);
			border:0.02rem solid rgba(231,0,2,1);
			border-radius:0.37rem;
			font-size: 0.34rem;
			color: #E70002;
		}
</style>
