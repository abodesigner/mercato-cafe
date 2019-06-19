$(document).ready(function() {

$('#menu-list li a, html').click(function(event) {
    // only do this if navigation is visible, otherwise you see jump in navigation while collapse() is called
        if ($(".navbar-collapse").is(":visible") && $(".navbar-toggle").is(":visible") ) {
            $('.navbar-collapse').collapse('toggle');
        }
  });

});
