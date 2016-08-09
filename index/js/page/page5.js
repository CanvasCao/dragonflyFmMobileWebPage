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

        $page.append('<img id="p5s1" src="img/page5/1.png" width="40%"/>');
        $page.append('<img id="p5s2" src="img/page5/2.png" width="40%"/>');
        $page.append('<img id="p5s3" src="img/page5/3.png" width="20%"/>');
        $page.append('<img id="p5s4" src="img/page5/4.png" width="20%"/>');

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


    }

    InitCss();


    function In() {
    }

    AnimateInArr[pageIndex] = In;

    function Out() {

    }

    AnimateOutArr[pageIndex] = Out;

})()
