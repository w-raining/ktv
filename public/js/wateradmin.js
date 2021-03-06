/**
 * Created by Administrator on 2017/6/22.
 */
$(function () {
    var tbodyEl = $('tbody');

    //分类 location.href
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
                url: '/index.php/wateradmin/admin',
                success: function (data) {
                    render(JSON.parse(data));
                }
            })
        }
        return false;

    });

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
                 <img src="${v.imgurl}" alt="" width="100">
                    <!--<input type="text" class="imgurl" value="${v.imgurl}">   -->
                </td>
                <td>
                    <input type="text" class="imgurl_fiir" value="${v.imgurl_fiir}">
                </td>
                <td>
                    <input type="text" class="info" value="${v.info}">   
                </td>
                <td>
                    <input type="text" class="price" value="${v.price}">
                </td>
                <td>${v.cid}</td>
                <td>
                    <a class=" delete" href="#" >删除</a> 
                   
                </td>
            </tr>
                `;
            $(el).appendTo(tbodyEl);

        });
    }

    $.ajax({
        url: '/index.php/wateradmin/admin',
        success: function (data) {
            render(JSON.parse(data));
        }
    })

    //添加
  /*  $('#btn').on('click', function () {
        var fromdata = $('#from').serializeArray();
        $.ajax({
            url: '/index.php/wateradmin/insert?' + $('#from').serialize(),
            success: function (data) {
                var el =
                    `
            <tr style="text-align: center" data-id="${data}">
                <td>${data}</td>
                 <td>
                    <input type="text" class="imgurl" value="${fromdata[0].value}">   
                </td>
                <td>
                    <input type="text" class="imgurl_fiir" value="${fromdata[1].value}">
                </td>
                <td>
                    <input type="text" class="info" value="${fromdata[2].value}">   
                </td>
                <td>
                    <input type="text" class="price" value="${fromdata[3].value}">
                </td>
                <td>${fromdata[4].value}</td>
                <td class="td">
                    <a class="delete" href="#" >删除</a> 
                   
                </td>
            </tr>
                `;
                $(el).prependTo(tbodyEl);
                location.href = location.pathname + '#list';
            }
        });
        return false;
    });*/
    //添加完成后的变化
    $('#file').on('change', function () {
        $(this).prev().html(this.files[0].name);
    });


    //添加
    $('#btn').on('click', function () {
        var fromdata = new FormData($('#from').get(0));
        $.ajax({
            url: '/index.php/wateradmin/insert',
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
            url: '/index.php/wateradmin/delete',
            data: {id: id},
            success: function (data) {
                if (data === 'OK') {
                    trEl.detach();
                } else if (data === 'error') {
                    alert('删除失败');
                }
            }
        })
        return false;
    });

    //更新  可编辑表格
    tbodyEl.on('change', '.imgurl,.imgurl_fiir,.info,.price,.cid', function () {
        var id = $(this).closest('tr').attr('data-id');
        var value = $(this).val();
        var key = $(this).attr('class');
        $.ajax({
            url: '/index.php/wateradmin/update',
            data: {id: id, value: value, key: key}
        })
    });


});


