const router = require('koa-router')();
const UserModel = require('../models/business/users/UserModel')

router.prefix('/users');

/**
 * @info 后台用户注册
 * @router POST users/register
 * @access 接口是开放的
*/
router.post('/register', UserModel.UserRegister);

/**
 * @route POST users/login
 * @desc 后台用户登录
 * @access 接口是开放的
 */
router.post('/login', UserModel.UserLogin);

/**
 * @router POST users/current
 * @desc 用户信息接口地址 返回用户信息
 * @access 接口是私密的
 */
router.post('/current', UserModel.UserTokenMsg)

module.exports = router;
