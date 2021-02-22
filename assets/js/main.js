(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    // sticky
    var wind = $(window);
    var sticky = $('.header-bar-area');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    //Custom tab
    $('.tab-a').click(function() {
        $(".tab").removeClass('tab-active');
        $(".tab[data-id='" + $(this).attr('data-id') + "']").addClass("tab-active");
        $(".tab-a").removeClass('active-a');
        $(this).parent().find(".tab-a").addClass('active-a');
    });
    //Search Box Open
    $('.header-search').on('click', function() {
        $(this).addClass('open');
    })

    //Search Box Open
    $('.more-info-btn').on('click', function() {
        $(this).addClass('d-none')
        $('.hero-option').addClass('open')

    });
     $('.close-option').on('click', function() {
        $('.hero-option').removeClass('open')
        $('.more-info-btn').removeClass('d-none')
    });
     //Select Tag
    $('.filter-taglist ul li span').on('click', function() {
        $(this).toggleClass('selected');
    })
//Select Tag
    $('.has-Child').on('click', function() {
        $(this).addClass('open');
        $(this).siblings('.has-Child').removeClass('open');
        $(this).find('.has_dropdown').addClass('open');
        $(this).siblings('.has-Child').find('.has_dropdown').removeClass('open');
    })
    /* ----------------------------------------
           Responsive Mega Menu
     ------------------------------------------*/

    function startsMmenu() {
        $('#menu').mmenu();
    }
    $(document).ready(function() {
        if ($(window).width() < 992) {
            startsMmenu();
        }
    });

    $(window).resize(function() {
        if ($(window).width() < 992) {
            startsMmenu();
        }
    });

    // Hero slider
    $(".hero-slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dot: true,
        smartSpeed: 1500,
        margin: 0
    });
     // Hero slider
    $(".event-slider").owlCarousel({
        loop: true,
        items: 5,
        nav: false,
        dot: true,
        smartSpeed: 1500,
        margin: 0
    });



    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



})(jQuery);