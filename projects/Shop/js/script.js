// $(function(){
//     $('#elastislide').elastislide();
// });
$(document).ready(function () {
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
});