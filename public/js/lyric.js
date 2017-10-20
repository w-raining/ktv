/**
 * Created by Administrator on 2017/6/28.
 */
$(function () {
    var name = $('input:hidden').val();
    var result = [];
    var lyric = $('.lyric li');
    lyric.empty();
    $.ajax({
        url: `/public/lyrics/${name}.json`,
        dataType: 'json',
        success: function (data) {
            var o = data.lrc.lyric;
            var arr = o.split('\n');
            arr.forEach(function (v, i) {
                o = {
                    time: v.slice(v.indexOf('[') + 1, v.lastIndexOf(']') - 4),
                    lyric: v.slice(v.lastIndexOf(']') + 1),
                };
                result.push(o);
            });
            console.table(result);
            result.forEach(function (v, i) {
                var el =
                    `
                     <li>${v.lyric}</li>
                    `;
                $(el).appendTo($('.content .lyric'))
            })
        }
    });

    //播放
    var audio = $('audio').get(0);
    $('#play').on('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    let lyrics = document.querySelector('.lyric');  //存歌词的div

    //播放开始
    audio.ontimeupdate = function () {
        let current = getTime(audio.currentTime);
        // time1.innerText = Ctime;
        let string = '';

        //清空
        lyrics.innerHTML = '';
        result.forEach(function (value, index) {
            if (value.time == current) {
                x = i = index;
            }
        });
        if (x < 5) {
            i = 0;
        } else {
            i = x - 5;
        }
        for (let j = i; j < result.length; j++) {
            if (j == x) {
                string += `
                    <li id="hot">
                        ${result[j]['lyric']}
                     </li>`;
            } else {
                string += `
                     <li>
                        ${result[j]['lyric']}
                     </li> `;
            }
        }
        lyrics.innerHTML = string;

        //进度条
        // let ctime = audio.currentTime;
        // let wtime = audio.duration;
        // slipN.style.width = ctime / wtime * 100 + '%';

    };


    //时间的转换
    function getTime(time) {
        let minute = Math.floor(time / 60) > 10 ? Math.floor(time / 60) : '0' + Math.floor(time / 60);
        let second = Math.floor(time % 60) > 10 ? Math.floor(time % 60) : '0' + Math.floor(time % 60);
        return `${minute}:${second}`;
    }
});
