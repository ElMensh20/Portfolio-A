$(".menu").hide();

$("aside").toggleClass("smallAside");
$(document).ready(function(){

    $("#toggle").click(function(){
        $(".menu").toggle();
        $("#me").toggleClass("big");
        $("aside").toggleClass("smallAside");
    });
    $(".hoverDisplay").not('smallAside').hover(function(){
        $(this).siblings('.fadeOut').fadeToggle();        
    });
    // .not() to applay for all div that not contain 'class-kza'
});

