/**
 * Created by 李高峰 on 2017/7/5.
 */
$(function () {
    $('.login_top').on('click', function () {
        $('.login_input').animate({
            bottom: '0rem',
        });
    })
    $('.login_down').on('click', function () {
        $('.login_inputb').animate({
            bottom: '-8.9rem',
        })
    })

    $('button').on('click', function () {
        $('.login_info_btn').addClass('translet');
        var formData = $('#form').serialize();
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
                        location.href = "/date/index.php/login/settings";
                    }, 1500);
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
});