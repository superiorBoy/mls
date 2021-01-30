
//公共ajax封装
    function ajax(url, type, params, successfn, errorfn) {
        $.ajax({
            url:url,
            type: type,
            data: params,
            beforeSend:function(res){
                
                
            },
            success: function (res) {
				if(res.code==0){
					successfn(res);
				}else{
					vant.Toast(''+res.message);
					successfn(res);
				}
                
            },
            error: function (res) {
                errorfn(res);            
            },
            complete:function(){
                
            }
        });
    }
	
	
	 function time(value) {
		if (value == null) {
			return 'null';
		}
		var i = (value + '').length;
		while (i++ < 13) value = value + '0';
		value = Number(value);
		var date = new Date(value);
		//date.setTime(value);
		var month = date.getMonth() + 1;
		var hours = date.getHours();
		if (hours < 10) hours = '0' + hours;
		var minutes = date.getMinutes();
		if (minutes < 10) minutes = '0' + minutes;
		var time = date.getFullYear() + '-' + month + '-' + date.getDate() + ' ' + hours + ':' + minutes;
		return time;
	}
	
	

	// 解码  

		function HTMLDecode(text) {
		var temp = document.createElement('div');
		temp.innerHTML = text;
		var output = temp.innerText || temp.textContent;
		temp = null;
		return output;
		}
		
		  function removeHTMLTag(str) {
		            str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
		            str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
		            //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
		            str=str.replace(/ /ig,'');//去掉 
		            return str;
		    }
			   //转意符换成普通字符
			    function escape2Html(str) { 
			     var arrEntities={'lt':'<','gt':'>','nbsp':' ','amp':'&','quot':'"'}; 
			     var data= str.replace(/&(lt|gt|nbsp|amp|quot);/ig,function(all,t){return arrEntities[t];}); 
				return removeHTMLTag(data)
				} 