(function () {

    //$.Velocity.mock = 0.5;

    $page2 = $('.page').eq(1);
    var txtArr = ['海滨海岛', '高原圣地', '户外探险', '时尚都市', '古镇水乡', '乡村田园'];

    var str = '';
    for (i = 0; i < 6; i++) {
        str += "<div class='section'>" +
            " <div class='secCir'><img class='secImg' src='img/" + (i + 1) + ".png'/></div>" +
            "<div class='secTxt'>" + txtArr[i] + "</div>" +
            "</div>"
    }
    $page2.append(str);

    var sections = $page2.find('.section');
    var ease = 'easeInOutQuart';
//         ease = 'ease';
    var secH = sections.height();
    var secW = sections.width();
    var winH = $(window).height();
    var winW = $(window).width();
    var dx = winW / 4;
    var dy = winH * 1 / 3 * 0.9;
    var mock = 1;
    var secPosArr = [
        [-dx, -dy],   //1
        [dx, -dy],    //2
        [-dx, 0],     //3
        [dx, 0],      //4
        [-dx, dy],    //5
        [dx, dy],     //6
    ];


    //六张图移动到固定位置.....................
    sections.each(function (i, e) {
        $(e).velocity({
            top: '50%',
            left: '50%',
            'translateX': -secW / 2,
            'translateY': -secH / 2,
            'opacity': 0
        }, 0, ease).delay(i * 100).velocity({
            'translateX': -secW / 2 + secPosArr[i][0] + 'px',
            'translateY': -secH / 2 + secPosArr[i][1] + 'px',
            'opacity': 1
        }, 2500, ease);
    });


    sections.find('.secCir').click(function () {
        var that = this;
        var $parent = $(this).parent();

        $parent.velocity({
            'translateX': -secW / 2,
            'translateY': -secH / 2,
        }, 2000, ease).velocity({
            'translateX': '-50%',
            'translateY': '-50%',
        }, 0, 'linear', function () {

        });

        $(this)
            .velocity({'border-radius': '0%'}, 2000, ease);

        $parent.find('.secTxt').velocity({opacity: 0}, 1000, ease);
        $parent.siblings('.section').velocity({opacity: [0, 1]}, 1000, ease);

    })

})()
