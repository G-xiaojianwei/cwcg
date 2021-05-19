<template>
	<div>
		<!-- 订单号 -->
		<div class="header">
			<p>物流订单：574545475547</p>
			<p>物流公司：顺丰快递</p>
		</div>
		<div class="cont">
			<div class="cont-title">订单进度</div>
			<div class="list">
				<div>
					<p>金华市|【义乌转运中心】，正发往【重庆转运中心】</p>
					<span>2021/3/22 19:38:59</span>
				</div>
				<div>
					<p>金华市|【义乌转运中心】，正发往【重庆转运中心】</p>
					<span>2021/3/22 19:38:59</span>
				</div>
				<div>
					<p>金华市|【义乌转运中心】，正发往【重庆转运中心】</p>
					<span>2021/3/22 19:38:59</span>
				</div>
				<div>
					<p>金华市|【义乌转运中心】，正发往【重庆转运中心】</p>
					<span>2021/3/22 19:38:59</span>
				</div>
				<div>
					<p>金华市|【义乌转运中心】，正发往【重庆转运中心】</p>
					<span>2021/3/22 19:38:59</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	img{
		width: 100%;
		height: 300rpx;
	}
	.header{
		background: #fff;
		border-bottom: 20rpx solid #F1F2F6;
		padding: 20rpx 40rpx;
		font-size: 28rpx;
	}
	.header p:nth-child(1){
		margin-bottom: 10rpx;
		font-weight: bold;
	}
	.cont{
		padding: 20rpx 40rpx;
	}
	.cont .cont-title{
		border-left: 1rpx solid #F43530;
		padding-left: 20rpx;
		line-height: 30rpx;
		font-size: 30rpx;
	}
	.cont .list{
		font-size: 26rpx;
		padding: 60rpx 40rpx;
	}
	.cont .list div{
		position: relative;
		padding-left: 40rpx;
		padding-bottom: 20rpx;
		border-left: 1rpx solid #F43530;
	}
	.cont .list div::after{
		content: "";
		display: block;
		width: 20rpx;
		height: 20rpx;
		background-color: #F43530;
		border-radius: 50%;
		position: absolute;
		left: -10rpx;
		top: 0;
	}
	.cont .list div:nth-child(1) ::before{
		content: "";
		display: block;
		width: 40rpx;
		height: 40rpx;
		background-color: rgba(244,53,48,.1);
		border-radius: 50%;
		position: absolute;
		left: -20rpx;
		top: -10rpx;
	}
	.cont .list div span{
		display: block;
		color: #666;
		margin-top: 20rpx;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #F1F2F6;
	}
</style>
