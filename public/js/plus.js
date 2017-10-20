/**
 * Created by Administrator on 2017/6/28.
 */
$(function () {
    var playlist;
    if (localStorage.songlist) {
        playlist = JSON.parse(localStorage.songlist);
    } else {
        playlist = [];
    }


    var yi = $('.ban .yi');
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
            playlist.push(o);
            localStorage.playlist = playlist;
        }
        else {
            playlist = playlist.filter(function (v) {
                return v.id != o.id;
            });
        }
        localStorage.playlist = JSON.stringify(playlist);
        $(this).toggleClass('rotate');
    });
});