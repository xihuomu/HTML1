$(document).ready(function(){
  //树形菜单

    $(".ss").find("li").eq(1).hover(
        function(){
            $(".ss_list_bg").show("slow")
        },
        function(){
            $(".ss_list_bg").hide("slow")
        }
    )
    $(".car_t").click(function(){
        $(".last").toggle();
        }
    )
    // $(".car_t").hover(
    //     function(){
    //         $(this).next().show("slow")
    //     },
    //     function(){
    //         $(this).next().hide("slow")
    //     }
    // )
    


    //购物车
    $(".shop ul li").each(function(){
        $(".clear a").click(function(){
            $(this).parents("li").remove();
            
        })
        
        // let newone = $(this).find("strong").html().replace(/[^0-9]+/g, '');
        // console.log(newone);
    })
    $(".J_btnDelCount").click(function(){
        let num=$(this).next().val();
        let strong = $(this).parent().next().html().replace(/[^0-9]+/g, '');
        num--;
        let newstrong = strong/(num+1)*num;
        $(this).next().val(num);
        if(num<0){
            num=0;
            $(this).next().val(num);
            $(this).parent().next().html("￥"+newstrong)
        }
        $(this).parent().next().html("￥"+newstrong)
    })
    $(".J_btnAddCount").click(function(){
        let num=$(this).prev().val();
        let strong = $(this).parent().next().html().replace(/[^0-9]+/g, '');
        num++;
        let newstrong = strong/(num-1)*num;
        $(this).prev().val(num);
        $(this).parent().next().html("￥"+newstrong)
    })


    //轮播图
    let num=0;
    let images = ["images/ban1.jpg","images/ban2.jpg","images/ban3.jpg"]
    let times = setInterval(auto,2000);
    function auto(){
        num++;
        if(num>images.length-1){
                num=0;
            }
        $(".slide_box li img").attr("src",images[num])
        $(".num li").eq(num).addClass("active").siblings().removeClass("active");
    }
    $(".num li").each(function(index){
        $(this).hover(
            function(){
                clearInterval(times);
                $(".slide_box li img").attr("src",images[index])
                $(this).addClass("active").siblings().removeClass("active");
                num=index;
            },
            function(){
                times=setInterval(auto,2000);
            }
        )
    })

    //快讯

    // $("#express ol ").animate({marginTop:"-300px"},10000);
    let flnum=0;
    let times1=setInterval(auto1,1000);
    function auto1(){
        flnum++;
        if(flnum==5){
            flnum=0;
        }
        $("#express ol").css({"margin-top":-30*flnum+"px"})
    }
    $("#express").hover(
        function(){
            clearInterval(times1);
        },
        function(){
            times1=setInterval(auto1,1000);
        }
    )

    //左侧菜单栏
    $(".leftNav ul li").hover(
        function(){
            $(this).children().eq(1).show();
            $(this).children().eq(0).css({"background-color":"#fff","color":"orangered"})
        },
        function(){
            $(this).children().eq(1).hide();
            $(this).children().eq(0).css({"background-color":"","color":""})
        }
    )



    
})