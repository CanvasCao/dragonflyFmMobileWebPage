//$.Velocity.mock=0.2;
//jqObj................................
GM.$up = $('.up');
GM.$down = $('.down');
GM.$pages = $('.page');
GM.pageNum = GM.$pages.length;


//paras................................
GM.pageIndex = null; //索引从0开始
GM.isConVelocited = false;
GM.winH = $(window).height();
GM.winW = $(window).width();
GM.RATE = GM.winH / 736;

//initDy........................................
GM.$pages.velocity({"translateY": GM.winH}, 0, 'linear');
//GM.$pages.eq(GM.pageIndex).velocity({"translateY": 0}, 0, 'linear');


//bindClickEvent..........................................
GM.$up.click(function (e) {
    DoPageChange((GM.pageIndex - 1));
})
GM.$down.click(function (e) {
    DoPageChange((GM.pageIndex + 1));
})


function DoPageChange(newIndex, duration) {
    if (GM.isConVelocited) {
        return;
    }
    var oldIndex = GM.pageIndex;
    newIndex = newIndex < 0 ? 0 : newIndex;//验收
    newIndex = newIndex >= GM.pageNum ? ( GM.pageNum - 1) : newIndex;//验收

    if (oldIndex == newIndex) {
        return;
    }

    GM.pageIndex = newIndex;
    GM.isConVelocited = true;
    var duration = duration || 800;
    var ease = 'easeInOutQuart';

    //判断当前的page是上移还是下移
    var dir = (oldIndex > GM.pageIndex) ? 'down' : 'up'; //-1 1

    //上移的代码
    if (dir == 'up') {
        if (oldIndex != null) {
            GM.$pages.eq(oldIndex).delay(20).velocity({translateY: -GM.winH}, duration, ease);
        }
        GM.$pages.eq(GM.pageIndex).delay(0).velocity({translateY: GM.winH}, 0).velocity({translateY: 0}, duration, ease);
    }
    //下移的代码
    else {
        if (oldIndex != null) {
            GM.$pages.eq(oldIndex).delay(20).velocity({translateY: GM.winH}, duration, ease);
        }
        GM.$pages.eq(GM.pageIndex).delay(0).velocity({translateY: -GM.winH}, 0).velocity({translateY: 0}, duration, ease);
    }

    //翻页截流.......................................
    setTimeout(function () {
        GM.isConVelocited = false;


        //进场入场动画...................................
        if (AnimateOutArr[oldIndex]) {
            AnimateOutArr[oldIndex]();
        }
        AnimateInArr[GM.pageIndex]();
    }, 800)


}
window.DoPageChange = DoPageChange;


window.AnimateInArr =
    [
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
    ];
window.AnimateOutArr =
    [
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
        function () {
        },
    ];