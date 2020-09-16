$(document).ready(function(){
    $("#nav li:last").bind({
        click:function(){
            $("#growTask").css({"display":"block","background": "#ff9400"});
            $("#dayTask").css({"display":"none"})
            $(".taskContent").css({"background": "#ff9400"})
            $(this).css({"background": "#ff9400"})
        }
    })

    $("#nav li:first").bind({
        click:function(){
            $("#growTask").css({"display":"none","background": "#26a6e3"});
            $("#dayTask").css({"display":"block"})
            $(".taskContent").css({"background": ""})
            $(this).css({"background": ""})
        }
    })
    $("#del").click(function(){
        $("#nav li:first").unbind();
        $("#nav li:last").unbind();
    })
})