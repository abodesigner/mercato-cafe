$(document).ready(function(){


    // Calculate the offset value before section when navbar is fixed
  $('.nav-link').click(function() {
    let sectionId = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionId).offset().top - 54
    }, 100);
  });






    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots: false,
        nav : false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    var mixer = mixitup('#menu', {
        selectors:{
        control: '[data-mixitup-control]'
    }
        });
});


