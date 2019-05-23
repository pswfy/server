const router = require('koa-router')();
const navModel = require('../models/business/systemNav/systemNavModel')
const ShopModel = require('../models/business/shops/ShopModel')
const BillModel = require('../models/business/bills/BillModel')

router.get('/', async (ctx, next) => {
  ctx.body = {info: '接口文档'};
});

/**
 * @info 添加公寓
 * @router POST /register
 */
router.post('/save/shop', ShopModel.saveShop);

/**
 * @info 登记房间
 * @router POST /register
 */
router.post('/save/bill', BillModel.saveBills);

/**
 * @info  查询所以的公寓
 * @router GET /register
 */
router.get('/find/shops/all', ShopModel.findShopsAll);


/**
 * @info  查询所以的房间
 * @router GET /register
 */
router.get('/find/bills/all', BillModel.findBillsAll);

/**
 * @info  查询所以的Nav
 * @router GET /register
 */
router.get('/find/nav/all', navModel.findSystemNavAll);

module.exports = router;
