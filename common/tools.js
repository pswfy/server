const bcrypt = require('bcryptjs');
const tools = {
  // 加密
  enbcrypt (password) {
    let salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
};

module.exports = tools;