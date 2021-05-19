<template>
	<div>
		<!-- 产品信息 -->
		<div class="info">
			<div><img src="../../../dist/wx/static/img/kdd_03.png" alt=""></div>
			<div>
				<p>肖氏照明 客厅/卧室/书房/餐厅 翰能 现代水晶灯</p>
				<p>水晶灯 6头</p>
				<p><span>¥：0.01</span><span>x1</span></p>
			</div>
		</div>
		<!-- 申请类型 -->
		<div class="type">
			<div><span>申请类型</span> <i class="icon-sl"></i></div>
			<div class="type-model">
				<div class="model-cont">
					<div class="model-title">申请参数</div>
					<div class="model-tag">
						<span class="act">维修</span>
						<span>退换</span>
					</div>
					<div class="modle-info">
						<div class="info-item">
							<div>提交数量：</div>
							<div><em>-</em><input type="text"><em>+</em><span>(您最多可以输入数量为1)</span></div>
						</div>
						<div class="info-item reason-i">
							<div>提交原因：</div>
							<div>
								<picker @change="bindPickerChange" :value="index" :range="array">
									<view class="picker">
									  {{array[index]}}
									</view>
								</picker>
								<i class="icon-xljt"></i>
							</div>
						</div>
						<div class="info-item phone">
							<div>交易单号：</div>
							<div><input type="text" /></div>
						</div>
						<div class="info-item phone">
							<div>联系电话：</div>
							<div><input type="text" /></div>
						</div>
						<div class="info-item phone">
							<div>物流单号：</div>
							<div><input type="text" /></div>
						</div>
						<div class="info-item reason-i">
							<div>选择物流：</div>
							<div>
								<picker @change="bindLogisticsChange" :value="index1" :range="array1">
									<view class="picker">
									  {{array1[index1]}}
									</view>
								</picker>
								<i class="icon-xljt"></i>
							</div>
						</div>
					</div>
					<button class="btn2">完成</button>
				</div>
			</div>
		</div>
		<!-- 申请原因 -->
		<div class="reason">
			<div class="title">
				申请原因<span>(请您描述问题并上传收到商品照片)</span>
			</div>
			<div class="cont">
				<textarea placeholder="请输入问题描述"></textarea>
				<div>
					<div class="file-img"><img src="../../../static/img/add.png" alt=""></div>
					<div class="file-img"><img src="../../../static/img/add.png" alt=""></div>
					<div class="file-img"><img src="../../../static/img/add.png" alt=""></div>
					<div class="file-img"><img src="../../../static/img/add.png" alt=""></div>
				</div>
			</div>
			<button class="btn">提交申请</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				array: ['损坏', '购买需求有变动', '与看到商品有差异', '其他原因'],
				index:0,
				array1: ['选择物流公司', '圆通', '百事', '韵达'],
				index1:0,
			}
		},
		methods:{
			bindPickerChange: function(e) {
			     this.index=e.mp.detail.value;
			 },
			bindLogisticsChange: function(e) {
			   this.index1=e.mp.detail.value;
			}
		}
	}
</script>

