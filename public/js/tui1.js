/**
 * Created by Administrator on 2017/6/28.
 */
$(function () {
    var playlist=[];

    function render() {
        if (localStorage.playlist) {
            playlist = JSON.parse(localStorage.playlist)
        }
        $('.list .con').empty();
        playlist.forEach(function (v, i) {
            var el =
                `
                 <div class="list1" data-id="${v.id}">
                    <a href="/index.php/geshou/lyric?id=${v.id}">
                        <div class="left">
                        
                    </div>
                    <div class="left1" style=" background: url('${v.singer1_pic}') -.16rem -0.2rem no-repeat;
    background-size: 2rem;"></div>
                    <p class="text">${v.name}－${v.singer1_singer} <br><span>${v.duration}</span></p>
                    <div class="del"></div>
                    <div class="tops"></div>
                    </a>
                   
                 </div>
            `;
            $(el).appendTo($('.list .con'));
        })
            $('#num').html(playlist.length);
    }

    render();

    $('.list .con').on('click', '.del', function () {
        var lis = $(this).closest('.list1');
        var id = $(this).closest('.list1').attr('data-id');
        playlist = playlist.filter(function (v) {
            return v.id != id;
        })
        localStorage.playlist = JSON.stringify(playlist);
        render();
        return false;
    })
    $('.list .con').on('click', '.tops', function () {
        let id = $(this).closest('.list1').attr('data-id');
        let index;
        playlist.forEach(function (v, i) {
            if (v.id == id) {
                index = i;
            }
            playlist.unshift(playlist.splice(index, 1)[0]);
            localStorage.playlist = JSON.stringify(playlist);
            render();
        })
        return false;

    })

});
