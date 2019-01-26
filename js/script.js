var hellopreloader = document.getElementById("hellopreloader_preload");
var body = document.querySelector('wrapper');

function fadeOutnojquery(el) {
    el.style.opacity = 1;
    var interhellopreloader = setInterval(function () {
        el.style.opacity = el.style.opacity - 0.05;
        if (el.style.opacity <= 0.05) {
            clearInterval(interhellopreloader);
            hellopreloader.style.display = "none";
        }
    }, 16);
}
window.onload = function () {
    setTimeout(function () {
        fadeOutnojquery(hellopreloader);
    }, 2000);
    body.opacity('1');
};

$(document).ready(function () {
    $('.menu-link').on('click', function () {
        $('menu').addClass('active-menu')
        $('.menu-link').removeClass('menu-link')
    })

    $('.close-btn').on('click', function () {
        $('menu').removeClass('active-menu')
        $('.ssss').addClass('menu-link')
    })

});

$(document).ready(function () {
    var link = $('.pushy a');
    link.on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top - 70;
        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })
    var link = $('.icon a');
    link.on('click', function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top - 1;
        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })

    ///menu-fixed
    var header = $('#header_main');
    var menu = $('.menu-btn');
    var flag = false;

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

$(function () {

    $('nav.pushy a[href*=#]').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top - 0;

                $('html,body').animate({
                    scrollTop: targetOffset
                }, 800);

                return false;

            }

        }

    });

});

jQuery(document).ready(function ($) {
    $.iMissYou({
        title: "Вернись! Сделай заказ!",
        favicon: {
            enabled: true,
            src: 'angry.ico'
        }
    });
});