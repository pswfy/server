const Shops = require('../../tableStructure/ShopSchema');
const responseCode = require('../../../common/response');

/**
 * 创建一个公寓
 * @param ctx
 * @returns {Promise<void>}
 */
exports.saveShop = async (ctx) => {
	if (new responseCode().parameterError(ctx.request.body.user_id)) {
		ctx.body = new responseCode (401, false, '叁数错误', []);
		return false
	}
	const shops = new Shops(ctx.request.body);
	await shops.save().then(shop => {
		ctx.body = new responseCode (200, true, '添加成功' , shop);
	}).catch(err => {
		ctx.body = new responseCode (409, false, '数据错误' , err);
	});
}

/**
 * 查看所有公寓
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findShopsAll = async (ctx) => {
  await Shops.find().then(shop => {
    ctx.body = new responseCode (200, true, '查询成功' , shop);
  }).catch(err => {
    ctx.body = new responseCode (401, true, '查询错误' , err);
  })
}