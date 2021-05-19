<template>
	<div>
		<!-- 五大订单状态栏 -->
		<div class="order-nav" @click="handleChangeNav">
			<span :class="i==0?'act':'0'" id="0">全部</span>
			<span :class="i==1?'act':'0'" id="1">待付款</span>
			<span :class="i==5?'act':'0'" id="5">待发货</span>
			<span :class="i==2?'act':'0'" id="2">待收货</span>
			<span :class="i==3?'act':'0'" id="3">已完成</span>
			<span :class="i==4?'act':'0'" id="4">售后/退款</span>
		</div>
		<!-- 空订单信息 -->
		<div class="order-empty" v-if="show">
			<img src="/static/img/kdd_03.png" alt="">
			<p>亲，订单很空虚~赶紧下几盏好看的灯吧</p>
			<button @click="handleToIndex">去逛逛</button>
		</div>
		<!-- 已有的订单信息 -->
		<div class="order-list" v-else>
			<orderItem :order="filterOrder"  @childFn="parentFn"></orderItem>
		</div>
	</div>
</template>

<script>
	import orderItem from "../../components/orderItem"
	export default{
		data(){
			return{
				i:0,
				show:true,
				dataInfo:{},
				orderArr:[],
				filterOrder:[]
			}
		},
		methods:{
			handleToIndex(){
				wx.navigateTo({
				  url: `/pages/newProducts/main?id=2`
				})
			},
			handleChangeNav(e){
				let x=0;
				if(typeof(e)!=="string"){
					this.i=e.target.id;
					x=e.target.id;
				}else{
					this.i=e;
					x=e;
				}
				switch(x){
					case "0"://所有订单（未付款订单）
					//判断是否有订单数据
					this.filterOrderFun(0);
					break;
					case "1"://所有已支付未发货订单
					this.filterOrderFun(0);
					break;
					case "5":
					this.filterOrderFun(5);
					break;
					case "2":
					this.filterOrderFun(2);
					break;
					case "3":
					this.filterOrderFun(3);
					break;
					case "4":
					this.filterOrderFun(4);
					break;
				}
			},
			filterOrderFun(n){
				this.filterOrder=this.orderArr.filter(item=>{
					return item.States==n;
				})
				this.filterOrder.length==0?this.show=true:this.show=false;
			},
			//父子组件通信
			parentFn(i) {
				if(typeof(i)=="number"){
					this.getOrderData(this.i)
				}
			},
			getOrderData(i){
				let _this = this;
				wx.request({
				   url: `http://192.168.2.38:8085/api/Orders/GetOrder?type=1&uid=${_this.dataInfo.Id}`, 
				   header: {
				     'content-type': 'application/json' // 默认值
				   },
				   method:'GET',
				   success (res) {
				     _this.orderArr=JSON.parse(res.data);
					 _this.filterOrder=_this.orderArr;
					 _this.filterOrder.length !==0 ? _this.show=false : _this.show=true;
					 _this.handleChangeNav(i);
				   }
				 })
			}
		},
		components:{
			orderItem
		},
		mounted() {
			let _this = this;
			//通过缓存获取用户信息
			wx.getStorage({
			  key: 'dataInfo',
			  success (res) {
			    _this.dataInfo=JSON.parse(res.data);
				// 获取用户订单数据
				_this.getOrderData(_this.$mp.query.i);
			  }
			})
		}
		
	}
</script>

<style>
	page{
		background: #f1f1f1;
	}
	.order-nav{
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
	}
	.order-nav span{
		flex: 1;
		text-align: center;
		font-size: 24rpx;
		font-weight: bold;
		color: #666;
		padding: 20rpx 0;
	}
	.order-nav span.act{
		color: #FE223B;
		border-bottom: 4rpx solid #FE223B;
	}
	.order-empty{
		text-align: center;
	}
	.order-empty img{
		margin-top: 120rpx;
		width: 90rpx;
		height: 90rpx;
		vertical-align: middle;
	}
		.order-empty p{
			font-size: 24rpx;
			padding: 30rpx;
		}
		.order-empty button{
			background: transparent;
			border: 8rpx solid #4c4c4c;
			background: #fff;
			color: #4C4C4C;
			width: 200rpx;
			height: 80rpx;
			line-height: 70rpx;
			font-size: 28rpx;
			margin: 0 auto;
			border-radius: 20rpx;
		}
</style>
