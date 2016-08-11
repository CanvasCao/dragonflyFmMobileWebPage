(function () {

    var pageIndex = 5;//下标
    var $page = GM.$pages.eq(pageIndex);
    var winH = GM.winH;
    var winW = GM.winW;
    var ease = 'easeInOutQuart';
    //var products = GM.products;
    //console.log(JSON.stringify(products));

    //createDom...............
    function CreateDom() {


        $page.append('<img src="img/bg/bgSky.png" class="bgSky" style="opacity: 0.3"/>');
        $page.append('<img src="img/bg/bgGround.png" class="bgGround" style="opacity: 0.3"/>');


        $page.append('<img src="img/page6/btn1.png" class="btn btn1" width="25%"/>');
        $page.append('<img src="img/page6/btn2.png" class="btn btn2" width="25%"/>');
        $page.append('<img src="img/page6/btn3.png" class="btn btn3" width="25%"/>');

        $page.append('<img src="img/page6/jimi.png" class="jimi" width="20%"/>');
        $page.append('<img src="img/page6/logo.png" class="logo" width="19%"/>');
        $page.append('<div class="shugang">|</div>');

        $page.append('<div class="mask" style="z-index: 2"><img src="img/page6/share.png" class="share" width="35%"/></div>');


        for (i = 0; i < 6; i++) {
            $page.append('<div class="stage stage' + i + '"><div class="sec"><img /><div class="blackMask"></div><div class="text"></div></div></div>');
        }
    }

    CreateDom();


    //initCss...........................
    function InitCss() {
        $page.find('.mask').css({
            position: 'absolute',
            display: 'block',
            top: '0%',
            left: '0%',
            width: '100%',
            height: '100%',
            background: 'white',
            display: 'none',
        })

        $page.find('.btn').css({
            position: 'absolute',
            top: '83%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
        })

        $page.find('.btn1').css({
            left: '20%',
        })
        $page.find('.btn3').css({
            left: '80%',
        })

        $page.find('.share').css({
            position: 'absolute',
            'pointer-events': 'none',
            opacity: 0,
        })

        $page.find('.jimi').css({
            position: 'absolute',
            top: '93%',
            left: '59%',
        })
        $page.find('.logo').css({
            position: 'absolute',
            top: '93%',
            left: '26%',
        })
        $page.find('.shugang').css({
            position: 'absolute',
            top: '94%',
            left: '51%',
            color: "#ccc",
        })

        //舞台定位

        var posArr = [[15, 30], [15, 70], [40, 30], [40, 70], [65, 30], [65, 70],];
        $page.find('.stage').each(function (i, e) {
            $(e).css({
                position: 'absolute',
                top: posArr[i][0] + '%',
                left: posArr[i][1] + '%',
                width: winW * 0.27,
                height: winW * 0.27,
                border: '5px solid #eee',
                //'box-sizing': 'border-box',
                perspective: '200px',
                'box-shadow': '3px 3px 3px rgba(0,0,0,0.2)',
                //'overflow': 'hidden',
            }).velocity({
                'translateX': '-50%',
                'translateY': '-50%',
            }, 0)

            $(e).find('.sec').css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: winW * 0.27 - 0,
                height: winW * 0.27 - 0,
                'backface-visibility': 'hidden',
                '-webkit-backface-visibility': 'hidden',
                'text-align': 'center',
                opacity: 0,


            }).find('img').css({
                display: 'block',
                height: '100%',
                width: '100%',
                margin: '0 auto',
                'overflow': 'hidden',
            })

            $(e).find('.blackMask').css({
                position: 'absolute',
                top: '0%',
                left: '0%',
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.5)',
            })

            $(e).find('.text').css({
                'font-size': '12px',
                color: '#fff',
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '100%',
                transform: 'translateX(-50%) translateY(-50%)',
                '-webkit-transform': 'translateX(-50%) translateY(-50%)',
                'box-sizing': 'border-box',
                'padding': '5px',

            })
        })

    }

    InitCss();

    function BindEvent() {
        $page.find('.mask').click(function () {
            $page.find('.mask,.share').velocity({opacity: 0}, 'slow', ease, function () {
                $page.find('.mask,.share').css('display', 'none');
            });
        })

        $page.find('.btn1').click(function () {
            localStorage.removeItem('jimiProducts');
            setTimeout(function () {
                window.location.href = 'http://n1.jimi.la/apps_T1/WebJsonpTest/index/index.html';
            }, 10)
        })

        $page.find('.btn2').click(function () {
            var ua = navigator.userAgent;
            if (ua.charAt('iphone') != -1 && ua.charAt('Mac') != -1) {//说明不是IPHONE
                window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.jimi.skinsecret#opened';
            }
            else {
                window.location.href = 'https://itunes.apple.com/us/app/id1074206874';
            }
        })

        $page.find('.btn3').click(function () {
            $page.find('.mask,.share').css({'display': 'block', opacity: 0});

            $page.find('.mask').velocity({opacity: 0.7}, 'slow', ease);
            $page.find('.share')
                .velocity({
                    top: '36%',
                    left: '36%',
                }, 0).velocity({
                    top: '6%',
                    left: '56%',
                    opacity: 1,
                }, 1000, ease);
        })
    }

    BindEvent();


    function In(ifDirect) {
        var delay = 0;

        var products = JSON.parse(localStorage.getItem('jimiProducts')).data;

        //如果根据localStorage直接进...............
        if (ifDirect) {
            //设置文字 图片.....
            $page.find('.stage').each(function (i, e) {
                $(e).find('.sec img').attr({src: products[i].imgUrl});
                $(e).find('.sec .text').html(products[i].pname);
                $(e).click(function () {
                    window.location.href = products[i].url;
                })
            });
        }

        //六个图定位..............................................
        //图片在controller已经加载了
        $page.find('.sec').each(function (i, e) {
            $(e).velocity({
                rotateY: 180,
                opacity: 0,
            }, 0)
                .delay(500 + i * 100).velocity({
                    rotateY: -0.1,
                    opacity: 1,

                }, 2000, ease);

        });

    }

    AnimateInArr[pageIndex] = In;

    function Out() {

    }

    AnimateOutArr[pageIndex] = Out;

})
()
