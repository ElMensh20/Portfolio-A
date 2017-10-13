$(".menu").hide();
$("#me").toggleClass("big");
$("aside").toggleClass("smallAside");
$(".fadeOut").toggleClass("hoverFun");
$(document).ready(function(){
    $("#toggle").click(function(){
        $(".menu").toggle();
        $("#me").toggleClass("big");
        $("aside").toggleClass("smallAside");
        $(".fadeOut").toggleClass("hoverFun");
        $(".fa-bars").toggleClass("fa-window-close"); 
        $(".onClick").toggleClass("oclickIcon"); 
    });
    $(".hoverDisplay").not('smallAside').hover(function(){
        // console.log("test Hover");
        $(this).siblings('.fadeOut').fadeToggle();        
    });
    $("#me").hover(function(){
        console.log("test Hover");
        $("#me").toggleClass("hoverImg");            
        
    })
    // .not() to applay for all div that not contain 'class-kza'
});

