const router = require('koa-router')();
const User = require('../models/users');
const responseCode = require('../common/response');
const tools = require('../common/tools');

router.prefix('/users');

/**
 * @info 后台用户注册
 * @router POST users/register
 * @decs
 * @access
*/
router.post('/register', async ctx => {
  const findResultEmail = await User.find({email: ctx.request.body.email});
  const findResultUserName = await User.find({user_name: ctx.request.body.user_name});
  if (!ctx.request.body.password) {
    ctx.body = new responseCode (402, false, '密码不能为空' , []);
    return false
  }
  if (findResultEmail.length > 0) {
    ctx.body = new responseCode (401, false, '邮箱已被使用' , []);
  } else if (findResultUserName.length > 0) {
    ctx.body = new responseCode (401, false, '用户名已经存在' , []);
  } else  {
    const newUser = new User({
      user_name: ctx.request.body.user_name,
      password: tools.enbcrypt(ctx.request.body.password),
      email: ctx.request.body.email
    });
    await newUser.save().then(user => {
      ctx.body = new responseCode (200, true, '注册成功' , user);
    }).catch(err => {
      ctx.body = new responseCode (409, false, '数据错误' , err);
    });
  }
});
/**
 * @info 后台用户登录
 * @router POST users/login
 * @decs
 * @access
 */
router.post('/login', async ctx => {})

module.exports = router;
