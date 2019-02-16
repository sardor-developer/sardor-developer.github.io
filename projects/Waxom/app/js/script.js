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
    var video = document.querySelector('.video video');
    var link = $('.menu-top a');
    var header = $('header');
    var menu = $('.menu-top');
    var flag = false;
    //video
    $('.video').on('click', function () {
        video.play();
        if (video.play())
            $('.box').hide();
    });
    //scroll

    link.on('click', function (e) {
        e.preventDefault();

        var href = $(this).attr('href');
        var target = $(href).offset().top - 90;
        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })
    //backtotop

    jQuery("#backtotop").click(function () {
        jQuery("body,html").animate({
            scrollTop: 0
        }, 2000);
    });
    jQuery(window).scroll(function () {
        if (jQuery(window).scrollTop() > 150) {
            jQuery("#backtotop").addClass("visible");
        } else {
            jQuery("#backtotop").removeClass("visible");
        }
    });

    new WOW().init();

    //owl carousel
    // $('.slider').owlCarousel({
    //     items: 1,
    //     margin: 30,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 2000,
    //     responsive: {
    //         0: {
    //             items: 1,
    //         },
    //         600: {
    //             items: 1,
    //         },
    //         1000: {
    //             items: 1,
    //         }
    //     }
    // });
 


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
    $('.counter').counterUp({
         delay: 10,
         time: 1500
     });
});
