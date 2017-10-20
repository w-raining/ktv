$(function () {
    var admin = $('.login_info_put input');
    for (let i = 0; i < admin.length; i++) {
        admin[i].onblur = function () {
            var adminval = admin.value;
            var regular = /^[a-zA-Z][a-zA-Z0-9]{5,19}/;
            if (regular.test(adminval)) {
                $('.login_success').addClass('active');
            }
        }
    }
    var t;
    var bodyEl = $('body');
    $('#login_finish_btn').on('click', function () {
        var el = `<div id="el"></div>`;
        $(el).appendTo(bodyEl);
        t = setTimeout(function () {
            location.href = '/date/index.php/login/wait';
        }, 1500);
    })
});