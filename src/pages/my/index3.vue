<template>
 <div>
	 <!-- 头部显示信息 -->
	 <div class="header">
		 <div class="header-top">
			 <div>
				 <img :src="userInfo.avatarUrl == null ? '/static/img/index_img_23.png' :userInfo.avatarUrl" alt="">
			 </div>
			 <div>
				 <button class="btn" open-type="getUserInfo" @click="handleLogin">{{userInfo.nickName ==null ? '点击登录' :userInfo.nickName}}</button>
				 <p>ID:{{dataInfo.NickName}}（消费者）</p>
			 </div>
		 </div>
	 </div>
	 <!-- 功能列表 -->
	 <div class="mylist">
		 <div class="mylist-top">
			 <div class="mylist-title">
				 <p>我的订单</p>
				 <p @click="handleToOrder(0)">查看所有订单</p>
			 </div>
			 <div class="mylist-cont">
				 <div @click="handleToOrder(1)">
					 <img src="/static/img/dfk.png" alt="">
					 <p>待付款</p>
					 <span>0</span>
				 </div>
				 <div @click="handleToOrder(5)">
					 <img src="/static/img/dfh.png" alt="">
					 <p>待发货</p>
					 <span>0</span>
				 </div>
				 <div @click="handleToOrder(2)">
					 <img src="/static/img/dsh.png" alt="">
					 <p>待收货</p>
					 <span>0</span>
				 </div>
				 <div @click="handleToOrder(3)">
					 <img src="/static/img/ywc.png" alt="">
					 <p>已完成</p>
					 <span>99</span>
				 </div>
				 <div @click="handleToOrder(4)">
					 <img src="/static/img/shtk.png" alt="">
					 <p>售后/退款</p>
					 <span>0</span>
				 </div>
			 </div>
		 </div>
		<div class="mylist-bottom">
			<div @click="handleToCollect">
				<img src="/static/img/sc.png" alt="">
				<p>我的收藏</p>
			</div>
			<div @click="handleToAddress">
				<img src="/static/img/dz.png" alt="">
				<p>收货地址管理</p>
			</div>
		</div>
	 </div>
 </div>
</template>

<script>
	
export default {
  data () {
    return {
      userInfo:{},//微信获取到的用户数据
	  dataInfo:{}//服务器获取到的用户数据
    }
  },
  methods: {
	  //跳转到订单页面
	  handleToOrder(i){
		  wx.navigateTo({
		    url: `/pages/order/main?i=${i}`
		  })
	  },
	  handleToCollect(){
		  wx.getStorage({
		    key: 'dataInfo',
		    success (res) {
		      wx.navigateTo({
		        url: `/pages/collect/main?id=${JSON.parse(res.data).Id}`
		      })
		    }
		  })
	  },
    handleLogin(){
		let _this=this;
		wx.getUserInfo({
		  success: function(res) {
			  _this.userInfo=res.userInfo;
			  let wxToken="123456789dfdf123456789";
			  let phoneNumber=13896534797;
			  // 第二步 如是已有用户，获取用户信息
			  if(phoneNumber==13896534797){
				  // 获取用户信息
				  wx.request({
				     url: `http://192.168.2.38:8085/api/user/UserInfo?uid=41`, 
				     header: {
				       'content-type': 'application/json' // 默认值
				     },
				     method:'POST',
				     success (res) {
				       _this.dataInfo=res.data;
					   //将用户信息保存到数据中
					   wx.setStorage({
						   key:"dataInfo",
						  data:JSON.stringify(res.data)
					   })
				     }
				   })
			  }else{
				  //第三步 如不是用户 注册新用户
				  wx.request({
				    url: `http://192.168.2.38:8085/api/user/UserReg?mobile=${phoneNumber}&userName=${_this.userInfo.nickName}&userHead=${_this.userInfo.avatarUrl}&wxToken=${wxToken}`,
				    header: {
				      'content-type': 'application/json' // 默认值
				    },
				    method:'POST',
				    success (res) {
						
				      //注册成功后 获取用户信息
				      wx.request({
				         url: `http://192.168.2.38:8085/api/user/UserInfo?uid=41`, 
				         header: {
				           'content-type': 'application/json' // 默认值
				         },
				         method:'POST',
				         success (res) {
				           _this.dataInfo=res.data;
						   //将用户信息保存到数据中
							   wx.setStorage({
								   key:"dataInfo",
								  data:JSON.stringify(res.data)
							   })
				         }
				       })
				    }
				  })
			  }
		  }
		})
	},
	handleToAddress(){
		wx.navigateTo({
		  url: `/pages/address/main?add=1`
		})
	},
  },
  mounted() {
  	wx.login({
  	  success (res) {
  		  // 用户注册
  	    // if (res.code) {
  	    //   //发起网络请求
  	    //   wx.request({
  	    //     url: 'https://test.com/onLogin',
  	    //     data: {
  	    //       code: res.code
  	    //     }
  	    //   })
  	    // } else {
  	    //   console.log('登录失败！' + res.errMsg)
  	    // }
  	  }
  	})
  }
}
</script>

