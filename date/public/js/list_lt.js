$(function () {
    $.ajax({
        url:'/date/index.php/contentList/aa',
        data:{id:$('input[type=hidden]').val()},
        success:function (data) {
            console.log(data);
        }
    })
    var arrow = $('.cbc-box .z .j');
    var mask = $('.lt_content .mask');
    var lt_list = $('.lt_content .mask .lt_list');
    var fun = $('.cbc-box .right');
    var lt_function = $('.lt_function');
    var info = $('.info');
    var note=$('.cbc-box .left');
    var add=$('.add');
    var lt_mask=$('.lt_mask');
    var more=$('.more');
    var tip=$('.tip');

    arrow.on('click', function () {
        $(this).toggleClass('active');
        mask.toggleClass('active');
        lt_list.toggleClass('active');
    });

    fun.on('click', function () {
        $(this).toggleClass('active');
        $(lt_function).toggleClass('active');
    });

    info.on('touchstart', function () {
        $(this).on('touchmove',function () {
            $(this).toggleClass('active');
        });
        $(this).on('touchend',function () {
            $(this).unbind('touchmove').unbind('touchend');
        });
    });

    add.on('click',function () {
        lt_mask.addClass('active');
        info.removeClass('active');
    });

    lt_mask.on('click',function () {
        $(this).removeClass('active');
    });
    lt_mask.find('div>.bao').on('click',false);

    $('.delete').on('click',function () {
       $(this).closest('li').remove();
    });

    note.on('click',function () {
        $(this).toggleClass('active');
        fun.add(arrow).toggleClass('show');
        $('.lt_tips').toggleClass('active');
        if($(this).hasClass('active')){
            $('.cbc-box .z p').html('提醒事项').css('line-height','.88rem');
        }else{
            $('.cbc-box .z p').html('好友列表').css('line-height','.65rem');
        }
    });

    more.on('click',function () {
        $(this).toggleClass('active');
       $('.detail').toggleClass('active');
    });

    tip.on('touchstart', function () {
        $(this).on('touchmove',function () {
            $(this).toggleClass('active');
        });
        $(this).on('touchend',function () {
            $(this).unbind('touchmove').unbind('touchend');
        });
    });

    $('.lt_friend').on('touchstart', function () {
        $(this).on('touchmove',function () {
            $(this).toggleClass('active');
        });
        $(this).on('touchend',function () {
            $(this).unbind('touchmove').unbind('touchend');
        });
    });

    
    
    
    
    
    
    
    
    
    
    // var contentList;
    // if (localStorage.contentList) {
    //     contentList = JSON.parse(localStorage.contentList);
    // } else {
    //     contentList = [];
    // }
    // $('#fin').on('click',function () {
    //
    //     var el=
    //         `
    //     <li>
    //         <div class="time">08:39</div>
    //         <div class="lgf_invite_news">
    //
    //             <div class="lgf_news_reject">
    //                 <div class="lgf_reject_son">拒绝</div>
    //             </div>
    //             <div class="lgf_news_adopt">
    //                 <div class="lgf_adopt_son">接受</div>
    //             </div>
    //             <div class="lgf_invite_son">
    //
    //                 <div class="lgf_invite_title">邀请
    //                     <div class="lgf_invite_photo" style="background:url(<?php echo $data['pic'];?>) center/cover no-repeat"></div>
    //                 </div>
    //                 <div class="lgf_invite_matter">
    //                     <div class="lgf_matter_top">
    //                         <div class="lgf_top_left"><i></i>吃饭</div>
    //                         <div class="lgf_top_right"><i></i>今天14:00</div>
    //                     </div>
    //                     <div class="lgf_matter_bottom"><i></i>太原小店区长风街世贸中心...</div>
    //                 </div>
    //             </div>
    //
    //         </div>
    //     </li>
    //         `;
    //     contentList = [{"content":$(el)}];
    //     console.log(contentList);
    //     console.log(contentList[0]['content'][0]['innerHTML']);
    //     document.cookie="contentList[0]['content'][0]['innerHTML']";
    //     console.log(localStorage.contentList);
    //     function setCookie(name,value) {
    //
    //     }
        // $(el).appendTo('.lt_message');
        // $.ajax({
        //     url:'/date/index.php/chat_cwf/xia',
        //     data:{id:a},
        //     success:function (data) {
        //
        //         // if (data==='ok'){
        //         //     location.href='/date/index.php/chat_cwf/index';
        //         // }
        //     }
        // });



    // })




});