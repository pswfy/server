const User = require('./UserSchema');
const responseCode = require('../../common/response');
const bcrypt = require('bcryptjs');
const tools = require('../../common/tools');
const jwk = require('jsonwebtoken');
const keys = require('../../common/keys');


/**
 * @info 后台用户注册
 */
exports.UserRegister = async (ctx) => {
  const findResultEmail = await User.find({email: ctx.request.body.email});
  if (!ctx.request.body.password) {
    ctx.body = new responseCode (402, false, '密码不能为空' , []);
    return false
  }
  if (findResultEmail.length > 0) {
    ctx.body = new responseCode (401, false, '邮箱已被使用' , []);
  }else  {
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
};
/**
 * @info 后台用户登录
 */
exports.UserLogin = async (ctx) => {
  const findEmail = await User.find({email: ctx.request.body.email});
  const user = findEmail[0];
  if (findEmail.length === 0) {
    ctx.body = new responseCode (402, false, '用户不存在' , []);
  } else {
    const result = await bcrypt.compareSync(ctx.request.body.password, user.password);
    if (result) {
      // token
      const payLoad = {
        id: user.id,
        name: user.name,
        avatar: user.avatar

      };
      const token = jwk.sign(payLoad, keys.secretKey, {expiresIn: 3600});
      ctx.body = new responseCode (200, true, '登录成功' , {token: "Bearer " + token});
    } else {
      ctx.body = new responseCode (402, false, '密码错误' , []);
    }
  }
};

