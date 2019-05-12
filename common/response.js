 class Response {
   constructor(code = 200, status = true, msg = '', data = []){
     this.code = code;
     this.status = status;
     this.msg = msg;
     this.data = data;
   }

   /**
    * 共有的响应对象
    * @returns {{code: number|*, status: *|number, msg: string|*, data: Array|*}}
    */
   res () {
     return this
   }
 }

 module.exports = Response;