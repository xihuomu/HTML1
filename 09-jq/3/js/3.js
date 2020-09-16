$(document).ready(function(){
    $("li").mouseover(function(){
        $(this.children[1]).css({"display":"block"});
        // let img = './images/toolbars.png'
        // $(this.children[0]).css(" background","red url('"+img+"') no-repeat")
        $(this.children[0]).css("background-color","#c81623")
    })
    $("li").mouseout(function(){
        $(this.children[1]).css({"display":"none"});
        $(this.children[0]).css("background","")
    })
})
// #c81623