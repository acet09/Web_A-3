$(document).ready(function(){
    // nav
    $("nav .sub").hide();   
    $("header nav>ul>li").hover(function(){
        $(this).find(".sub").stop().slideDown(300);
    },function(){
        $(this).find(".sub").stop().slideUp(300);
    });

    // slide
    $("#slide ul li").hide();
    $("#slide ul li:first").show();
    function slide(){
        $("#slide ul li:first").fadeOut().next().fadeIn().end().appendTo("#slide ul")
    }    
    // setInterval(slide, 3000);

    // tab
    $("#info .con_title a").click(function(){
        var tab_num=$(this).index();
        console.log(tab_num);
        $(".con_title a").removeClass("active");
        $(this).addClass("active");
        $(".contents .tab_list").hide();
        $(".contents .tab_list").eq(tab_num).show();
    });

    // pop
    $("#pop").hide();
    $("#info .con_value li:first-child").click(function(){
        $("#pop").fadeIn(300);
    }); 
    $("#pop button").click(function(){
        $("#pop").fadeOut(300);
    });

});