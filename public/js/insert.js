/**
 * Created by Administrator on 2017/6/21.
 */
$(function () {
    var tbodyEl = $('tbody');
    var titleEl = $('input[name=title]');
    var contentEl = $('input[name=content]');

    //查询  获取数据
    function render(data) {
        tbodyEl.empty();
        $.each(data, function (i, v) {
            var el =
                `<tr data-id="${v.id}">
                    <td style="text-align: center" class="first">${v.id}</td>
                    <td style="text-align: center">${v.title}</td>
                    <td style="text-align: center">${v.content}</td>
                    <td style="text-align: center">
                    <a href="#" class="delete">删除</a> |
                    <a href="#" class="update">更新</a>
                    </td>
                
                 </tr> 
                 `;
            $(el).appendTo(tbodyEl);
        })
    }

    $.ajax({
        url: '/index.php/page/init',
        success: function (data) {
            data = JSON.parse(data);
            render(data);
            var first = $('.first');
            first.each(function (i) {
                $(this).html(i);
            })
        }
    })

    //添加  增加数据
    var btnEl = $('button');
    btnEl.on('click', function () {
        var title = titleEl.val();
        var content = contentEl.val();
        if (title != '' && content != '') {
            $.ajax({
                url: '/index.php/page/insert',
                data: {title: title, content: content},
                success: function (data) {
                    data = JSON.parse(data);
                    var el =
                        `<tr data-id="${data}" style="text-align: center">
                        <td class="first">${data}</td>
                        <td>${title}</td>
                        <td>${content}</td>
                        <td>
                            <a href="#" class="delete">删除</a> |
                            <a href="#" class="update">更新</a>
                        </td>
                     </tr> 
                    `;
                    $(el).appendTo(tbodyEl);
                    titleEl.val('');
                    contentEl.val('');
                }
            });
        }
        return false;
    });
   /* btnEl.addEventListener('click', function () {

    })*/

    //删除  删除数据
    tbodyEl.on('click', '.delete', function () {
        var trEl = $(this).closest('tr');
        var id = trEl.attr('data-id');
        $.ajax({
            url: '/index.php/page/delete',
            data: {id: id},
            success: function (data) {
                if (data === 'ok') {
                    trEl.detach();
                }
            }
        })
    })

    //更新
    var tbd = $('.tbd');
    tbodyEl.on('click', '.update', function () {
        var trE = $(this).closest('tr');
        var id = trE.attr('data-id');
        var title = titleEl.val();
        var content = contentEl.val();
        $.ajax({
            url: '/index.php/page/update_info',
            data: {id: id},
            success: function (data) {
              titleEl.html();
              contentEl.html();
            }
        })
    })

});