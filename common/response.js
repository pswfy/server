 class Response {
   constructor(code = 200, status = true, msg = '', data = []){
     this.code = code;
     this.status = status;
     this.msg = msg;
     this.data = data;
     this.msgBool = false
   }

   /**
    * 共有的响应对象
    * @returns {{code: number|*, status: *|number, msg: string|*, data: Array|*}}
    */
   res () {
     return this
   }

	 /**
    * 是否是NaN
		* @param arr
		* @returns {boolean}
		*/
	 // isTypeNaN (...arr) {
		//  let mgs = false;
		//  for (let i = 0; i < arr.length; i++) {
		// 	 if (isNaN(arr[i])) {
		// 		 mgs = true;
		// 		 break;
		// 	 }
		//  }
		//  if (mgs) {
		// 	 msg = false;
		// 	 return true
		//  } else {
		// 	 return false
    //  }
	 // };
	 /**
		* 叁数错误
		* @param arr
		*/
	 parameterError (...arr) {
		 if (!this.msgBool) {
			 for (let i = 0; i < arr.length; i++) {
				 if (!(arr[i]) && (arr[i]) !== 0) {
					 this.msgBool = true;
					 break;
				 }
			 }
		 }
		 if (this.msgBool) {
			 this.msgBool = false;
			 return true
		 } else {
			 return false
     }
	 };
 }

 module.exports = Response;