<style scoped>
.header{
	width: 100%;
	height: 254rpx;
	background-color: #FE223B;
}
.header-top{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 80rpx;
	color: #fff;
}
.header-top div:nth-child(1){
	flex: 2.5;
}
.header-top div:nth-child(1) img{
	width: 100rpx;
	height: 100rpx;
	border-radius:50%;
	border: 6rpx solid rgba(255,255,255,.5);
}
.header-top div:nth-child(2){
	flex: 7.5;
}
.header-top div:nth-child(2) p:nth-child(2){
	margin-top: 10rpx;
	font-size: 24rpx;
}
.mylist{
	position: relative;
	padding-top: 200rpx;
}
.mylist-top{
	position: absolute;
	left: 0;
	right: 0;
	top: -120rpx;
	margin:auto;
	background-color: #fff;
	border-radius: 10rpx;
	box-shadow: 0 0 10rpx 5rpx rgba(0,0,0,.05);
	width: 95%;
	padding:20rpx;
	box-sizing: border-box;
}
.mylist-top .mylist-title{
	padding:20rpx 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1rpx  solid #eee;
}
.mylist-top .mylist-title p{
	flex: 7;
	font-weight: bold;
}
.mylist-top .mylist-title p:nth-child(2){
	flex: 3;
	font-size: 24rpx;
	color: #666;
	text-align: right;
}
.mylist-cont{
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40rpx 0;
}
.mylist-cont div{
	position: relative;
	flex: 1;
	text-align: center;
	font-size: 24rpx;
}
.mylist-cont div img{
	width: 56rpx;
	height: 56rpx;
}
.mylist-cont div span{
	position: absolute;
	top: -10rpx;
	right: 10rpx;
	/* width: 40rpx;*/
	/* height: 20rpx; */
	padding:2rpx 12rpx;
	text-align: center;
	border-radius: 50%;
	background-color: #FE223B;
	color: #fff;
}
.mylist-bottom{
	display: flex;
	align-items: center;
	justify-content: left;
	width: 95%;
	padding:40rpx 20rpx;
	box-sizing: border-box;
	margin:0 auto;
	background-color: #fff;
	border-radius: 10rpx;
	box-shadow: 0 0 10rpx 5rpx rgba(0,0,0,.05);
}
.mylist-bottom div{
	width: 150rpx;
	text-align: center;
	font-size: 24rpx;
}
.mylist-bottom div img{
	margin-bottom: 10rpx;
	width:46rpx;
	height:46rpx;
}
.btn{
	width: 100%;
	height: 50rpx;
	line-height: 50rpx;
	padding: 0;
	background: transparent;
	font-size: 32rpx;
	text-align: left;
	color: #fff;
	border-radius: 0;
}
button::after{display:none}
</style>
