$(document).ready(function(){
    $(".ba-nemu-btn").on("click", function(){
        let menu = $(".ba-menu");

        if (menu.hasClass("open")){
            menu.removeClass("open").fadeOut(500);
        } else {
            menu.addClass("open").fadeIn(500);
        }
    });

    $(window).on("resize", function(){
        if ($(this).width() > 991){
            $(".ba-menu").addClass("open").show();
        } else {
            $(".ba-menu").removeClass("open").hide();
        }
    })
})