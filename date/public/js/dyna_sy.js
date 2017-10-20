/**
 * Created by Administrator on 2017/7/5.
 */
$(function () {

    // 热门游记滑动
    var hjShowItems = $('.info');
    // 视口容器          注意！！！！！！！！！！！1
    var hjSshowItemsSild = $('.info #content');
    // 滑动容器
    var hjSshowItemsCon = $('.info .content .center');
    var hjSshowItemsConNum = hjSshowItemsCon.length;

    hjSshowItemsSild.css('width', (hjSshowItemsConNum / 1.8) * 100 + '%');
    var itemsConW = hjSshowItemsCon.width();
    hjSshowItemsSild.css({
        marginLeft: -itemsConW / 1.7 + 'px'
    });
    window.addEventListener('resize', function () {
        itemsConW = hjSshowItemsCon.width();
        hjSshowItemsSild.css({
            marginLeft: -itemsConW / 1.7 + 'px'
        })
    })
    var hjNumT = 0;
    hjSshowItemsSild.on('touchstart', function (e) {
        var targetS = e.targetTouches[0];
        var cx = targetS.clientX;
        var mx;
        hjSshowItemsSild.on('touchmove', function (e) {
            targetM = e.targetTouches[0];
            mx = targetM.clientX;
            var runX = (-hjNumT * Hcx / 1.84) + (mx - cx);
            hjSshowItemsSild.css({
                transition: 'all 0s',
                transform: "translateX(" + runX + "px)"
            });
        });
        hjSshowItemsSild.on('touchend', function (e) {
            if (mx - cx < 0) {
                if (Math.abs(mx - cx) > 100) {
                    hjNumT++;
                    if (hjNumT > hjSshowItemsConNum - 2) {
                        hjNumT = hjSshowItemsConNum - 2;
                    }
                    hjSshowItemsSild.css({
                        transition: 'all 1s',
                        transform: "translateX(" + Hcx / 1.84 * -hjNumT + "px)"
                    })
                } else {
                    hjSshowItemsSild.css({
                        transition: 'all 1s',
                        transform: "translateX(" + Hcx / 1.84 * -hjNumT + "px)"
                    })
                }
            } else if (mx - cx > 0) {
                if (Math.abs(mx - cx) > 100) {
                    hjNumT--;
                    if (hjNumT < 0) {
                        hjNumT = 0;
                    }
                    hjSshowItemsSild.css({
                        transition: 'all 1s',
                        transform: "translateX(" + Hcx / 1.84 * -hjNumT + "px)"
                    })
                } else {
                    hjSshowItemsSild.css({
                        transition: 'all 1s',
                        transform: "translateX(" + Hcx / 1.84 * -hjNumT + "px)"
                    })
                }
            }

            $(hjSshowItemsCon).css({
                transform: 'scale(1,1)'
            })
            $(hjSshowItemsCon[hjNumT + 1]).css({
                transform: 'scale(1.1,1.1)'
            })
            hjSshowItemsSild.off('touchmove');
            hjSshowItemsSild.off('touchend');
        })

    })


});