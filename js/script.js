$(document).ready(function() {
    $(window).on('scroll', function() {
        if (window.scrollY > (window.innerHeight - 40)) {
            $('#navbar').addClass('scroll-past');
        } else {
            $('#navbar').removeClass('scroll-past');
        }
    });
});