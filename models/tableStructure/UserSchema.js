const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
/*
 *用户表
 *unique======================================>不能重复
 *trim========================================>去除前后空格
 *required====================================>必须
 *unique======================================>不能重复
 *max:1000====================================>数据允许的最大值
 *min:10======================================>数据允许的最小值
 *enum:['created','success','failed'] ========>枚举验证器
 *match:/book/================================>设置一个正则表达式验证器
 *validate:function(decs){return decs.length>10}自定义验证器，规定该字段长度必须大于10
*/
const UserSchema = new Schema ({
  /********创建时间-更新时间*********/
  createTime: {type: Date, default: Date.now},
  updateTime: {type: Date, default: Date.now},

  /*******openid**********/
  openid: {type: String, trim: true},

  /*******用户昵称**********/
  nickname: {
    type: String,
    validate:function(nickname){
      return nickname.length<20;
  }},
  /*******用户名**********/
  user_name: {
    type: String,
    validate:function(nickname){
      return nickname.length<20;
    }},

  /*******用户密码**********/
  password: {type: String, trim: true},

  /*******用户角色0:普通用户,1:老板,2:公寓管理员,3:admin,4: root**********/
  role: {type: String, default: 0},

  /*******用户邮箱**********/
  email: {
    type: String,
    trim: true,
    match: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
  },

  /*******用户头像**********/
  avatar: {type: String},

  /*******性别**********/
  gender: {type: String, default: '1', enum:['1','2','3']},

  /*******号码**********/
  phone: {type: String, match: /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/},

  /*******登录次数**********/
  count: {type: Number, default: 1},

  /*******上次登录时间**********/
  last_time: {type: String, default: Date.now},

},{versionKey: false, timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}});

module.exports = User = mongoose.model('users', UserSchema);