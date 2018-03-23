// Animation for investors to developers graph
// plus
// Robot animation


$(window).on('load', function() {
    setOrientation(0);
    var tl = new TimelineMax({repeat: -1});
    tl.fromTo($('.line-animated'), 10, {strokeDashoffset: '11000'}, {strokeDashoffset: '-11000', ease:Linear.easeNone}, 0)
        .to($('.LT-corner'), 0.5, {opacity: '1', ease: Linear.easeNone}, 0.5)
        .to($('.RB-corner'), 0.5, {opacity: '1', ease: Linear.easeNone}, 1.8)
        .to($('.RT-corner'), 0.5, {opacity: '1', ease: Linear.easeNone}, 2.7)
        .to($('.LB-corner'), 0.5, {opacity: '1', ease: Linear.easeNone}, 4)
        .to($('.corner-text'), 1, {opacity: '0', ease: Linear.easeNone}, 8.5);

    robotAnimation();

});

$(window).on('resize', function() {
    setOrientation(0.8);
});

function setOrientation(animationTime) {
    if ($(window).width() < 479) {
        $('.investors-to-devs svg').attr('viewBox', '400 -1400 3000 4400');
        TweenLite.to($('.left-arrow'), animationTime, {rotation: 90, x: 450, y: -450, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.right-arrow'), animationTime, {rotation: 90, x: -400, y: 450, transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.block-text'), animationTime, {y: 55, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left'), animationTime, {x: 1300, y: -1400, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left .first-line'), animationTime, {x: 280, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left .second-line'), animationTime, {x: 450, ease: Linear.easeNone});
        TweenLite.to($('.side-block-left .third-line'), animationTime, {x: 220, ease: Linear.easeNone});
        TweenLite.to($('.side-block-right'), animationTime, {x: -1300, y: 1400, ease: Linear.easeNone});
        TweenLite.to($('.side-block-right .first-line'), animationTime, {x: 120, ease: Linear.easeNone});
        TweenLite.to($('.side-block-right .second-line'), animationTime, {x: 450, ease: Linear.easeNone});
        TweenLite.to($('.side-block-right .third-line'), animationTime, {x: 50, ease: Linear.easeNone});
        TweenLite.to($('.LT-corner'), animationTime, {x: 2650, y: -600, ease: Linear.easeNone});
        TweenLite.to($('.RB-corner'), animationTime, {x: -3000, y: 600, ease: Linear.easeNone});
        TweenLite.to($('.RT-corner'), animationTime, {x: -600, y: 2370, ease: Linear.easeNone});
        TweenLite.to($('.LB-corner'), animationTime, {x: 250, y: -2400, ease: Linear.easeNone});
        TweenLite.to($('.left-arrow-text'), animationTime, {x: 500, y: -950, ease: Linear.easeNone});
        TweenLite.to($('.right-arrow-text'), animationTime, {x: -350, y: 570, ease: Linear.easeNone});
        TweenLite.to($('.line'), animationTime, {rotation: 90, transformOrigin: "center", ease: Linear.easeNone});
    } else {
        $('.investors-to-devs svg').attr('viewBox', '-10 -210 4063 2263');
        TweenLite.to($('.arrow'), animationTime, {rotation: 0, x: 0, y: 0,transformOrigin: "center", ease: Linear.easeNone});
        TweenLite.to($('.block-text'), animationTime, {y: 0, ease: Linear.easeNone});
        TweenLite.to($('.side-block'), animationTime, {x: 0, y: 0, ease: Linear.easeNone});
        TweenLite.to($('.side-block .text-line'), animationTime, {x: 0, ease: Linear.easeNone});
        TweenLite.to($('.corner-text'), animationTime, {x: 0, y: 0, ease: Linear.easeNone});
        TweenLite.to($('.arrow-text'), animationTime, {x: 0, y: 0, ease: Linear.easeNone});
        TweenLite.to($('.line'), animationTime, {rotation: 0, transformOrigin: "center", ease: Linear.easeNone});
    }
}

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
    tl.timeScale(1.1);

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