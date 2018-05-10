// Animate hamburger icon
$('.navbar-toggler').click(function(){
    $('.nav-icon').toggleClass('open');
});

// Animate country selection smoothly
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

// Manage picture selection in the third section
$('.section-3 .pilot-btn').click(function () {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.section-3 .wizard-btn').removeClass('active');
        $('.section-3 .wizard-img img').fadeOut();
        $('.section-3 .pilot-img img').fadeIn();

    }
});
$('.section-3 .wizard-btn').click(function () {
    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        $('.section-3 .pilot-btn').removeClass('active');
        $('.section-3 .pilot-img img').fadeOut();
        $('.section-3 .wizard-img img').fadeIn();
    }
});

// Use modal window for full size images
var $imageSrc;
$('.open-fill-size').click(function() {
    if ($(this).parent().hasClass('pilot-img')) {
        $imageSrc = 'images/pilot-big.png';
    } else if ($(this).parent().hasClass('wizard-img')) {
        $imageSrc = 'images/wizard-big.png';
    }
});
$('#fullImgModal').on('show.bs.modal', function (e) {
    $("#fullSizeImg").attr('src', $imageSrc );
});

// Use one modal window for all youtube links
var $videoSrc;
$('.video-btn').click(function() {
    $videoSrc = $(this).data('src');
});
$('#toolVideoModal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1;" );
    $("#video").attr('allowFullScreen', "allowFullScreen" );
});
$('#toolVideoModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $videoSrc);
});


// Validate e-mail form in sign up modal
$('#mc_embed_signup #mce-EMAIL').on('input', function() {
    var emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var emailTouchedRegex = /^([A-Za-z0-9@.]{1,})$/;

    var input = $(this);
    if (input.val() && !emailTouchedRegex.test(input.val()) && !input.hasClass('valid')) {
        input.addClass('red-border');
    } else {
        input.removeClass('red-border');
    }

    if(emailRegex.test(input.val())) {
        input.removeClass("invalid").addClass("valid");
        $('#mc_embed_signup input[type="submit"]').prop('disabled', false);
        $('#mc_embed_signup .submit-wrap > div').hide();
    } else {
        input.removeClass("valid").addClass("invalid");
        $('#mc_embed_signup input[type="submit"]').prop('disabled', true);
        $('#mc_embed_signup .submit-wrap > div').show();
    }
});
$('#mc_embed_signup #mce-EMAIL').change(function () {
    var input = $(this);
    if (!input.hasClass('valid') || !input.val()) {
        input.addClass('red-border');
    }
});
// Click on disabled button
$('#mc_embed_signup .submit-wrap > div').click(function () {
    var input = $('#mc_embed_signup #mce-EMAIL');
    if (!input.hasClass('valid') || !input.val()) {
        input.addClass('red-border');
    }
});