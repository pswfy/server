const Bills = require('../../tableStructure/BillsSchema');
const responseCode = require('../../../common/response');

/**
 * 登记一个房间
 * @param ctx
 * @returns {Promise<void>}
 */
exports.saveBills = async (ctx) => {
	if (new responseCode().parameterError(ctx.request.body.shop_id)) {
		ctx.body = new responseCode (401, false, '叁数错误', []);
		return false
	}
	const bills = new Bills(ctx.request.body);
	await bills.save().then(bill => {
		ctx.body = new responseCode (200, true, '添加成功' , bill);
	}).catch(err => {
		ctx.body = new responseCode (409, false, '数据错误' , err);
	});
}
/**
 * 查看所有房间
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findBillsAll = async (ctx) => {
  	await Bills.find().then(bill => {
      ctx.body = new responseCode (200, true, '查询成功' , bill);
	}).catch(err => {
      ctx.body = new responseCode (401, true, '查询错误' , err);
	})
}