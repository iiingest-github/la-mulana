function openpage(pname){
	document.getElementsByTagName("iframe")[0].src = "pages/" + pname + ".html";
}
/*function init(){
	var url = window.location + "";
	var mark = url.split("#");
	if(mark.length==2){
		var tr = document.getElementById(mark[1]);
		tr.className = "marked";
		//alert(tr.offsetTop - window.innerHeight/2);
		window.scrollTo(0,tr.offsetTop - window.innerHeight/4);
		var to = setTimeout(function(){tr.className = "";},1000);
	}
}*/
function tomark(id){
	var mark = document.getElementById(id);
	mark.className = "marked";
	var map = document.getElementsByTagName("table")[0];
	if(map.offsetTop == 0){
		map = document.getElementsByTagName("table")[1];
	}
	window.scrollTo(window.pageXOffset,mark.offsetTop + map.clientHeight);
	var t = setTimeout(function(){mark.className = "";},500);
}
function tomark2(id){
	var mark = document.getElementById(id);
	mark.className = "marked";
	var map = document.getElementsByTagName("table")[0];
	window.scrollTo(window.pageXOffset,mark.parentNode.parentNode.offsetTop + map.clientHeight);
	var t = setTimeout(function(){mark.className = "";},500);
}

function totop(){
	$("html,body").animate({scrollTop:0},300);
}