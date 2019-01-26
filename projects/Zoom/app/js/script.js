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
    var header = $('header');
    var menu = $('.menu-top');
    var flag = false;
    $('.video').on('click', function () {
        video.play();
        if (video.play())
            $('.item').hide();
    });
    $('.gallery').owlCarousel({
        items: 4,
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.popular').hide();
    $('.card').on('click', function () {
        $(this).toggleClass('card-active');
        if ($(this).hasClass('card-active')) {
            $(this).find('.popular').show();
        } else {
            $(this).find('.popular').hide();
        }
    });

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

    new WOW().init();

});

$(document).ready(function () {
    var link = $('.menu-top a');
    //scroll
    link.on('click', function (e) {
        e.preventDefault();

        var href = $(this).attr('href');
        var target = $(href).offset().top - 50;
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
});