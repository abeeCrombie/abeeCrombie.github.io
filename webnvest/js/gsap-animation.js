$(window).on('load', function() {
    ItoD_setOrientation(0);
    communitySetSize();
    ItoD_startAnimation();
    appearOnLoad();
    robotAnimation();
    commmunityAnimation();
    roundChartsAnimation();
});

$(window).on('resize', function() {
    ItoD_setOrientation(0.8);
    communitySetSize();
});

$(document).scroll(function() {
    appearOnScroll();
});


/* ************************************* START OF INITIAL TRANSITIONS ******************************* */

function appearOnScroll() {
    var windowTop = $(document).scrollTop();
    offest = $(window).height() / 3 * 2;

    $('.appear-on-scroll-up').each(function () {
        var elementHeight = $(this).height();
        var elementTop = $(this).offset().top;

        if (elementTop < (windowTop + offest)) {
            TweenLite.fromTo($(this), 1, {y: elementHeight/2}, {y: 0, visibility: 'visible'});
            $(this).removeClass('appear-on-scroll-up');
        }
    });
    $('.appear-on-scroll-right').each(function () {
        var elementWidth = $(this).width();
        var elementTop = $(this).offset().top;

        if (elementTop < (windowTop + offest)) {
            TweenLite.fromTo($(this), 1, {x: elementWidth/2}, {x: 0, visibility: 'visible'});
            $(this).removeClass('appear-on-scroll-right');
        }
    });
}


function appearOnLoad() {
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).height();
    var tl = new TimelineLite({ });

    $('.appear-on-scroll-up').each(function () {
        var elementHeight = $(this).height();
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        if (elementBottom > windowTop && elementTop < windowBottom) {
            tl.fromTo($(this), 1, {y: elementHeight/2, visibility: 'hidden'}, {y: 0, visibility: 'visible'}, '-=0.6');
            $(this).removeClass('appear-on-scroll-up');
        }
    });
    $('.appear-on-scroll-right').each(function () {
        var elementWidth = $(this).width();
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        if (elementBottom > windowTop && elementTop < windowBottom) {
            tl.fromTo($(this), 1, {x: elementWidth/2, visibility: 'hidden'}, {x: 0, visibility: 'visible'}, '-=0.6');
            $(this).removeClass('appear-on-scroll-right');
        }
    });
}

/* ************************************* END OF INITIAL TRANSITIONS  ******************************** */

/* ************************************* START OF COMMUNITY ANIMATION ******************************* */

function communitySetSize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    ratio = windowWidth / windowHeight;
    if (windowWidth < 576) {
        ratio = 2 * ratio / 3;
    }
    x0 = (2900 - 1632 * ratio) / 2;
    x1 = 1632 * ratio;

    communityImg = $('.section-6 svg');
    communityImg.attr('viewBox', x0 + ' 0 ' + x1 + ' 1632');

    globe = $('.section-6 .globe');
    leftLines = $('.section-6 .left-figure');

    if (windowWidth  >= 1200) {
        TweenMax.set(globe, { scale: 0.9, x: 0, y: 40, transformOrigin: 'center' });
        TweenMax.set(leftLines, { scale: 0.8, transformOrigin: 'left bottom' });
    } else if (windowWidth >= 992) {
        TweenMax.set(globe, { scale: 0.8, x: -100, y: 40, transformOrigin: 'center' });
        TweenMax.set(leftLines, { scale: 0.8, transformOrigin: 'left bottom' });
    } else if (windowWidth >= 768) {
        TweenMax.set(globe, { scale: 0.6, x: -250, y: 90, transformOrigin: 'center' });
        TweenMax.set(leftLines, { scale: 0.8, transformOrigin: 'left bottom' });
    } else if (windowWidth >= 576) {
        TweenMax.set(globe, { scale: 0.6, x: -450, y: 200, transformOrigin: 'center' });
        TweenMax.set(leftLines, { scale: 0.8, transformOrigin: 'left bottom' });
    } else {
        TweenMax.set(globe, { scale: 0.55, x: -650, y: 200, transformOrigin: 'center' });
        TweenMax.set(leftLines, { scale: 0.5, transformOrigin: 'left bottom' });
    }

    communityImg.css('opacity', '1');
}

