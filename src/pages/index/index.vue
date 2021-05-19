<template>
  <div>
	  <scroll-view :scroll-top="site" scroll-y="true" :style="'height:'+wH+'px;'"  refresher-triggered='true' lower-threshold='100' @scrolltolower='scrolltolower' @scroll='scroll'>
	  <!-- 头部logo -->
	  <div class="index-logo"><img src="/static/img/logo.png" alt=""></div>
	  <!-- 搜索 -->
	  <div class="index-search">
		   <div class="index-search-item">
			   <div>
				   <input class="weui-input" v-model="keywords"/>
				   <i class="icon_search"></i>
			   </div>
			   <div @click="handleQuery">搜索</div>
		   </div>
	  </div>
	  <!-- banner图轮播 -->
	  <swiper class="index-swiper" 
			  autoplay="true"
			  indicator-dots="true" 
			  indicator-color="rgba(255,255,255,.5)"
			  indicator-active-color="#fff">
		  <swiper-item v-for="(item,index) in bannerImg" :key="index"><img :src="'https://www.365dsw.com/'+item.PicUrl" alt=""></swiper-item>
	  </swiper>
	  <!-- 导航区域 -->
	  <div class="index-nav">
		  <div @click="handleToProducts(0)">
			  <img src="/static/img/index_img_07.png" alt="">
			  <span>最新商品</span>
		  </div>
		  <div @click="handleToProducts(1)">
			  <img src="/static/img/index_img_09.png" alt="">
			  <span>特价专区</span>
		  </div>
		  <div @click="handleToProducts(2)">
			  <img src="/static/img/index_img_11.png" alt="">
			  <span>所用商品</span>
		  </div>
		  <div @click="handleToAbout">
			  <img src="/static/img/index_img_14.png" alt="">
			  <span >关于我们</span>
		  </div>
	  </div>
	  <!-- 特价推荐 -->
	  <div class="special">
		  <div class="special-title">特价推荐</div>
		  <div class="special-cont">
			  <div class="special-item" v-for="(item,index) in specialArr" v-if="index <=3" :key="index" @click="handleToProductsDetail(item,0)">
			  			  <img :src="'http://www.365dsw.com/'+item.Pic" alt="">
			  			  <p>{{item.ProName}}</p>
			  			  <span>限时特价</span>
			  			  <div class="special-price">
			  				  <span>￥{{item.OrigPrice}}</span>
			  				  <span class="active">￥{{item.GoodsPrice}}</span>
			  			  </div>
			  </div>
		  </div>
	  </div>
	  <!-- 广告图区域 -->
	  <div class="advert">
		  <img src="/static/img/index_img_20.png" alt="">
	  </div>
	  <!-- 所有产品区域 -->
	  <div class="all-product">
		  <div class="product-nav">
			  <ul @click="handleChange">
			  			  <li id="0" :class="c=='0'?'act':''">家具灯饰</li>
			  			  <li id="1" :class="c=='1'?'act':''">工程商照</li>
			  			  <li id="2" :class="c=='2'?'act':''">照明光源</li>
			  			  <li id="3" :class="c=='3'?'act':''">开关插座</li>
			  			  <li id="4" :class="c=='4'?'act':''">户外灯具</li>
			  			  <li id="5" :class="c=='5'?'act':''">厨卫电渠</li>
			  </ul>
		  </div>
		  <div class="product-cont">
			 <product :dataAll="item" v-for="(item,index) in goodsShow" :key="index" ></product>
		  </div>
	  </div>
	  <returnTop v-if="d" @updateInfo="updateInfo"></returnTop>
	  </scroll-view>
	  
  </div>
</template>

<script>
import product from "../../components/product"
import returnTop from "../../components/returnTop"
	
export default {
  data () {
    return {
		msg: '北京',
	  c:0,
	  wH:0,
      goodsArr:{},//当前系列所有产品
	  goodsShow:{},//当前显示有的产品
	  bannerImg:{},//广告图片
	  specialArr:{},//特价产品
	  d:false,
	  site:1,
	  keywords:"灯具 现代简约"
    }
  },
  methods: {
    handleToProducts(e){
		wx.navigateTo({
		  url: `/pages/newProducts/main?id=${e}`
		})
	},
	handleToAbout(){
		wx.navigateTo({
		  url: '/pages/about/main'
		})
	},
	scroll(e){
		this.site=1;
		if(e.mp.detail.scrollTop>=400){
			this.d=true;
		}else{
			this.d=false;			
		}
	},
	updateInfo (data) { // 回到顶部
      this.site=0;
    },
	handleQuery(){
		wx.navigateTo({
		  url: `/pages/ProductsShow/main?k=${this.keywords}&name=${this.keywords}&x=3`
		})
	},
	handleToProductsDetail(v,i){
		wx.navigateTo({
		  url: `/pages/productsDetail/main?id=${v.Id}&i=${i}`
		})
	},
	handleChange(e){
		this.c=e.target.id;
		let apiIn=null;
		let _this=this;
		switch(e.target.id){
			case '0':apiIn="GetJiaJu";
			break;
			case '1':apiIn="GetGongCheng";
			break;
			case '2':apiIn="GetGuangYuan";
			break;
			case '3':apiIn="GetKaiGuan";
			break;
			case '4':apiIn="GetHuWai";
			break;
			case '5':apiIn="GetChuWei";
			break;
		}
		wx.request({
		  url: `http://192.168.2.38:8085/api/goods/${apiIn}`, //获取首页产品
		  header: {
		    'content-type': 'application/json' // 默认值
		  },
		  success (res) {
		   _this.goodsArr=res.data;
		   _this.goodsShow=res.data.slice(0,20);
		  }
		})
	},
	scrolltolower(){
		let num=this.goodsShow.length;
     this.goodsShow= this.goodsArr.slice(0,num+20);
    }
  },
  mounted() {
	  let _this=this;
	wx.getSystemInfo({
	    success (res) {
	      _this.wH=res.windowHeight;
	    }
	  })
  	wx.showShareMenu({
  	  withShareTicket: true,
  	  menus: ['shareAppMessage', 'shareTimeline']
  	}),
	// 广告banner图
	wx.request({
	  url: 'http://192.168.2.38:8085/api/index/GetAd', //获取首页广告
	  header: {
	    'content-type': 'application/json' // 默认值
	  },
	  success (res) {
	    _this.bannerImg=JSON.parse(res.data);
	  }
	})
	wx.request({
	  url: 'https://www.365dsw.com', //获取特价产品
	  header: {
	    'content-type': 'application/json' // 默认值
	  },
	  success (res) {
	   console.log(res)
	  }
	})
	wx.request({
	  url: 'http://192.168.2.38:8085/api/goods/GetSpecialOffer', //获取特价产品
	  header: {
	    'content-type': 'application/json' // 默认值
	  },
	  success (res) {
	   _this.specialArr=res.data;
	  }
	})
	wx.request({
	  url: `http://192.168.2.38:8085/api/goods/GetJiaJu`, //获取产品
	  header: {
	    'content-type': 'application/json' // 默认值
	  },
	  success (res) {
	   _this.goodsArr=res.data;
	   _this.goodsShow=res.data.slice(0,20);
	  }
	})
  },
  components:{
	  product,
	  returnTop
  }
}
</script>

