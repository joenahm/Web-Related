function $(method, value){
	var obj;
	if( method == "#" ){
		obj = document.getElementById(value); 
	}else if( method == "." ){
		obj = document.getElementsByClassName(value);
	}else{
		obj = document.getElementsByTagName(value);
	}

	return obj;
}

var status = 0;
$("#","link").onclick = function(){
	if( status%2 == 0 ){
		$("#","linkList").style.display = "block";
	}else{
		$("#","linkList").style.display = "none";
	}

	status++;
}

function formCheck(infoArr){
	var status = true;
	var value;
	for( key in infoArr ){
		if( infoArr[key] == "" ){
			status = false;
			switch( key ){
				case "product":
					value = "订购产品";
				break;
				case "amount":
					value = "订单数量"
				break;
				case "company":
					value = "公司名称";
				break;
				case "linkman":
					value = "公司联系人";
				break;
				case "phone":
					value = "联系电话";
				break;
				case "email":
					value = "电子邮箱地址";
				break;
			}

			alert("请填写"+value);
			break;
		}else if( key == "email"
			&& infoArr[key].indexOf("@") <= 0 ){
			status = false;

			alert("请填写正确的email");
		}
	}

	return status;
}

function showInfo(infoArr){
	var infoStr = "亲爱的客户，您订购的产品为" + 
	infoArr['product'] + 
	",订购数量为" +
	infoArr['amount'] +
	"。您公司" +
	infoArr['company'] +
	"联系人" +
	infoArr['linkman'] +
	"的电话为" +
	infoArr['phone'] +
	",邮箱" +
	infoArr['email'] +
	"。感谢您的订购！";

	$("#","showInfo").style.display = "block";
	$("#","showInfo").innerHTML = infoStr;
}

$("#","submit").onclick = function(){
	var info = {
		"product":$("#","product").value,
		"amount":$("#","amount").value,
		"company":$("#","company").value,
		"linkman":$("#","linkman").value,
		"phone":$("#","phone").value,
		"email":$("#","email").value,
	};

	if( formCheck(info) ){
		showInfo(info);
	}
}