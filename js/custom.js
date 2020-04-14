$(function () {
    
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
    
     $(".navbar-toggler").click(function () {
        $(".navbar-toggler-icon i").toggleClass("fa-bars");
        $(".navbar-toggler-icon i").toggleClass("fa-times");
        
    });

});
