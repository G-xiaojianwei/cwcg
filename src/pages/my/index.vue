<template>
 <div>
	 <!-- 头部显示信息 -->
	 <div class="header">
		 <div class="header-top">
			 <div>
				 <img :src="userInfo.nickName == undefined && dataInfo.Id == undefined ? '/static/img/logo.jpg' :userInfo.avatarUrl" alt="">
				 <!-- <img :src="dataInfo.Id == undefined ? '/static/img/logo.jpg' : 'http://www.365dsw.com'+dataInfo.MobileQrCode" alt=""> -->
				 <!-- <img src="/static/img/logo.jpg" alt=""> -->
			 </div>
			 <div>
				 <!-- <button class="btn" open-type="getPhoneNumber" @getphonenumber="handleLogin">{{dataInfo.Id == undefined ? '点击登录' :userInfo.nickName}}</button> -->
				 <button class="btn" open-type="getUserInfo" @getuserinfo="handleUser">{{userInfo.nickName == undefined && dataInfo.Id == undefined ? '点击登录' :userInfo.nickName}}</button>
				 <p>ID:{{userInfo.nickName == undefined && dataInfo.Id == undefined ? '' :dataInfo.NickName}}（消费者）</p>
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
					 <span class="icon-point" v-if="Payment!==0">{{Payment}}</span>
				 </div>
				 <div @click="handleToOrder(5)">
					 <img src="/static/img/dfh.png" alt="">
					 <p>待发货</p>
					 <span class="icon-point" v-if="delivery!==0">{{delivery}}</span>
				 </div>
				 <div @click="handleToOrder(2)">
					 <img src="/static/img/dsh.png" alt="">
					 <p>待收货</p>
					 <span class="icon-point" v-if="delivery!==0">{{delivery}}</span>
				 </div>
				 <div @click="handleToOrder(3)">
					 <img src="/static/img/ywc.png" alt="">
					 <p>已完成</p>
					 <span class="icon-point" v-if="delivery!==0">{{delivery}}</span>
				 </div>
				 <div @click="handleToOrder(4)">
					 <img src="/static/img/shtk.png" alt="">
					 <p>售后/退款</p>
					 <span class="icon-point" v-if="delivery!==0">{{delivery}}</span>
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
				<p>收货地址</p>
			</div>
			<div>
				<img src="/static/img/contact.png" alt="">
				<p>联系客服</p>
				<!-- 小程序客服 -->
				<button class="contact" open-type="contact" bindcontact="handleContact"></button>
			</div>
		</div>
	 </div>
	 <!-- 获取手机号弹出框-->
	 <div class="getPhone" v-if="showModel">
		 <div class="getPhone-model">
			<div>授权获取手机号</div>
			<div><button @click="handleClear">取消</button><button open-type="getPhoneNumber" @getphonenumber="handleLogin">同意授权</button></div> 
		 </div>
	 </div>
 </div>
</template>

<script>
	
