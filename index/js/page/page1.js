(function () {

    var pageIndex = 0;//下标
    var $page = GM.$pages.eq(pageIndex);
    var winH = GM.winH;
    var winW = GM.winW;
    var ease = 'ease';


    function CreateDom() {
        $page.append('<img src="img/bg/bgSky.png" class="bgSky" />');
        $page.append('<img src="img/bg/bgGround.png" class="bgGround" />');

        $page.append('<img id="p1s1" src="img/page1/p1s1.png" width="40%"/>');
        $page.append('<img id="p1s2" src="img/page1/p1s2.png" width="36%"/>');
        $page.append('<img id="p1s3" src="img/page1/p1s3.png" width="30%"/>');
        $page.append('<img id="suitcase" src="img/page1/suitcase.png" width="30%"/>');

        $page.append('<div class="mask">' +
            '<img class="finger" src="img/page1/finger.png" width="15%"/>' +
            '<img class="on" src="img/page1/on.png" width="24%"/>' +
            '</div>')
    }

    CreateDom();

    function InitCss() {
        $page.find('#p1s1').css({
            position: 'absolute',
            left: '50%',
            top: '25%'
        }).velocity({
            translateX: '-50%',
        }, 0)

        $page.find('#p1s2').css({
            position: 'absolute',
            left: '50%',
            top: '35%'
        }).velocity({
            translateX: '-50%',
        }, 0)

        $page.find('#p1s3').css({
            position: 'absolute',
            left: '50%',
            top: '65%'
        }).velocity({
            translateX: '-50%',
        }, 0)

        $page.find('#suitcase').css({
            position: 'absolute',
            left: '50%',
            top: '70%'
        }).velocity({
            translateX: '-50%',
        }, 0, function () {
        })

        $page.find('.mask').css({
            position: 'absolute',
            top: '0%',
            left: '0%',
            width: '100%',
            height: '100%',
            background: 'black',
            opacity: 0.8,
        })

        $page.find('.finger').css({
            position: 'absolute',
            top: '53%',
            left: '50%',
            'pointer-events': 'none'
        }).velocity({translateX: '-50%'}, 0)

        $page.find('.on').css({
            position: 'absolute',
            top: '32%',
            left: '50%',
            transform: 'translateX(-50%)',
            'pointer-events': 'none'
        })
    }

    InitCss();


    function BindEvent() {
        $page.find('.mask').click(function () {
            $(this).fadeOut();
            $('#audiopangbai1')[0].play();

            //行李箱闪烁............................
            $page.find('#suitcase')
                .velocity({opacity: 0.2}, {duration: 1000, loop: true});

        })

        $page.find('#suitcase').click(function () {
            DoPageChange(GM.pageIndex + 1);

                $('#audiopangbai2')[0].play();
        })
    }

    BindEvent();


    function In() {
        var delay = 0;

        //手指移动..............................
        $page.find('.finger').velocity({translateX: '-50%'}, 0)
            .velocity({translateX: '-50%', top: '50%'}, {loop: true, duration: 1000, ease: ease});


    }


    AnimateInArr[pageIndex] = In;

    function Out() {
        $page.find('#suitcase').velocity('stop').velocity({opacity: 0});
        $('#audiopangbai1')[0].pause();
    }

    AnimateOutArr[pageIndex] = Out;

})()
