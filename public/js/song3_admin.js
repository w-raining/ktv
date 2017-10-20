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
        if (location.hash == '#list') {
            $.ajax({
                url: '/index.php/song3_admin/admin',
                success: function (data) {
                    render(JSON.parse(data));
                }
            })
        }
        return false;
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
                    <input style="text-align: center" type="text" class="singer" value="${v.singer}">   
                </td>
                <td>
                    <!--<input style="text-align: center" type="text" class="img_url" value="${v.img_url}">  -->
                     <img src="${v.img_url}" alt="" width="100">
                </td>
                 <td>
                    <input style="text-align: center" type="text" class="number" value="${v.number}">
                </td>
                 <td>
                    <input style="text-align: center" type="text" class="cid" value="${v.cid}">
                </td> 
              
                <td>
                    <a class="  delete" href="#" >删除</a> 
                  
                </td>
            </tr>
                `;
            $(el).appendTo(tbodyEl);

        });
    }

    $.ajax({
        url: '/index.php/song3_admin/admin',
        success: function (data) {
            render(JSON.parse(data));
        }
    });


    //添加完成后的变化
    $('#file').on('change', function () {
        $(this).prev().html(this.files[0].name);
    });


    //添加
    $('#btn').on('click', function () {
        var fromdata = new FormData($('#from').get(0));
        $.ajax({
            url: '/index.php/song3_admin/insert',
            method: 'post',
            data: fromdata,
            processData: false,
            contentType: false,
            success: function (data) {
                console.log(data);
                location.href = location.pathname + '#list';
            }
        });
        return false;

    });
    //删除
    tbodyEl.on('click', '.delete', function () {
        var trEl = $(this).closest('tr');
        var id = trEl.attr('data-id');
        $.ajax({
            url: '/index.php/song3_admin/delete',
            data: {id: id},
            success: function (data) {
                if (data === 'OK') {
                    trEl.detach();
                    // document.all.test.deleteRow(window.event.srcElement.parentElement.parentElement.rowIndex);
                } else if (data === 'error') {
                    alert('删除失败');
                }
            }
        });
        return false;
    });

    //更新  可编辑表格
    tbodyEl.on('change', '.singer,.img_url,.number,.cid', function () {
        var id = $(this).closest('tr').attr('data-id');
        var value = $(this).val();
        var key = $(this).attr('class');
        $.ajax({
            url: '/index.php/song3_admin/update',
            data: {id: id, value: value, key: key}
        })
    })

});
