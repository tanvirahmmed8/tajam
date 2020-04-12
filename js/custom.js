$(function () {
    
    //banner slider
    $(".slider_active").slick({

        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        prevArrow: '.left_arrow',
        nextArrow: '.right_arrow'

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

});
