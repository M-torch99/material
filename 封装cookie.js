function setCookie(name,val,day) {
	var oDate = new Date();
	//设置过期时间 为day天以后
	oDate.setDate(oDate.getDate() + day);
	document.cookie = "" + name + "=" + val + ";expires" + oDate;
}

//获取cookie
function getCookie(searchName){

	//先获取cookie
	var str = document.cookie;
	//先以分号分割
	var arr1 = str.split("; ");
	//线遍历数组1  再按等号分割
	for(var i = 0 ;i<arr1.length;i++){
		var arr2 = arr1.split("=");
		var name = arr2[0];
		var val = arr2[1];

		if(name == searchName){
			return val;
		}
	}
		return ""	
}

//删除cookie   // 将时间设置成当前时间的值就可以了

// 设置 名字为 name 的cookie的过期时间为 【1天前】
function removeCookie(name) {
	setCookie(name,"",-1);
}