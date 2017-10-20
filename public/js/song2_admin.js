/**
 * Created by Administrator on 2017/6/22.
 */
$(function () {

    //分类
    if (!location.hash) {
        location.href = location.pathname + '#list';
    }
    $(window).on('hashchange', function () {
        $('.bs-example-tabs .nav-tabs>li').removeClass('active in');
        $(location.hash).addClass('active');
        $('.tab-pane').removeClass('active in');
        $(location.hash + '-tab').addClass('active in');
        // return false;
        if(location.hash=='#list'){
            $.ajax({
                url:'/index.php/song2_admin/admin',
                dataType:'json',
                success:function (data) {
                    render(data);
                }
            })
        }else if(location.hash=='#add'){
            if(localStorage.history){
                var data = JSON.parse(localStorage.history);
                renderlist('.well.history', data);

            }
        }

    });
    $(window).trigger('hashchange');



    var tbodyEl = $('tbody');

    var tip = $('.tip');
    $(document).ajaxStart(function () {
        tip.animate({width: '80%'});
    });
    $(document).ajaxComplete(function () {
        tip.stop().animate({width: '100%'}, function () {
            $(this).css('width', '0%');
        })
    });

    function render(array) {
        tbodyEl.empty();
        $.each(array, function (i, v) {
            var el =
                `
            <tr style="text-align: center" data-id="${v.id}" class="tr">
                <td>${v.id}</td>
        
                 <td>
                    <input type="text" class="name" value="${v.name}">   
                </td>
                <td>
                   <input type="text" class="src" value="${v.src}">   
                    <!--<audio src="${v.src}" controls></audio>  -->
                </td>
               
                 <td>
                    <input type="text" class="duration" value="${v.duration}">
                </td>
                 <td>
                    <input type="text" class="singer1_singer" value="${v.singer1_singer}">
                </td>
               
                
                <td>
                    <a class=" delete" href="#" >删除</a> 
                  
                </td>
            </tr>
                `;
            $(el).appendTo(tbodyEl);

        });
    }

    $.ajax({
        url: '/index.php/song2_admin/admin',
        success: function (data) {
            render(JSON.parse(data));
        }
    })


    //下拉




    var timerid;
    $('#search').on('input', function () {
        if (!$(this).val()) {
            return;
        }
        var that = this;
        clearTimeout(timerid);
        timerid = setTimeout(function () {
            $.ajax({
                url: '/index.php/song2_admin/search',
                data: {keyword: $(that).val()},
                dataType: 'json',
                success: function (data) {
                    renderlist('.well.result',data);
                }
            })
        }, 500);
    });
    var well = $('#well');

    function renderlist(selector,data) {
        $(selector).empty();
            data.forEach(function (v, i) {
            var el =
                `
                  <span class="label label-info" style="margin:5px;" data-id="${v.id}">${v.singer}</span>
                `
            $(el).appendTo(selector);
        })
    }
    $('.well.result,.well.history').on('click', '.label', function () {
        $('#search').val($(this).html().trim());
        $('input[name=aid]').val($(this).attr('data-id'));
    });

    //添加

    // if(localStorage.history){
    //     historylist = JSON.parse(localStorage.history);
    // }else{
    //     var historylist = [];
    // }
    // $('#btn').on('click', function () {
    //     $.ajax({
    //         url: '/index.php/song2_admin/insert?' + $('#from').serialize(),
    //         success: function () {
    //             var id = $('input[name=aid]').val();
    //             var name = $('#search').val();
    //             var r = historylist.filter(function (v,i) {
    //                 return v.id == id;
    //             });
    //             if(!r.length){
    //                 historylist.push({id:id,singer:name});
    //             }
    //             localStorage.history = JSON.stringify(historylist);
    //             location.href = location.pathname + '#list';
    //
    //
    //         }
    //     })
    //     return false;
    // })
    $('#file').on('change', function () {
        $(this).prev().html(this.files[0].name);
    });
    $('#btn').on('click', function () {
        var fromdata = new FormData($('#from').get(0));
        $.ajax({
            url: '/index.php/song2_admin/insert',
            method: 'post',
            data: fromdata,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);location.href = location.pathname + '#list';

            }
        });
        return false;

    });



    //删除
    tbodyEl.on('click', '.delete', function () {
        var trEl = $(this).closest('tr');
        var id = trEl.attr('data-id');
        $.ajax({
            url: '/index.php/song2_admin/delete',
            data: {id: id},
            success: function (data) {
                if (data === 'OK') {
                    trEl.detach();
                } else if (data === 'error') {
                    alert('删除失败');
                }
            }
        });
        return false;
    });

    //更新  可编辑表格
    tbodyEl.on('change', '.name,.src,.aid,.duration', function () {
        var id = $(this).closest('tr').attr('data-id');
        var value = $(this).val();
        var key = $(this).attr('class');
        $.ajax({
            url: '/index.php/song2_admin/update',
            data: {id: id, value: value, key: key}
        })
    })
});
