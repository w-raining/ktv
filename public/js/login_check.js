/**
 * Created by Administrator on 2017/6/30.
 */
$(function () {
    $('button[type=submit]').on('click', function () {
        var formdata = $('#form').serializeArray();
        var postdata = [];
        formdata.forEach(function (v,i) {
            postdata[v.name] = v.value;
        });
        $.ajax({
            url: '/index.php/loginadmin/check',
            dataType: 'json',
            method: 'post',
            data: postdata,
            success: function (data) {
                if (data == 'error') {
                    alert('登录失败');
                } else if (data == 'ok') {
                    // location.href = '/index.php/wateradmin/index';
                    alert('登录成功');
                }
            }

        });
        return false;
    })
});
/*php上传文件大小如何修改
* 删除的时候数据库中要删掉   文件也要删掉
*
* */
