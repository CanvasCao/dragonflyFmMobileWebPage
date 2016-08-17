(function () {

    var pageIndex = 1;//下标
    var $page = GM.$pages.eq(pageIndex);
    var winH = GM.winH;
    var winW = GM.winW;
    var ease = 'ease';
    var clickIndex = 0; //问题被点击到第几个的索引

    function CreateDom() {

        $page.append('<img src="img/bg/bgSky.png" class="bgSky" />');
        $page.append('<img src="img/bg/bgGround.png" class="bgGround" />');

        //标题
        $page.append('<img src="img/page2/p2s0.png" id="p2Title" width="60%"/>');
        //选项
        $page.append('<div id="p2Option"></div>');


        //var array = [['高富帅', '白富美'],
        //    ['购物注重性价比<br>钱要花得有道理', '价格多高不重要<br>自己开心最重要'],
        //    ['剁手就剁一整套<br>才不喜欢一一调', '需要什么买什么<br>不看套装看效果']];

        var array = [['p2s1.png', 'p2s2.png'],
            ['p2s3.png', 'p2s4.png'],
            ['p2s5.png', 'p2s6.png']];

        var dataKeyArray = ['sex', 'is_sexprice', 'is_buy_series'];
        var dataValueArray = [[1, 0], [1, 0], [1, 0]];
        var dataAnswerArray = [[1, 2], [3, 4], [5, 6]];

        var str = '';
        for (i = 0; i < 3; i++) {
            str += '<div class="question question' + i + '">' +
                '<div class=option1 datakey=' + dataKeyArray[i] + ' datavalue=' + dataValueArray[i][0] + ' dataanswer=' + dataAnswerArray[i][0] + '><img src="img/page2/' + array[i][0] + '" /></div>' +
                '<div class=option2 datakey=' + dataKeyArray[i] + ' datavalue=' + dataValueArray[i][1] + ' dataanswer=' + dataAnswerArray[i][1] + '><img src="img/page2/' + array[i][1] + '" /></div>' +
                '</div>';
        }

        $page.find('#p2Option').html(str);

    }

    CreateDom();

    function InitCss() {
        $page.find('#p2Title').css({
            position: 'absolute',
            top: '15%',
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: 0,
        })

        $page.find('#p2Option').css({
            position: 'absolute',
            top: '30%',
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


        //问题 选项容器
        $page.find('.question').css({
            opacity: 0,
            width: '100%',
            height: 180,
        }).velocity({
            translateY: 0
        }, 0)

        //选项
        $page.find('.option1,.option2').css({
            display: 'inline-block',
            width: '50%',
        }).find('img').css({
            width: '100%',
        })

    }

    InitCss();


    function BindEvent() {
        $page.find('.option1,.option2').click(function () {
            var that = this;

            //点击的必须是当前问题 否则无效..............................
            var questionIndex = $(that).parent().index();
            if (clickIndex != questionIndex) {
                return;
            }
            clickIndex++;

            //朗读回答........................................
            var answerNum = $(this).attr('dataanswer');
            $('#audioanswer' + answerNum)[0].play();

            //记录接口参数.....................................
            GM.form[$(that).attr('datakey')] = $(that).attr('datavalue');

            //未选中的消失
            $(that).siblings().velocity({opacity: 0}, 200, 'slow', function () {
                //问题div上移
                $(that).closest('.question').velocity({translateY: -100, opacity: 0}, 'fast', 'ease');

                //问题的容器上移
                $page.find('#p2Option')
                    .velocity({translateX: '-50%'}, 0)
                    .velocity({translateY: '-=180'}, 'fast', 'ease', function () {


                        if (clickIndex == $page.find('.question').length) {
                            setTimeout(function () {
                                DoPageChange(GM.pageIndex + 1);
                            }, 1500);
                        }
                    });

                resetQuestionOpacity();
            });
        })


        $page.find('.question2 div').click(function () {
            $('#audiopangbai3')[0].play();
        })
    }

    BindEvent();


    function In() {
        var delay = 0;


        $page.find('#p2Title').eq(0).delay(0)
            .velocity({translateX: '-50%'}, 0)
            .velocity('transition.slideDownIn', 1500, ease)


        $page.find('.question').eq(0).delay(delay += 200)
            .velocity({opacity: 0, translateY: -100}, 0)
            .velocity({opacity: 1, translateY: 0}, 1500, ease)

        $page.find('.question').eq(1).delay(delay += 200)
            .velocity({opacity: 0, translateY: -100}, 0)
            .velocity({opacity: 0.2, translateY: 0}, 1500, ease)

        $page.find('.question').eq(2).delay(delay += 200)
            .velocity({opacity: 0, translateY: -100}, 0)
            .velocity({opacity: 0.1, translateY: 0}, 1500, ease)

    }

    AnimateInArr[pageIndex] = In;


    function Out() {

    }

    AnimateOutArr[pageIndex] = Out;


    //ugly....................................
    function resetQuestionOpacity() {

        $page.find('.question').eq(clickIndex).velocity({
            opacity: 1
        }, 'slow', 'ease');
        if (clickIndex == 0) {
            $page.find('.question').eq(1).velocity({
                opacity: 0.2
            }, 'slow', 'ease');
            $page.find('.question').eq(2).velocity({
                opacity: 0.1
            }, 'slow', 'ease');
        }

        else if (clickIndex == 1) {
            $page.find('.question').eq(2).velocity({
                opacity: 0.2
            }, 'slow', 'ease');
        }
        else if (clickIndex == 2) {
        }
    };

})()
