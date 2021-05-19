<template>
	<div>
		<scroll-view :scroll-top="site" scroll-y="true" :style="'height:'+wH+'px;'"  refresher-triggered='true' lower-threshold='100' @scrolltolower='scrolltolower' @scroll='scroll'>
		<div class="new-products-nav" @click="handleChange">
			<span :class="i=='0'?'act':''" id="0">新品</span>
			<span :class="i=='1'?'act':''" id="1">特价</span>
			<span :class="i=='2'?'act':''" id="2">价格</span>
			<span :class="i=='3'?'act':''" id="3" @click="priceK=true">筛选</span>
		</div>
		<div class="new-products-cont">
			<product :dataAll="item" :tag="localP" v-for="(item,index) in dataAll" :key="index"></product>
		</div>
		<div id="model" class="price-model" v-show="priceK" @click="handleOffModel">
			<div class="price-model-cont">
				<div>
					<span>关键词</span>
					<div><input type="text" placeholder="请输入关键词" v-model="keywords"></div>
				</div>
				<div>
					<span>价格</span>
					<div>
						价格区间（元）<input type="digit" placeholder="最低价" v-model="lowPrice"> - <input type="digit" placeholder="最高价" v-model="highPrice">
					</div>
				</div>
				<div>
					<span>品牌</span>
					<div class="classiy" >
						<scroll-view scroll-y="true" style="height: 300rpx;">
						<span :id="item.Id" :class="brandid==item.Id?'act':''" v-for="(item,index) in brand" :key="index" @click="handleChangeBrand">{{item.BrandName}}</span>
						</scroll-view>
					</div>
				</div>
				<div>
					<span>类别</span>
					<div class="classiy" >
						<scroll-view scroll-y="true" style="height: 300rpx;">
						<span :id="item.Id" :data-level="item.LevelIndex" :class="idact==item.Id?'act':''" @click="handleChangeType" v-for="(item,index) in typeList" :key="index">{{item.Name}}</span>
						</scroll-view>
					</div>
				</div>
				<div class="btn">
					<span @click="handleReset">重置</span><span @click="handleSuccess">完成</span>
				</div>
			</div>
		</div>
		<returnTop v-if="d" @updateInfo="updateInfo" ></returnTop>
		</scroll-view>
	</div>
</template>

