(function () {

    var pageIndex = 4;//下标
    var $page = GM.$pages.eq(pageIndex);
    var winH = GM.winH;
    var winW = GM.winW;
    var picNum;
    var ease = 'easeInOutQuart';


    //createDom...............
    function CreateDom() {
        $page.append('<img src="img/bg/bgSky.png" class="bgSky" />');
        $page.append('<img src="img/bg/bgGround.png" class="bgGround" />');

        $page.append('<img id="p5s1" src="img/page5/1.png" width="60%"/>');
        $page.append('<img id="p5s2" src="img/page5/2.png" width="60%"/>');
        $page.append('<img id="p5s3" src="img/page5/3.png" width="66%"/>');
        $page.append('<img id="p5s4" src="img/page5/4.png" width="30%"/>');

        $page.append('<img src="img/page6/jimi.png" class="jimi" width="20%"/>');
        $page.append('<img src="img/page6/logo.png" class="logo" width="19%"/>');
        $page.append('<div class="shugang">|</div>');
    }

    CreateDom();


    //initCss...........................
    function InitCss() {
        $page.find('#p5s1,#p5s2,#p5s3,#p5s4').css({
            position: 'absolute',
            display: 'block',
            top: '50%',
            left: '50%',
            //transform: 'translateX(-50%) translateY(-50%)',
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
    }

    InitCss();

    function BindEvent() {
        $page.find('#p5s4').click(function () {
            DoPageChange(GM.pageIndex + 1);
        })
    }

    BindEvent();


    function In() {
        var delay = 0;

        $page.find('#p5s1').delay(0)
            .velocity({
                'translateX': '-50%',
                left: '50%',
                top: '20%'
            }, 0)
            .velocity('transition.slideDownIn', 1500, ease)

        $page.find('#p5s2').delay(delay += 600)
            .velocity({
                'translateX': '-50%',
                left: '50%',
                top: '35%'
            }, 0)
            .velocity('transition.slideDownIn', 1500, ease)

        $page.find('#p5s3').delay(delay += 600)
            .velocity({
                'translateX': '-50%',
                left: '50%',
                top: '45%'
            }, 0)
            .velocity('transition.slideDownIn', 1500, ease)

        $page.find('#p5s4').delay(delay += 600)
            .velocity({
                'translateX': '-50%',
                left: '50%',
                top: '84%'
            }, 0)
            .velocity('transition.slideDownIn', 1500, ease, function () {
                $page.find('#p5s4')
                    .velocity({opacity: 0.2}, {duration: 1000, loop: true});
            });


    }

    AnimateInArr[pageIndex] = In;

    function Out() {

    }

    AnimateOutArr[pageIndex] = Out;

})()
