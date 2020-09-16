$(document).ready(function(){
    $.fn.lunbo=function(obj){
            var oldArr={
                parent:".aa",
                son:".aa li",
                bj:"bg",
                pic:".top img"
            }
        var newob=$.extend(oldArr,obj);
        var num=0;
        var imgs=["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];
        function auto(){
            num++;
            if(num>imgs.length-1){
                num=0;
            }
            $(newob.pic).attr("src",imgs[num]);
            $(newob.son).eq(num).addClass(newob.bj).siblings().removeClass(newob.bj);
        }
        var times=setInterval(auto,500);
        $(newob.son).each(function (index) {
            $(this).hover(function () {
                clearInterval(times);
                $(newob.pic).attr("src",imgs[index]);
                $(this).addClass(newob.bj).siblings().removeClass(newob.bj);
                num=index;
            }, function () {
                times=setInterval(auto,500);
            });
        });
    }
});