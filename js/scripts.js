$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    $('#begin-login').click(function () {
        if ($('#loginModal').hasClass('fade')) {
            $('#loginModal').removeClass('fade');
            $('#loginModal').addClass('show');
            $('#loginModal').show();
        }
    });
    $('#no-login').click(function () {
        if ($('#loginModal').hasClass('show')) {
            $('#loginModal').removeClass('show');
            $('#loginModal').addClass('fade');
            $('#loginModal').hide();
        }
    });
    $('#go-reserve').click(function () {
        if ($('#reserveModal').hasClass('fade')) {
            $('#reserveModal').removeClass('fade');
            $('#reserveModal').addClass('show');
            $('#reserveModal').show();
        }
    });
    $('#no-reserve').click(function () {
        if ($('#reserveModal').hasClass('show')) {
            $('#reserveModal').removeClass('show');
            $('#reserveModal').addClass('fade');
            $('#reserveModal').hide();
        }
    });
});