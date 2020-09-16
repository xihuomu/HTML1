$(document).ready(function(){
		$.fn.scrollImgs=function(obj){//为原型对象增加一个滚动多张图片的属性
			var oldArr={
				num:3,
				time:500,
				urls:"ul li",//要滚动的图片
				parent:"ul",//父级
				left:"#left",//左滚动的元素
				right:"#right"//右滚动的元素
			};
			var newArr=$.extend(oldArr,obj);//设置合并用户数组和默认数组
			var imgsW=$(newArr.urls).innerWidth();//获取宽度
			var imgcount=newArr.num;//要滚动的数量
			$(newArr.left).click(function () {
				$(newArr.parent).css("marginLeft",-imgsW*imgcount);
				$(newArr.urls).slice(-imgcount).prependTo(newArr.parent);
				$(newArr.parent).animate({"marginLeft":"0px"},newArr.time);
			});
			$(newArr.right).click(function () {
				$(newArr.parent).animate({"marginLeft":-imgsW*imgcount},newArr.time, function () {
				$(newArr.urls).slice(0,imgcount).appendTo(newArr.parent);
				$(newArr.parent).css("marginLeft","0px")
				});
			});
		}
	})