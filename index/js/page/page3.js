(function () {

    //$.Velocity.mock = 0.5;
    var pageIndex = 2;//下标
    var $page = GM.$pages.eq(pageIndex);
    var winH = GM.winH;
    var winW = GM.winW;


    //createDom...............
    function CreateDom() {
        $page.append('<img src="img/bg/bgSky.png" class="bgSky" />');
        $page.append('<img src="img/bg/bgGround.png" class="bgGround" />');

        var txtArr = ['海滨海岛', '高原圣地', '户外探险', '时尚都市', '古镇水乡', '乡村田园'];
        var str = '';
        for (i = 0; i < 6; i++) {
            str += "<div class='section'>" +
                " <div class='secCir' data=" + (i + 1) + "><img class='secImg' src='img/page3/" + (i + 1) + ".png'/></div>" +
                "<div class='secTxt'><img src='img/page3/txt" + (i + 1) + ".png'/></div>" +
                "</div>"
        }
        $page.append(str);


        $page.append('<img src="img/page3/maskTxt.png" class="maskTxt" width=70%/>');
    }

    CreateDom();

    //initCss...........................
    function initCss() {
        $page.find('.section').css({
            position: 'absolute',
            'text-align': 'center',
            opacity: 0,
            width: winW / 2,
        })

        $page.find('.secCir').css({
            margin: '0 auto 7px',
            'border-radius': '50%',
            'box-shadow': '5px 5px 10px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            width: winW / 4,
            height: winW / 4,
        }).find('img').css({
            width: '100%',
        })

        $page.find('.secTxt').css({
            margin: '0 auto',
            'opacity': 1,
            width: winW / 6,
        }).find('img').css({
            width: '100%',
        })


        $page.find('.maskTxt').css({
            position: 'absolute',
            color: 'white',
            top: "40%",
            left: "50%",
            opacity: 0,
        })


    }

    initCss();


    var sections = $page.find('.section');
    var ease = 'easeInOutQuart';
    ease = 'ease';
    var secH = sections.height();
    var secW = sections.width();
    var dx = winW / 4 * 0.8;
    var dy = winH * 1 / 3 * 0.85;
    var secPosArr = [
        [-dx, -dy],   //1
        [dx, -dy],    //2
        [-dx, 0],     //3
        [dx, 0],      //4
        [-dx, dy],    //5
        [dx, dy],     //6
    ];
    var ifClicked = false;

    function initPos() {

        $page.find('.maskTxt')
            .velocity({'translateX': '-50%'}, 0)
            .velocity('transition.bounceDownIn', 1000, ease)
            .delay(1000).velocity('fadeOut', 'fast', ease, function () {
                splitOut();
            })

        function splitOut() {
            sections.each(function (i, e) {
                //六张图移动到中心位置.....................
                $(e).velocity({
                    top: '50%',
                    left: '50%',
                    'translateX': -secW / 2,
                    'translateY': -secH / 2,
                    'opacity': 0
                }, 0, ease)
                    //六张图分散移动.....................
                    .delay(i * 100).velocity({
                        'translateX': -secW / 2 + secPosArr[i][0] + 'px',
                        'translateY': -secH / 2 + secPosArr[i][1] + 'px',
                        'opacity': 1
                    }, 'slow', ease);
            });
        }

    }

    //initPos();


    //bindEvent......................
    function bindEvent() {
        ifClicked = false;
        sections.find('.secCir').click(function () {
            var that = this;

            if (ifClicked) {
                return;
            }

            var $parent = $(this).parent();
            ifClicked = true;

            //索引............
            var picNum = $(this).attr('data');

            //点击以后父元素回到中间
            $parent.velocity({
                'translateX': -secW / 2,
                'translateY': -secH / 2,
            }, 'fast', ease).velocity({
                'translateX': '-50%',
                'translateY': '-50%',
            }, 0, 'linear', function () {

            });

            //去掉圆角...
            $(this).velocity({'border-radius': '0%'}, 'normal', ease);

            //其他消失...
            $parent.find('.secTxt').velocity({opacity: 0}, 'normal', ease);
            $parent.siblings('.section').velocity({opacity: [0, 1]}, 'normal', ease, function () {

                //第二页和第三页的交替代码 此处不用doPageChange

                //第三页瞬移到屏幕.....
                GM.$pages.eq(GM.pageIndex + 1).velocity({"translateY": 0}, 0);

                //第二页淡出 移动到上方.....
                GM.$pages.eq(GM.pageIndex).css({'z-index': 1})
                    .velocity({"opacity": 0}, 'normal', ease)
                    .velocity({"translateY": -GM.winH, "opacity": 1}, 0, 'linear', function () {
                    });
                AnimateInArr[GM.pageIndex + 1](picNum);
                GM.pageIndex++;

            });


        })
    }

    //bindEvent();


    function In() {
        initCss();
        bindEvent();
        initPos();
    }

    AnimateInArr[pageIndex] = In;

    function Out() {
    }


})()
