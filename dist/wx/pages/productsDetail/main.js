require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(148);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_65e7fbf2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(151);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_65e7fbf2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\productsDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65e7fbf2", Component.options)
  } else {
    hotAPI.reload("data-v-65e7fbf2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 149:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			swiperCont: ["/static/img/index_img_23.png", "/static/img/index_img_23.png"],
			selectedindex: 1,
			x: 0,
			i: 0, //确定当前的子属性
			localId: 0, //当前属性id
			dataArr: {}, //子属性数据
			dataInfo: {}, //主属性数据
			infoBanner: {}, //主图展示
			detailArr: {},
			GoodsPrice: 0, //商品现价
			OrigPrice: 0, //商品原价
			Stock: 0, //存货
			ProName: "", //名称
			open: false, //控制参数弹出面板
			showImg: "", //当前选中产品图片
			localSpecs: "", //当前选中规格
			Style: "", //风格
			styleArr: {},
			brand: "", //品牌
			brandArr: {},
			tj: 2, //判断是否是特价 0 特价 1新品  2其他
			uid: 0,
			ProChildId: 0, //子属性商品的id
			SellerId: 0, //商家id
			collectArr: {},
			c: 0,
			collectCode: 0,
			collectC: ["/static/img/cart_img_06.png", "/static/img/cart_img.png"],
			InfoSync: {},
			openCanvas: false, //打开画布
			s: "overflow: none;height: 100%;"

		};
	},
	onLoad: function onLoad() {},

	methods: {
		handleClear: function handleClear() {
			this.openCanvas = false;
			this.s = "overflow: none;height: 100%;";
		},

		// 小程序需要将图片下载下来，然后才能绘制到画布上
		saveThe: function saveThe(url, callback) {
			wx.getImageInfo({
				src: url, //服务器返回的图片地址
				success: function success(res) {
					callback(res.path);
				},
				fail: function fail(res) {}
			});
		},

		//点击打开画布
		handleOpebCanvas: function handleOpebCanvas() {
			var _this2 = this;

			this.openCanvas = true;
			var InfoSync = wx.getSystemInfoSync();
			this.InfoSync = InfoSync;
			var bili = InfoSync.windowWidth / 375 * 1;
			this.s = "overflow:hidden;height:" + InfoSync.windowHeight + "px";
			var ctx = wx.createCanvasContext("posterCanvas");
			this.saveThe("http://chuantu.xyz/t6/741/1615258868x1033348159.jpg", function (path) {
				ctx.drawImage(path, 0, 0, 310 * bili, 435 * bili); //ctx.drawImage（图片路径，距离画布左边，距离画布右边，图片宽，图片高）
				ctx.save(); // 保存当前绘画
				ctx.setTextAlign("left"); // 文字居中
				ctx.setFontSize(16); // 文字字号
				ctx.fillText(_this2.ProName.replace(/诚外诚购-/, "").slice(0, 10), 140 * bili, 346 * bili);
				ctx.fillText(_this2.ProName.replace(/诚外诚购-/, "").slice(0, 10), 140 * bili, 346 * bili);
				console.log(_this2.ProName.replace(/诚外诚购-/, "").slice(0, 10));
				ctx.setFillStyle("#828282"); // 文字颜色：828282
				ctx.setFontSize(14); // 文字字号
				ctx.fillText(_this2.localSpecs, 140 * bili, 370.5 * bili);
				ctx.setFillStyle("#FE223B"); // 文字颜色：B0B0B0
				ctx.setFontSize(16); // 文字字号
				ctx.fillText("优惠价:" + _this2.GoodsPrice + "元", 140 * bili, 398 * bili);
				ctx.save();
				//圆形头像框
				ctx.setStrokeStyle("rgba(0,0,0,0)");
				ctx.rect(0, 0, 310 * bili, 310 * bili);
				ctx.fill();
				//二维码
				_this2.saveThe("http://www.365dsw.com/CommonImg/hotcode.jpg", function (path) {
					ctx.drawImage(path, 30.5 * bili, 320 * bili, 93 * bili, 93 * bili);
					ctx.save();
					//头像
					_this2.saveThe("http://www.365dsw.com" + _this2.showImg, function (path) {
						ctx.clip();
						ctx.drawImage(path, 0 * bili, 0 * bili, 310 * bili, 310 * bili);
						ctx.save();
						//头像
						_this2.saveThe("http://www.365dsw.com/CommonImg/logo.png", function (path) {
							ctx.clip();
							ctx.drawImage(path, 2 * bili, 10 * bili, 140 * bili, 40 * bili);
							ctx.save();
							ctx.stroke();
							ctx.draw();
						});
					});
				});
			});
		},

		// 点击保存时，将画布生成海报
		handleSave: function handleSave() {
			var that = this;
			wx.showLoading({
				title: "正在保存...",
				mask: true
			});
			wx.getSetting({
				success: function success(res) {
					if (res.authSetting["scope.writePhotosAlbum"]) {
						that.saveImg();
					} else if (res.authSetting["scope.writePhotosAlbum"] === undefined) {
						wx.authorize({
							scope: "scope.writePhotosAlbum",
							success: function success() {
								that.saveImg();
							},
							fail: function fail() {
								wx.hideLoading();
								wx.showToast({
									title: "您没有授权，无法保存到相册",
									icon: "none"
								});
							}
						});
					} else {
						wx.openSetting({
							success: function success(res) {
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

				fail: function fail(err) {
					wx.hideLoading();
					wx.showToast({
						title: "出现了错误，请稍后再试",
						icon: "none"
					});
				}
			});
		},
		saveImg: function saveImg() {
			var _this = this;
			// 按照设备比例去计算图片和画布尺寸
			var bili = this.InfoSync.windowWidth / 375 * 1;
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
				success: function success(res) {
					wx.hideLoading();
					var tempFilePath = res.tempFilePath;
					// 需要权限
					wx.saveImageToPhotosAlbum({
						filePath: tempFilePath,
						success: function success(res) {
							wx.showModal({
								content: "图片已保存到相册，赶紧晒一下吧~",
								showCancel: false,
								confirmText: "好的",
								confirmColor: "#333"
							});
							_this.openCanvas = false;
							_this.s = "overflow: none;height: 100%;";
						},

						fail: function fail(res) {
							wx.hideLoading();
							wx.showToast({
								title: "没有相册权限",
								icon: "none",
								duration: 2000
							});
						}
					});
				},
				fail: function fail(err) {
					wx.hideLoading();
					wx.showToast({
						title: "出现了错误，请稍后再试",
						icon: "none"
					});
				}
			});
		},

		//立即购买
		handleBuy: function handleBuy() {
			var _this = this;
			if (_this.uid == 0) {
				wx.showModal({
					title: '提示',
					content: '您还未登录，去登录？',
					success: function success(res) {
						if (res.confirm) {
							wx.reLaunch({
								url: "/pages/my/main"
							});
							return;
						} else if (res.cancel) {
							return;
						}
					}
				});
			} else {
				var datas = "[{\"id\":\"" + this.ProChildId + "\",\"pid\":\"" + this.localId + "\",\"uid\":\"" + this.uid + "\",\"ut\":\"1\",\"num\":\"1\",\"isInstall\":\"0\"}]";
				console.log(datas);
				wx.request({
					url: "http://192.168.2.38:8085/api/Orders/PostBeforehandOrders?uid=" + _this.uid + "&datas=" + datas,
					header: {
						'content-type': 'application/json' // 默认值
					},
					method: "POST",
					success: function success(res) {
						if (res.data) {
							wx.navigateTo({
								url: "/pages/orderDetail/main?resid=" + res.data
							});
						}
					}
				});
			}
		},

		//添加购物车
		handleAddCart: function handleAddCart() {
			var _this = this;
			if (_this.uid == 0) {
				wx.showModal({
					title: '提示',
					content: '您还未登录，去登录？',
					success: function success(res) {
						if (res.confirm) {
							wx.reLaunch({
								url: "/pages/my/main"
							});
							return;
						} else if (res.cancel) {
							return;
						}
					}
				});
			} else {
				wx.request({
					url: "http://192.168.2.38:8085/api/user/AddCard?pid=" + _this.localId + "&attrId=" + _this.ProChildId + "&uid=" + _this.uid + "&sellerId=" + _this.SellerId + "&num=1",
					header: {
						'content-type': 'application/json' // 默认值
					},
					method: "POST",
					success: function success(res) {
						if (res.data == 1) {
							wx.showToast({
								title: '添加成功',
								icon: 'success',
								duration: 2000
							});
						}
					}
				});
			}
		},
		handleCollect: function handleCollect() {
			// 收藏
			var _this = this;
			if (_this.uid == 0) {
				wx.showModal({
					title: '提示',
					content: '您还未登录，去登录？',
					success: function success(res) {
						if (res.confirm) {
							wx.reLaunch({
								url: "/pages/my/main"
							});
							return;
						} else if (res.cancel) {
							return;
						}
					}
				});
			} else {
				wx.getStorage({
					key: 'dataInfo',
					success: function success(res) {
						var uid = JSON.parse(res.data).Id;
						// 判断是否收藏
						wx.request({
							url: "http://192.168.2.38:8085/api/goods/GetGoodsColl?goodId=" + _this.localId + "&uid=" + uid,
							header: {
								'content-type': 'application/json' // 默认值
							},
							success: function success(res) {
								if (res.data == 0) {
									//如果没有收藏
									var ProId = Number(_this.localId);
									wx.request({
										url: "http://192.168.2.38:8085/api/goods/AddGoodsColl",
										header: {
											'content-type': 'application/json' // 默认值
										},
										method: "POST",
										data: {
											Uid: uid,
											UserType: 1,
											ProId: ProId,
											ProChildId: _this.ProChildId,
											SellerId: _this.SellerId
										},
										success: function success(res) {
											wx.request({
												url: "http://192.168.2.38:8085/api/goods/GetCollProList?uid=" + uid,
												header: {
													'content-type': 'application/json' // 默认值
												},
												success: function success(res) {
													_this.collectArr = res.data;
													//判断当前属性有没有被收藏过
													var collectItem = _this.collectArr.filter(function (item) {
														return item.ProId == _this.localId && item.ProChildId == _this.ProChildId;
													});
													if (collectItem.length) {
														_this.collectCode = collectItem.Id;
														_this.c = 1;
													}
												}
											});
											wx.request({
												url: "http://192.168.2.38:8085/api/user/UserInfo?uid=" + uid,
												header: {
													'content-type': 'application/json' // 默认值
												},
												method: 'POST',
												success: function success(res) {
													console.log(res, 11);
													//将用户信息保存到数据中
													wx.setStorage({
														key: "dataInfo",
														data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res.data)
													});
												}
											});
										}
									});
								} else {
									var Collectitem = _this.collectArr.filter(function (item) {
										return item.ProId == _this.localId;
									});
									wx.request({
										url: "http://192.168.2.38:8085/api/goods/DelGoodsColl?id=" + Collectitem[0].Id + "&uid=" + uid,
										header: {
											'content-type': 'application/json' // 默认值
										},
										method: 'POST',
										success: function success(res) {
											if (res.data == 1) {
												_this.c = 0;
												wx.request({
													url: "http://192.168.2.38:8085/api/goods/GetCollProList?uid=" + uid,
													header: {
														'content-type': 'application/json' // 默认值
													},
													success: function success(res) {
														_this.collectArr = res.data;
													}
												});
											}
										}
									});
								}
							}
						});
					}
				});
			}
		},
		handleForward: function handleForward() {
			//转发
			wx.showShareMenu({
				withShareTicket: true
			});
		},
		handleChange: function handleChange(event) {
			this.selectedindex = event.mp.detail.current + 1;
		},
		handleChangeDetail: function handleChangeDetail(v) {
			this.x = v;
		},
		handleGetSpecs: function handleGetSpecs(e) {
			if (e.target.dataset.id == "0") {
				this.i = e.target.dataset.value;
				this.GoodsPrice = this.dataArr[this.i].GoodsPrice;
				this.OrigPrice = this.dataArr[this.i].OrigPrice;
				this.Stock = this.dataArr[this.i].Stock;
				this.localSpecs = this.dataArr[this.i].Title;
				this.showImg = this.dataArr[this.i].PicUrl;
				this.ProChildId = this.dataArr[this.i].Id;
				this.SellerId = this.dataInfo.SellerId;
			}
		}
	},
	computed: {},
	onShareAppMessage: function onShareAppMessage() {
		return {
			title: this.ProName,
			path: "/pages/productsDetail/main?id=" + this.localId + "&i=" + this.tj
		};
	},

	watch: {
		ProChildId: function ProChildId(val, oldVal) {
			var _this3 = this;

			//普通的watch监听
			//判断当前属性有没有被收藏过
			var collectItem = this.collectArr.filter(function (item) {
				return item.ProId == _this3.localId;
			});
			if (collectItem.length) {
				this.c = 1;
			} else {
				this.c = 0;
			}
		}
	},
	mounted: function mounted() {
		var _this = this;
		this.open = false;
		this.openCanvas = false;
		//设uid
		wx.getStorage({
			key: 'dataInfo',
			success: function success(res) {
				_this.uid = JSON.parse(res.data).Id;
			}
		});
		if (_this.$mp.query.i) {
			this.tj = _this.$mp.query.i;
			console.log(this.tj = _this.$mp.query.i);
		}
		this.localId = this.$mp.query.id;
		wx.request({
			url: "http://192.168.2.38:8085/api/goods/GetGoodsAttr?id=" + _this.$mp.query.id, //获取商品子属性
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.dataArr = res.data;
				_this.localSpecs = res.data[0].Title;
				_this.GoodsPrice = res.data[0].GoodsPrice;
				_this.OrigPrice = res.data[0].OrigPrice;
				_this.Stock = res.data[0].Stock;
				_this.showImg = res.data[0].PicUrl;
				_this.ProChildId = res.data[0].Id;
			}
		});
		// 获取样式列表
		wx.request({
			url: "http://192.168.2.38:8085/api/goods/GetRenovationStyle",
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.styleArr = JSON.parse(res.data);
			}
		});
		// 获取品牌列表
		wx.request({
			url: "http://192.168.2.38:8085/api/goods/GetAlreadyGoodBrand",
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.brandArr = JSON.parse(res.data);
			}
		});
		wx.request({
			url: "http://192.168.2.38:8085/api/goods/GetGoods?id=" + _this.$mp.query.id + "&uid=0", //获取商品主属性
			header: {
				'content-type': 'application/json' // 默认值
			},
			success: function success(res) {
				_this.infoBanner = res.data.InfoPicUrl.split(",");
				_this.dataInfo = res.data;
				_this.ProName = res.data.ProName;
				_this.StyleId = res.data.StyleId;
				_this.SellerId = res.data.SellerId;
				_this.detailArr = res.data.ProDetail.split("\"").filter(function (item) {
					if (item.indexOf("/tool") == 0) {
						return item;
					}
				});
				var styleName = _this.styleArr.filter(function (item) {
					return item.Id == _this.StyleId;
				});
				console.log(styleName[0]);
				_this.Style = styleName[0].RenovationStyle;
				// console.log(_this.brandArr)
				// console.log(_this.brandAr)
				setTimeout(function () {
					var brandItem = _this.brandArr.filter(function (item) {
						return item.Id == _this.dataInfo.BrandId;
					});
					_this.brand = brandItem[0].BrandName;
				}, 1000);

				//先将收藏状态设置为无
				_this.c = 0;
				//再获取用户收藏信息判断有没有
				wx.getStorage({
					key: 'dataInfo',
					success: function success(res) {
						if (JSON.parse(res.data).Id) {
							wx.request({
								url: "http://192.168.2.38:8085/api/goods/GetCollProList?uid=" + JSON.parse(res.data).Id,
								header: {
									'content-type': 'application/json' // 默认值
								},
								success: function success(res) {
									_this.collectArr = res.data;
									//判断当前属性有没有被收藏过
									var collectItem = _this.collectArr.filter(function (item) {
										return item.ProId == _this.localId && item.ProChildId == _this.ProChildId;
									});
									if (collectItem.length) {
										_this.c = 1;
									}
								}
							});
						}
					}
				});
			}
		});
	}
});

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: (_vm.s)
  }, [_c('div', {
    staticClass: "swiper"
  }, [_c('swiper', {
    staticClass: "swiper-detail",
    attrs: {
      "circular": "true",
      "eventid": '0'
    },
    on: {
      "change": _vm.handleChange
    }
  }, _vm._l((_vm.infoBanner), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '0_' + index
      }
    }, [_c('img', {
      attrs: {
        "src": 'http://www.365dsw.com' + item,
        "alt": ""
      }
    })])
  })), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.mainImg))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.selectedindex + "/" + _vm.infoBanner.length))])], 1), _vm._v(" "), _c('div', {
    staticClass: "price-info"
  }, [_c('p', [_vm._v("优惠价 ￥ " + _vm._s(_vm.GoodsPrice))]), _vm._v(" "), _c('p', [_vm._v("原价 ￥" + _vm._s(_vm.OrigPrice))]), _vm._v(" "), _c('p', [_vm._v("系列号：" + _vm._s(_vm.ProName))]), _vm._v(" "), _c('p', [_c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tj == 0),
      expression: "tj==0"
    }]
  }, [_vm._v("限时特价")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.tj == 1),
      expression: "tj==1"
    }]
  }, [_vm._v("新品")]), _vm._v(" "), _c('em', [_vm._v("现货:" + _vm._s(_vm.Stock) + "件")])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "cwcg"
  }, [_c('div', {
    staticClass: "detail-t"
  }, [_c('div', [_vm._v("已选规格：")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.open = true
      }
    }
  }, [_vm._v("\r\n\t\t\t\t\t" + _vm._s(_vm.localSpecs) + "\r\n\t\t\t\t")]), _vm._v(" "), _c('div', [_vm._v(">")])]), _vm._v(" "), _c('div', {
    staticClass: "cwcg-model"
  }, [_vm._m(0), _vm._v(" "), _c('div', [_c('h3', [_vm._v("诚外诚购")]), _vm._v(" "), _c('p', [_vm._v("诚外诚购主营家居灯饰、工程照明、照明光源、开关插座、户外灯具、厨卫电器等灯具用品。")])], 1)]), _vm._v(" "), (_vm.open) ? _c('div', {
    staticClass: "detail-model"
  }, [_c('div', {
    staticClass: "img"
  }, [_c('img', {
    attrs: {
      "src": 'http://www.365dsw.com' + _vm.showImg,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "cs"
  }, [_c('p', [_vm._v("规格")]), _vm._v(" "), _vm._l((_vm.dataArr), function(item, index) {
    return _c('span', {
      class: _vm.i == index ? 'act' : '',
      attrs: {
        "data-id": "0",
        "data-value": index,
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.handleGetSpecs($event)
        }
      }
    }, [_c('img', {
      attrs: {
        "src": 'http://www.365dsw.com' + item.PicUrl,
        "alt": ""
      }
    }), _vm._v(" " + _vm._s(item.Title))])
  })], 2), _vm._v(" "), _c('button', {
    staticClass: "detail-btn",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.open = false
      }
    }
  }, [_vm._v("确定")])], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "detail-nav"
  }, [_c('span', {
    class: _vm.x == 0 ? 'act' : '',
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.handleChangeDetail('0')
      }
    }
  }, [_vm._v("产品介绍")]), _vm._v(" "), _c('span', {
    class: _vm.x == 1 ? 'act' : '',
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.handleChangeDetail('1')
      }
    }
  }, [_vm._v("产品参数")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.x == 0),
      expression: "x==0"
    }],
    staticClass: "detail-cont"
  }, _vm._l((_vm.detailArr), function(item, index) {
    return _c('img', {
      key: index,
      attrs: {
        "src": 'http://www.365dsw.com' + item,
        "alt": "",
        "mode": "widthFix"
      }
    })
  })), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.x == 1),
      expression: "x==1"
    }],
    staticClass: "detail-cs"
  }, [_c('div', {
    staticClass: "detail-top"
  }, [_c('div', [_c('span', [_vm._v("系列名")]), _c('span', [_vm._v(_vm._s(_vm.ProName))])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("风格")]), _c('span', [_vm._v(_vm._s(_vm.Style))])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("品牌")]), _c('span', [_vm._v(_vm._s(_vm.brand))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "cart"
  }, [_c('div', {
    staticClass: "cart-left"
  }, [_c('div', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.handleOpebCanvas
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/img_icon_03.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("保存")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.handleCollect
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.collectC[_vm.c],
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("收藏")])], 1), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": "/static/img/cart_img_03.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("分享")]), _vm._v(" "), _c('button', {
    staticClass: "btnzf",
    attrs: {
      "open-type": "share"
    }
  }, [_vm._v("转发")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "cart-right"
  }, [_c('div', {
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.handleAddCart
    }
  }, [_vm._v("加入购物车")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.handleBuy
    }
  }, [_vm._v("立即购买")])])]), _vm._v(" "), (_vm.openCanvas) ? _c('view', {
    staticClass: "posterWrap"
  }, [_c('canvas', {
    staticClass: "myCanvas",
    attrs: {
      "canvas-id": "posterCanvas"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "fixed_inner"
  }, [_c('button', {
    attrs: {
      "eventid": '10'
    },
    on: {
      "click": _vm.handleSave
    }
  }, [_vm._v("保存海报")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '11'
    },
    on: {
      "click": _vm.handleClear
    }
  }, [_vm._v("取消")])], 1)]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    attrs: {
      "src": "/static/img/cwcg.png",
      "alt": ""
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-65e7fbf2", esExports)
  }
}

/***/ })

},[147]);