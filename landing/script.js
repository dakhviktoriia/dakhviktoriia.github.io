$(function () {
    $('.cheked').addClass('active');

    $('.menu-aside').on('click', 'a', function (event) {
        event.preventDefault();
        const id = $(this).attr('href');
        const top = $(id).offset().top;
        $('.menu-aside li a').removeClass('active');
        $(this).addClass('active')
        $('html').animate({
            scrollTop: top
        }, 1500)
    })
    $('.menu-aside a').each(function (index, element) {
        $(element).mouseover(function () {
            $(`.b${index}`).css({
                display: 'flex'
            })


        })

        $(element).mouseout(function () {
            $(`.b${index}`).css({
                display: 'none'
            })
        })
    })



    $(window).scroll(function () {
        let st = $(this).scrollTop();
        // console.log(st);
        $('.cloud').css({
            transform: `translateY(${st / 2}px)`
        })

        $('.cloud3').css({
            transform: `translateY(${st / 5}px)`
        })

        $('.cloud2').css({
            transform: `translateY(${st * 0.4}px)`
        })

        $('.cloud4').css({
            transform: `translateY(${st / 3}px)`
        })

        $('.cloud5').css({
            transform: `translateY(${st / 5}px)`
        })

        $('.cloud6').css({
            transform: `translateY(${st / 5}px)`
        })
        $('.cloud7').css({
            transform: `translateY(${st / 3}px)`
        })

        $('.cloud8').css({
            transform: `translateY(${st / 3}px)`
        })

        $('.cloud9').css({
            transform: `translateY(${st / 3}px)`
        })

        $('.cloud10').css({
            transform: `translateY(${st / 5}px)`
        })

        $('.cloud11').css({
            transform: `translateY(${st / 6}px)`
        })
    })



    $('.nav').each(function (index, element) {
        $(element).click(function () {
            const id = $(this).attr('href');
            const top = $(id).offset().top;
            $('.menu-aside a').each(function (index, element) {

                if ($(element).attr('href') == id) {
                    $(element).addClass('active');
                } else {
                    $(element).removeClass('active');
                }
            })
            $('html').animate({
                scrollTop: top
            }, 1500)
        })



    })













})



