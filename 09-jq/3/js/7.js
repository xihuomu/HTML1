$(document).ready(function(){
    let num = 0;
    $(".lastone").click(function(){
        num++;
        // num%2==0?$("dl dd").slideUp("slow"):$("dl dd").slideDown("slow");
        if(num%2==0){
            
            $(".nav li:eq(7)").slideDown("slow");
            $(".nav li:eq(8)").slideDown("slow");
            $(".nav li:eq(9)").slideDown("slow");
            $(".nav li:eq(10)").slideDown("slow");
            $(".nav li:eq(11)").addClass("lastone");
        }
        else{
            $(".nav li:eq(7)").slideUp("slow");
            $(".nav li:eq(8)").slideUp("slow");
            $(".nav li:eq(9)").slideUp("slow");
            $(".nav li:eq(10)").slideUp("slow");
            $(".nav li:eq(11)").addClass("up");
        }
    })
})