$(function () {
    var alert = $('.alert');
    var method = $('.method .li');
    var gender = $('.gender li');
    var cctime = $('.item .con1 span');
    var right = $('.item .right');
    var jia = $('.person .jia');
    var jian = $('.person .jian');
    var num = $('.person .num');
    var footer=$('.footer');

    $('.right.act').on('click', function () {
        alert.addClass('active');
    });
    $('.info').on('click', '.con', function () {
        alert.removeClass('active');
        $('.item .con.act').html($(this).html());
    });
    method.on('click', function () {
        method.removeClass('active').eq($(this).index()).addClass('active');
    });
    gender.on('click', function () {
        gender.removeClass('active').eq($(this).index()).addClass('active');
    });
    var time = new Date();
    var ctime = time.toGMTString();

    right.on('click', function () {
        var last = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
        cctime.html(last);
    });
    var i = 0;
    jia.on('click', function () {
        i++;
        num.html(i);
    });
    jian.on('click', function () {
        i--;
        if (i <= 0) {
            i = 0;
        }
        num.html(i);
    });
    footer.on('click',function(){
       $('.success').css('display','block');
    });
////////////////////////////////////////////////////////////////

    var x = document.getElementById("demo");
    var start = $('.right1.start');

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        else {
            x.innerHTML = "该浏览器不支持获取地理位置。";
        }
    }

    function showPosition(position) {
        x.innerHTML = "纬度: " + position.coords.latitude +
            "<br>经度: " + position.coords.longitude;
    }

    start.on('click', function () {
        getLocation();
    });

});