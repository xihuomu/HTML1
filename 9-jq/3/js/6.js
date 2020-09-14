$(document).ready(function(){
    let num = 0 ;
    $(".firstNav").click(function(){
        num++;
        num%2==0?$(".firstNav").siblings().hide("slow"):$(".firstNav").siblings().show("slow");
    })
    $("li").mouseover(function(){
        $(this).css("background-color","#c81623")
    })
    $("li").mouseout(function(){
        $(this).css("background-color","")
    })
})