<script>
	import product from "../../components/product"
	import returnTop from "../../components/returnTop"
	export default{
		data(){
			return{
				wH:0,//页面高度
				pageIndex:1,//获取数据页面参数
				pageTotal:20,//每次获取多少条数据
				x:'',//接口名称保存
				i:0,//导航样式控制
				n:0,//价格升降序控制
				idact:0,//类别id
				brandid:0,//品牌id
				d:false,//回到顶部控制
				site:1,//回到顶部控制
				priceK:false,//控制筛选页面
				lowPrice:1,//最低价
				highPrice:10000,//最高价
				keywords:"",//关键词
				level:0,//等级
				dataAll:{},//所有数据存放
				typeList:{},//类型数据
				brand:{},//品牌数据
				localP:2
			}
		},
		methods:{
			// 滚动到底部时加载数据
			scrolltolower(){
				let _this=this;
				this.pageTotal+=20;//当前条数加二十
				// 在当前状态是最新商品、特价商品时触发
				if(this.x=="GetSearchNewGoods" || this.x=="GetSearchSpecialOfferGoods"){
					wx.request({
					  url: `http://192.168.2.38:8085/api/goods/${_this.x}?pageIndex=${_this.pageIndex}&pageTotal=${_this.pageTotal}`, 
					  header: {
					    'content-type': 'application/json' // 默认值
					  },
					  success (res) {
					  _this.dataAll=res.data.ReturnData;
					  }
					})
				}else if(this.x=="GetSearchPriceGoods"){//在当前状态是价格升降序时触发
					this.priceMsg(this.n);
				}else if(this.x=="GetAllGoods"){//在当前状态是筛选时触发
					this.pageTotal+=20;
					this.screenMsg();
				}
			},
			// 判断回到顶部距离
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
			// 控制筛选弹出层
			handleOffModel(e){
				if(e.target.id=="model"){
					this.priceK=false;
				}
			},
			// 重置筛选条件
			handleReset(){
				this.idact=0;
				this.brandid=0;
				this.lowPrice=1;
				this.highPrice=10000;
				this.keywords="";
				this.level=0;
			},
			// 筛选完成触发事件
			handleSuccess(){
				this.pageTotal=20;
				this.x="GetAllGoods";
				this.screenMsg();
			},
			// 头部导航栏切换
			handleChange(e){
				let _this=this;
				switch(e.target.id){
					case '0':
						this.i=0;
						this.x="GetSearchNewGoods";
						this.localP=1;
						wx.setNavigationBarTitle({
							title: "最新商品"
						 })
						 wx.request({
						   url: `http://192.168.2.38:8085/api/goods/GetSearchNewGoods?pageIndex=${_this.pageIndex}&pageTotal=${_this.pageTotal}`, 
						   header: {
							 'content-type': 'application/json' // 默认值
						   },
						   success (res) {
						   _this.dataAll=res.data.ReturnData;
						   }
						 })
					break;
					case '1':
						this.i=1;
						this.localP=0;
						this.x="GetSearchSpecialOfferGoods";
						wx.setNavigationBarTitle({
							title: "特价专区"
						 })
						 wx.request({
						   url: `http://192.168.2.38:8085/api/goods/GetSearchSpecialOfferGoods?pageIndex=${_this.pageIndex}&pageTotal=${_this.pageTotal}`, 
						   header: {
							 'content-type': 'application/json' // 默认值
						   },
						   success (res) {
						   _this.dataAll=res.data.ReturnData;
						   }
						 })
					break;
					// 价格筛选产品获取
					case '2':
						this.i=2;
						this.pageTotal=0;
						this.x="GetSearchPriceGoods";
						if(this.n==0){
							this.n=1;
							this.priceMsg(this.n)
						}else{
							this.n=0;
							this.priceMsg(this.n)
							
						}
					break;
					case '3':
						this.i=3;
					break;
				}
			},
			handleChangeType(e){
				this.idact=e.target.id
				this.level=e.target.dataset.level;
			},
			handleChangeBrand(e){
				this.brandid=e.target.id
			},
			// 价格升降序产品获取
			priceMsg(n){
				let _this=this;
				this.pageTotal+=20;
				wx.request({
				  url: `http://192.168.2.38:8085/api/goods/GetSearchPriceGoods?order=${n}&pageIndex=${_this.pageIndex}&pageTotal=${_this.pageTotal}`,
				  header: {
				    'content-type': 'application/json' // 默认值
				  },
				  success (res) {
				  _this.dataAll=res.data.ReturnData;
				  }
				})
			},
			// 筛选获取产品
			screenMsg(){
				let _this=this;
				let typeid=0;
				if(this.keywords!=""){
					typeid=1;
				}else{
					typeid=0;
				}
				let apiText=`begPrice=${_this.lowPrice}&
							endPrice=${_this.highPrice}&
							typeid=${typeid}&
							keyWords=${_this.keywords}&
							brand=${_this.brandid}&
							level=${_this.level}&
							groupId=${_this.idact}&
							order=0&pageIndex=${_this.pageIndex}&pageTotal=${_this.pageTotal}`;
				wx.request({
				  url: `http://192.168.2.38:8085/api/goods/GetAllGoods?${apiText}`, 
				  header: {
				    'content-type': 'application/json' // 默认值
				  },
				  success (res) {
					  if(res.data.IsSuccess){
						  _this.dataAll=res.data.ReturnData;
						  _this.priceK=false;
					  }else{
						  alert("数据获取失败！")
					  }
				  }
				})
			}
		},
		components:{
			product,
			returnTop
		},
		mounted() {
			let _this=this;
			wx.getSystemInfo({
			    success (res) {
			      _this.wH=res.windowHeight;
			    }
			  })
			switch(this.$mp.query.id){
					case "0":
					this.pageTotal=20;
					this.i=0;
					this.x="GetSearchNewGoods";
					this.localP=1;
					wx.setNavigationBarTitle({
						title: "最新商品"
					 })
					 wx.request({
					   url: `http://192.168.2.38:8085/api/goods/GetSearchNewGoods?pageIndex=${_this.pageIndex}&pageTotal=${_this.pageTotal}`, //获取最新产品
					   header: {
					     'content-type': 'application/json' // 默认值
					   },
					   success (res) {
					    _this.dataAll=res.data.ReturnData;
					   }
					 })
					break;
					case "1":
					this.x="GetSearchSpecialOfferGoods";
					this.pageTotal=20;
					this.i=1;
					this.localP=0;
					wx.setNavigationBarTitle({
						title: "特价专区"
					 })
					 wx.request({
					   url: `http://192.168.2.38:8085/api/goods/GetSearchSpecialOfferGoods?pageIndex=${_this.pageIndex}&pageTotal=${_this.pageTotal}`, //获取特价产品
					   header: {
					     'content-type': 'application/json' // 默认值
					   },
					   success (res) {
					   _this.dataAll=res.data.ReturnData;
					   }
					 })
					break;
					case "2":
					this.x="GetSearchNewGoods";
					this.i=2;
					wx.setNavigationBarTitle({
						title: "所有商品"
					 })
					 wx.request({
					   url: `http://192.168.2.38:8085/api/goods/GetSearchNewGoods?pageIndex=${_this.pageIndex}&pageTotal=${_this.pageTotal}`, //获取所有产品
					   header: {
					     'content-type': 'application/json' // 默认值
					   },
					   success (res) {
					   _this.dataAll=res.data.ReturnData;
					   }
					 })
					break;
			}
			//获取类型
			wx.request({
			  url: `http://192.168.2.38:8085/api/goods/GetTypeList`, 
			  header: {
			    'content-type': 'application/json' // 默认值
			  },
			  success (res) {
			 _this.typeList=res.data;
			  }
			})
			// 获取品牌
			wx.request({
			  url: `http://192.168.2.38:8085/api/goods/GetAlreadyGoodBrand`, 
			  header: {
			    'content-type': 'application/json' // 默认值
			  },
			  success (res) {
			 _this.brand=JSON.parse(res.data);
			  }
			})
		}
	}
