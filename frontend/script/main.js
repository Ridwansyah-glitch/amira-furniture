//event
$('.page-scroll').on('click', function (e) {

    //ambil isi href
    var tujuan = $(this).attr('href');
    //tangkap element
    var elementTujuan = $(tujuan);


    //pindahkan scroll
    $('html,body').animate({

        scrollTop: elementTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();


});
//parralax
$(window).scroll(function () {

    var wScroll = $(this).scrollTop();

    // $('.jumbotron img').css({
    //     'transform': 'translate(0px,' + wScroll / 4 + '%)'
    // });

    // $('.jumbotron h1').css({
    //     'transform': 'translate(0px,' + wScroll / 2 + '%)'
    // });

    // $('.jumbotron p').css({
    //     'transform': 'translate(0px,' + wScroll / 1.5 + '%)'
    // });
    // $('.jumbotron i').css({
    //     'transform': 'translate(0px,' + wScroll / 1 + '%)'
    // });


    //section-prodak
    if (wScroll > $('.section-product').offset().top - 750)
    // $('.section-product').offset().top - 500) 
    {
        // alert('Ok');


        $('.section-product .card-sofa').each(function (i) {

            setTimeout(function () {

                $('.section-product .card-sofa').eq(i).addClass('muncul');

            }, 100 * (i + 1));
        });

    } else if (wScroll < $('.section-product').offset().top - 400) {

        $('.section-product .card-sofa').each(function (i) {

            setTimeout(function () {

                $('.section-product .card-sofa').eq(i).removeClass('muncul');

            }, 200 * (i + 1));
        });
    }


    // section-networks
    if (wScroll > $('.section-networks').offset().top - 900) {

        $('.section-networks .features').each(function (i) {

            setTimeout(function () {

                $('.section-networks .features').addClass('show');

            }, 500 * (i + 1));
        });
    }
    // } else if (wScroll < $('.skills').offset().top - 250) {

    //     $('.skills').each(function (i) {

    //         setTimeout(function () {

    //             $('.skills').eq(i).removeClass('muncul');

    //         }, 100 * (i + 1));
    //     });


});