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
const ShopSchema = new Schema ({
	/********创建时间-更新时间*********/
	createTime: {type: Date, default: Date.now},
	updateTime: {type: Date, default: Date.now},

	/***********用户ID******/
	user_id: {type: String, required: true},

	/***********2管理员 1老板******/
	user_level: {type: Number, default: 1, enum: [1, 2]},

	/***********身份证号******/
	id_card: {type: String},

	/***********微信商户号******/
	weixin_no: {type: String},

	/***********支付宝商户号******/
	zhifubao_no: {type: String},

	/***********银行卡号******/
	bank_card: {type: String},

	/***********开户行名称******/
	bank_name: {type: String},

	/***********开户行地址******/
	bank_address: {type: String},

	/***********1对公 2个人账户******/
	bank_type: {type: Number},

	/***********户名******/
	bank_user: {type: String},

	/***********店铺（公寓）名称******/
	shop_name: {type: String},

	/***********楼层******/
	floor_num: {type: Number},

	/***********房间总数******/
	room_count: {type: Number},

	/***********城市******/
	city_id: {type: String},

	/**********县市ID******/
	area_id: {type: String},

	/**********地址******/
	address: {type: String},

	/***********背景图片******/
	bg_img: {type: String},

	/***********logo图片地址******/
	logo_img: {type: String},

	/***********营业执照******/
	cert_img: {type: String},

	/***********环境图片******/
	huanjing_img: {type: String},

	/***********优点标签,******/
	label_info: {type: String},

	/***********店铺介绍 房源介绍******/
	shop_info: {type: String},

	/***********联系人名称******/
	contact_user: {type: String},

	/***********联系人电话******/
	contact_phone: {type: String},

	/***********均价******/
	a_price: {type: String},

	/***********喜欢人数******/
	like_num: {type: Number},

  	/***********描述外景******/
  	describe_list: [{text: String, img_url: String}],

	/***********招租中的房间数******/
	tenanting_count: {type: Number},

	/***********最低价******/
	low_price: {type: Number},

	/***********是否电梯房 1是******/
	is_lift: {type: Number, default: 1, enum: [1, 2]},

	/***********店铺状态： 1正常营业 0 暂停营业 2被删除******/
	status: {type: Number, default: 1, enum: [1, 0, 2]},

	/***********0申请状态  1申请通过 2 审核中 3审核不通过******/
	request_flag: {type: Number, default: 0, enum: [0, 1, 2, 3]},

	/***********是否推荐 1是******/
	sort: {type: Number, default: 0, enum: [0, 1]},

	/***********经度******/
	latitude: {type: String},

	/***********纬度*****/
	longitude: {type: String},

	/***********商圈ID******/
	circleId: {type: Number, default: 0, enum: [0, 1]},

	/***********首页图片1是;0不是******/
	homepage: {type: Number, default: 0, enum: [0, 1]},

	/***********是否设为首页(1。是)*****/
	is_homepage: {type: Number, default: 0, enum:[0, 1]}
}, {versionKey: false, timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}});

module.exports = Shop = mongoose.model('shops', ShopSchema);

// 测试数据
let nav = [
  {
  	user_id: '1993429',
	user_level: 1,
    id_card: '522628199001292011',
    weixin_no: '126383833',
    zhifubao_no: '26273838',
    bank_card: '52424903236',
    bank_name: '建设银行',
    bank_address: '厦门建设银行地址',
    shop_name: '花旗银行公寓',
    floor_num: 8,
    room_count: 80,
    city_id: '福建省',
    area_id: '厦门市',
    address: '福建省',
    bg_img: '厦门市湖里区34号',
    logo_img: '/images/login-1.png',
    cert_img: '/images/login-2.png',
    huanjing_img: '/images/1.jpg,/images/2.jpg,/images/3.jpg,/images/4.jpg,/images/5.jpg',
    label_info: 'BRT,公园,学校,地铁',
    shop_info: '环境优美,安静小区公寓',
    contact_user: '王芳油',
    contact_phone: '18285150052',
    a_price: '1200',
    like_num: 88,
    describe_list: [
      {text: '学校',img_url: '/images/1.jpg'},
      {text: '公园',img_url: '/images/2.jpg'},
      {text: 'BRT',img_url: '/images/3.jpg'},
    ],
    tenanting_count: 20,
    low_price: 888,
    is_lift: 2,
    status: 1,
    request_flag: 1,
    sort: 1,
    latitude: '23.23333',
    longitude: '180.23333',
    circleId: '122',
    homepage: 1,
    is_homepage: 1
  }
]


/*Shop.remove({}, function () {
  Shop.insertMany(nav, (err, data) => {
    console.log(err);
    console.log(data);
  });
});*/
