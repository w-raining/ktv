/**
 * Created by hp on 2017/7/7.
 */
/**
 * Created by hp on 2017/7/7.
 */
$(function () {

    if(!location.hash){
        location.href=location.pathname+'#list';
    }
    $(window).on('hashchange',function () {
        $('.nav-tabs li, .tab-pane').removeClass('active');
        $(location.hash).addClass('active');
        $(location.hash+'-tab').addClass('active');
        if(location.hash=='#list'){
            //查
            $.ajax({
                url:'/www/index.php/admin_gedan/admin',
                success:function (data) {
                    data=JSON.parse(data);
                    $('tbody').empty();
                    $.each(data,function (i,v) {
                        var el=`<tr style="text-align: center" cid="${v.id}">
                    <td>${v.id}</td>
                    <td>
                        <input class="name" type="text" value="${v.name}">
                    </td>
                    <td>
                        <img src="${v.pic}" alt="" style="width: 100px;">
                    </td>
                    <td>
                        <input class="cid" type="text" value="${v.cid}">
                    </td>
                    <td>
                        <a href="#" class="delete">删除</a>|
                        <a href="/www/index.php/music/singeradmin#add">添加歌手</a>
                    </td>
                </tr>`
                        $(el).appendTo($('tbody'));
                    })
                }
            });
        }
    })
    $(window).trigger('hashchange')

    //增
    $('.btn').on('click',function () {
        // var name=nameEl.val();
        // var pic=picEl.val();
        // var cid=cidEl.val();
        // console.log(cid)
        // $.ajax({
        //     url:'/www/index.php/admin_gedan/add',
        //     data:{name:name,pic:pic,cid:cid},
        //     success:function (data) {
        //         var el=`<tr style="text-align: center" cid="${data}">
        //             <td>${data}</td>
        //             <td>
        //                 <input class="name" type="text" value="${name}">
        //             </td>
        //             <td>
        //                 <input class="pic" type="text" value="${pic}">
        //             </td>
        //             <td>
        //                 <input class="cid" type="text" value="${cid}">
        //             </td>
        //             <td>
        //                 <a href="#" class="delete">删除</a>|
        //                 <a href="#">添加歌手</a>
        //             </td>
        //         </tr>`
        //         $(el).prependTo($('tbody'));
        //         location.href=location.pathname+'#list';
        //     }
        // });
        var fromdata = new FormData($('.form').get(0));
        $.ajax({
            url: '/www/index.php/admin_gedan/add',
            method:'post',
            data:fromdata,
            processData:false,
            contentType:false,
            success: function (data) {
                location.href = location.pathname + '#list';
            }
        });
        return false;
    });
    //删
    $('tbody').on('click','.delete',function () {
        var tr=$(this).closest('tr');
        var id=tr.attr('cid');
        $.ajax({
            url:'/www/index.php/admin_gedan/delete',
            data:{id:id},
            success:function (data) {
                if(data==='ok'){
                    tr.remove();
                }
                location.href=location.pathname+'#list';
            }
        })
    });
    //改
    $('tbody').on('change','.name,.pic',function () {
        var key=$(this).attr('class');
        var value=$(this).val();
        var id=$(this).closest('tr').attr('cid');
        $.ajax({
            url:'/www/index.php/admin_gedan/update',
            data:{key:key,value:value,id:id}
        })
    })



    $('#file').on('change',function () {
        $(this).prev().html(this.files[0].name)
    })
});