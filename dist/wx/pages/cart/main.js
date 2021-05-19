require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([11],{

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(93);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6a535d5c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(96);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6a535d5c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6a535d5c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\cart\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a535d5c", Component.options)
  } else {
    hotAPI.reload("data-v-6a535d5c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
			cartArr: {},
			cartId: [],
			allSelect: false,
			sum: 0
		};
	},

	methods: {
		//选择后提交订单
		handleBuy: function handleBuy() {
			var _this2 = this;

			var _this = this;
			//先循环出要提交的订单
			var datas = "[";
			if (this.cartId.length) {
				var _loop = function _loop(i) {
					var cartItem = _this2.cartArr.filter(function (item) {
						return item.Id == _this2.cartId[i];
					});
					var _obj = "{\"id\":\"" + cartItem[0].ProAttrId + "\",\"pid\":\"" + cartItem[0].ProId + "\",\"uid\":\"" + _this2.dataInfo.Id + "\",\"ut\":\"1\",\"num\":\"" + cartItem[0].Num + "\",\"isInstall\":\"0\"}";
					if (i == _this2.cartId.length - 1) {
						datas += _obj + "]";
					} else {
						datas += _obj + ",";
					}
				};

				for (var i = 0; i < this.cartId.length; i++) {
					_loop(i);
				}
				wx.request({
					url: "http://192.168.2.38:8085/api/Orders/PostBeforehandOrders?uid=" + _this.dataInfo.Id + "&datas=" + datas,
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
			} else {
				wx.showToast({
					title: '请勾选商品',
					icon: 'error',
					duration: 2000
				});
			}
			// let datas=`[{\"id\":"${this.ProChildId}",\"pid\":"${this.localId}",\"uid\":"${this.uid}",\"ut\":"1",\"num\":"1",\"isInstall\":"0"}]`;
		},

		// 更改商品数量
		handleUpdateNum: function handleUpdateNum(v, i) {
			if (v == "+") {
				this.cartArr[i].Num += 1;
			} else if (v == "-") {
				this.cartArr[i].Num > 1 ? this.cartArr[i].Num -= 1 : 1;
			} else {
				if (v <= 1) {
					this.cartArr[i].Num = 1;
				} else {
					this.cartArr[i].Num = v;
				}
			}
		},

		//单独选中商品
		handleChangeSelect: function handleChangeSelect(e) {
			var _this3 = this;

			//控制多选按钮
			this.cartId = e.target.value;
			for (var i = 0; i < this.cartArr.length; i++) {
				this.cartArr[i].select = false;
			}
			this.cartId.filter(function (item) {
				for (var _i = 0; _i < _this3.cartArr.length; _i++) {
					if (_this3.cartArr[_i].Id == item) {
						_this3.cartArr[_i].select = true;
					}
				}
			});
			//控制是否全选
			this.cartId.length == this.cartArr.length ? this.allSelect = true : this.allSelect = false;
		},

		//一键全选
		handleAllSelect: function handleAllSelect() {
			//判断是否全选
			if (this.allSelect) {
				//全选
				this.cartId = [];
				for (var i = 0; i < this.cartArr.length; i++) {
					this.cartArr[i].select = false;
				}
				this.allSelect = false;
			} else {
				//没有全选
				for (var _i2 = 0; _i2 < this.cartArr.length; _i2++) {
					this.cartId.push(this.cartArr[_i2].Id);
					this.cartArr[_i2].select = true;
					this.allSelect = true;
				}
			}
		},

		//删除购物车商品
		handleDelete: function handleDelete(i) {
			for (var a = 0; a < this.cartId.length; a++) {
				if (this.cartId[a] == i) {
					this.cartId.splice(a, 1);
					var cartItem = this.cartArr.filter(function (item) {
						return item.Id == i;
					});
					this.sum -= cartItem[0].GoodsPrice * cartItem[0].Num;
				}
			}
			var _this = this;
			wx.request({
				url: "http://192.168.2.38:8085/api/user/DelCart?uid=" + _this.dataInfo.Id + "&ids=" + i,
				header: {
					'content-type': 'application/json' // 默认值
				},
				method: "POST",
				success: function success(res) {
					if (res.data == 1) {
						console.log(_this.dataInfo.Id);
						wx.request({
							url: "http://192.168.2.38:8085/api/user/UserCart?uid=" + _this.dataInfo.Id,
							header: {
								'content-type': 'application/json' // 默认值
							},
							method: "POST",
							success: function success(res) {
								_this.cartArr = JSON.parse(res.data);
								_this.cartArr.forEach(function (item) {
									item.select = false;
								});
							}
						});
					}
				}
			});
		}
	},
	computed: {
		addSum: function addSum() {
			var _this4 = this;

			this.sum = 0;
			this.cartId.filter(function (item) {
				for (var i = 0; i < _this4.cartArr.length; i++) {
					if (_this4.cartArr[i].Id == item) {
						_this4.sum += _this4.cartArr[i].GoodsPrice * _this4.cartArr[i].Num;
					}
				}
			});
			return this.sum;
		}
	},
	mounted: function mounted() {
		var _this = this;
	},
	onShow: function onShow() {
		// 每次进入页面，即调取数据库中购物车信息
		var _this = this;
		wx.getStorage({
			key: 'dataInfo',
			success: function success(res) {
				_this.dataInfo = JSON.parse(res.data);
				// 获取用户购物车
				wx.request({
					url: "http://192.168.2.38:8085/api/user/UserCart?uid=" + _this.dataInfo.Id,
					header: {
						'content-type': 'application/json' // 默认值
					},
					method: "POST",
					success: function success(res) {
						_this.cartArr = JSON.parse(res.data);
						_this.cartArr.forEach(function (item) {
							item.select = false;
						});
						console.log(JSON.parse(res.data));
					}
				});
			},

			fail: function fail(res) {
				wx.reLaunch({
					url: "/pages/my/main"
				});
				return;
			}
		});

		//清零
		this.sum = 0;
		this.cartId = [];
		this.allSelect = false;
	}
});

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "empty-cart",
    staticStyle: {
      "display": "none"
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/gwcl_03.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "empty-h"
  }, [_vm._v("亲，购物车竟然是空的")]), _vm._v(" "), _c('p', {
    staticClass: "empty-e"
  }, [_vm._v("赶紧去挑几件喜欢的灯")]), _vm._v(" "), _c('button', [_vm._v("去逛逛")])], 1), _vm._v(" "), _c('div', {
    staticClass: "cart-added",
    attrs: {
      "eventid": '5'
    },
    on: {
      "change": _vm.checkChange
    }
  }, [_c('checkbox-group', {
    attrs: {
      "eventid": '4',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.handleChangeSelect
    }
  }, _vm._l((_vm.cartArr), function(item, index) {
    return _c('div', {
      staticClass: "cart-item"
    }, [_c('div', [_c('label', {
      staticClass: "radio"
    }, [_c('checkbox', {
      attrs: {
        "value": item.Id,
        "color": "#FE223B",
        "checked": item.select
      }
    })], 1)], 1), _vm._v(" "), _c('div', [_c('img', {
      attrs: {
        "src": 'http://www.365dsw.com' + item.PicUrl,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', [_c('p', [_vm._v(_vm._s(item.ProName))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.Title))]), _vm._v(" "), _c('p'), _vm._v(" "), _c('p'), _vm._v(" "), _c('p', [_vm._v("￥" + _vm._s(item.GoodsPrice))])], 1), _vm._v(" "), _c('div', [_c('i', {
      staticClass: "icon_jj",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleDelete(item.Id)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "num-aq"
    }, [_c('span', {
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleUpdateNum('-', index)
        }
      }
    }, [_vm._v("-")]), _vm._v(" "), _c('span', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (item.Num),
        expression: "item.Num"
      }],
      attrs: {
        "eventid": '2_' + index
      },
      domProps: {
        "value": (item.Num)
      },
      on: {
        "change": function($event) {
          _vm.handleUpdateNum(item.Num, index)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          item.Num = $event.target.value
        }
      }
    })]), _vm._v(" "), _c('span', {
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleUpdateNum('+', index)
        }
      }
    }, [_vm._v("+")])])], 1)])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "cart-summary"
  }, [_c('div', [_c('label', {
    staticClass: "radio"
  }, [_c('checkbox', {
    attrs: {
      "value": "r1",
      "color": "#FE223B",
      "checked": _vm.allSelect,
      "eventid": '6'
    },
    on: {
      "click": _vm.handleAllSelect
    }
  }), _vm._v("全选")], 1)], 1), _vm._v(" "), _c('div', [_vm._v("合计："), _c('span', [_vm._v("￥" + _vm._s(_vm.addSum))])]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.handleBuy
    }
  }, [_vm._v("结算（" + _vm._s(_vm.cartId.length) + "件）")])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6a535d5c", esExports)
  }
}

/***/ })

},[92]);