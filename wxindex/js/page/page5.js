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
        $page.append('<img id="p5s2" src="img/page5/2.png" width="57%"/>');
        $page.append('<img id="p5s3" src="img/page5/3.png" width="58%"/>');
        $page.append('<img id="p5s4" src="img/page5/4.png" width="59%"/>');
        $page.append('<img id="p5s5" src="img/page5/5.png" width="20%"/>');

        //$page.append('<img src="img/page6/jimi.png" class="jimi" width="20%"/>');
        //$page.append('<img src="img/page6/logo.png" class="logo" width="19%"/>');
        //$page.append('<div class="shugang">|</div>');
    }

    CreateDom();


    //initCss...........................
    function InitCss() {
        $page.find('#p5s1,#p5s2,#p5s3,#p5s4,#p5s5').css({
            position: 'absolute',
            display: 'block',
            left: '100%',
            //transform: 'translateX(-50%) translateY(-50%)',
            //opacity: 1,
        })


        $page.find('#p5s1').css({
            top: '10%',
        })
        $page.find('#p5s2').css({
            top: '27%',
        })

        $page.find('#p5s3').css({
            top: '44%',
        })

        $page.find('#p5s4').css({
            top: '52%',
        })

        $page.find('#p5s5').css({
            top: '69%',
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

        $('#audiopangbai4')[0].play();

        $page.find('#p5s1').delay(0)
            .velocity({
                left: '-100%',
            }, 16000,'linear');


        $page.find('#p5s2').delay(delay+=2000)
            .velocity({
                left: '-100%',
            }, 16000,'linear');

        $page.find('#p5s3').delay(delay+=2000)
            .velocity({
                left: '-100%',
            }, 16000,'linear');

        $page.find('#p5s4').delay(delay+=2000)
            .velocity({
                left: '-100%',
            }, 16000,'linear');

        $page.find('#p5s5').delay(delay+=2000)
            .velocity({
                left: '-100%',
            }, 16000,'linear');


        setTimeout(function(){
            DoPageChange(GM.pageIndex + 1);
        },25000-8600+500);

    }

    AnimateInArr[pageIndex] = In;

    function Out() {

    }

    AnimateOutArr[pageIndex] = Out;

})()
