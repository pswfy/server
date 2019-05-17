const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
/*
 *用户表
 *unique======================================>不能重复
 *trim========================================>去除前后空格
 *required====================================>必须
 *unique======================================>不能重复
 *max:1000====================================>数据允许的最大值
 *min:10======================================>数据允许的最小值
 *enum:['created','success','failed'] ========>枚举验证器
 *match:/book/================================>设置一个正则表达式验证器
 *validate:function(decs){return decs.length>10}自定义验证器，规定该字段长度必须大于10
*/
const BillsSchema = new Schema ({
	/********创建时间*********/
	createTime: {type: Date, default: Date.now},

	/***********修改时间******/
	updateTime: {type: Date, default: Date.now},

	/***********权重******/
	weight: {type: Number, default: 0},

	/***********公寓名称******/
	shop_name: {type: String},

	/***********房间号******/
	bill_name: {type: String},

	/***********主图******/
	mas_img: {type: String, required: true},

	/***********点击量******/
	count: {type: Number, default: 1},

	/***********价钱******/
	price: {type: Number},

	/***********价钱范围******/
	price_range: {type: String},

	/***********从属图******/
	min_img: [
		{
			id: mongoose.Schema.Types.ObjectId,
			img: {type: String, required: true},
			title: {type: String, required: true},
			type: {type: Number, default: 1, enum: [1, 2, 3, 4, 5, 6]}
		}
	],
	/***********标记******/
	msg: {type: Array},

	/***********是否有房******/
	not_yes_bolls: {type: Number, default: 1, enum: [1, 2]},

	/***********房间配置******/
	deploy: [
		{title: String, required: true},
		{img: String, required: true},
	]


});

module.exports = Bills = mongoose.model('bills', BillsSchema);