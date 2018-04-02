

// Animate hamburger icon
$('.navbar-toggler').click(function(){
    $('.nav-icon').toggleClass('open');
});

// Animate country selection smooth
$('.dropdown').on('show.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e){
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

// Close navbar clicking outside navbar and on navlinks
$(document).mouseup(function(e) {
    if (!$(".navbar").is(e.target) && $(".navbar").has(e.target).length === 0) {
        $('.collapse').collapse('hide');
        $('.nav-icon').removeClass('open');
    }
    if ($(".menu-item").is(e.target)) {
        $('.collapse').collapse('hide');
        $('.nav-icon').removeClass('open');
    }
});

// Smooth scroll to sections
$('.go-to-features').click(function () {
    $('html, body').animate({
        scrollTop: $(".section-4").offset().top - 100
    }, 600);
});
$('.go-to-tokens').click(function () {
    $('html, body').animate({
        scrollTop: $(".section-7").offset().top - 100
    }, 600);
});



$('.section-3 .pilot-btn').click(function () {
    console.log('q');
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.section-3 .wizard-btn').removeClass('active');
        $('.section-3 .wizard-img').fadeOut();
        $('.section-3 .pilot-img').fadeIn();

    }
});
$('.section-3 .wizard-btn').click(function () {
    console.log('w');
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.section-3 .pilot-btn').removeClass('active');
        $('.section-3 .pilot-img').fadeOut();
        $('.section-3 .wizard-img').fadeIn();
    }
});



var $videoSrc;
$('.video-btn').click(function() {
    $videoSrc = $(this).data('src');
});
$('#toolVideoModal').on('shown.bs.modal', function (e) {
    // set the video src to autoplay and not to show related video
    $("#video").attr('src', $videoSrc + '?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1' );
});
// stop playing the youtube video when close the modal
$('#toolVideoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
});