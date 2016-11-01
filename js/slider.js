$(document).ready(function() {

    var owl = $("#owl").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        navigation:true,
        navigationText: [''],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 4
            }
        }
    });
  $('.owl-prev').text(' ');
  $('.owl-next').text(' ');
});
