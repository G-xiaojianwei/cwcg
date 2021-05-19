<template>
	<div>
		<!-- 收货地址 -->
		<div class="address">
			<h3>收货地址 <span @click="updateAddress = true">修改地址</span></h3>
			<div><span>{{localAddress.LinkName}}</span><span>{{localAddress.LinkMobile}}</span></div>
			<div><span><em class="more" v-if="localAddress.IsDefault==1">默认</em></span><span>{{localAddress.Province}}{{localAddress.City}}{{localAddress.Area}}{{localAddress.Street}}{{localAddress.Address}}</span></div>
		</div>
		<!-- 订单商品 -->
		<div class="order-goods">
			<h3>订单商品</h3>
			<div class="order-item" v-for="(item,index) in resInfo" :key="index">
				<div>
					<img :src="'http://www.365dsw.com'+item.PicUrl" alt="">
				</div>
				<div>
					<p>{{item.ProName}}</p>
					<p>{{item.Title}}</p>
					<p>￥{{item.GoodsPrice}}</p>
					<p><input type="text" placeholder="留言填写"></p>
				</div>
				<div>
					x{{item.Num}}
				</div>
			</div>
		</div>
		<div class="goods-info">
			<div>订单数：<span>{{resInfo.length}}单</span></div>
			<div>产品数量：<span>{{commNum}}件</span></div>
			<div>商品金额：<span>￥{{commSum}}</span></div>
			<div>优惠券：<span>暂无</span></div>
		</div>
		<div class="goods-pay">
			<div>应付：￥{{commSum}}</div>
			<div @click="upOrder">提交订单</div>
		</div>
		<div class="address-list" v-if="updateAddress">
			<div class="model" >
				<div :class="item.Id==localAddress.Id ? 'model-item act' : 'model-item'" v-for="(item,index) in addressArr" :key="index" @click="handleUpdateAddress(item)">
					<div><span>{{item.LinkName}}</span><span>{{item.LinkMobile}}</span></div>
					<div><span><em class="more" v-if="item.IsDefault==1">默认</em></span><span>{{item.Province}}{{item.City}}{{item.Area}}{{item.Street}}{{item.Address}}</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import orderItem from "../../components/orderItem"
	export default{
		data(){
			return{
				dataInfo:{},
				addressArr:{},
				localAddress:{},
				resInfo:{},
				resid:"",
				coupon:[],
				updateAddress:false
			}
		},
		components:{
			orderItem
		},
		computed:{
			commNum(){
				let num=0;
				for(let i=0;i<this.resInfo.length;i++){
					num+=this.resInfo[i].Num;
				}
				return num;
			},
			commSum(){
				let sum=0;
				for(let i=0;i<this.resInfo.length;i++){
					sum+=this.resInfo[i].Num*this.resInfo[i].GoodsPrice;
				}
				return sum;
			}
		},
		methods:{
			upOrder(){
				let _this = this;
				let itemContents="[";
				for(let i=0;i<this.resInfo.length;i++){
					let item=`{\"id\":"${this.resInfo[i].ParentId}",\"sellerid\":"${this.resInfo[i].SellerId}",\"contents\":"我买产品了"}`;
					if(i==this.resInfo.length-1){
						itemContents+=item+"]";
					}else{
						itemContents+=item+",";
					}
				}
				
				wx.request({
				   url: `http://192.168.2.38:8085/api/Orders/PostConfirmOrders?receId=${_this.localAddress.Id}&couponId=0&resId=${_this.resid}&itemContents=${itemContents}&uid=${_this.dataInfo.Id}&IsWholesaler=0`, 
				   header: {
				     'content-type': 'application/json' // 默认值
				   },
				   method:'POST',
				   success (res) {
					   //得到订单id
					   let orderId=res.data;
						if(res.data){
							//发起支付
							wx.showModal({
							  title: '提示',
							  content: '订单提交成功，马上去支付？',
							  success (res) {
							    if (res.confirm) {
							      wx.login({
							        success (res) {
							      	if (res.code) {
							      	  //发起网络请求
							      	  wx.request({
							      		url: `http://192.168.2.38:8085/api/CwcPayment/GetOpenId?js_code=${res.code}`,
							      		method:'GET',
							      		success(res){
							      			//获取openid
							      			let openid=JSON.parse(res.data).openid;
							      			wx.request({
							      				url: `http://192.168.2.38:8085/api/CwcPayment/GetPay?orderId=${orderId}&uid=${_this.dataInfo.Id}&openid=${openid}&amount=${_this.commSum}`,
							      				method:'GET',
							      				success(res){
							      					console.log(res)
							      				}
							      			})
							      		}
							      	  })
							      	} else {
							      	  console.log('登录失败！' + res.errMsg)
							      	}
							        }
							      })
							    } else if (res.cancel) {
							      
							    }
							  }
							})
						}
				   }
				 })
			},
			handleUpdateAddress(v){
				this.localAddress=v;
				this.updateAddress=false;
			}
		},
		mounted() {
			this.resid=this.$mp.query.resid;
			//通过缓存获取用户信息
			let _this = this;
			wx.getStorage({
			  key: 'dataInfo',
			  success (res) {
			    _this.dataInfo=JSON.parse(res.data);
				// 获取用户收货地址
				wx.request({
				   url: `http://192.168.2.38:8085/api/user/GetResAddress?uid=${_this.dataInfo.Id}`, 
				   header: {
				     'content-type': 'application/json' // 默认值
				   },
				   method:'GET',
				   success (res) {
				     _this.addressArr=JSON.parse(res.data);
					 //将默认地址设置为显示
					_this.localAddress=JSON.parse(res.data).filter(item=>item.IsDefault==1)[0];
				   }
				 })
				 
				 wx.request({
				    url: `http://192.168.2.38:8085/api/Orders/PostConfirmOrdersPage?uid=${_this.dataInfo.Id}&resId=${_this.resid}&userType=1`, 
				    header: {
				      'content-type': 'application/json' // 默认值
				    },
				    method:'POST',
				    success (res) {
				      _this.resInfo=JSON.parse(res.data.split("---")[0]);//商品信息
				      _this.coupon=JSON.parse(res.data.split("---")[1]);//优惠券信息
					  
					}
				  })
				 
			  }
			})
		}
		
	}
