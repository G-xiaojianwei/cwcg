require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([6],{

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(124);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_191802c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(128);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(125)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-191802c4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_191802c4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-191802c4", Component.options)
  } else {
    hotAPI.reload("data-v-191802c4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 125:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 126:
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


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			userphone: "",
			userInfo: {}, //微信获取到的用户数据
			dataInfo: {}, //服务器获取到的用户数据
			userOpen: {},
			orderArr: [],
			showModel: false
		};
	},

	methods: {
		//跳转到订单页面
		handleToOrder: function handleToOrder(i) {
			wx.navigateTo({
				url: '/pages/order/main?i=' + i
			});
		},
		handleToCollect: function handleToCollect() {
			wx.getStorage({
				key: 'dataInfo',
				success: function success(res) {
					wx.navigateTo({
						url: '/pages/collect/main?id=' + JSON.parse(res.data).Id
					});
				}
			});
		},
		handleClear: function handleClear() {
			this.showModel = false;
			this.userInfo = {};
			wx.removeStorage({
				key: 'userInfo',
				success: function success(res) {
					console.log(res);
				}
			});
		},

		//获得用户信息
		handleUser: function handleUser() {
			var _this = this;
			if (_this.userInfo.nickName == undefined) {
				wx.getUserInfo({
					success: function success(res) {
						_this.userInfo = JSON.parse(res.rawData);
						wx.setStorage({
							key: "userInfo",
							data: res.rawData
						});
						_this.showModel = true;
					}
				});
			}
		},
		handleLogin: function handleLogin(e) {
			this.showModel = false;
			if (e.mp.detail.cloudID == undefined) {
				this.userInfo = {};
				this.showModel = false;
				wx.removeStorage({
					key: 'userInfo',
					success: function success(res) {
						console.log(res);
					}
				});
				return;
			}
			var _this = this;
			//判断是否有缓存
			if (this.dataInfo.Id !== undefined) {
				return;
			}
			wx.request({
				url: 'http://192.168.2.38:8085/api/user/GetMobile',
				method: 'GET',
				data: {
					encryptedDatas: e.target.encryptedData,
					ivs: e.target.iv,
					_secret: _this.userOpen.session_key
				},
				success: function success(res) {
					//第三步注册新用户
					_this.userphone = res.data;
					wx.request({
						url: 'http://192.168.2.38:8085/api/user/UserReg?mobile=' + _this.userphone + '&userName=' + _this.userInfo.nickName + '&userHead=' + _this.userInfo.avatarUrl + '&wxToken=' + _this.userOpen.session_key + '+' + _this.userOpen.openid,
						header: {
							'content-type': 'application/json' // 默认值
						},
						method: 'POST',
						success: function success(res) {
							//第四步判断是否注册成功
							if (res.data == 0) {
								//老用户，手机号登录
								wx.request({
									url: 'http://192.168.2.38:8085/api/user/UserInfoByMobile?mobile=' + _this.userphone,
									header: {
										'content-type': 'application/json' // 默认值
									},
									method: 'POST',
									success: function success(res) {
										_this.dataInfo = res.data;
										//将用户信息保存到数据中
										wx.setStorage({
											key: "dataInfo",
											data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res.data)
										});
										// //查询出订单信息
										wx.request({
											url: 'http://192.168.2.38:8085/api/Orders/GetOrder?type=0&uid=' + res.data.Id,
											header: {
												'content-type': 'application/json' // 默认值
											},
											method: 'GET',
											success: function success(res) {
												//将用户信息保存到数据中
												wx.setStorage({
													key: "orderArr",
													data: res.data
												});
												_this.orderArr = JSON.parse(res.data);
											}
										});
									}
								});
							} else if (res.data > 0) {
								//新用户直接登录
								wx.request({
									url: 'http://192.168.2.38:8085/api/user/UserInfo?uid=' + res.data,
									header: {
										'content-type': 'application/json' // 默认值
									},
									method: 'POST',
									success: function success(res) {
										_this.dataInfo = res.data;
										//将用户信息保存到数据中
										wx.setStorage({
											key: "dataInfo",
											data: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res.data)
										});
									}
								});
							}
						}
					});
				}
			});
		},
		handleToAddress: function handleToAddress() {
			wx.navigateTo({
				url: '/pages/address/main?add=1'
			});
		}
	},
	mounted: function mounted() {
		var _this = this;
		if (this.dataInfo.Id == undefined) {
			this.showModel = false;
			wx.removeStorage({
				key: 'userInfo',
				success: function success(res) {
					console.log(res);
				}
			});
		}
		wx.login({
			success: function success(res) {
				console.log(res);
				if (res.code) {
					//发起网络请求
					wx.request({
						url: 'http://192.168.2.38:8085/api/CwcPayment/GetOpenId',
						data: {
							js_code: res.code
						},
						success: function success(res) {
							_this.userOpen = JSON.parse(res.data);
						}
					});
				} else {
					wx.showToast({
						title: '登录失败',
						icon: 'error',
						duration: 2000
					});
				}
			}
		});

		wx.getStorage({
			key: 'dataInfo',
			success: function success(res) {
				_this.dataInfo = JSON.parse(res.data);
			}
		});
		wx.getStorage({
			key: 'orderArr',
			success: function success(res) {
				_this.orderArr = JSON.parse(res.data);
			}
		});
		wx.getStorage({
			key: 'userInfo',
			success: function success(res) {
				_this.userInfo = JSON.parse(res.data);
			}
		});
	},

	computed: {
		// //代付款
		Payment: function Payment() {
			var orderItem = this.orderArr.filter(function (item) {
				return item.States == 0;
			});
			return orderItem.length;
		},

		//代发货
		delivery: function delivery() {
			var orderItem = this.orderArr.filter(function (item) {
				return item.States == 1;
			});
			return orderItem.length;
		}
	}
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "header-top"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": _vm.userInfo.nickName == undefined && _vm.dataInfo.Id == undefined ? '/static/img/logo.jpg' : _vm.userInfo.avatarUrl,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', [_c('button', {
    staticClass: "btn",
    attrs: {
      "open-type": "getUserInfo",
      "eventid": '0'
    },
    on: {
      "getuserinfo": _vm.handleUser
    }
  }, [_vm._v(_vm._s(_vm.userInfo.nickName == undefined && _vm.dataInfo.Id == undefined ? '点击登录' : _vm.userInfo.nickName))]), _vm._v(" "), _c('p', [_vm._v("ID:" + _vm._s(_vm.userInfo.nickName == undefined && _vm.dataInfo.Id == undefined ? '' : _vm.dataInfo.NickName) + "（消费者）")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "mylist"
  }, [_c('div', {
    staticClass: "mylist-top"
  }, [_c('div', {
    staticClass: "mylist-title"
  }, [_c('p', [_vm._v("我的订单")]), _vm._v(" "), _c('p', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.handleToOrder(0)
      }
    }
  }, [_vm._v("查看所有订单")])], 1), _vm._v(" "), _c('div', {
    staticClass: "mylist-cont"
  }, [_c('div', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.handleToOrder(1)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/dfk.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("待付款")]), _vm._v(" "), (_vm.Payment !== 0) ? _c('span', {
    staticClass: "icon-point"
  }, [_vm._v(_vm._s(_vm.Payment))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.handleToOrder(5)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/dfh.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("待发货")]), _vm._v(" "), (_vm.delivery !== 0) ? _c('span', {
    staticClass: "icon-point"
  }, [_vm._v(_vm._s(_vm.delivery))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.handleToOrder(2)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/dsh.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("待收货")]), _vm._v(" "), (_vm.delivery !== 0) ? _c('span', {
    staticClass: "icon-point"
  }, [_vm._v(_vm._s(_vm.delivery))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.handleToOrder(3)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/ywc.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("已完成")]), _vm._v(" "), (_vm.delivery !== 0) ? _c('span', {
    staticClass: "icon-point"
  }, [_vm._v(_vm._s(_vm.delivery))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.handleToOrder(4)
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/shtk.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("售后/退款")]), _vm._v(" "), (_vm.delivery !== 0) ? _c('span', {
    staticClass: "icon-point"
  }, [_vm._v(_vm._s(_vm.delivery))]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "mylist-bottom"
  }, [_c('div', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.handleToCollect
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/sc.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("我的收藏")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.handleToAddress
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/img/dz.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("收货地址")])], 1), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": "/static/img/contact.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("联系客服")]), _vm._v(" "), _c('button', {
    staticClass: "contact",
    attrs: {
      "open-type": "contact",
      "bindcontact": "handleContact"
    }
  })], 1)])]), _vm._v(" "), (_vm.showModel) ? _c('div', {
    staticClass: "getPhone"
  }, [_c('div', {
    staticClass: "getPhone-model"
  }, [_c('div', [_vm._v("授权获取手机号")]), _vm._v(" "), _c('div', [_c('button', {
    attrs: {
      "eventid": '9'
    },
    on: {
      "click": _vm.handleClear
    }
  }, [_vm._v("取消")]), _c('button', {
    attrs: {
      "open-type": "getPhoneNumber",
      "eventid": '10'
    },
    on: {
      "getphonenumber": _vm.handleLogin
    }
  }, [_vm._v("同意授权")])], 1)])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-191802c4", esExports)
  }
}

/***/ })

},[123]);