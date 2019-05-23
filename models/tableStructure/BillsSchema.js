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
	/********创建时间-更新时间*********/
    createTime: {type: Date, default: Date.now},
    updateTime: {type: Date, default: Date.now},
	/***********权重******/
	weight: {type: Number, default: 0},

	/***********公寓ID******/
	shop_id: {type: String, required: true},

	/***********房间号******/
	bill_name: {type: String},

	/***********主图******/
	mas_img: {type: String},

	/***********点击量******/
	count: {type: Number, default: 1},

	/***********价钱******/
	price: {type: Number},

	/***********价钱范围******/
	price_range: {type: String},

	/***********从属图******/
	min_img: [
		{
			img: {type: String},
			title: {type: String},
			type: {type: Number, default: 1, enum: [1, 2, 3, 4, 5, 6]}
		}
	],
	/***********标记******/
	msg: {type: String},

	/***********是否有房******/
	not_yes_bolls: {type: Number, default: 1, enum: [1, 2]},

	/***********房间配置******/
	deploy: [{img: String, title: String},],

	/***********描述******/
	describe: {type: String},

	/*********付款方式********/
	p_method: {type: Number, default:0, enum: [1,2,3,4,5,6,7,8]},

	/***********家具配置******/
	in_configure: [{text: String, min_img: String,  max_img_url: String}],


}, {versionKey: false, timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}});

module.exports = Bills = mongoose.model('bills', BillsSchema);

let nav = [
  {
    weight: 1,
    shop_id: '5ce6a7a1591d56141c8924ff',
    bill_name: 'w101',
    mas_img: '/images/1.jpg',
    count: 108,
    price: 1200,
    price_range: '1200-1700',
    min_img: [
	  {
        img: '/images/1.jpg',
        title: '客厅',
        type: 1
	  },
      {
        img: '/images/2.jpg',
        title: '房间',
        type: 2
      },
      {
        img: '/images/3.jpg',
        title: '卫生间',
        type: 3
      },
      {
        img: '/images/4.jpg',
        title: '阳台',
        type: 4
      },
      {
        img: '/images/5.jpg',
        title: '房间',
        type: 5
      },
	],
    msg: '空间大,阳台',
    not_yes_bolls: 1,
    deploy: [
    	{msg: '/images/1.jpg', title: '空调'},
	  	{msg: '/images/2.jpg', title: '冰箱'},
	  	{msg: '/images/3.jpg', title: '洗衣机'}
	  ],
    describe: '房间描述',
    p_method: 1,
    in_configure: [
	  {
	  	text: '冰箱',
        min_img: '/images/1.jpg',
        max_img_url: '/images/2.jpg'
	  },
      {
        text: '电脑',
        min_img: '/images/3.jpg',
        max_img_url: '/images/4.jpg'
      },
      {
        text: '沙发',
        min_img: '/images/4.jpg',
        max_img_url: '/images/5.jpg'
      }
	]
  }
]

// Bills.remove({}, function () {
//   Bills.insertMany(nav, (err, data) => {
//     console.log(err);
//     console.log(data);
//   });
// })
