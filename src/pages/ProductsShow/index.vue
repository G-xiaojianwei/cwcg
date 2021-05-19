<template>
	<div>
		<scroll-view :scroll-top="site" scroll-y="true" :style="'height:'+wH+'px;'"  refresher-triggered='true' lower-threshold='100' @scrolltolower='scrolltolower' @scroll='scroll'>
		<div class="new-products-cont" style="padding-top: 20rpx;">
			<product :dataAll="item" v-for="(item,index) in dataAll" :key="index"></product>
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
				pageTotal:0,//每次获取多少条数据
				d:false,//回到顶部控制
				site:1,//回到顶部控制
				x:"0",
				dataAll:{},//所有数据存放
				typeId:0,//类型id
				typeLevel:0,//类型等级
				apiText:"",
				keyWords:""
				
			}
		},
		methods:{
			// 滚动到底部时加载数据
			scrolltolower(){
				let _this=this;
				// 在当前状态是最新商品、特价商品时触发
				this.pageTotal+=20;//当前条数加二十
				switch(this.x){
					 case "0":
						this.apiText=`GetSearchTypeGoods?id=${this.typeId}&level=${this.typeLevel}&pageIndex=${this.pageIndex}&pageTotal=${this.pageTotal}`;
						this.queryFun();
					 break;
					 case "1":
						this.apiText=`GetSearchTypeGoods?id=${this.typeId}&pageIndex=${this.pageIndex}&pageTotal=${this.pageTotal}`;
						this.queryFun();
					 break;
					 case "2":
						this.apiText=`GetSearchTypeGoods?id=${this.typeId}&pageIndex=${this.pageIndex}&pageTotal=${this.pageTotal}`;
						this.queryFun();
					 break;
					 case "3":
						this.apiText=`GetKeywordsGoods?keyWords=${this.keyWords}&pageIndex=${this.pageIndex}&pageTotal=${this.pageTotal}`;
						this.queryFun();
					 break;
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
			queryFun(){
				let _this=this;
				wx.request({
				  url: `http://192.168.2.38:8085/api/goods/${_this.apiText}`, //获取首页产品
				  header: {
				    'content-type': 'application/json' // 默认值
				  },
				  success (res) {
					_this.dataAll=res.data.ReturnData;
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
			 
			 if(this.$mp.query.level){
			 	this.typeLevel=this.$mp.query.level; 
			 }
			 if(this.$mp.query.id){
			 	this.typeId=this.$mp.query.id; 
			 }
			 if(this.$mp.query.k){
			 	this.keyWords=this.$mp.query.k; 
			 }
			 this.x=this.$mp.query.x;
			 wx.setNavigationBarTitle({
			 	title:this.$mp.query.name
			  })
			  this.pageTotal=20;
			 switch(this.$mp.query.x){
				 case "0":
					this.apiText=`GetSearchTypeGoods?id=${this.typeId}&level=${this.typeLevel}&pageIndex=${this.pageIndex}&pageTotal=${this.pageTotal}`;
				 break;
				 case "1":
					this.apiText=`GetSearchRenovationStyleGoods?id=${this.typeId}&pageIndex=${this.pageIndex}&pageTotal=${this.pageTotal}`;
				 break;
				 case "2":
					this.apiText=`GetSearchBrandGoods?id=${this.typeId}&pageIndex=${this.pageIndex}&pageTotal=${this.pageTotal}`;
				 break;
				 case "3":
				 	this.apiText=`GetKeywordsGoods?keyWords=${this.keyWords}&pageIndex=${this.pageIndex}&pageTotal=${this.pageTotal}`;
				 break;
			 }
			 
			 // 通过类型查询
			 wx.request({
			   url: `http://192.168.2.38:8085/api/goods/${_this.apiText}`, //获取首页产品
			   header: {
			     'content-type': 'application/json' // 默认值
			   },
			   success (res) {
				_this.dataAll=res.data.ReturnData;
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
	
</style>
