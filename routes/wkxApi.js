const router = require('koa-router')();
const db = require('../mysql/db');
const responseCode = require('../common/response');

router.prefix('/wkxApi');

router.get('/exit/bills/list', async (ctx, next) => {
	let request =ctx.request;
	let req_query = request.query;
	let user_id = '17356';
	let start_time = req_query.start_time;
	let end_time = req_query.end_time;
	ctx.body = 111

});

module.exports = router;