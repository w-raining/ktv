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
                    <input type="text" class="name" value="${v.name}">   
                </td>
                <td>
                    <input type="text" class="listener" value="${v.listener}">
                </td>
                 <td>
                    <input type="text" class="num" value="${v.num}">
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
        url: '/index.php/song4_admin/admin',
        success: function (data) {
            render(JSON.parse(data));
        }
    })

    //添加
    $('#btn').on('click', function () {
        var fromdata = $('#from').serializeArray();
        $.ajax({
            url: '/index.php/song4_admin/insert?' + $('#from').serialize(),
            success: function (data) {
                var el =
                    `
            <tr style="text-align: center" data-id="${data}">
                <td>${data}</td>
                 <td>
                    <input type="text" class="name" value="${fromdata[0].value}">   
                </td>
                <td>
                    <input type="text" class="listener" value="${fromdata[1].value}">
                </td>
                  <td>
                    <input type="text" class="num" value="${fromdata[2].value}">
                </td>
                
                
                <td class="td">
                    <a class="delete" href="#" >删除</a>  
                   
                </td>
            </tr>
                `;
                $(el).prependTo(tbodyEl);
                location.href = location.pathname + '#list';

            }
        })
        return false;
    })

    //删除
    tbodyEl.on('click','.delete',function () {
        var trEl = $(this).closest('tr');
        var id = trEl.attr('data-id');
        $.ajax({
            url: '/index.php/song4_admin/delete',
            data: {id: id},
            success: function (data) {
                if (data === 'OK') {
                    trEl.detach();
                }else if(data === 'error'){
                    alert('删除失败');
                }
            }
        })
        return false;
    });

    //更新  可编辑表格
    tbodyEl.on('change','.imgurl,.info,.address,.cid,.list',function () {
        var id = $(this).closest('tr').attr('data-id');
        var value = $(this).val();
        var key = $(this).attr('class');
        $.ajax({
            url:'/index.php/song4_admin/update',
            data:{id:id,value:value,key:key}
        })
    })
    //分类
    if (!location.hash) {
        location.href = location.pathname + '#list';
    }
    $(window).on('hashchange', function () {
        $('.bs-example-tabs .nav-tabs>li').removeClass('active in');
        $(location.hash).addClass('active');
        $('.tab-pane').removeClass('active in');
        $(location.hash + '-tab').addClass('active in');
        return false;
    });
    $(window).trigger('hashchange');

});
