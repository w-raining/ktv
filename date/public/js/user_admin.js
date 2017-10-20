/**
 * Created by Administrator on 2017/6/22.
 */
$(function () {
    var tbodyEl = $('tbody');

    var tip = $('.tip');
    $(document).ajaxStart(function () {
        tip.animate({width:'80%'});
    });
    $(document).ajaxComplete(function () {
        tip.stop().animate({width:'100%'},function () {
            $(this).css('width','0%');
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
                    <input type="text" class="phone" value="${v.phone}">   
                </td>
                <td>
                    <input type="password" class="password" value="${v.password}">
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
        url: '/date/index.php/user_admin/admin',
        success: function (data) {
            render(JSON.parse(data));
        }
    })


    //删除
    tbodyEl.on('click','.delete',function () {
        var trEl = $(this).closest('tr');
        var id = trEl.attr('data-id');
        $.ajax({
            url: '/date/index.php/user_admin/delete',
            data: {id: id},
            success: function (data) {
                trEl.detach();
                // render(JSON.parse(data));
            }
        })
        return false;
    });

    //分类
    $(window).on('hashchange', function () {
        $('.bs-example-tabs .nav-tabs>li').removeClass('active in');
        $(location.hash).addClass('active');
        $('.tab-pane').removeClass('active in');
        $(location.hash + '-tab').addClass('active in');
        return false;
    });
});