export default {
  data () {
    return {
	  userphone:"",
      userInfo:{},//微信获取到的用户数据
	  dataInfo:{},//服务器获取到的用户数据
	  userOpen:{},
	  orderArr:[],
	  showModel:false
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
	  handleClear(){
		  this.showModel=false;
		  this.userInfo={};
		  wx.removeStorage({
		    key: 'userInfo',
		    success (res) {
		      console.log(res)
		    }
		  })
	  },
	  //获得用户信息
	  handleUser(){
		  let _this=this;
		  if(_this.userInfo.nickName==undefined){
			  wx.getUserInfo({
			    success(res){
			  	  _this.userInfo=JSON.parse(res.rawData);
				  wx.setStorage({
				   key:"userInfo",
				   data:res.rawData
				  })
			  	  _this.showModel=true;
			    }
			  })
		  }
	  },
    handleLogin(e){
		this.showModel=false;
		if(e.mp.detail.cloudID==undefined){
			this.userInfo={};
			this.showModel=false;
			wx.removeStorage({
			  key: 'userInfo',
			  success (res) {
			    console.log(res)
			  }
			})
			return;
		}
		let _this=this;
		//判断是否有缓存
		if(this.dataInfo.Id!==undefined){
			return;
		}
		wx.request({
			url: 'http://192.168.2.38:8085/api/user/GetMobile',
			method:'GET',
			data: {
			  encryptedDatas:e.target.encryptedData,
			  ivs:e.target.iv,
			  _secret:_this.userOpen.session_key
			},
			success(res){
				//第三步注册新用户
				_this.userphone=res.data;
				wx.request({
				  url: `http://192.168.2.38:8085/api/user/UserReg?mobile=${_this.userphone}&userName=${_this.userInfo.nickName}&userHead=${_this.userInfo.avatarUrl}&wxToken=${_this.userOpen.session_key}+${_this.userOpen.openid}`,
				  header: {
				    'content-type': 'application/json' // 默认值
				  },
				  method:'POST',
				  success (res) {
					//第四步判断是否注册成功
					if(res.data==0){//老用户，手机号登录
						wx.request({
						   url: `http://192.168.2.38:8085/api/user/UserInfoByMobile?mobile=${_this.userphone}`, 
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
							// //查询出订单信息
							wx.request({
							   url: `http://192.168.2.38:8085/api/Orders/GetOrder?type=0&uid=${res.data.Id}`, 
							   header: {
							     'content-type': 'application/json' // 默认值
							   },
							   method:'GET',
							   success (res) {
								//将用户信息保存到数据中
							    wx.setStorage({
								   key:"orderArr",
								  data:res.data
								})
							     _this.orderArr=JSON.parse(res.data);
							   }
							 })
						   }
						 })
					}else if(res.data>0){//新用户直接登录
						wx.request({
						   url: `http://192.168.2.38:8085/api/user/UserInfo?uid=${res.data}`, 
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
					
				  }
				})
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
	  let _this=this;
	  if(this.dataInfo.Id==undefined){
		  this.showModel=false;
		  wx.removeStorage({
		    key: 'userInfo',
		    success (res) {
		      console.log(res)
		    }
		  })
	  }
	  wx.login({
	    success (res) {
	  	  console.log(res)
	      if (res.code) {
	        //发起网络请求
	        wx.request({
	          url: 'http://192.168.2.38:8085/api/CwcPayment/GetOpenId',
	          data: {
	            js_code: res.code
	          },
	  		success(res){
				_this.userOpen=JSON.parse(res.data);
	  		}
	        })
	      } else {
	        wx.showToast({
	          title: '登录失败',
	          icon: 'error',
	          duration: 2000
	        })
	      }
	    }
	  })
	  
	  wx.getStorage({
	    key: 'dataInfo',
	    success (res) {
	     _this.dataInfo=JSON.parse(res.data);
	    }
	  })
	  wx.getStorage({
	    key: 'orderArr',
	    success (res) {
	     _this.orderArr=JSON.parse(res.data);
	    }
	  })
	  wx.getStorage({
	    key: 'userInfo',
	    success (res) {
	     _this.userInfo=JSON.parse(res.data);
	    }
	  })
  },
  computed:{
	  // //代付款
	  Payment(){
		 let orderItem = this.orderArr.filter(item=>{
			return item.States==0;
		 })
		 return orderItem.length;
	  },
	  //代发货
	  delivery(){
		  let orderItem = this.orderArr.filter(item=>{
		  			return item.States==1;
		  })
		  return orderItem.length;
	  }
  }
}
</script>

<style scoped>
	.btn1{
		position: relative;
	}
	.btn2{
		position: absolute;left: 0;top: 0;width: 100%;height: 100%;
	}
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
	display: inline-block;
	padding: 10rpx;
	border-radius: 20rpx;
	min-height: 20rpx;
	min-width: 20rpx;
	background: red;
	line-height: 20rpx;
	font-size: 12px;
	color: #FFFFFF;
	text-align: center;
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
	position: relative;
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
.contact{
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	margin: auto;
	width: 100rpx;
	height: 100rpx;
	background: transparent; 
}
button::after{display:none}
.getPhone{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.7);
	z-index: 999;
}
.getPhone-model{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 70%;
	height: 20%;
	background: #fff;
	padding: 40rpx;
	border-radius: 10rpx;
}
.getPhone-model div:nth-child(1){
	text-align: center;
	padding-bottom: 40rpx;
	border-bottom: 1rpx solid #eee;
	font-size: 34rpx;
}
.getPhone-model div:nth-child(2){
	padding-top: 40rpx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.getPhone-model div:nth-child(2) button{
	padding:0rpx 60rpx;
	box-sizing: border-box;
	height: 80rpx;
	line-height: 80rpx;
	font-size: 30rpx;
}
.getPhone-model div:nth-child(2) button:last-child{
	background: limegreen;
	color: #fff;
}
</style>
