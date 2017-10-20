/**
 * Created by 李高峰 on 2017/7/5.
 */
$(function () {
    /////点击登陆
    $('.login_top').on('click', function () {
        $('.login_inputa').animate({
            bottom: '0rem',
        });
    })
    $('.login_down').on('click', function () {
        $('.login_inputa').animate({
            bottom: '-8.9rem',
        })
        $('.login_inputb').animate({
            bottom: '-8.9rem',
        })
    })

    ///手机号获取Ajax请求
    $('#login1').on('click', function () {
        $('.login_info_btn').addClass('translet');
        var formData = $('#form1').serialize();
        var bodyEl = $('body');
        var t;
        $.ajax({
            url: '/date/index.php/login/check?' + formData,
            success: function (data) {
                // dataType:'json';
                if (data == 'ok') {
                    var su = `<div id="su"></div>`;
                    $(su).appendTo(bodyEl);
                    t = setTimeout(function () {
                        location.href = "/date/index.php/lzl_part_nearby";
                    }, 1000);
                } else if (data == 'error') {
                    var er = `<div id="er"></div>`;
                    $(er).appendTo(bodyEl);
                    $('.login_info_son').on('click', 'input', function () {
                        var er = $('#er').remove();
                    });
                }
            }
        });
    });

    ///邮箱获取Ajax请求
    $('.login2').on('click', function () {
        $('.login_info_btn').addClass('translet');
        var formData = $('#form2').serialize();
        var bodyEl = $('body');
        var t;
        $.ajax({
            url: '/date/index.php/login/check1?' + formData,
            success: function (data) {
                // dataType:'json';
                if (data == 'ok') {
                    var su = `<div id="su"></div>`;
                    $(su).appendTo(bodyEl);
                    t = setTimeout(function () {
                        location.href = "/date/index.php/lzl_part_nearby";
                    }, 1000);
                } else if (data == 'error') {
                    var er = `<div id="er"></div>`;
                    $(er).appendTo(bodyEl);
                    $('.login_info_son').on('click', 'input', function () {
                        var er = $('#er').remove();
                    });
                }
            }
        });
    });


    $('.login_info_put').on('click', '.input2', function () {
        $('button').addClass('active');
    })
    $('button').on('mouseup', function () {
        $('.login_info_btn').removeClass('translet');
    })

    $('.login_phone_info1').on('click', function () {
        $('.login_inputa').addClass('active');
        $('.login_inputb').removeClass('active');
    });
    $('.login_admin_info2').on('click', function () {
        $('.login_inputb').addClass('active');
        $('.login_inputa').removeClass('active');
    });
    $('.login_self_right').on('click', function () {
        $('.login_inputa').addClass('active');
        $('.login_inputb').removeClass('active');
    })

    ////点击注册
    $('.login_bottom').on('click', function () {

    })
});