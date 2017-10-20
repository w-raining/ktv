/**
 * Created by Administrator on 2017/6/29.
 */
$(function () {
    var storelist;
    if (localStorage.storelist) {
        storelist = JSON.parse(localStorage.storelist);
    } else {
        storelist = [];
    }
    //继续增加
    var s;
    $('section .con').on('click', '#plus', function () {
        s = JSON.parse($(this).closest('.box').attr('data'));
        var r = storelist.filter(function (v, i) {
            return v.id == s.id;
        });
        if (!r.length) {
            s.num=1;
            storelist.push(s);
            $(this).prev().html('1');
        }else{
            r[0].num += 1;
            $(this).prev().html(r[0].num);
        }
        localStorage.storelist = JSON.stringify(storelist);
        render();

    });
    $('section .con').on('click', '#jian', function () {
        var s = JSON.parse($(this).closest('.box').attr('data'));
        var r = storelist.filter(function (v, i) {
            return v.id == s.id;
        });
        if(r.length){
            r[0].num -= 1;
            $(this).next().html(r[0].num);
            if(r[0].num==0){
                storelist = storelist.filter(function (v,i) {
                    return r[0].id!=v.id;
                })
            }
        }
        localStorage.storelist = JSON.stringify(storelist);
        render();
    });
    function render() {
        $('section .con').empty();
        var he;
        storelist.forEach(function (v, i) {
            $('#he').html(localStorage.rmb);
            num_he = Number(localStorage.rmb);
            var o = JSON.stringify(v);
            var el =
                `
         <div class="box" data=${o} id="box"> 
            <div class="left" style="padding:0 .3rem 0 0.2rem">
                <img src="${v.imgurl}" alt="">
            </div>
            <div class="right">
                <p>${v.info}</p>
                <h4> <span>300ml</span></h4>
                <div class="xian"></div>
                <div class="bottom">
                    <div class="first" id="jian"><img src="/public/img/water1/water6.png" alt=""></div>
                    <div class="second">${v.num}</div>
                    <div class="third" id="plus"><img src="/public/img/water1/water7.png" alt=""></div>
                    <h5>${v.price} <span></span></h5>
                </div>
            </div>
        </div>
        `;
            $(el).appendTo($('section .con'));
        });
        $('.totle').html(getTotle());
        $('.totlenum').html(getNum());
    }
    render();
    //总价格
    function getTotle() {
        var totle = 0;
        storelist.forEach(function (v,i) {
            totle += v.num * v.price;
        });
        return totle.toFixed(2);
    }

    //总数量
    function getNum() {
        let num=0;
        storelist.forEach(function (v,i) {
            num+=v.num;
        });
        return num;

    }
    $('#success').on('click',function () {
        $('section .con').empty();
        localStorage.clear();
    })


});