function commmunityAnimation() {
    tlCommunityBlack = new TimelineMax({delay: 1.5, repeat: -1, repeatDelay: 0.5});
    circles = $('.section-6 .community-black .circle-to-scale');
    tlCommunityBlack
        .fromTo(circles[0], 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.1, ease: Linear.easeNone })
        .to(circles[0], 0.5, { opacity: 0 }, '-=0.5')
        .fromTo(circles[4], 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.1, ease: Linear.easeNone }, '-=2')
        .to(circles[4], 0.5, { opacity: 0 }, '-=0.5')
        .fromTo(circles[1], 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.1, ease: Linear.easeNone }, '-=1.5')
        .to(circles[1], 1, { opacity: 0 }, '-=1')
        .fromTo(circles[5], 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.1, ease: Linear.easeNone }, '-=2')
        .to(circles[5], 1, { opacity: 0 }, '-=1')
        .fromTo(circles[2], 2, { scale: 0.8, transformOrigin: 'center'},{ scale: 1.2, ease: Linear.easeNone }, '-=1.5')
        .to(circles[2], 1, {opacity: 0 }, '-=1')
        .fromTo(circles[6], 2, { scale: 0.8, transformOrigin: 'center' },{ scale: 1.2, ease: Linear.easeNone }, '-=2')
        .to(circles[6], 1, { opacity: 0 }, '-=1')
        .fromTo(circles[3], 2, { scale: 0.8, transformOrigin: 'center' },{ scale: 1.2, ease: Linear.easeNone }, '-=1.5')
        .to(circles[3], 1, { opacity: 0 }, '-=1')
        .fromTo(circles[7], 2, { scale: 0.8, transformOrigin: 'center' },{ scale: 1.2, ease: Linear.easeNone }, '-=2')
        .to(circles[7], 1, { opacity: 0 }, '-=1');


    tlPython = new TimelineMax({delay: 0.5, repeat: -1, repeatDelay: 1});
    circles = $('.section-6 .python .circle-to-scale');
    tlPython.fromTo(circles[0], 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.3, ease: Linear.easeNone })
            .to(circles[0], 0.5, { opacity: 0 }, '-=0.5')
            .fromTo(circles[1], 2, { scale: 0.9, transformOrigin: 'center' },{ scale: 1.5, ease: Linear.easeNone }, '-=1')
            .to(circles[1], 1,   { opacity: 0 }, '-=1');

    tlR = new TimelineMax({delay: 1, repeat: -1});
    circles = $('.section-6 .r-language .circle-to-scale');
    tlR.fromTo(circles[0], 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.2, ease: Linear.easeNone })
        .to(circles[0], 0.5, { opacity: 0 }, '-=0.5')
        .fromTo(circles[1], 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.2, ease: Linear.easeNone }, '-=1.7')
        .to(circles[1], 1,   { opacity: 0 }, '-=1')
        .fromTo(circles[2], 2, { scale: 0.8, transformOrigin: 'center' },{ scale: 1.2, ease: Linear.easeNone }, '-=1.7')
        .to(circles[2], 1,   { opacity: 0 }, '-=1')
        .fromTo(circles[3], 2, { scale: 0.9, transformOrigin: 'center' },{ scale: 1.2, ease: Linear.easeNone }, '-=1.7')
        .to(circles[3], 1,   { opacity: 0 }, '-=1');

    tlCommunityWhite = new TimelineMax({delay: 2, repeat: -1, repeatDelay: 0.5});
    circles = $('.section-6 .community-white .circle-to-scale');
    tlCommunityWhite
        .fromTo(circles[0], 2, { scale: 0.8, transformOrigin: 'center' },{ scale: 1.4, ease: Linear.easeNone })
        .to(circles[0], 0.5, { opacity: 0 }, '-=0.5');

    tljs = new TimelineMax({delay: 3, repeat: -1});
    circles = $('.section-6 .js .circle-to-scale');
    tljs
        .fromTo(circles, 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.2, ease: Linear.easeNone })
        .to(circles, 0.5, { opacity: 0 }, '-=0.5');

    tlEthereum = new TimelineMax({delay: 0, repeat: -1});
    circles = $('.section-6 .ethereum .circle-to-scale');
    tlEthereum.fromTo(circles[0], 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.15, ease: Linear.easeNone })
        .to(circles[0], 0.5, { opacity: 0 }, '-=0.5')
        .fromTo(circles[1], 2, { scale: 0.8, transformOrigin: 'center' },{ scale: 1.3, ease: Linear.easeNone }, '-=1.5')
        .to(circles[1], 1,   { opacity: 0 }, '-=1');

    tlStar = new TimelineMax({delay: 2, repeat: -1});
    circles = $('.section-6 .star .circle-to-scale');
    tlStar
        .fromTo(circles, 2, { scale: 0.7, transformOrigin: 'center' },{ scale: 1.3, ease: Linear.easeNone })
        .to(circles, 0.5, { opacity: 0 }, '-=0.5');

    points = $('.section-6 .point-to-scale');
    tlP1 = new TimelineMax({yoyo: true, repeat: -1});
    tlP1.fromTo(points[0], 1, {scale: 0.8}, { scale: 1.5, transformOrigin: 'center' }, '+=1');
    tlP2 = new TimelineMax({yoyo: true, repeat: -1});
    tlP2.to(points[1], 1.5, { scale: 1.2, transformOrigin: 'center' });
    tlP3 = new TimelineMax({yoyo: true, repeat: -1});
    tlP3.fromTo(points[2], 1, {scale: 0.8}, { scale: 1.6,  transformOrigin: 'center' }, '+=0.5');
    tlP4 = new TimelineMax({yoyo: true, repeat: -1});
    tlP4.to(points[3], 0.5, { scale: 1.1, transformOrigin: 'center' }, '+=1');
    tlP5 = new TimelineMax({yoyo: true, repeat: -1});
    tlP5.fromTo(points[4], 1, {scale: 0.8}, { scale: 1.3, transformOrigin: 'center' }, '+=0.5');
    tlP6 = new TimelineMax({yoyo: true, repeat: -1});
    tlP6.to(points[5], 1, { scale: 1.4, transformOrigin: 'center' });
    tlP7 = new TimelineMax({yoyo: true, repeat: -1});
    tlP7.to(points[6], 1, { scale: 1.5, transformOrigin: 'center' }, '+=0.5');
}

