$(function () {
    var add = $('.cbc-a .cbc-list .right');
    var l_friend = $('.l_friend');

    var friendList;
    if (localStorage.friendList) {
        friendList = JSON.parse(localStorage.friendList);
    } else {
        friendList = [];
    }

    friendList.forEach(function (v, i) {
        $('.c' + v.id).find('.right').addClass('active').html('已添加');
    });

    add.on('click', function () {
        $(this).addClass('active').html('已添加');
        let o = JSON.parse($(this).closest("li").attr("id"));
        friendList1 = friendList.filter(function (v, i) {
            return v.id == o.id;
        });
        if (!friendList1.length) {
            friendList.push(o);
        }
        localStorage.friendList = JSON.stringify(friendList);
        $.ajax({
            url: '/date/index.php/friendlist/add_calllist',
            data: {
                nid: o['nid'],
                name: o['name'],
                pic: o['pic'],
                sign: o['sign'],
                act: o['act'],
                message: o['message']
            },
            success: function (data) {

            }
        });
        return false;
    });





});