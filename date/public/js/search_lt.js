$(function () {
    $('.lt_friend').on('touchstart', function () {
        $(this).on('touchmove', function () {
            $(this).toggleClass('active');
        });
        $(this).on('touchend', function () {
            $(this).unbind('touchmove').unbind('touchend');
        });
    });
});