</script>

<style>
	page{
		background: #f1f1f1;
	}
	page::before{
		content: "";
		display: table;
	}
	.address{
		width: 100%;
		margin: 20rpx 0;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #fff;
		font-size: 28rpx;
	}
	h3{
		position: relative;
		font-weight: bold;
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #eee;
	}
	h3 span{
		position:absolute;
		right: 0;
		top: 0;
		font-size: 24rpx;
		font-weight: 100;
	}
	.address div{
		display: flex;
		align-items: center;
		justify-content: left;
		padding: 5rpx 0;
	}
	.address div span:nth-child(1){
		flex: 2;
		text-align: center;
	}
	.address div span:nth-child(2){
		flex: 8;
	}
	 .more{
		display: inline-block;
		padding:2rpx 8rpx;
		border-radius: 10rpx;
		background: #FE223B;
		color: #fff;
	}
	.order-goods{
		padding: 10rpx;
		box-sizing: border-box;
		background-color: #fff;
	}
	.order-goods h3{
		display: block;
	}
	.order-goods .order-item{
		display: flex;
		align-items: center;
		padding: 10rpx 0;
		border-bottom: 1rpx solid #eee;
	}
	.order-goods .order-item div:nth-child(1){
		flex: 3;
		text-align: center;
	}
	.order-goods .order-item div:nth-child(2){
		flex: 6;
		font-size: 24rpx;
	}
	.order-goods .order-item div:nth-child(2) p{
		padding: 2rpx 0;
	}
	.order-goods .order-item div:nth-child(2) p:nth-child(3){
		color: #FE223B;
	}
	.order-goods .order-item div:nth-child(3){
		flex: 1;
	}
	.order-goods .order-item div:nth-child(1) img{
		width: 150rpx;
		height: 150rpx;
	}
	.goods-info{
		margin: 20rpx 0;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		font-size: 28rpx;
	}
	.goods-info div{
		padding: 15rpx 0;
		border-bottom: 1rpx solid #eee;
	}
	.goods-info div span{
		float: right;
		color: #FE223B;
	}
	.goods-pay{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
		display: flex;
		width: 100%;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #fff;
	}
	.goods-pay div:nth-child(1){
		flex: 7;
		padding: 0 30rpx;
		color: #FE223B;
		box-sizing: border-box;
	}
	.goods-pay div:nth-child(2){
		flex: 3;
		text-align: center;
		background: #FE223B;
		color: #fff;
	}
	.address-list{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 11;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
	}
	.address-list .model{
		position: absolute;
		left: 0;
		bottom: 0;
		background: #fff;
		width: 100%;
		height: 50%;
		overflow-y: scroll;
	}
	.model-item{
		width: 95%;
		margin: 0 auto;
		padding: 20rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #eee;
		margin-top: 10rpx;
		font-size: 24rpx;
	}
	.model-item div{
		display: flex;
		align-items: center;
		justify-content: left;
		padding: 5rpx 0;
	}
	.model-item div span:nth-child(1){
		flex: 2;
		text-align: center;
	}
	.model-item div span:nth-child(2){
		flex: 8;
	}
	.act{
		border: 1rpx solid #FE223B;
	}
</style>
