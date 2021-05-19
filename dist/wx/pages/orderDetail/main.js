require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(143);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_46e062ba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(146);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(144)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_46e062ba_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\orderDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46e062ba", Component.options)
  } else {
    hotAPI.reload("data-v-46e062ba", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 144:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_orderItem__ = __webpack_require__(40);
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
			dataInfo: {},
			addressArr: {},
			localAddress: {},
			resInfo: {},
			resid: "",
			coupon: [],
			updateAddress: false
		};
	},

	components: {
		orderItem: __WEBPACK_IMPORTED_MODULE_0__components_orderItem__["a" /* default */]
	},
	computed: {
		commNum: function commNum() {
			var num = 0;
			for (var i = 0; i < this.resInfo.length; i++) {
				num += this.resInfo[i].Num;
			}
			return num;
		},
		commSum: function commSum() {
			var sum = 0;
			for (var i = 0; i < this.resInfo.length; i++) {
				sum += this.resInfo[i].Num * this.resInfo[i].GoodsPrice;
			}
			return sum;
		}
	},
	methods: {
		upOrder: function upOrder() {
			var _this = this;
			var itemContents = "[";
			for (var i = 0; i < this.resInfo.length; i++) {
				var item = "{\"id\":\"" + this.resInfo[i].ParentId + "\",\"sellerid\":\"" + this.resInfo[i].SellerId + "\",\"contents\":\"\u6211\u4E70\u4EA7\u54C1\u4E86\"}";
				if (i == this.resInfo.length - 1) {
					itemContents += item + "]";
				} else {
					itemContents += item + ",";
				}
			}

			wx.request({
				url: "http://192.168.2.38:8085/api/Orders/PostConfirmOrders?receId=" + _this.localAddress.Id + "&couponId=0&resId=" + _this.resid + "&itemContents=" + itemContents + "&uid=" + _this.dataInfo.Id + "&IsWholesaler=0",
				header: {
					'content-type': 'application/json' // 默认值
				},
				method: 'POST',
				success: function success(res) {
					//得到订单id
					var orderId = res.data;
					if (res.data) {
						//发起支付
						wx.showModal({
							title: '提示',
							content: '订单提交成功，马上去支付？',
							success: function success(res) {
								if (res.confirm) {
									wx.login({
										success: function success(res) {
											if (res.code) {
												//发起网络请求
												wx.request({
													url: "http://192.168.2.38:8085/api/CwcPayment/GetOpenId?js_code=" + res.code,
													method: 'GET',
													success: function success(res) {
														//获取openid
														var openid = JSON.parse(res.data).openid;
														wx.request({
															url: "http://192.168.2.38:8085/api/CwcPayment/GetPay?orderId=" + orderId + "&uid=" + _this.dataInfo.Id + "&openid=" + openid + "&amount=" + _this.commSum,
															method: 'GET',
															success: function success(res) {
																console.log(res);
															}
														});
													}
												});
											} else {
												console.log('登录失败！' + res.errMsg);
											}
										}
									});
								} else if (res.cancel) {}
							}
						});
					}
				}
			});
		},
		handleUpdateAddress: function handleUpdateAddress(v) {
			this.localAddress = v;
			this.updateAddress = false;
		}
	},
	mounted: function mounted() {
		this.resid = this.$mp.query.resid;
		//通过缓存获取用户信息
		var _this = this;
		wx.getStorage({
			key: 'dataInfo',
			success: function success(res) {
				_this.dataInfo = JSON.parse(res.data);
				// 获取用户收货地址
				wx.request({
					url: "http://192.168.2.38:8085/api/user/GetResAddress?uid=" + _this.dataInfo.Id,
					header: {
						'content-type': 'application/json' // 默认值
					},
					method: 'GET',
					success: function success(res) {
						_this.addressArr = JSON.parse(res.data);
						//将默认地址设置为显示
						_this.localAddress = JSON.parse(res.data).filter(function (item) {
							return item.IsDefault == 1;
						})[0];
					}
				});

				wx.request({
					url: "http://192.168.2.38:8085/api/Orders/PostConfirmOrdersPage?uid=" + _this.dataInfo.Id + "&resId=" + _this.resid + "&userType=1",
					header: {
						'content-type': 'application/json' // 默认值
					},
					method: 'POST',
					success: function success(res) {
						_this.resInfo = JSON.parse(res.data.split("---")[0]); //商品信息
						_this.coupon = JSON.parse(res.data.split("---")[1]); //优惠券信息
					}
				});
			}
		});
	}
});

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "address"
  }, [_c('h3', [_vm._v("收货地址 "), _c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.updateAddress = true
      }
    }
  }, [_vm._v("修改地址")])]), _vm._v(" "), _c('div', [_c('span', [_vm._v(_vm._s(_vm.localAddress.LinkName))]), _c('span', [_vm._v(_vm._s(_vm.localAddress.LinkMobile))])]), _vm._v(" "), _c('div', [_c('span', [(_vm.localAddress.IsDefault == 1) ? _c('em', {
    staticClass: "more"
  }, [_vm._v("默认")]) : _vm._e()], 1), _c('span', [_vm._v(_vm._s(_vm.localAddress.Province) + _vm._s(_vm.localAddress.City) + _vm._s(_vm.localAddress.Area) + _vm._s(_vm.localAddress.Street) + _vm._s(_vm.localAddress.Address))])])], 1), _vm._v(" "), _c('div', {
    staticClass: "order-goods"
  }, [_c('h3', [_vm._v("订单商品")]), _vm._v(" "), _vm._l((_vm.resInfo), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "order-item"
    }, [_c('div', [_c('img', {
      attrs: {
        "src": 'http://www.365dsw.com' + item.PicUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(item.ProName))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.Title))]), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(item.GoodsPrice))]), _vm._v(" "), _c('p', [_c('input', {
      attrs: {
        "type": "text",
        "placeholder": "留言填写"
      }
    })])], 1), _vm._v(" "), _c('div', [_vm._v("\n\t\t\t\tx" + _vm._s(item.Num) + "\n\t\t\t")])])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "goods-info"
  }, [_c('div', [_vm._v("订单数："), _c('span', [_vm._v(_vm._s(_vm.resInfo.length) + "单")])]), _vm._v(" "), _c('div', [_vm._v("产品数量："), _c('span', [_vm._v(_vm._s(_vm.commNum) + "件")])]), _vm._v(" "), _c('div', [_vm._v("商品金额："), _c('span', [_vm._v("￥" + _vm._s(_vm.commSum))])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "goods-pay"
  }, [_c('div', [_vm._v("应付：￥" + _vm._s(_vm.commSum))]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.upOrder
    }
  }, [_vm._v("提交订单")])]), _vm._v(" "), (_vm.updateAddress) ? _c('div', {
    staticClass: "address-list"
  }, [_c('div', {
    staticClass: "model"
  }, _vm._l((_vm.addressArr), function(item, index) {
    return _c('div', {
      key: index,
      class: item.Id == _vm.localAddress.Id ? 'model-item act' : 'model-item',
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleUpdateAddress(item)
        }
      }
    }, [_c('div', [_c('span', [_vm._v(_vm._s(item.LinkName))]), _c('span', [_vm._v(_vm._s(item.LinkMobile))])]), _vm._v(" "), _c('div', [_c('span', [(item.IsDefault == 1) ? _c('em', {
      staticClass: "more"
    }, [_vm._v("默认")]) : _vm._e()], 1), _c('span', [_vm._v(_vm._s(item.Province) + _vm._s(item.City) + _vm._s(item.Area) + _vm._s(item.Street) + _vm._s(item.Address))])])])
  }))]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._v("优惠券："), _c('span', [_vm._v("暂无")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-46e062ba", esExports)
  }
}

/***/ })

},[142]);