</script>

<style>
	.new-products-nav{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		padding: 10rpx 0;
	}
	.new-products-nav span{
		flex:1;
		padding: 5rpx 10rpx;
		border: 1rpx solid #eee;
		text-align: center;
		margin: 0 10rpx;
		font-size: 28rpx;
		border-radius: 8rpx;
	}
	.new-products-nav span.act{
		background: #FE223B;
		border-color: #FE223B;
		color: #fff;
	}
	.price-model{
		position: fixed;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
	}
	.price-model-cont{
		position: absolute;
		right: 0;
		top: 0;
		width: 85%;
		height: 100%;
		background: #fff;
		padding: 20rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		color: #666;
	}
	.price-model-cont>div{
		padding: 20rpx 0;
		letter-spacing: 4rpx;
		border-bottom: 1rpx solid #eee;
	}
	.price-model-cont>div>span{
		display: block;
		padding-bottom: 20rpx;
	}
	.price-model-cont>div input{
		display: inline-block;
		vertical-align: middle;
		width: 200rpx;
		height: 60rpx;
		background: #eee;
		border-radius: 10rpx;
		padding: 10rpx;
		box-sizing: border-box;
		text-align: center;
	}
	.price-model-cont>div:nth-child(2) input{
		width: 160rpx;
	}
	.btn{
		position: fixed;
		right: 0;
		bottom: 0;
		width: 85%;
		height: 100rpx;
		background: #fff;
		padding: 0 !important;
		box-shadow: 0 0 10rpx 5rpx rgba(0,0,0,.05);
	}
	.btn::before{
		content: "";
		display: table;
	}
	.btn span{
		float: left;
		width: 50%;
		height: 100%;
		background: #FE223B;
		color: #fff;
		font-size: 28rpx;
		text-align: center;
		line-height: 100rpx;
	}
	.btn span:nth-child(1){
		background: #fff;
		color: #FE223B;
	}
	.classiy span{
		display: inline-block;
		background: #eee;
		padding: 10rpx 20rpx;
		border-radius: 10rpx;
		margin:10rpx 20rpx;
	}
	.classiy span.act{
		color: #fff;
		background: #FE223B;
	}
	
</style>
