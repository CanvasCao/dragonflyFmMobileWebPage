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

        $page.append('<img src="img/page6/jimi.png" class="jimi" width="10%"/>');
        $page.append('<img src="img/page6/logo.png" class="logo" width="18%"/>');
        $page.append('<div class="shugang">|</div>');

        $page.append('<div class="mask" style="z-index: 2"><img src="img/page6/share.png" class="share" width="35%"/></div>');


        for (i = 0; i < 6; i++) {
            $page.append('<div class="stage stage' + i + '"><div class="sec"><div class="text"></div><img /></div></div>');
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
            top: '92%',
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
                perspective: '200px',
                'box-shadow': '3px 3px 3px rgba(0,0,0,0.2)',
                'overflow': 'hidden',

            }).velocity({
                'translateX': '-50%',
                'translateY': '-50%',
            })

            $(e).find('.sec').css({
                width: winW * 0.27,
                height: winW * 0.27,
                background: 'white',
                'backface-visibility': 'hidden',
                'text-align': 'center',
                opacity: 0,
                'box-sizing': 'border-box',
                'padding': '2px 2px 3px',
            }).find('img').css({
                height: '50%',
            })

            $(e).find('.text').css({
                'font-size': '12px',
                height: '50%',
                color: '#ccc',
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
            window.location.reload();
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


    function In() {
        var delay = 0;
        var defaultArr = [{
            "pname": "资生堂亲肤净透卸妆霜",
            "url": "www.jd.com",
            "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/images/qinfu.jpg",
            "online_price": "189.00"
        }, {
            "pname": "资生堂洗颜专科柔澈泡沫洁面乳",
            "url": "www.jd.com",
            "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/proImg/image_20160325_56f4d0e0b990f.jpg",
            "online_price": "45.00"
        }, {
            "pname": "资生堂悦薇珀翡焕活洁面膏",
            "url": "www.jd.com",
            "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/proImg/image_20160325_56f4b757544c6.jpg",
            "online_price": "285.00"
        }, {
            "pname": "资生堂亲肤净透卸妆霜",
            "url": "www.jd.com",
            "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/images/qinfu.jpg",
            "online_price": "189.00"
        }, {
            "pname": "资生堂洗颜专科柔澈泡沫洁面乳",
            "url": "www.jd.com",
            "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/proImg/image_20160325_56f4d0e0b990f.jpg",
            "online_price": "45.00"
        }, {
            "pname": "资生堂悦薇珀翡焕活洁面膏",
            "url": "www.jd.com",
            "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/proImg/image_20160325_56f4b757544c6.jpg",
            "online_price": "285.00"
        }];
        var products = GM.products || defaultArr;


        //六个图定位..............................................
        //图片在controller已经加载了
        $page.find('.stage').each(function (i, e) {
            $(e).find('.sec').velocity({
                rotateY: 540,
                opacity: 1
            }, 0)
                .delay(500 + i * 100).velocity({
                    rotateY: 0,
                }, 1600, ease);

        });

    }

    AnimateInArr[pageIndex] = In;

    function Out() {

    }

    AnimateOutArr[pageIndex] = Out;

})
()
