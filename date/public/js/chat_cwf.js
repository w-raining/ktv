/**
 * Created by Administrator on 2017/7/6.
 */
$(function(){
    var walletEl=$('.wallet');
    var zhaoEl=$('.zhao');
    var delEl=$('img.del');
    var payEl=$('.pays');
    var t;
    var qian;
    /////////////////////
    walletEl.on('touchstart',function () {
        // zhaoEl.show();
        zhaoEl.toggleClass('chuxian');
    })
    $('.zhao').on('touchstart','img.del',function(){
        zhaoEl.toggleClass('chuxian');
    })
    $('.display').val('￥0.00');
    $('.pays').val('');
    $('.zhao').on('input','.pays',function(){

        $('.display').val(function(){
            return $('.pays').val();
        });
       qian = $('.display').val();
        $('.four').css('background','#372D23');
    })

    $('.zhao').on('touchstart','.four',function(){
        $('.four span').html(`<img src="/date/public/img/chat_cwf16.png">`);
         setTimeout(function () {
            $('.four span img').css('transform','rotateZ(45deg)');
            $('.zhao .bg').hide();
            $('.zhao .back').show();
            $('.zhiwen').hide();
             $('.we span'). html(qian);
        },1000)
        /////////////////////////////////////////
        var autoLb = false;          //autoLb=true为开启自动轮播
        var autoLbtime = 1;         //autoLbtime为轮播间隔时间（单位秒）
        var touch = true;           //touch=true为开启触摸滑动
        var slideBt = true;         //slideBt=true为开启滚动按钮
        var slideNub;               //轮播图片数量

//窗口大小改变时改变轮播图宽高
        $(window).resize(function(){
            $(".slide").height($(".slide").width()*0.56);
        });


        $(function(){
            $(".slide").height($(".slide").width()*0.56);
            slideNub = $(".slide .img").size();             //获取轮播图片数量
            for(i=0;i<slideNub;i++){
                $(".slide .img:eq("+i+")").attr("data-slide-imgId",i);
            }


            //根据轮播图片数量设定图片位置对应的class
            if(slideNub==1){
                for(i=0;i<slideNub;i++){
                    $(".slide .img:eq("+i+")").addClass("img3");
                }
            }
            if(slideNub==2){
                for(i=0;i<slideNub;i++){
                    $(".slide .img:eq("+i+")").addClass("img"+(i+3));
                }
            }
            if(slideNub==3){
                for(i=0;i<slideNub;i++){
                    $(".slide .img:eq("+i+")").addClass("img"+(i+2));
                }
            }
            if(slideNub>3&&slideNub<6){
                for(i=0;i<slideNub;i++){
                    $(".slide .img:eq("+i+")").addClass("img"+(i+1));
                }
            }
            if(slideNub>=6){
                for(i=0;i<slideNub;i++){
                    if(i<5){
                        $(".slide .img:eq("+i+")").addClass("img"+(i+1));
                    }else{
                        $(".slide .img:eq("+i+")").addClass("img5");
                    }
                }
            }


            //根据轮播图片数量设定轮播图按钮数量
            if(slideBt){
                for(i=1;i<=slideNub;i++){
                    $(".slide-bt").append("<span data-slide-bt='"+i+"' onclick='tz("+i+")'></span>");
                }
//            $(".slide-bt").width(slideNub*34);
//            $(".slide-bt").css("margin-left","-"+slideNub*17+"px");
            }


            //自动轮播
            if(autoLb){
                setInterval(function(){
                    right();
                }, autoLbtime*1500);
            }


            if(touch){
                k_touch();
            }
            slideLi();
            imgClickFy();
        })


//右滑动
        function right(){
            var fy = new Array();
            for(i=0;i<slideNub;i++){
                fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
            }
            for(i=0;i<slideNub;i++){
                if(i==0){
                    $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[slideNub-1]);
                }else{
                    $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i-1]);
                }
            }
            imgClickFy();
            slideLi();
        }


//左滑动
        function left(){
            var fy = new Array();
            for(i=0;i<slideNub;i++){
                fy[i]=$(".slide .img[data-slide-imgId="+i+"]").attr("class");
            }
            for(i=0;i<slideNub;i++){
                if(i==(slideNub-1)){
                    $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[0]);
                }else{
                    $(".slide .img[data-slide-imgId="+i+"]").attr("class",fy[i+1]);
                }
            }
            imgClickFy();
            slideLi();
        }


//轮播图片左右图片点击翻页
        function imgClickFy(){
            $(".slide .img").removeAttr("onclick");
            $(".slide .img2").attr("onclick","left()");
            $(".slide .img4").attr("onclick","right()");
        }


//修改当前最中间图片对应按钮选中状态
        function slideLi(){
            var slideList = parseInt($(".slide .img3").attr("data-slide-imgId")) + 1;
            $(".slide-bt span").removeClass("on");
            $(".slide-bt span[data-slide-bt="+slideList+"]").addClass("on");
        }


