(function () {

    var pageIndex = 0;//下标
    var $page = GM.$pages.eq(pageIndex);
    var winH = GM.winH;
    var winW = GM.winW;
    var ease = 'ease';
    var tadaTimer = null;


    function CreateDom() {
        $page.append('<img src="img/bg/bgSky.png" class="bgSky" />');
        $page.append('<img src="img/bg/bgGround.png" class="bgGround" />');

        $page.append('<img id="p1s1" src="img/page1/p1s1.png" width="40%"/>');
        $page.append('<img id="p1s2" src="img/page1/p1s2.png" width="40%"/>');
        $page.append('<img id="p1s3" src="img/page1/p1s3.png" width="20%"/>');
        $page.append('<img id="suitcase" src="img/page1/suitcase.png" width="30%"/>');
    }

    CreateDom();

    function InitCss() {
        $page.find('#p1s1,#p1s2,#p1s3,#suitcase').css({
            position: 'absolute',
            display: 'block',
            top: '50%',
            left: '50%',
            //transform: 'translateX(-50%) translateY(-50%)',
            opacity: 0,
        })


    }

    InitCss();


    function BindEvent() {
        $page.find('#suitcase').click(function () {
            DoPageChange(GM.pageIndex + 1);
        })
    }

    BindEvent();


    function In() {
        $page.find('#p1s1').velocity({
            top: '5%',
            opacity: 0,
            'translateX': '-50%',
        }, 0).velocity({top: '25%', opacity: 1}, 1500, ease);

        $page.find('#p1s2').delay(200).velocity({
            top: '15%',
            opacity: 0,
            'translateX': '-50%',
        }, 0).velocity({
            top: '35%',
            opacity: 1
        }, 1500, ease);

        $page.find('#p1s3').delay(400).velocity({
            top: '45%',
            opacity: 0,
            'translateX': '-50%',
        }, 0).velocity({
            top: '65%',
            opacity: 1,
        }, 1500, ease);

        $page.find('#suitcase').delay(400).velocity({
            top: '50%',
            opacity: 0,
            'translateX': '-50%',
        }, 0).velocity({
            top: '70%',
            opacity: 1,
        }, 1500, ease, function () {
            $page.find('#suitcase')
                .velocity({opacity: 0.2}, {duration:1000,loop: true});
        });
    }


    AnimateInArr[pageIndex] = In;

    function Out() {
        //clearInterval(tadaTimer);
        //delete(tadaTimer);
        $page.find('#suitcase').velocity('stop').velocity({opacity: 0});
    }

    AnimateOutArr[pageIndex] = Out;

})()