/* ************************************* END OF COMMUNITY ANIMATION ********************************* */

/* ************************************* START OF ROUND CHARTS ANIMATION **************************** */

function roundChartsAnimation() {
    var animationTime = 0.1;

    $(".token-charts .segment").each(function (index, element){
        var tl = new TimelineLite({paused: true});
        var sector = $(this).find('path');
        var legend = $(this).find('.svg-legend');
        tl.to(sector, animationTime, {filter: "url(#sofGlow)"});
        tl.to(legend, animationTime, {opacity: 1}, '-='+animationTime);
        element.animation = tl;
    });

    $(".token-charts .segment path").mouseenter(function(){
        this.parentNode.animation.play();
    });
    $(".token-charts .segment path").mouseleave(function(){
        this.parentNode.animation.reverse();
    });
}

/* ************************************* END OF ROUND CHARTS ANIMATION ****************************** */


/* ************************************* START OF TRADERS / DEVELOPERS ANIMATION ******************** */

function ItoD_startAnimation() {
    var tl = new TimelineMax({repeat: -1});
    tl.fromTo($('.line-animated'), 10, {strokeDashoffset: '11000'}, {strokeDashoffset: '-11000', ease: Linear.easeNone}, 0)
        .to($('.LT-corner'), 0.5, {opacity: '1', ease: Linear.easeNone}, 0.5)
        .to($('.RB-corner'), 0.5, {opacity: '1', ease: Linear.easeNone}, 1.8)
        .to($('.RT-corner'), 0.5, {opacity: '1', ease: Linear.easeNone}, 2.7)
        .to($('.LB-corner'), 0.5, {opacity: '1', ease: Linear.easeNone}, 4)
        .to($('.corner-text'), 1, {opacity: '0', ease: Linear.easeNone}, 8.5);
}

