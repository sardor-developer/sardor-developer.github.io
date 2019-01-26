$(document).ready(function () {
    "use strict";
    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".default-header").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});
$(document).ready(function () {
    var link = $('.navbar-nav a');
    var header = $('header');
    var menu = $('.menu-top');
    var flag = false;

    //scroll
    link.on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top - 70;
        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })

    //backtotop

    jQuery("#backtotop").click(function () {
        jQuery("body,html").animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 150) {
            jQuery("#backtotop").addClass("visible");
        } else {
            jQuery("#backtotop").removeClass("visible");
        }
    });



    new WOW().init();

//     $('.counter').counterUp({
//         delay: 10,
//         time: 1500
//     });

    function menuFixed() {
        if (scrollY >= header.innerHeight() && !flag) {
            menu.addClass('fix').css('opacity', 0).animate({
                opacity: '1'
            }, 500);
            header.css({
                paddingTop: menu.innerHeight()
            });
            flag = true;
        } else if (scrollY <= header.innerHeight() && flag) {
            menu.animate({
                opacity: '0'
            }, 500, function () {
                menu.removeClass('fix').removeAttr('style');
            });
            header.removeAttr('style');
            flag = false;
        }
    }
    $(window).on('scroll', menuFixed);
    menuFixed();

});
