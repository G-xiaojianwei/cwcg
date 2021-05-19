<template>
	<div>
		<div class="list">
			<div class="list-item" v-for="(item,index) in collectArr" :key="index" >
				<div @click="handleToProductsDetail(item.ProId)">
					<img :src="'http://www.365dsw.com'+item.Pic" alt="">
				</div>
				<div @click="handleToProductsDetail(item.ProId)">
					<p>{{item.ProName}}</p>
				</div>
				<div>
					<button @click="deleteCollect(item)">删除</button>
				</div>
			</div>
		</div>
		<p class="data">没有更多数据</p>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				uid:0,//用户id
				collectArr:{}
			}
		},
		methods:{
			handleToProductsDetail(v){
				wx.navigateTo({
				  url: `/pages/productsDetail/main?id=${v}`
				})
			},
			deleteCollect(v){
				let _this=this;
				wx.showModal({
				  title: '提示',
				  content: '您确定要删除该收藏吗？',
				  success (res) {
				    if (res.confirm) {
				      wx.request({
				         url: `http://192.168.2.38:8085/api/goods/DelGoodsColl?id=${v.Id}&uid=${v.Uid}`, 
				         header: {
				           'content-type': 'application/json' // 默认值
				         },
				         method:'POST',
				         success (res) {
				      	   console.log(res)
				          wx.request({
				             url: `http://192.168.2.38:8085/api/goods/GetCollProList?uid=${v.Uid}`, 
				             header: {
				               'content-type': 'application/json' // 默认值
				             },
				             method:'GET',
				             success (res) {
				              _this.collectArr=res.data;
				             }
				           })
				         }
				       })
				    } else if (res.cancel) {
				      console.log('用户点击取消')
				    }
				  }
				})
			}
		},
		mounted() {
			let _this = this;
			this.uid=this.$mp.query.id;
			wx.request({
			   url: `http://192.168.2.38:8085/api/goods/GetCollProList?uid=${_this.$mp.query.id}`, 
			   header: {
			     'content-type': 'application/json' // 默认值
			   },
			   method:'GET',
			   success (res) {
			    _this.collectArr=res.data;
			   }
			 })
		}
	}
</script>

<style>
	.list{
		padding: 20rpx;
		box-sizing: border-box;
	}
	.list-item{
		display: flex;
		height: 168rpx;
		align-items: center;
		justify-content: center;
	}
	.list-item div{
		height: 100%;
		border: 1rpx solid #eee;
	}
	.list-item div:nth-child(1){
		flex:3;
		padding: 5rpx 10rpx;
	}
	.list-item div:nth-child(1) img{
		width: 100%;
		height: 100%;
		padding: 10rpx;
		box-sizing: border-box;
		vertical-align: top;
	}
	.list-item div:nth-child(2){
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 4;
		text-align: center;
		font-size: 28rpx;
	}
	.list-item div:nth-child(3){
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 3;
		text-align: center;
	}
	.list-item div:nth-child(3) button{
		width: 108rpx;
		height: 40rpx;
		background: #FE223B;
		color: #fff;
		border-radius: 0;
		font-size: 24rpx;
		text-align: center;
		line-height: 40rpx;
		box-shadow: none;
	}
	.data{
		padding:40rpx;
		font-size: 28rpx;
		text-align: center;
	}
</style>