//轮播按钮点击翻页
        function tz(id){
            var tzcs = id - (parseInt($(".slide .img3").attr("data-slide-imgId")) + 1);
            if(tzcs>0){
                for(i=0;i<tzcs;i++){
                    setTimeout(function(){
                        right();
                    },1);
                }
            }
            if(tzcs<0){
                tzcs=(-tzcs);
                for(i=0;i<tzcs;i++){
                    setTimeout(function(){
                        left();
                    },1);
                }
            }
            slideLi();
        }


//触摸滑动模块
        function k_touch() {
            var _start = 0, _end = 0, _content = document.getElementById("slide");
            _content.addEventListener("touchstart", touchStart, false);
            _content.addEventListener("touchmove", touchMove, false);
            _content.addEventListener("touchend", touchEnd, false);
            function touchStart(event) {
                var touch = event.targetTouches[0];
                _start = touch.pageX;
            }
            function touchMove(event) {
                var touch = event.targetTouches[0];
                _end = (_start - touch.pageX);
            }

            function touchEnd(event) {
                if (_end < -100) {
                    left();
                    _end=0;
                }else if(_end > 100){
                    right();
                    _end=0;
                }
            }
        }
        ////////////////////////////////////////////////////////////////////


    })
    $('.zhao').on('touchstart','.right',function () {
        $('.zhao .bg').show();
        $('.zhao .back').hide();
        $('.zhao').toggleClass('chuxian');
    })
    $('.zhao').on('touchstart','.bottom',function(){
        $('.conhide').hide();
        $('.zhiwen').show();
        $('.bottom').hide();



    })
    $('.zhao').on('touchstart','.zhiwen img',function(){
        $('.load img').show();
        $('.zhao .bg').hide();
        $('.zhao .back').hide();
        return false;
    })
    $('.zhao').on('touchstart','.zhiwen img',function(){
        $('.load').show();
        $('.load p').hide();
        setTimeout(function(){
            $('.load img').attr('src','/date/public/img/chat_cwf18.png');
            $('.load p').show();
        },1000)
        return false;
    })
    $('.zhao').on('touchstart','.load p',function(){
        $('.zhao .bg').show();
        $('.zhao').removeClass('chuxian');
        var liEl=
            `
                <li class="imgs">
            <div class="right-imgs hongbao" style="background:url('/date/public/img/chat_cwf20.png') center/cover no-repeat">
                <div class="time">08:39</div>
                <div class="head"><img src="/date/public/img/chat_cwf7.png" alt=""></div>
                <div class="imgs-bg" >
                </div>
            </div>
        </li>
                `;
        var ulEl=$('.content ul')
        $(liEl).appendTo(ulEl);
        return false;

    })
    $('.zhao').on('touchend','.load p',function(){
        $('.zhao').empty();
        var zhao =
            `
    <div class="bg" style="background: url('/date/public/img/chat_cwf14.png') center/cover no-repeat; ">
        <h1>发红包</h1>
        <div class="one">
            <input type="text" class="display" value="￥0.00" readonly="readonly">
        </div>
        <div class="two">
            <span>金额</span><input class="pays" type="text" placeholder="￥0.00"><span>元</span>
        </div>
        <div class="three">
            <input type="text" value="祝万事如意心想事成">
        </div>
        <div class="four">
            <span>递出红包</span>
        </div>
        <img src="/date/public/img/chat_cwf15.png" alt="" class="del">
    </div>
    <div class="back">
        <div class="box">
            <div class="left"></div>
            <div class="z">支付</div>
            <div class="right"></div>
        </div>
        <div class="key">
            <div class="top1"></div>
            <div class="top">
                <div class="we">￥<span>100.00</span></div>
            </div>

            <!--轮播-->
            <div class="container conhide">
                <div id="slide" class="slide" class="index-slide" alt="star">
                    <!-- 轮播图片数量可自行增减 -->
                    <div class="img" style="background-image: url(/date/public/img/cbc-hong4.png)"></div>
                    <div class="img" style="background-image: url(/date/public/img/cbc-hong4.png)"></div>
                    <div class="img" style="background-image: url(/date/public/img/cbc-hong4.png)"></div>
                    <div class="slide-bt"></div>
                </div>
            </div>
            <div class="zhiwen">
                <p>通过指纹识别完整支付</p>
                <img src="/date/public/img/chat_cwf17.png" alt="">
            </div>
            <div class="bottom">确认支付</div>

        </div>
    </div>
    <div class="load">
        <img src="/date/public/img/chat_cwf19.png" alt="">
        <p>支付完成</p>
    </div>
            `;
        $(zhao).appendTo($('.zhao'));
    })

    //////////////////////////////
    // walletEl.on('touchstart',function (){
    //
    // })
    // delEl.on('touchstart',function(){})
    // payEl.on('input',function(){})
    // $('.four').on('touchstart',function(){})
    // $('.right').on('touchstart',function (){})
    // $('.bottom').on('touchstart',function(){})
})





















///////////////////////////////////////////
