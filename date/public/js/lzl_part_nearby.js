$(function () {
    var divEl = $('.lzl_part_nearby .title>a');
    var div = $('.content>.dong');
    var right = $('.cbc-box .cbc-right');
    divEl.on('click', function () {
        divEl.removeClass('active')
            .eq($(this).index())
            .addClass('active');
        div.removeClass('active')
            .eq($(this).index())
            .addClass('active');
        if (divEl.eq(0).hasClass('active')) {
            right.eq(1).addClass('active');
            right.eq(0).removeClass('active');
        } else if (divEl.eq(1).hasClass('active')) {
            right.eq(0).addClass('active');
            right.eq(1).removeClass('active');
        }
    });
    if(!location.hash){
        location.href=location.pathname+'#asd';
    }
    $(window).trigger('hashchange');
    var swiper = new Swiper('.nearby .swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false
    });

    var swiper2 = new Swiper('.trend .swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true
    });

    var filter = $('.cbc-box .shai');
    filter.on('click', function () {
        $('.filter .box1').addClass('active')
    });
    var fin = $('.filter #fin');
    fin.add($('.filter #close')).on('click', function () {
        $('.filter .box1').removeClass('active');
    });

    var add = $('.cbc-box .add');
    add.on('click', function () {
        $('.add .box1').addClass('active');
        $(this).addClass('show');
        $('.add .mask').addClass('active');
    });
    $('.add .box1').on('click', function () {
        $(this).removeClass('active');
        add.removeClass('show');
        $('.add .mask').removeClass('active');
    });
    $('.add .mask').on('click', function () {
        $('.add .box1').removeClass('active');
        add.removeClass('show');
        $(this).removeClass('active');
    });
    $('.add .box1>ul').on('click', false);

    var black = $('.trend .black');
    var red = $('.trend .red');
    black.on('click', function () {
        var that = this;
        $(this).removeClass('active');
        red.addClass('active');
        $.ajax({
            url: '/date/index.php/lzl_part_nearby/add_word',
            success: function (data) {
                $(that).next().html(data);
            }
        });
    });
    red.on('click', function () {
        var that = this;
        $(this).removeClass('active');
        black.addClass('active');
        $.ajax({
            url: '/date/index.php/lzl_part_nearby/reduce_word',
            success: function (data) {
                $(that).next().next().html(data);
            }
        });
    });

    $('.lzl_part_nearby .add .box1 ul li>a').eq(0).on('click', function () {
        location.href = '/date/index.php/lzl_part_nearby/word'
    });
    $('.lzl_part_nearby .add .box1 ul li>a').eq(1).on('click', function () {
        location.href = '/date/index.php/lzl_part_nearby/pic'
    });
    $('.lzl_part_nearby .add .box1 ul li>a').eq(2).on('click', function () {
        location.href = '/date/index.php/lzl_part_nearby/sp'
    });

    var school = $('.school .six');
    $('#fin').on('click', function () {
        var data_id;
        if ($('.gender li').hasClass('active')) {
            data_id = $('.gender .active').attr('data');
        }
        var age = $('#trigger2').html();
        var age1 = age.slice(0, 2);
        var age2 = age.substr(-2, 2);
        $.ajax({
            url: '/date/index.php/lzl_part_nearby/filter',
            data: {
                data_id:data_id,
                age1:age1,
                age2:age2
                },
            success: function (data) {
                data=JSON.parse(data);
                school.empty();
                $.each(data,function (i,v) {
                    var el =
                        `
                    <div class="ren">
                        <div class="head" style="background:url('${v.pic}') center/cover no-repeat" ></div>
                        <h1>${v.name}</h1>
                        <div class="zuo" style="background:url('${v.img_gender}') center/cover no-repeat"></div>
                        <div class="you">${v.age}</div>
                        <div class="di">
                            <p>${v.ctime}</p>
                        </div>
                    </div>
                    `;
                    $(el).appendTo(school);
                })
            }
        })
        // console.log($('.gender li').hasClass('active'))
    })
    //发布消息
    var comment = $('.comment');
});
