<template>
<div :style="s">
		<!-- 产品轮播主图 -->
		<div class="swiper">
			<swiper class="swiper-detail"
					circular="true"
					@change="handleChange"
					>
				<swiper-item v-for="(item,index) in infoBanner" :key="index"><img :src="'http://www.365dsw.com'+item" alt=""></swiper-item>
			</swiper>
			<span>{{mainImg}}</span>
			<span>{{selectedindex+"/"+infoBanner.length}}</span>
		</div>
		<!-- 产品价格信息 -->
		<div class="price-info">
			<p>优惠价 ￥ {{GoodsPrice}}</p>
			<p>原价 ￥{{OrigPrice}}</p>
			<p>系列号：{{ProName}}</p>
			<p>
				<span v-show="tj==0">限时特价</span>
				<span v-show="tj==1">新品</span>
				<!-- <span>铁艺</span> -->
				<em>现货:{{Stock}}件</em>
			</p>
		</div>
		<!-- 诚外诚购品牌信息 -->
		<div class="cwcg">
			<div class="detail-t">
				<div>已选规格：</div>
				<div @click="open=true">
					{{localSpecs}}
				</div>
				<div>></div>
			</div>
			<div class="cwcg-model">
				<div>
					<img src="/static/img/cwcg.png" alt="">
				</div>
				<div>
					<h3>诚外诚购</h3>
					<p>诚外诚购主营家居灯饰、工程照明、照明光源、开关插座、户外灯具、厨卫电器等灯具用品。</p>
				</div>
			</div>
			<div class="detail-model" v-if="open">
				<div class="img">
					<img :src="'http://www.365dsw.com'+showImg" alt="">
				</div>
				<div class="cs">
					<p>规格</p>
					<span v-for="(item,index) in dataArr" data-id="0" :data-value="index" @click.stop="handleGetSpecs" :class="i==index?'act':''"> <img :src="'http://www.365dsw.com'+item.PicUrl" alt=""> {{item.Title}}</span>
				</div>
				<button class="detail-btn" @click="open=false">确定</button>
			</div>
		</div>
		<!-- 产品详情参数切换 -->
		<div class="detail">
			<div class="detail-nav">
				<span :class="x==0?'act':''" @click="handleChangeDetail('0')">产品介绍</span>
				<span :class="x==1?'act':''" @click="handleChangeDetail('1')">产品参数</span>
			</div>
			<div class="detail-cont" v-show="x==0">
				<img :src="'http://www.365dsw.com'+item" alt="" mode="widthFix" v-for="(item,index) in detailArr" :key="index">
			</div>
			<div class="detail-cs" v-show="x==1">
				<div class="detail-top">
					<div><span>系列名</span><span>{{ProName}}</span></div>
					<div><span>风格</span><span>{{Style}}</span></div>
					<div><span>品牌</span><span>{{brand}}</span></div>
				</div>
				<!-- <div class="detail-bottom">
					<div>
						<span>产品图片</span>
						<span>规格编码</span>
						<span>规格参数</span>
						<span>光源</span>
						<span>尺寸</span>
					</div>
					<div>
						<span><img src="/static/img/index_img_23.png" alt=""></span>
						<span>规格编码</span>
						<span><em>规格参数,规格参数,规格参数</em></span>
						<span>光源</span>
						<span>尺寸</span>
					</div>
					<div>
						<span><img src="/static/img/index_img_23.png" alt=""></span>
						<span>规格编码</span>
						<span><em>规格参数,规格参数,规格参数</em></span>
						<span>光源</span>
						<span>尺寸</span>
					</div>
				</div> -->
			</div>
		</div>
		<div class="cart">
			<div class="cart-left">
				<div @click="handleOpebCanvas">
					<img src="/static/img/img_icon_03.png" alt="">
					<p>保存</p>
				</div>
				<div @click="handleCollect" >
					<img :src="collectC[c]" alt="">
					<p>收藏</p>
				</div>
				<div>
					<img src="/static/img/cart_img_03.png" alt="">
					<p>分享</p>
					<button class="btnzf" open-type="share">转发</button>
				</div>
			</div>
			<div class="cart-right">
				<div @click="handleAddCart">加入购物车</div>
				<div @click="handleBuy">立即购买</div>
			</div>
		</div>
		<view class="posterWrap" v-if="openCanvas">
		  <canvas canvas-id="posterCanvas" class="myCanvas"></canvas>
		  <div class="fixed_inner">
		    <button @click="handleSave">保存海报</button>
		    <button @click="handleClear">取消</button>
		  </div>
		</view>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				swiperCont:["/static/img/index_img_23.png","/static/img/index_img_23.png"],
				selectedindex:1,
				x:0,
				i:0,//确定当前的子属性
				localId:0,//当前属性id
				dataArr:{},//子属性数据
				dataInfo:{},//主属性数据
				infoBanner:{},//主图展示
				detailArr:{},
				GoodsPrice:0,//商品现价
				OrigPrice:0,//商品原价
				Stock:0,//存货
				ProName:"",//名称
				open:false,//控制参数弹出面板
				showImg:"",//当前选中产品图片
				localSpecs:"",//当前选中规格
				Style:"",//风格
				styleArr:{},
				brand:"",//品牌
				brandArr:{},
				tj:2,//判断是否是特价 0 特价 1新品  2其他
				uid:0,
				ProChildId:0,//子属性商品的id
				SellerId:0,//商家id
				collectArr:{},
				c:0,
				collectCode:0,
				collectC:["/static/img/cart_img_06.png","/static/img/cart_img.png"],
				InfoSync: {},
				openCanvas:false,//打开画布
				s:"overflow: none;height: 100%;"
				
				
			}
		},
		onLoad() {

		},
		methods:{
			handleClear(){
				this.openCanvas=false;
				this.s="overflow: none;height: 100%;";
			},
			// 小程序需要将图片下载下来，然后才能绘制到画布上
			saveThe(url, callback) {
			  wx.getImageInfo({
			    src: url, //服务器返回的图片地址
			    success: res => {
			      callback(res.path);
			    },
			    fail: function(res) {}
			  });
			},
			//点击打开画布
			handleOpebCanvas(){
				this.openCanvas=true;
				const InfoSync = wx.getSystemInfoSync();
				this.InfoSync = InfoSync;
				let bili = InfoSync.windowWidth / 375 * 1;
				this.s="overflow:hidden;height:"+InfoSync.windowHeight+"px";
				const ctx = wx.createCanvasContext("posterCanvas");
				this.saveThe(
				  "http://chuantu.xyz/t6/741/1615258868x1033348159.jpg",
				  path => {
				    ctx.drawImage(path, 0, 0, 310 * bili, 435 * bili); //ctx.drawImage（图片路径，距离画布左边，距离画布右边，图片宽，图片高）
				    ctx.save(); // 保存当前绘画
				    ctx.setTextAlign("left"); // 文字居中
				    ctx.setFontSize(16); // 文字字号
				    ctx.fillText(this.ProName.replace(/诚外诚购-/,"").slice(0,10), 140 * bili, 346 * bili);
				    ctx.fillText(this.ProName.replace(/诚外诚购-/,"").slice(0,10), 140 * bili, 346 * bili);
							  console.log(this.ProName.replace(/诚外诚购-/,"").slice(0,10))
				    ctx.setFillStyle("#828282"); // 文字颜色：828282
				    ctx.setFontSize(14); // 文字字号
				    ctx.fillText(this.localSpecs, 140 * bili, 370.5 * bili);
				    ctx.setFillStyle("#FE223B"); // 文字颜色：B0B0B0
				    ctx.setFontSize(16); // 文字字号
				    ctx.fillText("优惠价:"+this.GoodsPrice+"元", 140 * bili, 398 * bili);
				    ctx.save();
				    //圆形头像框
				    ctx.setStrokeStyle("rgba(0,0,0,0)");
				    ctx.rect(0, 0, 310 * bili,310 * bili);
				    ctx.fill();
				    //二维码
				    this.saveThe(
				      "http://www.365dsw.com/CommonImg/hotcode.jpg",
				      path => {
				        ctx.drawImage(path, 30.5 * bili, 320 * bili, 93 * bili, 93 * bili);
				        ctx.save();
				        //头像
				        this.saveThe(
				          "http://www.365dsw.com"+this.showImg,
				          path => {
				            ctx.clip();
				            ctx.drawImage(
				              path,
				              0 * bili,
				              0 * bili,
				              310 * bili,
				              310 * bili
				            );
				            ctx.save();
							//头像
							this.saveThe(
							  "http://www.365dsw.com/CommonImg/logo.png",
							  path => {
							    ctx.clip();
							    ctx.drawImage(
							      path,
							      2 * bili,
							      10 * bili,
							      140 * bili,
							      40 * bili
							    );
							    ctx.save();
								ctx.stroke();
								ctx.draw();
							  }
							);
				          }
				        );
				      }
				    );
				  }
				);
			},
			// 点击保存时，将画布生成海报
			handleSave() {
			  var that = this;
			  wx.showLoading({
			    title: "正在保存...",
			    mask: true
			  });
			  wx.getSetting({
			    success(res) {
			      if (res.authSetting["scope.writePhotosAlbum"]) {
			        that.saveImg();
			      } else if (res.authSetting["scope.writePhotosAlbum"] === undefined) {
			        wx.authorize({
			          scope: "scope.writePhotosAlbum",
			          success() {
			            that.saveImg();
			          },
			          fail() {
			            wx.hideLoading();
			            wx.showToast({
			              title: "您没有授权，无法保存到相册",
			              icon: "none"
			            });
			          }
			        });
			      } else {
			        wx.openSetting({
			          success(res) {
			            if (res.authSetting["scope.writePhotosAlbum"]) {
			              that.saveImg();
			            } else {
			              wx.showToast({
			                title: "您没有授权，无法保存到相册",
			                icon: "none"
			              });
			            }
			          }
			        });
			      }
			    },
			    fail: err => {
			      wx.hideLoading();
			      wx.showToast({
			        title: "出现了错误，请稍后再试",
			        icon: "none"
			      });
			    }
			  });
			},
			saveImg() {
				let _this=this;
			  // 按照设备比例去计算图片和画布尺寸
			  let bili = this.InfoSync.windowWidth / 375 * 1;
			  wx.canvasToTempFilePath({
			    x: 0,
			    y: 0,
			    width: 310 * bili,
			    height: 435 * bili,
			    destWidth: 310 * bili * this.InfoSync.pixelRatio,
			    destHeight: 435 * bili * this.InfoSync.pixelRatio,
			    fileType: "png",
			    quality: 1,
			    canvasId: "posterCanvas",
			    success: function(res) {
			      wx.hideLoading();
			      var tempFilePath = res.tempFilePath;
			      // 需要权限
			      wx.saveImageToPhotosAlbum({
			        filePath: tempFilePath,
			        success(res) {
			          wx.showModal({
			            content: "图片已保存到相册，赶紧晒一下吧~",
			            showCancel: false,
			            confirmText: "好的",
			            confirmColor: "#333"
			          });
						_this.openCanvas=false;
						_this.s="overflow: none;height: 100%;";
					  
			        },
			        fail: function(res) {
			          wx.hideLoading();
			          wx.showToast({
			            title: "没有相册权限",
			            icon: "none",
			            duration: 2000
			          });
			        }
			      });
			    },
			    fail: err => {
			      wx.hideLoading();
			      wx.showToast({
			        title: "出现了错误，请稍后再试",
			        icon: "none"
			      });
			    }
			  });
			},
			//立即购买
			handleBuy(){
				let _this=this;
				if(_this.uid==0){
					wx.showModal({
					  title: '提示',
					  content: '您还未登录，去登录？',
					  success (res) {
					    if (res.confirm) {
					      wx.reLaunch({
					        url: `/pages/my/main`
					      })
					      return;
					    } else if (res.cancel) {
					      return;
					    }
					  }
					})
				}else{
					let datas=`[{\"id\":"${this.ProChildId}",\"pid\":"${this.localId}",\"uid\":"${this.uid}",\"ut\":"1",\"num\":"1",\"isInstall\":"0"}]`;
					console.log(datas)
					wx.request({
						url: `http://192.168.2.38:8085/api/Orders/PostBeforehandOrders?uid=${_this.uid}&datas=${datas}`, 
						header: {
						  'content-type': 'application/json' // 默认值
						},
						method:"POST",
						success (res) {
							if(res.data){
								wx.navigateTo({
								  url: `/pages/orderDetail/main?resid=${res.data}`
								})
							}
						}
					})
				}
			},
			//添加购物车
			handleAddCart(){
				let _this=this;
				if(_this.uid==0){
					wx.showModal({
					  title: '提示',
					  content: '您还未登录，去登录？',
					  success (res) {
					    if (res.confirm) {
					      wx.reLaunch({
					        url: `/pages/my/main`
					      })
					      return;
					    } else if (res.cancel) {
					      return;
					    }
					  }
					})
				}else{
					wx.request({
						url: `http://192.168.2.38:8085/api/user/AddCard?pid=${_this.localId}&attrId=${_this.ProChildId}&uid=${_this.uid}&sellerId=${_this.SellerId}&num=1`, 
						header: {
						  'content-type': 'application/json' // 默认值
						},
						method:"POST",
						success (res) {
						if(res.data==1){
							wx.showToast({
							  title: '添加成功',
							  icon: 'success',
							  duration: 2000
							})
						}
						}
					})	
				}
			},
			handleCollect(){
				// 收藏
				let _this = this;
				if(_this.uid==0){
					wx.showModal({
					  title: '提示',
					  content: '您还未登录，去登录？',
					  success (res) {
					    if (res.confirm) {
					      wx.reLaunch({
					        url: `/pages/my/main`
					      })
					      return;
					    } else if (res.cancel) {
					      return;
					    }
					  }
					})
				}else{
				wx.getStorage({
				  key: 'dataInfo',
				  success (res) {
					  let uid=JSON.parse(res.data).Id;
					  // 判断是否收藏
					  wx.request({
					    url: `http://192.168.2.38:8085/api/goods/GetGoodsColl?goodId=${_this.localId}&uid=${uid}`, 
					    header: {
					      'content-type': 'application/json' // 默认值
					    },
					    success (res) {
							if(res.data==0){//如果没有收藏
								let ProId = Number(_this.localId);
								wx.request({
								  url: `http://192.168.2.38:8085/api/goods/AddGoodsColl`, 
								  header: {
								    'content-type': 'application/json' // 默认值
								  },
								  method:"POST",
								  data:{
									  Uid:uid,
									  UserType:1,
									  ProId:ProId,
									  ProChildId:_this.ProChildId,
									  SellerId:_this.SellerId
								  },
								  success (res) {
									  wx.request({
										url: `http://192.168.2.38:8085/api/goods/GetCollProList?uid=${uid}`, 
										header: {
										  'content-type': 'application/json' // 默认值
										},
										success (res) {
										_this.collectArr=res.data;
										//判断当前属性有没有被收藏过
										let collectItem=_this.collectArr.filter(item=>{
											return item.ProId==_this.localId && item.ProChildId==_this.ProChildId;
										})
										if(collectItem.length){
											_this.collectCode=collectItem.Id;
											_this.c=1;
										}
										}
									  })
									wx.request({
									   url: `http://192.168.2.38:8085/api/user/UserInfo?uid=${uid}`, 
									   header: {
									     'content-type': 'application/json' // 默认值
									   },
									   method:'POST',
									   success (res) {
									     console.log(res,11)
										   //将用户信息保存到数据中
										   wx.setStorage({
											   key:"dataInfo",
											  data:JSON.stringify(res.data)
										   })
									   }
									 })
								  }
								})
							}else{
								let Collectitem=_this.collectArr.filter(item=>{
									return item.ProId==_this.localId;
								})
								wx.request({
								   url: `http://192.168.2.38:8085/api/goods/DelGoodsColl?id=${Collectitem[0].Id}&uid=${uid}`, 
								   header: {
								     'content-type': 'application/json' // 默认值
								   },
								   method:'POST',
								   success (res) {
								     if(res.data==1){
										_this.c=0; 
										wx.request({
										  url: `http://192.168.2.38:8085/api/goods/GetCollProList?uid=${uid}`, 
										  header: {
										    'content-type': 'application/json' // 默认值
										  },
										  success (res) {			  
											_this.collectArr=res.data;
											}
										})
									 }
									}
								 })
							}
					    }
					  })
				  }
				  })
				  }
				
			},
			handleForward(){//转发
				wx.showShareMenu({
					withShareTicket: true
				})
			},
			handleChange(event){
				this.selectedindex = event.mp.detail.current+1;
			},
			handleChangeDetail(v){
				this.x=v;
			},
			handleGetSpecs(e){
				if(e.target.dataset.id=="0"){
					this.i=e.target.dataset.value;
					this.GoodsPrice=this.dataArr[this.i].GoodsPrice;
					this.OrigPrice=this.dataArr[this.i].OrigPrice;
					this.Stock=this.dataArr[this.i].Stock;
					this.localSpecs=this.dataArr[this.i].Title;
					this.showImg=this.dataArr[this.i].PicUrl;
					this.ProChildId=this.dataArr[this.i].Id;
					this.SellerId=this.dataInfo.SellerId;
				}
			}
		},
		computed:{
			
		},
		onShareAppMessage(){
		  return {
		    title: this.ProName,
		    path: `/pages/productsDetail/main?id=${this.localId}&i=${this.tj}`
		  }
		},
		 watch:{
		     ProChildId(val, oldVal){//普通的watch监听
		         //判断当前属性有没有被收藏过
		         let collectItem=this.collectArr.filter(item=>{
		         	return item.ProId==this.localId;
		         })
		         if(collectItem.length){
		         	this.c=1;
		         }else{
					 this.c=0;
				 }
		     }
		 },
		mounted() {
			let _this=this;
			this.open=false;
			this.openCanvas=false;
			//设uid
			wx.getStorage({
			  key: 'dataInfo',
			  success (res) {
			   _this.uid=JSON.parse(res.data).Id;
			  }
			})
			if(_this.$mp.query.i){
				this.tj=_this.$mp.query.i;
				console.log(this.tj=_this.$mp.query.i)
			}
			this.localId=this.$mp.query.id;
			wx.request({
			  url: `http://192.168.2.38:8085/api/goods/GetGoodsAttr?id=${_this.$mp.query.id}`, //获取商品子属性
			  header: {
			    'content-type': 'application/json' // 默认值
			  },
			  success (res) {
			   _this.dataArr=res.data;
			   _this.localSpecs=res.data[0].Title;
			    _this.GoodsPrice=res.data[0].GoodsPrice;
			    _this.OrigPrice=res.data[0].OrigPrice;
			    _this.Stock=res.data[0].Stock;
				_this.showImg=res.data[0].PicUrl;
				_this.ProChildId=res.data[0].Id;
			  }
			})
			// 获取样式列表
			wx.request({
				url: `http://192.168.2.38:8085/api/goods/GetRenovationStyle`, 
				header: {
				  'content-type': 'application/json' // 默认值
				},
				success (res) {
				_this.styleArr=JSON.parse(res.data);
				}
			  })
			  // 获取品牌列表
			  wx.request({
			  	url: `http://192.168.2.38:8085/api/goods/GetAlreadyGoodBrand`, 
			  	header: {
			  	  'content-type': 'application/json' // 默认值
			  	},
			  	success (res) {
			  	_this.brandArr=JSON.parse(res.data);
			  	}
			    })
			wx.request({
			  url: `http://192.168.2.38:8085/api/goods/GetGoods?id=${_this.$mp.query.id}&uid=0`, //获取商品主属性
			  header: {
			    'content-type': 'application/json' // 默认值
			  },
			  success (res) {
			   _this.infoBanner=res.data.InfoPicUrl.split(",");
			   _this.dataInfo=res.data;
			   _this.ProName=res.data.ProName;
			   _this.StyleId=res.data.StyleId;
			   _this.SellerId=res.data.SellerId;
			   _this.detailArr=res.data.ProDetail.split("\"").filter(item=>{
				   if(item.indexOf("/tool")==0){
					   return item;
				   }  
			   })
			   let styleName=_this.styleArr.filter(item=>{
				   return item.Id==_this.StyleId;
			   })
			   console.log(styleName[0])
			   _this.Style=styleName[0].RenovationStyle;
			   // console.log(_this.brandArr)
			   // console.log(_this.brandAr)
			   setTimeout(function(){
				   let brandItem=_this.brandArr.filter(item=>{
				    		return item.Id==_this.dataInfo.BrandId;
				    })
				   _this.brand=brandItem[0].BrandName;
			   },1000)
			   
			   //先将收藏状态设置为无
			   _this.c=0;
			   //再获取用户收藏信息判断有没有
			   wx.getStorage({
			     key: 'dataInfo',
			     success (res) {
			       if(JSON.parse(res.data).Id){
			   		wx.request({
			   		  url: `http://192.168.2.38:8085/api/goods/GetCollProList?uid=${JSON.parse(res.data).Id}`, 
			   		  header: {
			   		    'content-type': 'application/json' // 默认值
			   		  },
			   		  success (res) {
			   			_this.collectArr=res.data;
						//判断当前属性有没有被收藏过
						let collectItem=_this.collectArr.filter(item=>{
							return item.ProId==_this.localId && item.ProChildId==_this.ProChildId;
						})
						if(collectItem.length){
							_this.c=1;
						}
			   		  }
			   		})
			   	}
			     }
			   })
				
			  }
			})
		}
	}
