const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  ctx.body = {info: '接口文档'};
});

module.exports = router;
