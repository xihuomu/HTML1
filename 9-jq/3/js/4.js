$(document).ready(function(){
    $("li").hover(
        function(){
            $(this).find("div").css({"display":"block"});
        },
        function(){
            $(this).find("div").css({"display":"none"})
        }
    );
    $("li").hover(function(){
        $(this).toggleClass("orange");
    })
})
// #c81623