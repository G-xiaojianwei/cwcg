<template>
	<div>
		
		<div>
			<!-- 无收货地址状态 -->
			<p class="no-address" v-if="add == 0">暂无收货地址</p>
			<!-- 已有收货地址状态 -->
			<div class="address-list" v-if="add == 1">
				<div class="address-item" v-for="(item,index) in addressArr" :key="index">
					<div>
						<p><span>{{item.LinkName}}</span><span>{{item.LinkMobile}}</span></p>
						<p>{{item.Province}}{{item.City}}{{item.Area}}{{item.Street}}{{item.Address}}</p>
						<i class="icon_jj" @click="deleteAddress(item,index)"></i>
					</div>
					<div>
						<span>
							<label class="radio">
							      <radio value="r1" color="#FE223B" :checked="item.IsDefault==1" @click="handleSetDefault(item)" />默认地址
							</label>
						</span>
						<span @click="handleEdit(item)">编辑</span>
					</div>
				</div>
			</div>
			<div class="add" v-if="add != 2">
				<button @click="handleAddress">新增收货地址</button>
			</div>
		</div>
		<!-- 添加收货地址状态 -->
		<div class="add-address" v-if="add == 2">
			<div>
				<span>收货人</span>
				<span>
					<input type="text" placeholder="请输入名字" v-model="addName">
				</span>
			</div>
			<div>
				<span>联系电话</span>
				<span>
					<input type="text" placeholder="请输入电话" v-model="addPhone">
				</span>
			</div>
			<div>
				<span>所在地区</span>
				<span @click="showModel = true">
					{{province}} > {{city}} > {{area}} > {{street}}
				</span>
			</div>
			<div class="address-model" v-if="showModel">
				<div class="model-top">
					<div class="left">{{province}} > {{city}} > {{area}} > {{street}}</div>
					<div class="right">
						<button @click="showModel = false">确定</button>
					</div>
				</div>
				<div class="model-cont" >
					<div>
						<ul>
							<li :class="item.AreaId == provinceid ?'act' :'' " v-for="(item,index) in cityArr" @click="handleChangeProvince(item.AreaId)" :key="index">{{item.AreaName}}</li>
						</ul>
					</div>
					<div>
						<ul>
							<li :class="item.AreaId == cityid ?'act' :'' " v-for="(item,index) in cityS" :key="index" @click="handleChangeCity(item.AreaId)">{{item.AreaName}}</li>
						</ul>
					</div>
					<div>
						<ul>
							<li :class="item.AreaId == areaid ?'act' :'' " v-for="(item,index) in areaS" :key="index" @click="handleChangeArea(item.AreaId)">{{item.AreaName}}</li>
						</ul>
					</div>
					<div>
						<ul>
							<li :class="item.AreaId == streetid ?'act' :'' " v-for="(item,index) in streetS" :key="index" @click="handleChangeStreet(item.AreaId)">{{item.AreaName}}</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<span>详细地址</span>
				<span>
					<input type="text" placeholder="请输入地址" v-model="addLcal">
				</span>
			</div>
			<div>
				<span>设为默认地址</span>
				<span>
					<switch :checked="addDefault" @change="addDefault=!addDefault" color="#FE223B" />
				</span>
			</div>
			<div class="btn">
				<button @click="handleClear">取消</button><button @click="handleSubmit">提交</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
		  return{
			add:0,
			addLcal:"",
			addName:"",
			addPhone:"",
			addDefault:false,
			province:"北京",//省级
			provinceid:110000,
			city:"北京",//市级
			cityid:110100,
			area:"东城区",//区级
			areaid:110101,
			street:"东华门街道",//街道
			streetid:110101001,
			cityArr:[],//所有地区数据
			cityS:{},//市级地区
			areaS:{},//区级地区
			streetS:{},//街道
			showModel:false,
			dataInfo:{},
			addressArr:[]//所有已有的收货地址
			
		  }
		},
		methods:{
			handleClear(){
				//判断收货地址里面是否有数据
				if(this.addressArr.length==0){
					this.add=0;
				}else{
					this.add=1;
				}
			},
			handleEdit(v){
				this.add=2;
				this.addLcal=v.Address;
				this.addName=v.LinkName;
				this.addPhone=v.LinkMobile;
				this.addDefault=Boolean(v.IsDefault);
				this.province=v.Province;//省级
				this.provinceid=v.ProvinceId;
				this.city=v.City;//市级
				this.cityid=v.CityId;
				this.area=v.Area;//区级
				this.areaid=v.AreaId;
				this.street=v.Street;//街道
				this.streetid=v.StreetId;
			},
			handleSetDefault(v){
				let  _this =this;
				v.IsDefault=1;
				wx.request({
				  url: `http://192.168.2.38:8085/api/user/PostResAddress`, //提交收货地址
				  header: {
					'content-type': 'application/json' // 默认值
				  },
				  method:"POST",
				  data:v,
				  success (res) {
				   if(res.data==1){
					   _this.add=1;
					   // 获取用户收货地址
					   wx.request({
					      url: `http://192.168.2.38:8085/api/user/GetResAddress?uid=${_this.dataInfo.Id}`, 
					      header: {
					        'content-type': 'application/json' // 默认值
					      },
					      method:'GET',
					      success (res) {
					        _this.addressArr=JSON.parse(res.data);
					   	 if( _this.addressArr != ""){
					   		 _this.add=1;
					   	 }else{
					   		 _this.add=0;
					   	 }
					      }
					    })
				   }
				  }
				})
			},
			deleteAddress(v,i){
				let _this = this;
				wx.request({
				  url: `http://192.168.2.38:8085/api/user/DelRecAddress?uid=${v.Uid}&id=${v.Id}`, //删除收货地址
				  header: {
					'content-type': 'application/json' // 默认值
				  },
				  method:"POST",
				  success (res) {
				   if(res.data==1){
					   _this.addressArr.splice(i,1);
				   }
				  }
				})
			},
			handleSubmit(){
				let _this = this;
				let defaultA=0;
				if(this.addDefault==false){
					defaultA=0;
				}else if(this.addDefault==true){
					defaultA=1;
				}
				//判断当前用户是不是登录状态
				if(this.dataInfo.Id){
					wx.request({
					  url: `http://192.168.2.38:8085/api/user/PostResAddress`, //提交收货地址
					  header: {
						'content-type': 'application/json' // 默认值
					  },
					  method:"POST",
					  data:{
						  Uid:_this.dataInfo.Id,
						  UserType:1,
						  Province:_this.province,
						  ProvinceId:_this.provinceid,
						  City:_this.city,
						  CityId:_this.cityid,
						  Area:_this.area,
						  AreaId:_this.areaid,
						  Street:_this.street,
						  StreetId:_this.streetid,
						  Address:_this.addLcal,
						  LinkMobile:_this.addPhone,
						  LinkName:_this.addName,
						  ZipCode:1,
						  IsDefault:defaultA
					  },
					  success (res) {
					   if(res.data==1){
						   _this.add=1;
						   // 获取用户收货地址
						   wx.request({
						      url: `http://192.168.2.38:8085/api/user/GetResAddress?uid=${_this.dataInfo.Id}`, 
						      header: {
						        'content-type': 'application/json' // 默认值
						      },
						      method:'GET',
						      success (res) {
						        _this.addressArr=JSON.parse(res.data);
						   	 if( _this.addressArr != ""){
						   		 _this.add=1;
						   	 }else{
						   		 _this.add=0;
						   	 }
						      }
						    })
					   }
					  }
					})
				}
				
			},
		  handleAddress(){
			  this.add=2;
			  let _this=this;
			  //初始化地区
				//第一级
				this.getAddressInfo(0).then(function(data){
					_this.cityArr=data;
				})
				 //第二级
				this.getAddressInfo(110000).then(function(data){
					_this.cityS=data;
				})
				//第三级
				this.getAddressInfo(110100).then(function(data){
					_this.areaS=data;
				})
				//第四级
				this.getAddressInfo(110101).then(function(data){
					_this.streetS=data;
				})
		
		  },
		  getAddressInfo(num){
		    var p = new Promise(function(resolve, reject){
		            //做一些异步操作
		            wx.request({
		  			 url: `http://192.168.2.38:8085/api/user/GetResAddress?areaId=${num}`, 
		  			 header: {
		  			   'content-type': 'application/json' // 默认值
		  			 },
		  			 method:'GET',
		  			 success (res) {
		  				resolve(res.data);
		  			 }
		            })
		        });
		        return p;
		  },
		  handleChangeProvince(v){
			  console.log(v)
			  let _this=this;
			  this.provinceid=v;
			  let prName=this.cityArr.filter(item=>{
			  		return item.AreaId==v;
			  })
			  this.province=prName[0].AreaName;
			  wx.request({
			   url: `http://192.168.2.38:8085/api/user/GetResAddress?areaId=${v}`, 
			   header: {
			     'content-type': 'application/json' // 默认值
			   },
			   method:'GET',
			   success (res) {
			  		_this.cityS=res.data;
					_this.city=res.data[0].AreaName;
					_this.cityid=res.data[0].AreaId;
					wx.request({
					 url: `http://192.168.2.38:8085/api/user/GetResAddress?areaId=${_this.cityid}`, 
					 header: {
					   'content-type': 'application/json' // 默认值
					 },
					 method:'GET',
					 success (res) {
							_this.areaS=res.data;
							_this.area=res.data[0].AreaName;
							_this.areaid=res.data[0].AreaId;
							wx.request({
							 url: `http://192.168.2.38:8085/api/user/GetResAddress?areaId=${_this.areaid}`, 
							 header: {
							   'content-type': 'application/json' // 默认值
							 },
							 method:'GET',
							 success (res) {
									_this.streetS=res.data;
									_this.street=res.data[0].AreaName;
									_this.streetid=res.data[0].AreaId;
							 }
							})
					 }
					})
			   }
			  })
			  
		  },
		  handleChangeCity(v){
			 let _this=this;
			 this.cityid=v;
			 let prName=this.cityS.filter(item=>{
			 		return item.AreaId==v;
			 })
			 this.city=prName[0].AreaName;
			 wx.request({
			  url: `http://192.168.2.38:8085/api/user/GetResAddress?areaId=${v}`, 
			  header: {
			    'content-type': 'application/json' // 默认值
			  },
			  method:'GET',
			  success (res) {
			 		_this.areaS=res.data;
			 		_this.area=res.data[0].AreaName;
			 		_this.areaid=res.data[0].AreaId;
			 		wx.request({
			 		 url: `http://192.168.2.38:8085/api/user/GetResAddress?areaId=${_this.areaid}`, 
			 		 header: {
			 		   'content-type': 'application/json' // 默认值
			 		 },
			 		 method:'GET',
			 		 success (res) {
			 				_this.streetS=res.data;
			 				_this.street=res.data[0].AreaName;
			 				_this.streetid=res.data[0].AreaId;
			 		 }
			 		})
			  }
			 })
		  },
		  handleChangeArea(v){
			  let _this=this;
			  this.areaid=v;
			  let prName=this.areaS.filter(item=>{
			  		return item.AreaId==v;
			  })
			  this.area=prName[0].AreaName;
			  wx.request({
			   url: `http://192.168.2.38:8085/api/user/GetResAddress?areaId=${v}`, 
			   header: {
			     'content-type': 'application/json' // 默认值
			   },
			   method:'GET',
			   success (res) {
			  		_this.streetS=res.data;
			  		_this.street=res.data[0].AreaName;
			  		_this.streetid=res.data[0].AreaId;
			   }
			  })
		  },
		  handleChangeStreet(v){
			  this.streetid=v;
			  this.street=(this.streetS.filter(item=>{
			  	return item.AreaId==this.streetid;
			  }))[0].AreaName;
		  }
		},
		mounted() {
			let _this=this;
			//页面跳转进来后统一恢复显示状态
			this.add=this.$mp.query.add;
			//通过缓存获取用户信息
			wx.getStorage({
			  key: 'dataInfo',
			  success (res) {
			    _this.dataInfo=JSON.parse(res.data);
				// 获取用户收货地址
				wx.request({
				   url: `http://192.168.2.38:8085/api/user/GetResAddress?uid=${_this.dataInfo.Id}`, 
				   header: {
				     'content-type': 'application/json' // 默认值
				   },
				   method:'GET',
				   success (res) {
				     _this.addressArr=JSON.parse(res.data);
					 if( _this.addressArr != ""){
						 _this.add=1;
					 }else{
						 _this.add=0;
					 }
				   }
				 })
				 
			  },
			fail:function(res){
				wx.reLaunch({
				  url: `/pages/my/main`
				})
				return;
			}
			})
			
			 
		}
	}
