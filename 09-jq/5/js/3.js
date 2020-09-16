$(document).ready(function(){
    $.fn.mouse=function(obj){
        let oldArr={
            nameId:"one"
        }
        let newArr=$.extend(oldArr,obj)
        $(document).mousedown(function(){
            $(document).mousemove(function(e){
                let x = e.pageX;
                let y = e.pageY;
                $(newArr.nameId).css({"margin-left":x+"px","margin-top":y+"px"})
            })
            $(document).mouseup(function(){
                $(document).off("mousemove");
            })
        })
    }
   
})