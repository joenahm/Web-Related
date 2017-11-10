/* public */
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

function isNull(str){
	var status;
	if( str == "" ){
		status = true;
	}else{
		status = false;
	}

	return status;
}

function isDigital(str){
	var status;
	if( isNaN(str) ){
		status = false;
	}else{
		status = true;
	}

	return status;
}

var isInteger = function(str){
	var reg = new RegExp("^-?\\d+$");
	var status;
	if( !reg.test(str) ){
		status = false;
	}else{
		status = true;
	}

	return status;
}

/* I think "isInteger" is more appropriate */
var isNumber = isInteger;
/* But my teacher make me do so */

function isDate(str){
	var reg = new RegExp("(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)");
	var status;
	if( !reg.test(str) ){
		status = false;
	}else{
		status = true;
	}

	return status;
}

function minLength(str, length){
	var status;
	if( str.length >= length ){
		status = true;
	}else{
		status = false;
	}

	return status;
}

function maxLength(str, length){
	var status;
	if( str.length <= length ){
		status = true;
	}else{
		status = false;
	}

	return status;
}
/* public */

/* register.html */
function showTime(stageObj){
	var time = new Date();
	var year = time.getFullYear() + "年";
	var month = time.getMonth()+1 + "月";
	var day = time.getDate() + "日";
	dateStr = year + month + day;
	
	stageObj.innerHTML = dateStr;
}

function showAlert(obj, objName, message) {
	var children = obj.parentNode.children;
	for( var i =0 ; i < children.length ; i++ ) {
		if( children[i]!=obj
		&& children[i].getAttribute('class')==objName+"Alert" ){

			var alertStage = children[i];
			alertStage.style.color = "red";
			alertStage.innerHTML = message;
		}
	}
}

function deAlert(obj, objName, message){
	var children = obj.parentNode.children;
	for( var i =0 ; i < children.length ; i++ ) {
		if( children[i]!=obj
		&& children[i].getAttribute('class')==objName+"Alert" ){

			var alertStage = children[i];
			alertStage.style.color = "green";
			alertStage.innerHTML = message;
		}
	}
}

function formCheck(objArr,key){
	switch( key ){
		case "username":
			if( !minLength(objArr[key].value,2) ){
				showAlert(objArr[key],key," 用户名不要少于2位！");
			}else if( !maxLength(objArr[key].value,10) ){
				showAlert(objArr[key],key," 用户名不要多于10位！");
			}else{
				deAlert(objArr[key],key," OK");
			}
			break;
		case "password":
			if( !minLength(objArr[key].value,2) ){
				showAlert(objArr[key],key," 密码不要少于2位！");
			}else if( !maxLength(objArr[key].value,10) ){
				showAlert(objArr[key],key," 密码不要多于8位！");
			}else if( objArr[key].value == objArr['username'].value ){
				showAlert(objArr[key],key," 密码不能与用户名相同！");
			}else{
				deAlert(objArr[key],key," OK");
			}
			break;
		case "confirm":
			if( objArr[key].value != objArr['password'].value ){
				showAlert(objArr[key],key," 两次输入的密码不一样！");
			}else{
				deAlert(objArr[key],key," OK");
			}
			break;
		case "birthday":
			if( !isDate(objArr[key].value) ){
				showAlert(objArr[key],key," 生日格式不对，必须为（1970-01-01）格式！");
			}else{
				deAlert(objArr[key],key," OK");
			}
			break;
		case "education":
			if( objArr[key][0].checked
			|| objArr[key][1].checked
			|| objArr[key][2].checked ){

				deAlert(objArr[key][0],key," OK");
				for( var i = 0 ; i < 3 ; i++ ){
					if( objArr['education'][i].checked ){
						objArr['education'].value = objArr['education'][i].value;
					}
				}
			}else{
				showAlert(objArr[key][0],key," 请选择一个学历！");
			}
			break;
		case "remark":
			if( objArr[key].value == "" ){
				objArr[key].value = "无";
			}
			break;
	}
}

function binding(objArr,index){
	if( index!="education" && index!="remark" ){
		objArr[index].onblur = function(){
			formCheck(objArr,index);
		}
	}else if( index == "education" ){
		var fun = function(){
			formCheck(objArr,index);
		}
		objArr[key][0].onmousemove = fun;
		objArr[key][1].onmousemove = fun;
		objArr[key][2].onmousemove = fun;
	}else if( index == "remark" ){
		objArr[key].onmousemove = function(){
			formCheck(objArr,index);
		}
	}
}

function bindingSubmit(objArr, btn1, btn2){
	btn1.onclick = function(){
		var infoArr = [];

		for( key in objArr ){
			var item;
			switch( key ){
				case "username":
					item = "用户名";
					break;
				case "password":
					item = "密码";
					break;
				case "confirm":
					item = "确认密码";
					break;
				case "birthday":
					item = "生日";
					break;
				case "education":
					item = "学历";
			}

			if( objArr[key].value ){
				infoArr.push(objArr[key].value);
			}else{
				alert(item+"还没有填！");
				return false;
			}
		}

		alert(infoArr);
		window.location.replace("checkboxTest.html");
	}

	btn2.onclick = function(){
		window.location.replace("selectTest.html");
	}
}
/* register.html */

/* checkboxTest.html */
function selectAll(obj, res){
	obj.onclick = function(){
		for( var i = 0 ; i < res.length ; i++ ){
			res[i].checked = true;
		}
	}
}

function unSelectAll(obj, res){
	obj.onclick = function(){
		for( var i = 0 ; i < res.length ; i++ ){
			res[i].checked = false;
		}
	}
}

function showInfo(obj, res, stage){
	obj.onclick = function(){
		var infoStr = "";
		for( key in res ){
			if( res[key].checked ){
				infoStr += res[key].value+" ";
			}
		}
		stage.innerHTML = infoStr;
	}
}
/* checkboxTest.html */

/* selectTest.html */
function init(stage,infoArr){
	for( key in infoArr ){
		var innerStr = "<option value="+infoArr[key]+">"+infoArr[key]+"</option>";
		stage.innerHTML += innerStr;
	}
}

function move(item, target){
	target.innerHTML += item.outerHTML;
	item.outerHTML = "";
}
function moveAll(source, target){
	target.innerHTML += source.innerHTML;
	source.innerHTML = "";
}

function bindingMoveAll(btn, source, target){
	btn.onclick = function(){
		moveAll(source,target);
	}
}

function bindingMove(btn, source, target){
	var itemArr = source.children;
	btn.onclick = function(){
		for( var i = 0 ; i < itemArr.length ; i++ ){
			if( itemArr[i].selected ){
				move(itemArr[i],target);
			}
		}
	}
}
/* selectTest.html */