</script>

<style>
	.no-address{
		text-align: center;
		padding: 40rpx;
	}
	.add{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: 40rpx 0;
		background-color: #fff;
	}
	button{
		width: 714rpx;
		height: 86rpx;
		font-size: 28rpx;
		line-height: 86rpx;
		background-color: #FE223B;
		color: #fff;
	}
	.address-item{
		font-size: 28rpx;
	}
	.address-item div:nth-child(1){
		position: relative;
		margin:0 20rpx;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #eee;
		text-indent: 1.5em;
	}
	.address-item div:nth-child(1) p{
		margin-top: 10rpx;
	}
		.address-item div:nth-child(1) p span:nth-child(1){
			margin-right: 30rpx;
		}
	.address-item div:nth-child(1) p:nth-child(2){
		font-size: 24rpx;
	}
	.address-item div:nth-child(2){
		border-bottom: 16rpx solid rgba(0,0,0,.05);
		padding: 20rpx 40rpx 10rpx;
		box-sizing: border-box;
	}
	.address-item div:nth-child(2) span:nth-child(2){
		float: right;
	}
	.icon_jj{
		position: absolute;
		right: 20rpx;
		top: 20rpx;
		width: 40rpx;
		height: 40rpx;
		border-radius: 50rpx;
		background:url(../../../static/img/gwc11_03.png);
		background-size: 100% 100%;
	}
	radio{
		transform:scale(0.7) translateY(-6rpx);
	}
	.add-address{
		padding-top: 20rpx;
	}
	.add-address div{
		display: flex;
		align-items: center;
		justify-content: space-around;
		font-size: 28rpx;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #eee;
	}
	.add-address div span:nth-child(1){
		flex: 3;
		text-align: right;
		padding-right: 20rpx;
	}
	.add-address div span:nth-child(2){
		flex: 7;
	}
	switch{
		transform: scale(.7);
		float: right;
	}
	.btn{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 40rpx;
	}
	.btn button{
		margin: 0 10rpx;
	}
	.btn button:nth-child(1){
		background-color: #F9CCCF;
	}
	.address-model{
		z-index: 1000;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.5);
		padding: 0 !important;
	}
	.model-cont{
		border-top: 1rpx solid #eee;
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50%;
		background: #fff;
		padding: 0;
	}
	.model-cont>div{
		padding: 0;
		height: 100%;
		overflow-y: scroll;
		border: none;
	}
	.model-cont>div:nth-child(1){
		width: 20%;
	}
	.model-cont>div:nth-child(2){
		width: 20%;
	}
	.model-cont>div:nth-child(3){
		width: 30%;
	}
	.model-cont>div:nth-child(41){
		width: 30%;
	}
	.model-cont>div ul{
		height: 100%;
	}
	.model-cont>div ul li{
		text-align: center;
		font-size: 24rpx;
		padding: 10rpx 5rpx;
	}
	.model-cont>div ul li.act{
		color: #FE223B;
		background: #eee;
		border-radius: 10rpx;
	}
	.model-top{
		position: absolute;
		left: 0;
		bottom: 52%;
		width: 100%;
		height: 10%;
		background: #fff;
		font-size: 24rpx;
		box-sizing: border-box;
		text-align: left;
		border: none;
		padding: 0 10rpx !important;
	}
	.left{
		width: 85%;
		display: block;
		text-align: left;
		border: none !important;
		font-size-adjust: 24rpx;
	}
	.right{
		width: 15%;
		text-align: right;
		border: none !important;
	}
	.right button{
		display: inline-block;
		vertical-align: middle;
		width: 150rpx;
		height: 40rpx;
		text-align: center;
		line-height: 40rpx;
		font-size: 24rpx;
		border: none !important;
		padding:0 !important;
	}
	.right button:nth-child(2){
		background: #eee;
		color: #000;		
		margin-left: 20rpx;
	}
</style>
