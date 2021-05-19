<template>
	<!-- 商品展示单个组件 -->
	<div class="product-item" @click="handleToProductsDetail(dataAll)">
	  <img :src="'http://www.365dsw.com'+dataAll.Pic" alt="">
	  <p>{{dataAll.ProName}}</p>
	  <!-- <div><span>新品</span></div> -->
	  <span>￥<em>{{dataAll.GoodsPrice}}</em></span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		methods:{
			handleToProductsDetail(v){
				wx.navigateTo({
				  url: `/pages/productsDetail/main?id=${v.Id}&i=${this.tag}`
				})
			}
		},
		props:["dataAll","tag"],
		mounted() {
			// console.log(this.dataAll,1)
		}
	}
</script>

<style>
	.product-item{
		float: left;
		margin-left: 15rpx;
		width: 352rpx;
		border-radius: 10rpx;
		overflow: hidden;
		padding-bottom: 10rpx;
		margin-bottom: 20rpx;
		box-shadow: 0rpx 0rpx 8rpx 2rpx rgba(0,0,0,.1);
		
	}
	.product-item img{
		vertical-align: top;
		width: 352rpx;
		height: 352rpx;
	}
	.product-item p{
		font-size: 28rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		padding: 10rpx 10rpx 0;
	}
	.product-item div{
		padding: 10rpx 10rpx 0;
	}
	.product-item div span{
		padding:5rpx 14rpx;
		background: #ffd0d0;
		font-size: 22rpx;
		margin-right: 10rpx;
	}
	.product-item div span:nth-child(2){
		background: #d0d0d0;
	}
	.product-item div span:nth-child(3){
		background: #ebebeb;
	}
	.product-item>span{
		padding:0 10rpx;
		color: #FE223B;
		font-size: 22rpx;
	}
	.product-item>span>em{
		display: inline-block;
		font-size: 32rpx;
	}
</style>
