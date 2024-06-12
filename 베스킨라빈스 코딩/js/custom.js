$(function () {

    $('.icecream_slide').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });


    $('.main_visual .arrows .prev').on('click', function () {
        $('.icecream_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.icecream_slide').slick('slickNext')
    });







    $('.main_promotion_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });







    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

})