</script>

<style>
	.swiper-detail{
		width: 100%;
		height: 750rpx;
	}
	.swiper-detail img{
		width: 100%;
		height: 100%;
	}
	.swiper{
		position: relative;
	}
	.swiper span{
		position: absolute;
		right: 20rpx;
		bottom: 20rpx;
		font-size: 28rpx;
		padding: 5rpx 40rpx;
		background: #FE223B;
		color: #fff;
		border-radius: 5rpx;
	}
	.price-info{
		padding: 20rpx;
		box-sizing: border-box;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		box-shadow: 0 0 20rpx 8rpx rgba(0,0,0,.1);
	}
	.price-info p{
		margin-bottom: 10rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.price-info p:nth-child(1){
		font-size: 32rpx;	
		font-weight: bold;
		color: #FE223B;
	}
	.price-info p:nth-child(2){
		font-size: 28rpx;
		text-decoration:line-through;
		color: #666;
	}
	.price-info p:nth-child(3){
		font-weight: bold;
		font-size: 28rpx;
	}
	.price-info p:nth-child(4){
		position: relative;
	}
	.price-info p:nth-child(4) span{
		padding: 5rpx 10rpx;
		font-size: 24rpx;
		color: #FE223B;
		background: #f9cccf;
		margin-right:6rpx;
	}
	.price-info p:nth-child(4) span:nth-child(2){
		background: #eee;
		color: #666;
	}
	.price-info p:nth-child(4) em{
		position: absolute;
		right: 0;
		bottom: 0;
		font-size: 24rpx;
		font-weight: bold;
	}
	.cwcg{
		margin-top: 20rpx;
		border-radius: 20rpx;
		padding: 20rpx;
		box-sizing: border-box;
		box-shadow: 0 0 40rpx 10rpx rgba(0,0,0,.1);
	}
	.detail-t{
		display: flex;
		text-align: center;
		border: 1rpx solid #eee;
		margin-bottom: 10rpx;
		padding:20rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		border-radius: 10rpx;
	}
	.detail-t div:nth-child(1){
		flex: 3;
	}
	.detail-t div:nth-child(2){
		flex: 6;
	}
	.detail-t div:nth-child(3){
		flex: 1;
	}
	.cwcg-model{
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
		border: 1rpx solid #eee;
		display: flex;
		align-items: center;
	}
	.cwcg-model div{
		flex: 3;
	}
	.cwcg-model div img{
		width: 285rpx;
		height:108rpx;
		vertical-align: middle;
	}
	.cwcg-model div:nth-child(2){
		flex: 7;
		padding: 0 10rpx;
		text-align: center;
	}
	.cwcg-model div:nth-child(2) h3{
		font-weight: bold;
		padding: 10rpx 0;
		font-size: 28rpx;
	}
	.cwcg-model div:nth-child(2) p{
		font-size: 24rpx;
		margin-bottom: 10rpx;
	}
	.detail{
		margin-top: 20rpx;
		padding-bottom: 100rpx;
	}
	.detail-nav{
		display: flex;
		justify-content: center;
		width: 100%;
		height: 74rpx;
		line-height: 74rpx;
		background: #fff;
	}
	.detail-nav span{
		flex: 1;
		text-align: center;
		color: #666;
	}
	.detail-nav span.act{
		background: #FE223B;
		color: #fff;
	}
	.detail-cont img{
		width: 100%;
		vertical-align: bottom;
	}
	.detail-cs .detail-top{
		width: 95%;
		margin:20rpx auto;
		font-size: 24rpx;
	}
	.detail-cs .detail-top div{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.detail-cs .detail-top div span{
		display: flex;
		border: 1rpx solid #eee;
		text-align: center;
		height: 78rpx;
		font-size: 28rpx;
		justify-content: center;
		align-items: center;
	}
	.detail-cs .detail-top div span:nth-child(1){
		flex: 2;
	}
	.detail-cs .detail-top div span:nth-child(2){
		flex: 8;
		padding: 0 10rpx;
		overflow : hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	.detail-bottom{
		width: 95%;
		margin: 0 auto;
		padding-bottom: 50rpx;
	}
	.detail-bottom div{
		display: flex;
		text-align: center;
		height: 210rpx;
		line-height: 210rpx;
	}
	.detail-bottom div:nth-child(1){
		height: 60rpx;
		line-height: 60rpx;
	}
	.detail-bottom div span{
		flex: 1;
		text-align: center;
		border: 1rpx solid #eee;
		font-size: 28rpx;
		padding: 5rpx;
	}
	.detail-bottom div span em{
		display: inline-block;
		vertical-align: middle;
		line-height: 40rpx;
	}
	.detail-bottom div span img{
		width: 100%;
		height: 140rpx;
		vertical-align: middle;
	}
	.detail-model{
		position: fixed;
		z-index: 1000;
		left: 0;
		top: 0;
		width: 100%;
		height:100%;
		background: #fff;
	}
	.detail-model .cs{
		width: 100%;
		height: 30%;
		padding: 20rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		overflow-y: scroll;
		text-align: justify;
	}
	.detail-model .cs p{
		padding-bottom: 10rpx;
	}
	.detail-model .cs span{
		display: inline-block;
		padding: 10rpx;
		margin: 10rpx;
		border-radius: 10rpx;
		background-color: #eee;
		font-size: 24rpx;
	}
	.detail-model .cs span img{
		vertical-align: middle;
		width: 30rpx;
		height: 30rpx;
	}
	.detail-model .img{
		width: 100%;
		height: 60%;
		padding: 20rpx;
		box-sizing: border-box;
	}
	.detail-model .img img{
		width: 100%;
		height: 100%;
	}
	.detail-btn{
		margin-top: 16rpx;
		width: 80%;
		background-color: #FE223B;
		color: #fff;
	}
	.act{
		background: #FE223B !important;
		color: #fff;
	}
	.cart{
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		background: #fff;
		box-shadow: 0 0 6rpx 2rpx rgba(0,0,0,.1);
	}
	.cart-left{
		flex: 4;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cart-left div{
		position: relative;
		flex: 1;
		text-align: center;
		font-size: 24rpx;
	}
	.cart-left div img{
		width: 40rpx;
		height: 40rpx;
	}
	.cart-right{
		flex: 6;
		display: flex;
		align-items: center;
		padding: 10rpx;
		box-sizing: border-box;
		justify-content: center;
		font-size: 28rpx;
	}
	.cart-right div{
		flex: 1;
		height: 100%;
		line-height: 80rpx;
		border: 1rpx solid #FE223B;
		border-radius: 10rpx;
		text-align: center;
	}
	.cart-right div:nth-child(1){
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}
	.cart-right div:nth-child(2){
		background: #FE223B;
		color: #fff;
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
	}
	.btnzf{
		opacity: 0;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		height: 100%;
		
	}
	.posterWrap {
	  position: fixed;
	  left: 0;
	  top: 0;
	  width: 100%;
	  min-height: 100%;
	  padding-top: 40px;
	  background-color: rgba(0,0,0,.5);
	}
	
	.myCanvas {
	  width: 310px;
	  height: 435px;
	  margin: 0 auto;
	  /* background: #fff; */
	}
	
	.fixed_inner {
	  margin-top: 20rpx;
	  text-align: center;
	}
	.fixed_inner button {
		display: inline-block;
		vertical-align: middle;
		margin-right: 20rpx;
		width: 30%;
		font-size: 24rpx;
		background: #FE223B;
		color: #fff;
	}
	.fixed_inner button:nth-child(2) {
		margin: 0;
		background: #fff;
		color: #FE223B;
	}
</style>
