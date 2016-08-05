(function () {

    var pageIndex = 1;//下标
    var $page = GM.$pages.eq(pageIndex);
    var winH = GM.winH;
    var winW = GM.winW;


    function CreateDom() {

        $page.append('<img src="img/bg/bgSky.png" class="bgSky" />');
        $page.append('<img src="img/bg/bgGround.png" class="bgGround" />');

        $page.append('<div id="p2Title" style="font-size: 30px">你是哪种人设？</div>');
        $page.append('<div id="p2Option" style="font-size: 30px"></div>');


        //var array = [['高富帅', '白富美'],
        //    ['购物注重性价比<br>钱要花得有道理', '价格多高不重要<br>自己开心最重要'],
        //    ['剁手就剁一整套<br>才不喜欢一一调', '需要什么买什么<br>不看套装看效果']];

        var array = [['p2s1.png', 'p2s2.png'],
            ['p2s3.png', 'p2s4.png'],
            ['p2s5.png', 'p2s6.png']];

        array = [['shou.png', 'shou.png'], ['shou.png', 'shou.png'], ['shou.png', 'shou.png']];
        var str = '';
        for (i = 0; i < 3; i++) {
            str += '<div class="question question' + i + '">' +
                '<div class="option1"><img src="img/page2/' + array[i][0] + '" /></div>' +
                '<div class="option2"><img src="img/page2/' + array[i][1] + '" /></div>' +
                '</div>';
        }

        $page.find('#p2Option').html(str);

    }

    CreateDom();

    function InitCss() {
        $page.find('#p2Title').css({
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#000',
            'text-align': 'center',
            'font-weight': 'bold',
            width: '100%',
        })

        $page.find('.question').css({
            opacity: 1,
        }).velocity({
            translateY: 0
        }, 0)

        $page.find('#p2Option').css({
            position: 'absolute',
            top: '45%',
            left: '50%',
            color: '#000',
            'text-align': 'center',
            'font-weight': 'bold',
            width: '100%',
            height: 600,
            //border: '1px solid black',
        }).velocity({
            translateX: '-50%',
            translateY: 0
        }, 0)
    }

    InitCss();

    var clickIndex = 0;

    function BindEvent() {
        $page.find('.option1,.option2').click(function () {
            var that = this;
            clickIndex++;
            $(that).siblings().velocity({opacity: 0}, 500, 'ease', function () {

                $(that).closest('.question').velocity({translateY: -100, opacity: 0}, 500, 'ease');

                $page.find('#p2Option')
                    .velocity({translateX: '-50%'}, 0)
                    .velocity({translateY: '-=200'}, 500, 'ease', function () {
                        if (clickIndex == $page.find('.question').length) {
                            DoPageChange(GM.pageIndex + 1);
                        }
                    });
            })

        })
    }

    BindEvent();


    function In() {
        clickIndex = 0;
        InitCss();
        //BindEvent();
    }

    AnimateInArr[pageIndex] = In;

    function Out() {
        InitCss();
    }

    AnimateOutArr[pageIndex] = Out;
})()