function ItoD_setOrientation(animationTime) {
    if ($(window).width() < 600) {
        $('.section-7 .animation svg').attr('viewBox', '250 -900 3300 4100');
        TweenLite.to($('.left-arrow'), animationTime, {rotation: 90, x: 460, y: -450, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.right-arrow'), animationTime, {rotation: 90, x: -430, y: 490, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.left-arrow-text'), animationTime, {x: 540, y: -950, scale: 1.5, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.right-arrow-text'), animationTime, {x: -340, y: 690, scale: 1.5, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.side-block'), animationTime, {scale: 1.2, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.side-block-right'), animationTime, {x: -1270, y: 1400, ease: Linear.easeNone});
        TweenLite.to($('.side-block-right .first-line'), animationTime, {x: 10, ease: Linear.easeNone});
        TweenLite.to($('.side-block-right .second-line'), animationTime, {x: 70, ease: Linear.easeNone});
        TweenLite.to($('.side-block-right .third-line'), animationTime, {x: 100, ease: Linear.easeNone});
        TweenLite.to($('.side-block-right .last-line'), animationTime, {x: 90, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left'), animationTime, {x: 1300, y: -1400, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left .first-line'), animationTime, {x: 180, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left .second-line'), animationTime, {x: 120, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left .third-line'), animationTime, {x: 180, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left .last-line'), animationTime, {x: 250, ease: Linear.easeNone});
        TweenLite.to($('.LT-corner'), animationTime, {x: 2800, y: -700, scale: 1.25, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.RB-corner'), animationTime, {x: -2800, y: 700, scale: 1.25, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.RT-corner'), animationTime, {x: -500, y: 2500, scale: 1.25, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.LB-corner'), animationTime, {x: 200, y: -2540, scale: 1.25, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.line'), animationTime, {rotation: 90, transformOrigin: "center", ease: Linear.easeNone});
    } else {
        $('.section-7 .animation svg').attr('viewBox', '-10 -210 4063 2370');
        TweenLite.to($('.arrow'), animationTime, {rotation: 0, x: 0, y: 0, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.arrow-text'), animationTime, {scale: 1, x: 0, y: 0, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.block-text'), animationTime, {y: 0, ease: Linear.easeNone});
        TweenLite.to($('.side-block'), animationTime, {scale: 1, x: 0, y: 0, transformOrigin: "center",  ease: Linear.easeNone});
        TweenLite.to($('.side-block .text-line'), animationTime, {x: 0, ease: Linear.easeNone});
        TweenLite.to($('.corner-text'), animationTime, {scale: 1, x: 0, y: 0, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.line'), animationTime, {rotation: 0, transformOrigin: "center", ease: Linear.easeNone});
    }
}

/* ************************************* END OF TRADERS / DEVELOPERS ANIMATION ********************** */


/* ************************************* START OF ROBOT ANIMATION *********************************** */

function robotAnimation() {
    var shoulders = $('.stage-1 .shoulders'),
        shouldersShadow = $('.stage-3 .shoulders-shadow'),
        finsShadow = $('.stage-1 .fins-shadow'),
        bodyMainShape = $('.stage-1 .body-main-shape'),
        shoulderLeftClapmShadow = $('.stage-3 .shoulder-left-clamp-shadow'),
        shoulderLeftClapmBody = $('.stage-3 .shoulder-left-clamp-body'),
        shoulderRightClapmShadow = $('.stage-3 .shoulder-right-clamp-shadow'),
        shoulderRightClapmBody = $('.stage-3 .shoulder-right-clamp-body'),
        bodyBottom = $('.stage-2 .body-bottom'),
        neck = $('.stage-1 .neck'),
        robotShadowsDark = $('.stage-3 .robot-shadows-dark'),
        nozzle = $('.stage-1 .nozzle'),
        leftForearm = $('.stage-1 .arm-left .forearm'),
        leftForearmGlow = $('.stage-1 .arm-left .forearm-glow'),
        leftPalm = $('.stage-1 .arm-left .palm'),
        rightForearm = $('.stage-1 .arm-right .forearm'),
        rightForearmGlow = $('.stage-1 .arm-right .forearm-glow'),
        rightPalm = $('.stage-1 .arm-right .palm'),
        headBody = $('.stage-1 .head-body'),
        headShadow = $('.stage-1 .head-shadow'),
        smileLeft = $('.stage-3 .robot-smile-left'),
        smileRight = $('.stage-3 .robot-smile-right'),
        eyes = $('.stage-4 .eye'),
        btcRing = $('.stage-1 .btc-ring'),
        btcRingBody= $('.stage-1 .btc-ring-body'),
        btcRingGlow = $('.stage-1 .btc-ring-glow'),
        btcRingShadow = $('.stage-1 .btc-ring-shadow'),
        btcPins = $('.stage-1 .btc-pins'),
        btcLetter = $('.stage-1 .btc-letter'),
        btcLetterGlow = $('.stage-1 .btc-letter .letter-glow'),
        btcLetterShadow = $('.stage-1 .btc-letter .letter-shadow'),
        allPins = $('.stage-1 .pin'),
        pinToSpreadTop = $('.stage-3 .pin-to-spread-top'),
        pinToSpreadMiddle = $('.stage-3 .pin-to-spread-middle'),
        pinToSpreadBottom = $('.stage-3 .pin-to-spread-bottom'),
        calveLeft = $('.stage-1 .calve-left'),
        calveRight = $('.stage-1 .calve-right'),
        thighLeft = $('.stage-1 .thigh-left'),
        thighRight = $('.stage-1 .thigh-right'),
        footLeft = $('.stage-1 .foot-left'),
        footRight = $('.stage-1 .foot-right'),
        rocketShadows = $('.stage-1 .rocket-shadows-dark, .stage-1 .rocket-shadows-light'),
        knees = $('.stage-4 .knee'),
        slider = $('.stage-1 .slider');

    var tl = new TimelineMax({repeat: -1, yoyo: true});
    tl.timeScale(0.8);

    tl.to(shoulders, 0.5, {morphSVG: $('.stage-2 .shoulders')}, 0.5)
        .to(shoulders, 0.5, {morphSVG: $('.stage-3 .shoulders')}, 1)
        .to(shoulders, 0.5, {morphSVG: $('.stage-4 .shoulders')}, 1.5);

    tl.set(finsShadow, {opacity: 0}, 0.5);

    tl.to(shouldersShadow, 0.5, {opacity: 1, morphSVG: $('.stage-4 .shoulders-shadow')}, 1.5);

    tl.to(bodyMainShape, 0.5, {morphSVG: $('.stage-2 .body-main-shape')}, 0.5)
        .to(bodyMainShape, 0.5, {morphSVG: $('.stage-3 .body-main-shape')}, 1)
        .to(bodyMainShape, 0.5, {morphSVG: $('.stage-4 .body-main-shape')}, 1.5);

    tl.set([shoulderLeftClapmShadow, shoulderLeftClapmBody, shoulderRightClapmShadow, shoulderRightClapmBody], {opacity: 1}, 1.5);
    tl.to(shoulderLeftClapmShadow, 0.5, {morphSVG: $('.stage-4 .shoulder-left-clamp-shadow')}, 1.5);
    tl.to(shoulderLeftClapmBody, 0.5, {morphSVG: $('.stage-4 .shoulder-left-clamp-body')}, 1.5);
    tl.to(shoulderRightClapmShadow, 0.5, {morphSVG: $('.stage-4 .shoulder-right-clamp-shadow')}, 1.5);
    tl.to(shoulderRightClapmBody, 0.5, {morphSVG: $('.stage-4 .shoulder-right-clamp-body')}, 1.5);

    tl.to(bodyBottom, 0.5, {opacity: 1}, 0.5)
        .to(bodyBottom, 0.5, {morphSVG: $('.stage-3 .body-bottom')}, 1)
        .to(bodyBottom, 0.5, {morphSVG: $('.stage-4 .body-bottom')}, 1.5);

    tl.to(neck, 0.5, {morphSVG: $('.stage-2 .neck')}, 0.5)
        .to(neck, 0.5, {morphSVG: $('.stage-3 .neck')}, 1)
        .to(neck, 0.5, {fill: '#F3501D', morphSVG: $('.stage-4 .neck')}, 1.5);

    tl.set(robotShadowsDark, {opacity: 1}, 1.5);
    tl.to(robotShadowsDark, 0.5, {morphSVG: $('.stage-4 .robot-shadows-dark')}, 1.5);

    tl.to(nozzle, 0.5, {y: -78}, 0.5)
        .to(nozzle, 0.5, {y: -210}, 1)
        .to(nozzle, 0.5, {y: -120, opacity: 0}, 1.5);

    tl.to(leftForearm, 0.5, {morphSVG: $('.stage-2 .arm-left .forearm')}, 0.5)
        .to(leftForearm, 0.5, {morphSVG: $('.stage-3 .arm-left .forearm')}, 1)
        .to(leftForearm, 0.5, {fill: '#1A7AC0', morphSVG: $('.stage-4 .arm-left .forearm')}, 1.5)
        .to(rightForearm, 0.5, {morphSVG: $('.stage-2 .arm-right .forearm')}, 0.5)
        .to(rightForearm, 0.5, {morphSVG: $('.stage-3 .arm-right .forearm')}, 1)
        .to(rightForearm, 0.5, {fill: '#1D87E5', morphSVG: $('.stage-4 .arm-right .forearm')}, 1.5)
        .to(leftForearmGlow, 0.05, {y: -100, scale: 0, transformOrigin: 'center'}, 0.5)
        .to(rightForearmGlow, 0.05, {y: -100, scale: 0, transformOrigin: 'center'}, 0.5)
        .to(leftPalm, 0.5, {morphSVG: $('.stage-2 .arm-left .palm')}, 0.5)
        .to(leftPalm, 0.5, {morphSVG: $('.stage-3 .arm-left .palm')}, 1)
        .to(leftPalm, 0.5, {fill: '#1A7AC0', morphSVG: $('.stage-4 .arm-left .palm')}, 1.5)
        .to(rightPalm, 0.5, {morphSVG: $('.stage-2 .arm-right .palm')}, 0.5)
        .to(rightPalm, 0.5, {morphSVG: $('.stage-3 .arm-right .palm')}, 1)
        .to(rightPalm, 0.5, {fill: '#1D87E5', morphSVG: $('.stage-4 .arm-right .palm')}, 1.5);

    tl.to(headBody, 0.5, {morphSVG: $('.stage-2 .head-body')}, 0.5)
        .to(headBody, 0.5, {morphSVG: $('.stage-3 .head-body')}, 1)
        .to(headBody, 0.5, {morphSVG: $('.stage-4 .head-body')}, 1.5);

    tl.fromTo(headShadow, 0.5, {y: -20}, {y: 0, opacity: 1}, 1.5);

    tl.fromTo(eyes, 0.5, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center', opacity: 1}, 1.5);

    tl.fromTo([smileLeft, smileRight], 0.5, {y: -20}, {y: 0, opacity: 1}, 1)
        .to(smileLeft, 0.5, {morphSVG: $('.stage-4 .robot-smile-left')}, 1.5)
        .to(smileRight, 0.5, {morphSVG: $('.stage-4 .robot-smile-right')}, 1.5);

    tl.to(btcRing, 0.5, {y: -180, rotation: 30, transformOrigin: 'center'}, 0.5)
        .to(btcRing, 0.5, {y: -290, rotation: -30, transformOrigin: 'center'}, 1)
        .to(btcRing, 0.5, {y: -10, rotation: 0, transformOrigin: 'center'}, 1.5)
        .to(btcRingBody, 0.2, {opacity: 0}, 1.5)
        .to(btcRingGlow, 0.5, {morphSVG: $('.stage-4 .btc-ring-glow')}, 1.5)
        .to(btcRingShadow, 0.5, {morphSVG: $('.stage-4 .btc-ring-body'), className: '+=btc-ring-body-shadow'}, 1.5)
        .to(btcPins, 0.5, {opacity: 0}, 1.5)
        .to(btcLetterGlow, 0.5, {opacity: 0}, 1.5);

    tl.to(btcLetter, 0.5, {y: -180, rotation: 30, transformOrigin: 'center', ease: Power2.easeOut}, 0.5)
        .to(btcLetter, 0.5, {y: -290, rotation: -30, transformOrigin: 'center', ease: Power2.easeOut}, 1)
        .to(btcLetter, 0.5, {y: -10, rotation: 0, scale: 0.8, transformOrigin: 'center', ease: Power2.easeOut}, 1.5)
        .to(btcLetterShadow, 0.5, {fill: '#F3501D'}, 1.5);

    tl.to(allPins, 0.5, {y: -145}, 0.5)
        .to(allPins, 0.1, {y: -130, opacity: 0}, 1)
        .set([pinToSpreadTop, pinToSpreadMiddle], {opacity: 1}, 1.5)
        .to(pinToSpreadTop, 0.5, {morphSVG: $('.stage-4 .pin-to-spread-top')}, 1.5)
        .to(pinToSpreadMiddle, 0.5, {morphSVG: $('.stage-4 .pin-to-spread-middle')}, 1.5)
        .fromTo(pinToSpreadBottom, 0.5, {y: 40}, {y: 0, opacity: 1}, 1)
        .to(pinToSpreadBottom, 0.5, {morphSVG: $('.stage-4 .pin-to-spread-bottom')}, 1.5);

    tl.to(calveLeft, 0.5, {morphSVG: $('.stage-2 .calve-left')}, 0.5)
        .to(calveLeft, 0.5, {morphSVG: $('.stage-3 .calve-left')}, 1)
        .to(calveLeft, 0.5, {morphSVG: $('.stage-4 .calve-left')}, 1.5)
        .to(calveRight, 0.5, {morphSVG: $('.stage-2 .calve-right')}, 0.5)
        .to(calveRight, 0.5, {morphSVG: $('.stage-3 .calve-right')}, 1)
        .to(calveRight, 0.5, {morphSVG: $('.stage-4 .calve-right')}, 1.5)
        .to(thighLeft, 0.5, {morphSVG: $('.stage-2 .thigh-left')}, 0.5)
        .to(thighLeft, 0.5, {morphSVG: $('.stage-3 .thigh-left')}, 1)
        .to(thighLeft, 0.5, {morphSVG: $('.stage-4 .thigh-left')}, 1.5)
        .to(thighRight, 0.5, {morphSVG: $('.stage-2 .thigh-right')}, 0.5)
        .to(thighRight, 0.5, {morphSVG: $('.stage-3 .thigh-right')}, 1)
        .to(thighRight, 0.5, {morphSVG: $('.stage-4 .thigh-right')}, 1.5)
        .to(footLeft, 0.5, {morphSVG: $('.stage-2 .foot-left')}, 0.5)
        .to(footLeft, 0.5, {morphSVG: $('.stage-3 .foot-left')}, 1)
        .to(footLeft, 0.5, {morphSVG: $('.stage-4 .foot-left')}, 1.5)
        .to(footRight, 0.5, {morphSVG: $('.stage-2 .foot-right')}, 0.5)
        .to(footRight, 0.5, {morphSVG: $('.stage-3 .foot-right')}, 1)
        .to(footRight, 0.5, {morphSVG: $('.stage-4 .foot-right')}, 1.5);

    tl.fromTo(knees, 0.2, {scale: 0, transformOrigin: 'center'}, {scale: 1, transformOrigin: 'center', opacity: 1}, 1.8);

    tl.to(rocketShadows, 0.2, {opacity: 0}, 0.5);

    tl.to(slider, 0.2, {y: '-=143'}, 0.5)
        .to(slider, 0.2, {y: '-=143'}, 1)
        .to(slider, 0.2, {y: '-=143'}, 1.5);


    tl.to({}, 0.5, {}); // dummy tween helps to make delay before yoyo starts

    tl.delay(0.5);
}
/* ************************************* END OF ROBOT ANIMATION ************************************* */
