$(document).ready(function(){
    $(".menu-btn").mouseover(function(){
        $(".topDown").show("slow");
    })
    $(".menu-btn").mouseout(function(){
        $(".topDown").hide("slow");
    })
    let num = 0;
    $("nav li dl").click(function(){
        num++;
        num%2==0?$(this).find("dd").slideUp("slow")
        :$(this).find("dd").slideDown("slow");
    })
})