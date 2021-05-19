require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(52);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_107440d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(91);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(53)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_107440d0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\address\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-107440d0", Component.options)
  } else {
    hotAPI.reload("data-v-107440d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 53:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
			add: 0,
			addLcal: "",
			addName: "",
			addPhone: "",
			addDefault: false,
			province: "北京", //省级
			provinceid: 110000,
			city: "北京", //市级
			cityid: 110100,
			area: "东城区", //区级
			areaid: 110101,
			street: "东华门街道", //街道
			streetid: 110101001,
			cityArr: [], //所有地区数据
			cityS: {}, //市级地区
			areaS: {}, //区级地区
			streetS: {}, //街道
			showModel: false,
			dataInfo: {},
			addressArr: [] //所有已有的收货地址

		};
	},

	methods: {
		handleClear: function handleClear() {
			//判断收货地址里面是否有数据
			if (this.addressArr.length == 0) {
				this.add = 0;
			} else {
				this.add = 1;
			}
		},
		handleEdit: function handleEdit(v) {
			this.add = 2;
			this.addLcal = v.Address;
			this.addName = v.LinkName;
			this.addPhone = v.LinkMobile;
			this.addDefault = Boolean(v.IsDefault);
			this.province = v.Province; //省级
			this.provinceid = v.ProvinceId;
			this.city = v.City; //市级
			this.cityid = v.CityId;
			this.area = v.Area; //区级
			this.areaid = v.AreaId;
			this.street = v.Street; //街道
			this.streetid = v.StreetId;
		},
		handleSetDefault: function handleSetDefault(v) {
			var _this = this;
			v.IsDefault = 1;
			wx.request({
				url: "http://192.168.2.38:8085/api/user/PostResAddress", //提交收货地址
				header: {
					'content-type': 'application/json' // 默认值
				},
				method: "POST",
				data: v,
				success: function success(res) {
					if (res.data == 1) {
						_this.add = 1;
						// 获取用户收货地址
						wx.request({
							url: "http://192.168.2.38:8085/api/user/GetResAddress?uid=" + _this.dataInfo.Id,
							header: {
								'content-type': 'application/json' // 默认值
							},
							method: 'GET',
							success: function success(res) {
								_this.addressArr = JSON.parse(res.data);
								if (_this.addressArr != "") {
									_this.add = 1;
								} else {
									_this.add = 0;
								}
							}
						});
					}
				}
			});
		},
		deleteAddress: function deleteAddress(v, i) {
			var _this = this;
			wx.request({
				url: "http://192.168.2.38:8085/api/user/DelRecAddress?uid=" + v.Uid + "&id=" + v.Id, //删除收货地址
				header: {
					'content-type': 'application/json' // 默认值
				},
				method: "POST",
				success: function success(res) {
					if (res.data == 1) {
						_this.addressArr.splice(i, 1);
					}
				}
			});
		},
		handleSubmit: function handleSubmit() {
			var _this = this;
			var defaultA = 0;
			if (this.addDefault == false) {
				defaultA = 0;
			} else if (this.addDefault == true) {
				defaultA = 1;
			}
			//判断当前用户是不是登录状态
			if (this.dataInfo.Id) {
				wx.request({
					url: "http://192.168.2.38:8085/api/user/PostResAddress", //提交收货地址
					header: {
						'content-type': 'application/json' // 默认值
					},
					method: "POST",
					data: {
						Uid: _this.dataInfo.Id,
						UserType: 1,
						Province: _this.province,
						ProvinceId: _this.provinceid,
						City: _this.city,
						CityId: _this.cityid,
						Area: _this.area,
						AreaId: _this.areaid,
						Street: _this.street,
						StreetId: _this.streetid,
						Address: _this.addLcal,
						LinkMobile: _this.addPhone,
						LinkName: _this.addName,
						ZipCode: 1,
						IsDefault: defaultA
					},
					success: function success(res) {
						if (res.data == 1) {
							_this.add = 1;
							// 获取用户收货地址
							wx.request({
								url: "http://192.168.2.38:8085/api/user/GetResAddress?uid=" + _this.dataInfo.Id,
								header: {
									'content-type': 'application/json' // 默认值
								},
								method: 'GET',
								success: function success(res) {
									_this.addressArr = JSON.parse(res.data);
									if (_this.addressArr != "") {
										_this.add = 1;
									} else {
										_this.add = 0;
									}
								}
							});
						}
					}
				});
			}
		},
		handleAddress: function handleAddress() {
			this.add = 2;
			var _this = this;
			//初始化地区
			//第一级
			this.getAddressInfo(0).then(function (data) {
				_this.cityArr = data;
			});
			//第二级
			this.getAddressInfo(110000).then(function (data) {
				_this.cityS = data;
			});
			//第三级
			this.getAddressInfo(110100).then(function (data) {
				_this.areaS = data;
			});
			//第四级
			this.getAddressInfo(110101).then(function (data) {
				_this.streetS = data;
			});
		},
		getAddressInfo: function getAddressInfo(num) {
			var p = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
				//做一些异步操作
				wx.request({
					url: "http://192.168.2.38:8085/api/user/GetResAddress?areaId=" + num,
					header: {
						'content-type': 'application/json' // 默认值
					},
					method: 'GET',
					success: function success(res) {
						resolve(res.data);
					}
				});
			});
			return p;
		},
		handleChangeProvince: function handleChangeProvince(v) {
			console.log(v);
			var _this = this;
			this.provinceid = v;
			var prName = this.cityArr.filter(function (item) {
				return item.AreaId == v;
			});
			this.province = prName[0].AreaName;
			wx.request({
				url: "http://192.168.2.38:8085/api/user/GetResAddress?areaId=" + v,
				header: {
					'content-type': 'application/json' // 默认值
				},
				method: 'GET',
				success: function success(res) {
					_this.cityS = res.data;
					_this.city = res.data[0].AreaName;
					_this.cityid = res.data[0].AreaId;
					wx.request({
						url: "http://192.168.2.38:8085/api/user/GetResAddress?areaId=" + _this.cityid,
						header: {
							'content-type': 'application/json' // 默认值
						},
						method: 'GET',
						success: function success(res) {
							_this.areaS = res.data;
							_this.area = res.data[0].AreaName;
							_this.areaid = res.data[0].AreaId;
							wx.request({
								url: "http://192.168.2.38:8085/api/user/GetResAddress?areaId=" + _this.areaid,
								header: {
									'content-type': 'application/json' // 默认值
								},
								method: 'GET',
								success: function success(res) {
									_this.streetS = res.data;
									_this.street = res.data[0].AreaName;
									_this.streetid = res.data[0].AreaId;
								}
							});
						}
					});
				}
			});
		},
		handleChangeCity: function handleChangeCity(v) {
			var _this = this;
			this.cityid = v;
			var prName = this.cityS.filter(function (item) {
				return item.AreaId == v;
			});
			this.city = prName[0].AreaName;
			wx.request({
				url: "http://192.168.2.38:8085/api/user/GetResAddress?areaId=" + v,
				header: {
					'content-type': 'application/json' // 默认值
				},
				method: 'GET',
				success: function success(res) {
					_this.areaS = res.data;
					_this.area = res.data[0].AreaName;
					_this.areaid = res.data[0].AreaId;
					wx.request({
						url: "http://192.168.2.38:8085/api/user/GetResAddress?areaId=" + _this.areaid,
						header: {
							'content-type': 'application/json' // 默认值
						},
						method: 'GET',
						success: function success(res) {
							_this.streetS = res.data;
							_this.street = res.data[0].AreaName;
							_this.streetid = res.data[0].AreaId;
						}
					});
				}
			});
		},
		handleChangeArea: function handleChangeArea(v) {
			var _this = this;
			this.areaid = v;
			var prName = this.areaS.filter(function (item) {
				return item.AreaId == v;
			});
			this.area = prName[0].AreaName;
			wx.request({
				url: "http://192.168.2.38:8085/api/user/GetResAddress?areaId=" + v,
				header: {
					'content-type': 'application/json' // 默认值
				},
				method: 'GET',
				success: function success(res) {
					_this.streetS = res.data;
					_this.street = res.data[0].AreaName;
					_this.streetid = res.data[0].AreaId;
				}
			});
		},
		handleChangeStreet: function handleChangeStreet(v) {
			var _this2 = this;

			this.streetid = v;
			this.street = this.streetS.filter(function (item) {
				return item.AreaId == _this2.streetid;
			})[0].AreaName;
		}
	},
	mounted: function mounted() {
		var _this = this;
		//页面跳转进来后统一恢复显示状态
		this.add = this.$mp.query.add;
		//通过缓存获取用户信息
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
						if (_this.addressArr != "") {
							_this.add = 1;
						} else {
							_this.add = 0;
						}
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
	}
});

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [(_vm.add == 0) ? _c('p', {
    staticClass: "no-address"
  }, [_vm._v("暂无收货地址")]) : _vm._e(), _vm._v(" "), (_vm.add == 1) ? _c('div', {
    staticClass: "address-list"
  }, _vm._l((_vm.addressArr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "address-item"
    }, [_c('div', [_c('p', [_c('span', [_vm._v(_vm._s(item.LinkName))]), _c('span', [_vm._v(_vm._s(item.LinkMobile))])]), _vm._v(" "), _c('p', [_vm._v(_vm._s(item.Province) + _vm._s(item.City) + _vm._s(item.Area) + _vm._s(item.Street) + _vm._s(item.Address))]), _vm._v(" "), _c('i', {
      staticClass: "icon_jj",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.deleteAddress(item, index)
        }
      }
    })], 1), _vm._v(" "), _c('div', [_c('span', [_c('label', {
      staticClass: "radio"
    }, [_c('radio', {
      attrs: {
        "value": "r1",
        "color": "#FE223B",
        "checked": item.IsDefault == 1,
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleSetDefault(item)
        }
      }
    }), _vm._v("默认地址\n\t\t\t\t\t\t")], 1)], 1), _vm._v(" "), _c('span', {
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleEdit(item)
        }
      }
    }, [_vm._v("编辑")])])])
  })) : _vm._e(), _vm._v(" "), (_vm.add != 2) ? _c('div', {
    staticClass: "add"
  }, [_c('button', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.handleAddress
    }
  }, [_vm._v("新增收货地址")])], 1) : _vm._e()], 1), _vm._v(" "), (_vm.add == 2) ? _c('div', {
    staticClass: "add-address"
  }, [_c('div', [_c('span', [_vm._v("收货人")]), _vm._v(" "), _c('span', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addName),
      expression: "addName"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入名字",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.addName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addName = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("联系电话")]), _vm._v(" "), _c('span', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addPhone),
      expression: "addPhone"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入电话",
      "eventid": '5'
    },
    domProps: {
      "value": (_vm.addPhone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addPhone = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("所在地区")]), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        _vm.showModel = true
      }
    }
  }, [_vm._v("\n\t\t\t\t" + _vm._s(_vm.province) + " > " + _vm._s(_vm.city) + " > " + _vm._s(_vm.area) + " > " + _vm._s(_vm.street) + "\n\t\t\t")])]), _vm._v(" "), (_vm.showModel) ? _c('div', {
    staticClass: "address-model"
  }, [_c('div', {
    staticClass: "model-top"
  }, [_c('div', {
    staticClass: "left"
  }, [_vm._v(_vm._s(_vm.province) + " > " + _vm._s(_vm.city) + " > " + _vm._s(_vm.area) + " > " + _vm._s(_vm.street))]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('button', {
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.showModel = false
      }
    }
  }, [_vm._v("确定")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "model-cont"
  }, [_c('div', [_c('ul', _vm._l((_vm.cityArr), function(item, index) {
    return _c('li', {
      key: index,
      class: item.AreaId == _vm.provinceid ? 'act' : '',
      attrs: {
        "eventid": '8_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleChangeProvince(item.AreaId)
        }
      }
    }, [_vm._v(_vm._s(item.AreaName))])
  }))], 1), _vm._v(" "), _c('div', [_c('ul', _vm._l((_vm.cityS), function(item, index) {
    return _c('li', {
      key: index,
      class: item.AreaId == _vm.cityid ? 'act' : '',
      attrs: {
        "eventid": '9_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleChangeCity(item.AreaId)
        }
      }
    }, [_vm._v(_vm._s(item.AreaName))])
  }))], 1), _vm._v(" "), _c('div', [_c('ul', _vm._l((_vm.areaS), function(item, index) {
    return _c('li', {
      key: index,
      class: item.AreaId == _vm.areaid ? 'act' : '',
      attrs: {
        "eventid": '10_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleChangeArea(item.AreaId)
        }
      }
    }, [_vm._v(_vm._s(item.AreaName))])
  }))], 1), _vm._v(" "), _c('div', [_c('ul', _vm._l((_vm.streetS), function(item, index) {
    return _c('li', {
      key: index,
      class: item.AreaId == _vm.streetid ? 'act' : '',
      attrs: {
        "eventid": '11_' + index
      },
      on: {
        "click": function($event) {
          _vm.handleChangeStreet(item.AreaId)
        }
      }
    }, [_vm._v(_vm._s(item.AreaName))])
  }))], 1)])]) : _vm._e(), _vm._v(" "), _c('div', [_c('span', [_vm._v("详细地址")]), _vm._v(" "), _c('span', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addLcal),
      expression: "addLcal"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入地址",
      "eventid": '12'
    },
    domProps: {
      "value": (_vm.addLcal)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addLcal = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', [_c('span', [_vm._v("设为默认地址")]), _vm._v(" "), _c('span', [_c('switch', {
    attrs: {
      "checked": _vm.addDefault,
      "color": "#FE223B",
      "eventid": '13'
    },
    on: {
      "change": function($event) {
        _vm.addDefault = !_vm.addDefault
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    attrs: {
      "eventid": '14'
    },
    on: {
      "click": _vm.handleClear
    }
  }, [_vm._v("取消")]), _c('button', {
    attrs: {
      "eventid": '15'
    },
    on: {
      "click": _vm.handleSubmit
    }
  }, [_vm._v("提交")])], 1)]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-107440d0", esExports)
  }
}

/***/ })

},[51]);