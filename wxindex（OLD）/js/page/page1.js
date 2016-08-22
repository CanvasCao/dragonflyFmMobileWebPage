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
        $page.append('<img id="p1s2" src="img/page1/p1s2.png" width="40%"/>');
        $page.append('<img id="p1s3" src="img/page1/p1s3.png" width="30%"/>');
        $page.append('<img id="suitcase" src="img/page1/suitcase.png" width="30%"/>');
    }

    CreateDom();

    function InitCss() {
        $page.find('#p1s1,#p1s2,#p1s3,#suitcase').css({
            position: 'absolute',
            display: 'block',
            top: '50%',
            left: '50%',
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
        var delay = 0;

        setTimeout(function(){
            $('#audiopangbai1')[0].play();
        },500);

        $page.find('#p1s1').delay(0)
            .velocity({
                'translateX': '-50%',
                left: '50%',
                top: '25%'
            }, 0)
            .velocity('transition.bounceDownIn', 1500, ease, function () {

            })


        $page.find('#p1s2').delay(delay += 200)
            .velocity({
                'translateX': '-50%',
                left: '50%',
                top: '35%'
            }, 0)
            .velocity('transition.bounceDownIn', 1500, ease, function () {
            })


        $page.find('#p1s3').delay(delay += 200)
            .velocity({
                'translateX': '-50%',
                left: '50%',
                top: '65%'
            }, 0)
            .velocity('transition.bounceDownIn', 1500, ease)

        $page.find('#suitcase').delay(delay += 200)
            .velocity({
                'translateX': '-50%',
                left: '50%',
                top: '70%'
            }, 0).velocity('transition.bounceDownIn', 1500, ease, function () {
                $page.find('#suitcase')
                    .velocity({opacity: 0.2}, {duration: 1000, loop: true});

            })


    }


    AnimateInArr[pageIndex] = In;

    function Out() {
        $page.find('#suitcase').velocity('stop').velocity({opacity: 0});
        $('#audiopangbai1')[0].pause();
    }

    AnimateOutArr[pageIndex] = Out;

})()
