// $(document).ready(function() {
//     // Start Header Shrink
//     var shrinkHeader = 300;
//         $(window).scroll(function() {
//             var scroll = getCurrentScroll();
//                 if (scroll >= shrinkHeader) {
//                     $('.navbar').addClass('shrink');
//                     $('#menu-list li a').addClass('shrink');
//                 } else {
//                     $('.navbar').removeClass('shrink');
//                 }
//             });

//     function getCurrentScroll() {
//         return window.pageYOffset || document.documentElement.scrollTop;
//     }

//     // Start Loading
//     setTimeout(function() {
//         $("#depreload .wrapper").animate({ opacity: 1 });
//     }, 400);

//     setTimeout(function() {
//         $("#depreload .logo").animate({ opacity: 1 });
//     }, 800);

//     var loader = $("body").DEPreLoad({
//         OnStep: function(percent) {
//             console.log(percent + '%');
//             $("#depreload .line").animate({ opacity: 1 });
//             $("#depreload .perc").text(percent + "%");
//         },
//         OnComplete: function() {
//             console.log('Everything loaded!');
//             $("#depreload .perc").text("done");
//             $("#depreload .loading").animate({ opacity: 0 });
//             $("#depreload").animate({ opacity: 0 });
//             $("#depreload").remove();
//         }
//     });


//     // Mercato Home Closed
//     $('#club').click(function(event) {
//         event.preventDefault();
//         swal("Mercato Club!", "Will be very soon ;)", "success");
//     });

//     // Reviews Home Closed
//     $('#reviews').click(function(event) {
//         event.preventDefault();
//         swal("Reviews!", "Will be very soon ;)", "success");
//     });

//     // Register form appeared when hover on mercato home link
//     if($(window).width() > 992){
//         $('.nav #register').mouseenter(500, function(){
//             $('#data').slideDown(700);
//     });

//         $('#data').mouseleave(500, function(){
//             // $(this).fadeOut(500);

//         });

//         $('span.member').mouseenter(500, function(){
//            $('.form').slideDown(500)
//         });

//         $('.form').mouseleave(500, function(){
//             $(this).hide();
//             $('#data').fadeOut();
//         });
//     } // end if


//     //Start Pop Up gallaery by fancybox plugin
//     $(".fancybox-gallarey").click(function() {
//     $.fancybox.open([
//         {
//             href : 'images/g1.jpg',

//         },
//         {
//             href : 'images/g2.jpg',

//         },
//         {
//             href : 'images/g3.jpg',

//         },
//         {
//             href : 'images/g4.jpg',

//         },
//         {
//             href : 'images/g5.jpg',

//         },
//         {
//             href : 'images/g6.jpg',

//         },
//         {
//             href : 'images/g7.jpg',

//         },
//         {
//             href : 'images/g8.jpg',

//         },
//         {
//             href : 'images/g9.jpg',

//         },
//         {
//             href : 'images/g10.jpg',

//         },
//         ,
//         {
//             href : 'images/g11.jpg',

//         },
//         ,
//         {
//             href : 'images/g12.jpg',

//         },
//          {
//             href : 'images/g13.jpg',

//         },
//          {
//             href : 'images/g14.jpg',

//         }


//     ], {
//         // padding : 0
//     });

//     return false;

// });










//     //Start Pop Up Menu by fancybox plugin
//     $(".open_fancybox").click(function() {
//     $.fancybox.open([
//         {
//             href : 'images/11.jpg',
//             title : 'HOT DRINKS'
//         },
//         {
//             href : 'images/22.jpg',
//             title : 'COLD DRINKS'
//         },
//         {
//             href : 'images/33.jpg',
//             title : 'DESSERT'
//         }


//     ], {
//         // padding : 0
//     });

//     return false;

// });

// var mixer = mixitup('#our-menu', {
//     selectors:{
//         control: '[data-mixitup-control]'
//     }
// });
// // var mixer = mixitup('[data-ref~="#our-menu"]', {
// //     selectors: {
// //         target: '[data-ref~="mixitup-target"]',
// //         control: '[data-mixitup-control]'
// //     }
// // });


// });


