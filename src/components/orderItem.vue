
<template>
	<!-- 订单模块 -->
	<div>
		<div class="list-item" v-for="(item,index) in order" :key="index" >
			<div class="list-number">
				<span>订单号：{{item.OrderNo}}</span>
				<span>待支付</span>
			</div>
			<div class="order-info">
				<div><img :src="'http://www.365dsw.com'+item.PicZip" alt=""></div>
				<div>
					<p>{{item.ProName}}</p>
					<p>{{item.Title}}</p>
					<p></p>
				</div>
				<div>
					<span>￥{{item.OrderPrice/item.Num}}</span>
					<span>数量:{{item.Num}}件</span>
					<span>订单总额: <em>￥{{item.OrderPrice}}</em></span>
				</div>
			</div>
			<div class="order-an">
				<button @click="handleToProductsDetail(item)">查看详情</button>
				<button class="act">马上付款</button>
				<button @click="handleRemove(item)">取消订单</button>
			</div>
		</div>
	</div>
		
</template>

<script>
	export default{
		data(){
			return{
				dataInfo:{}
			}
		},
		methods:{
			// 查看订单产品详情
			handleToProductsDetail(v){
				wx.navigateTo({
				  url: `/pages/productsDetail/main?id=${v.ProId}&i=''`
				})
			},
			//取消订单
			handleRemove(v){
				let _this=this;
				wx.showModal({
				  title: '提示',
				  content: '您确定要取消该订单？',
				  success (res) {
				    if (res.confirm) {//点击确定
				      wx.request({
				         url: `http://192.168.2.38:8085/api/Orders/ClearUserOrder?id=${v.Id}&uid=${_this.dataInfo.Id}`, 
				         header: {
				           'content-type': 'application/json' // 默认值
				         },
				         method:'POST',
				         success (res) {
							if(res.data=="处理成功"){
								//更新订单信息
								_this.$emit('childFn', v.Id);
							}
				         }
				       })
				    } else if (res.cancel) {//点击取消
				      console.log('用户点击取消')
				    }
				  }
				})
				
			}
		},
		props:["order"],
		mounted() {
			let _this=this;
			wx.getStorage({
			  key: 'dataInfo',
			  success (res) {
			    _this.dataInfo=JSON.parse(res.data);
			  }
			})
		}
	}
</script>

<style>
	.list-item{
		width: 95%;
		margin: 20rpx auto 0;
		background: #fff;
	}
	.list-number{
		display: flex;
		align-items: center;
		background: #FE223B;
		color: #fff;
		font-size: 28rpx;
		padding: 20rpx;
	}
	.list-number span{
		flex: 7;
		display: block;
		text-align: left;
	}
	.list-number span:nth-child(2){
		flex: 3;
		text-align: right;
	}
	.order-info{
		display: flex;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.order-info div:nth-child(1){
		flex: 3;
	}
		.order-info div:nth-child(1) img{
			width: 100%;
			height: 190rpx;
		}
	.order-info div:nth-child(2){
		flex: 5;
		font-size: 24rpx;
		padding: 0 20rpx;
		color: #666;
	}
	.order-info div:nth-child(2) p:nth-child(1){
		font-weight: bold;
		font-size: 28rpx;
		color: #000;
	}
	.order-info div:nth-child(3){
		position: relative;
		flex: 2;
		font-size: 24rpx;
	}
	.order-info div:nth-child(3) span{
		display: block;
		text-align: right;
	}
	.order-info div:nth-child(3) span:nth-child(1){
		font-weight: bold;
	}
	.order-info div:nth-child(3) span:nth-child(2){
		color: #666;
	}
	.order-info div:nth-child(3) span:nth-child(3){
		position: absolute;
		right: 0;
		bottom: 0;
		width: 300rpx;
	}
	.order-info div:nth-child(3) span:nth-child(3) em{
		display: inline-block;
		color: #FE223B;
		font-size: 28rpx;
		font-weight: bold;
	}
	.order-an{
		width: 100%;
		text-align: right;
		height: 88rpx;
		line-height: 88rpx;
		border-top: 1rpx solid #eee;
	}
	.order-an button{
		display: inline-block;
		vertical-align: middle;
		width: 160rpx;
		height: 64rpx;
		line-height: 64rpx;
		background: transparent;
		border: none;
		margin-right: 10rpx;
		font-size: 24rpx;
	}
	.order-an button.act{
		color: #FE223B;
		border: 1rpx solid #FE223B;
	}
</style>