<style>
.info{
	display: flex;
	align-items: center;
	justify-content: center;
	padding:20rpx 40rpx ;
	background: #fff;
	border-bottom: 20rpx solid #F1F2F6;
	border-top: 20rpx solid #F1F2F6;
}
.info div:nth-child(1){
	width: 30%;
	padding-right: 20rpx;
}
.info div:nth-child(1) img{
	width: 100%;
	height:170rpx;
	vertical-align: top;
}
.info div:nth-child(2){
	width: 70%;
}
.info div:nth-child(2) p:nth-child(1){
	font-weight: bold;
	font-size: 28rpx;
}
.info div:nth-child(2) p:nth-child(2){
	font-size: 26rpx;
	padding: 10rpx 0;
	color: #666;
}
.info div:nth-child(2) p:nth-child(3){
	font-size: 24rpx;
	color: #F43530;
}
.info div:nth-child(2) p:nth-child(3) span:nth-child(2){
	float: right;
	color: #000;
}
.type{
	padding: 20rpx 40rpx;
	border-bottom: 20rpx solid #F1F2F6;
}
.type span{
	font-weight: bold;
	font-size: 30rpx;
}
.icon-sl{
	float: right;
	display: block;
	width: 40rpx;
	height: 40rpx;
	background: url(../../../dist/wx/static/img/sl.png);
	background-size: 100% 100%;
}
.reason{
	padding: 20rpx 40rpx;
}
.reason .title{
	font-weight: bold;
	font-size: 30rpx;
}
.reason .title span{
	font-weight: 100;
	font-size: 24rpx;
	color: #666;
	line-height: 30rpx;
	margin-left: 20rpx;
}
.cont textarea{
	margin-top: 40rpx;
	padding: 20rpx;
	box-sizing: border-box;
	font-size: 26rpx;
	width: 100%;
	height: 300rpx;
	border: 1rpx solid #F1F2F6;
}
.file-img{
	display: inline-block;
	vertical-align: middle;
	margin-right: 18rpx;
	position: relative;
	margin-top: 20rpx;
	width: 150rpx;
	height: 200rpx;
	border: 1rpx solid #F1F2F6;
	
}
.file-img:last-child{margin-right: 0;}
.file-img img{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	width: 50%;
	height: 40%;
}
.btn{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80rpx;
	background: #F43530;
	color: #fff;
	font-size: 30rpx;
	border-radius:0 !important;
}
.btn2{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 80rpx;
	background: #F43530;
	color: #fff;
	font-size: 30rpx;
	border-radius:0 !important;
}
.type-model{
	z-index: 10;
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	top: 0;
	background: rgba(0,0,0,.7);
}
.type-model .model-cont{
	width: 100%;
	height: 90%;
	position: absolute;
	left: 0;
	bottom: 0;
	background: #fff;
	padding: 40rpx;
	box-sizing: border-box;
}
.model-title{
	text-align: center;
	padding: 30rpx 0;
	font-weight: bold;
}
.model-tag{
	margin-top: 20rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1rpx solid #FE223B;
}
.model-tag span{
	flex: 1;
	text-align: center;
	padding: 20rpx;
}
.model-tag span.act{
	color: #fff;
	background:#FE223B;
}
.modle-info{
	padding: 40rpx 0;
}
.modle-info .info-item{
	display: flex;
	padding: 20rpx 0;
	font-size: 28rpx;
	line-height: 46rpx;
}
.modle-info .info-item div:nth-child(1){
	flex: 2.5;
}
.modle-info .info-item div:nth-child(2){
	position: relative;
	flex: 7.5;
}
.modle-info .info-item em{
	display: inline-block;
	width: 46rpx;
	height: 46rpx;
	line-height: 46rpx;
	border: 1rpx solid #666;
	text-align: center;
}
.modle-info .info-item:nth-child(1) input{
	display: inline-block;
	vertical-align: top;
	padding: 0;
	width: 100rpx;
	height: 40rpx;
	border: 1rpx solid #666;
	border-left: none;
	border-right: none;
	text-align: center;
}
.modle-info .info-item:nth-child(1) span{
	font-size: 24rpx;
	font-weight: normal;
	margin-left: 10rpx;
}
.reason-i div:nth-child(2){
	border: 1rpx solid #666;
	padding: 0 20rpx;
	box-sizing: border-box;
}
.icon-xljt{
	position:absolute;
	right: 15rpx;
	top: 8rpx;
	display: inline-block;
	vertical-align: middle;
	width: 30rpx;
	height: 30rpx;
	background: url(../../../dist/wx/static/img/xljt.png);
	background-size: 100% 100%;
}
.phone div:nth-child(2){
	border: 1rpx solid #666;
	padding: 0 20rpx;
	box-sizing: border-box;
}
</style>
