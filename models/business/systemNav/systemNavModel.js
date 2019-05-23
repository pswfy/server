const Nav = require('../../tableStructure/systemNavSchema');
const responseCode = require('../../../common/response');

/**
 * 查看所有目录
 * @param ctx
 * @returns {Promise<void>}
 */
exports.findSystemNavAll = async (ctx) => {
  await Nav.find().then(nav => {
    ctx.body = new responseCode (200, true, '查询成功' , nav);
  }).catch(err => {
    ctx.body = new responseCode (401, true, '查询错误' , err);
  })
}