<style scoped>
.index-logo{
	position: relative;
	width: 100%;
	height:76rpx;
	background: #fe223b;
}

.index-logo img{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	margin: auto;
	display: inline-block;
	width: 250rpx;
	height: 43rpx;
}
.index-search{
	position: relative;
	width:100%;
	height: 110rpx;
}
.index-search-item{
	position: absolute;
	display: flex;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	margin: auto;
	width: 86%;
	height: 60rpx;
	border: 1px solid #FE223B;
	background: #FE223B;
	border-radius: 50rpx;
	font-size:28rpx;
}
.index-search-item>div:nth-child(1){
	position: relative;
	width: 85%;
}
.index-search-item>div:nth-child(1) input{
	width: 100%;
	height: 100%;
	background: #fff;	
	border-radius: 50rpx;
	border-top-right-radius: 0rpx;
	border-bottom-right-radius: 0rpx;
	padding: 0 20rpx;
	padding-right:80rpx;
	box-sizing: border-box;
}
.index-search-item>div:nth-child(2){
	width: 15%;
	color: #fff;
	text-align: center;
	line-height: 60rpx;
}
.icon_search{
	position: absolute;
	right: 20rpx;
	top: 10rpx;
	width: 40rpx;
	height: 40rpx;
	background: url(../../../static/img/index_img_03_03.png);
	background-size: 100% 100%;
}
.index-swiper{
	width: 100%;
	height: 319rpx;
}
.index-swiper swpier-item{
	width: 100%;
	height: 100%;
}
.index-swiper img{
	width: 100%;
	height: 100%;
}
.index-nav{
	width: 100%;
	height: 190rpx;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-size: 28rpx;
}
.index-nav img{
	width:70rpx;
	height: 70rpx;
	display: block;
	margin: 0 auto 10rpx;
}
.special{
	width: 100%;
	background: #f9f9fb;
	padding-bottom: 40rpx;
}
.special-title{
	padding: 20rpx;
	color: #FE223B;
	line-height: 58rpx;
	font-weight: bold;
	font-size: 40rpx;
}
.special-title::before{
	content: "";
	display: inline-block;
	vertical-align: middle;
	width: 6rpx;
	height: 50rpx;
	background: #FE223B;
	border-radius: 50rpx;
	margin-bottom: 5rpx;
	margin-right: 10rpx;
}
.special-cont{
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.special-item{
	padding: 8rpx;
	box-sizing: border-box;
	width: 30%;
	background: #fff;
	border-radius: 10rpx;
	box-shadow: 0rpx 0rpx 8rpx 2rpx rgba(0,0,0,.1);
}
.special-item img{
	width: 100%;
	height: 216rpx;
}
.special-item p{
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	font-size: 28rpx;
	
}
.special-item>span{
	color:#FE223B;
	background: #e5e5e5;
	padding: 6rpx 10rpx;
	font-size: 22rpx;
}
.special-price{
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #f4f4f4;
	margin-top: 10rpx;
}
.special-price span{
	flex:1;
	height: 80rpx;
	text-align: center;
	line-height: 80rpx;
	background: #ffffff;
	text-decoration:line-through;
	font-size: 24rpx;
}
.special-price span.active{
	color: #fff;
	background: #FE223B;
	text-decoration:initial;
	font-size: 28rpx;
}
.advert{
	width: 100%;
	height: 295rpx;
}
.advert img{
	width: 100%;
	height: 100%;
	vertical-align: top;
}
.all-product .product-nav{
	width: 95%;
	margin: 10rpx auto;
	padding: 10rpx 0;
	overflow:scroll;
}
.all-product .product-nav ul{
	width: 890rpx;
}
.all-product .product-nav ul li{
	display: inline-block;
	padding: 5rpx 18rpx;
	border-radius: 10rpx;
	font-size: 28rpx;
}
.all-product .product-nav ul li.act{
	color: #fff;
	background: #FE223B;
}
</style>
