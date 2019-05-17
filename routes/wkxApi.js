const router = require('koa-router')();
const db = require('./mysql/db');

router.prefix('/wkxApi');

router.get('/exit/bills/list', async (ctx, next) => {
	ctx.body = {info: '接口文档'};
});

module.exports = router;