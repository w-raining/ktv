/**
 * Created by Administrator on 2017/7/6.
 */
$(function () {
    $('.login_enroll').on('click', function () {
        $('#login_input1').css({
            'bottom': '0',
        });
        $('#login_input2').css({
            'bottom': '-9.6rem',
        });
    });
    $('.login_down').on('click', function () {
        $('#login_input1').css({
            'bottom': '-11.5rem',
        });
        $('#login_input2').css({
            'bottom': '-9.6rem',
        });
    });
    $('.login_info_put .get').on('click', function () {
        $(this).css({
            'display': 'none',
        });
        return false;
    });
    var telphone = document.querySelector('#phone');
    telphone.onblur = function () {
        var telValue = telphone.value;
        var pattern = /^[1-9]\d{10}$/;
        if (pattern.test(telValue)) {
            $('.success1').removeClass('active');
            $('.error1').addClass('active');
            $('.tips').css({
                'top':'-.88rem',
            });
            $('#button').toggleClass('cbc');
        }
        else if (telValue == "" || telValue == null) {
            $('.error1').removeClass('active');
            $('.success1').addClass('active');

        }
        else {
            $('.success1').addClass('active');
            $('.error1').removeClass('active');
            $('.tips').css({
                'top':0,
            })
        }
    };
    var password1 = document.querySelector('.password1');
    var password2 = document.querySelector('.password2');
    var password3 = document.querySelector('.password3');
    var password4 = document.querySelector('.password4');
    password1.onblur = function(){
        var passValue = password1.value;
        var pattern = /^[a-zA-Z][a-zA-Z0-9]{5,19}/;
        if(pattern.test(passValue)){
            $('.success2').removeClass('active');
            $('.error2').addClass('active');
            $('#button').toggleClass('cbc');
        }
        else if(passValue =="" || passValue==null){
            $('.error2').removeClass('active');
        }
        else{
            $('.error2').removeClass('active');
        }
    };
    password2.onblur = function(){
        var pass1Value = password1.value;
        var pass2Value = password2.value;
        if(pass2Value =="" || pass2Value==null){
            $('.error3').removeClass('active');
        }
        else if(pass1Value == pass2Value){
            $('.success3').removeClass('active');
            $('.error3').addClass('active');
            $('#button').toggleClass('cbc');
        }
        else if(pass1Value!=pass2Value){
            $('.error3').removeClass('active');
        }
        else{
            $('.error3').removeClass('active');
        }
        if($('.login_info_put input').val() != ''){
            $('.login_info_btn button').addClass('active');
        }
    };
    password3.onblur = function(){
        var passValue = password3.value;
        var pattern = /^[a-zA-Z][a-zA-Z0-9]{5,19}/;
        if(pattern.test(passValue)){
            $('.success4').removeClass('active');
            $('.error3').addClass('active');
        }
        else if(passValue =="" || passValue==null){
            $('.error3').removeClass('active');
        }
        else{
            $('.error3').removeClass('active');
        }
    };
    password4.onblur = function(){
        var pass1Value = password3.value;
        var pass2Value = password4.value;
        if(pass2Value =="" || pass2Value==null){
            $('.error4').removeClass('active');
        }
        else if(pass1Value == pass2Value){
            $('.success5').removeClass('active');
            $('.error4').addClass('active');
        }
        else if(pass1Value!=pass2Value){
            $('.error4').removeClass('active');
        }
        else{
            $('.error4').removeClass('active');
        }
        if($('.login_info_put input').val() != ''){
            $('.login_info_btn button').addClass('active');
        }
    };
    var email = document.querySelector('#email');
    email.onblur = function(){
        var emailValue = email.value;
        var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if(reg.test(emailValue)){
            $('.successy').removeClass('active');
            $('.errory').addClass('active');
        }
        else
        {
            $('.errory').removeClass('active');
        }
    };
    $('#as1').on('click',function () {
        $('#login_input1').css({
            'bottom': '-11.5rem',
        });
        $('#login_input2').css({
            'bottom': '0',
        });
    })
    $('#as2').on('click',function () {
        $('#login_input2').css({
            'bottom': '-9.6rem',
        });
        $('#login_input1').css({
            'bottom': '0',
        });
    });
   $('.login_btn1').on('click','.cbc', function () {
        var bodyEl = $('body');
        var phone = $('#phone').val();
        var code = $('#code').val();
        var password = $('.password1').val();
        var password_one = $('.password2').val();
        $.ajax({
            url: '/date/index.php/register/insert',
            data: {
                phone:phone,
                code:code,
                password:password,
                password_one:password_one
            },
            success:function () {
                    var su = `<div id="su" style="z-index: 100; background-image: url(/date/public/img/success.png)"></div>`;
                    $(su).appendTo(bodyEl);
                    t = setTimeout(function () {
                        location.href = "/date/index.php/login/header";
                    }, 3000);
            }
        })
    })
    $('#button1').on('click', function () {
        var email = $('#email').val();
        var password3 = $('.password3').val();
        var password4 = $('.password4').val();
        $.ajax({
            url: '/date/index.php/register/insert1',
            data: {
                email:email,
                password3:password3,
                password4:password4
            }
        })
        return false
    })

});