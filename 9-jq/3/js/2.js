$(document).ready(function(){
    let stop = true ;
    $(".btnClick").mousedown(function(){
        if(stop){
            $(".stick").animate({"width":"500px"},2000);
        }
    })
    $(".btnClick").mouseup(function(){
        $(".stick").stop();
        stop = false;
        $(".stick").addClass("stickDown");
        moveMan();
    })

    function moveMan(){
        let stickE = $(".stick").width();
        console.log(stickE);
        setTimeout(function(){
            $(".man").find("img").attr("src","images/stick.gif");
            $(".man").find("img").animate({"left":stickE+"px"},1000,function(){
                let well1 = $(".well").eq(0).offset().left
                let well2 = $(".well").eq(1).offset().left
                let well0 = $(".well").eq(0).width();
                let well = well2-well1-well0;
                if(stickE>well&&stickE<well2){
                    $(".man").find("img").attr("src","images/stick_stand.png");
                    $(".well-box").animate({"left":-well2+"px"},500);
                    $(".man").animate({"left":-well2+"px"},200);
                    $(".stick").removeClass("stickDown").width(0);
                }
                else{
                    $(".man").animate({"bottom":"0px"},500);
                    $(".man").find("img").attr("src","images/stick_stand.png");
                }
            });
        },500)
    }
})