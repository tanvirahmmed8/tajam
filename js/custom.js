$(function () {

    //    sticky menu
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });

    //banner slider
    $(".slider_active").slick({

        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '.left_arrowa',
        nextArrow: '.right_arrowa'

    });

    //    body slider
    $(".active_slider").slick({

        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow'

    });

    //     venobox
    $('.venobox').venobox();

    //    mixitup
    var mixer = mixitup('.mix_active');

    //    menu button
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler-icon i").toggleClass("fa-bars");
        $(".navbar-toggler-icon i").toggleClass("fa-times");

    });

    //    smooth-scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });

    //    preloader
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //==== back-to-top button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

});
