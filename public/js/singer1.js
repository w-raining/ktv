/**
 * Created by Administrator on 2017/6/28.
 */
$(function () {
    var singerlist;
    if (localStorage.singerlist) {
        singerlist = JSON.parse(localStorage.singerlist);
    } else {
        singerlist = [];
    }
    // JSON.parse(localStorage.singerlist).forEach(function (v, i) {
    //     $('c' + v.id).find('#plus1').addClass('rotate');
    // });

    var yi = $('.ban .con .top .yi');
    var top = yi.offset().top;
    var left = yi.offset().left;
    $('.song li #plus1').on('click', function () {
        var o = JSON.parse($(this).closest('li').attr('data'));
        if (!$(this).hasClass('rotate')) {
            $('<div>').appendTo('body')
                .css({
                    width: 20,
                    height: 20,
                    background: 'red',
                    borderRadius: 20,
                    position: 'fixed',
                    top: $(this).offset().top,
                    left: $(this).offset().left,
                    zIndex: 100,
                })
                .animate({
                    top: top,
                    right: left,
                })
                .queue(function () {
                    $(this).remove().dequeue();
                });
            singerlist.push(o);
            localStorage.singerlist = singerlist;
        }
        else {
            singerlist = singerlist.filter(function (v) {
                return v.id != o.id;
            });
        }
        localStorage.singerlist = JSON.stringify(singerlist);
        $(this).toggleClass('rotate');
    });
});