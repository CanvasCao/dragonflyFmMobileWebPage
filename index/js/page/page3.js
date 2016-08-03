(function () {

    $page3 = GM.$pages.eq(2);
    var winH = GM.winH;
    var winW = GM.winW;
    var picNum;
    var ease = 'easeInOutQuart';

    //createDom...............
    function CreateDom() {
        var str = "<div class='section'>" +
            " <div class='secCir'><img class='secImg'/></div>" +
            "<div class='secTxt'>隐藏</div>" +
            "</div>"

        $page3.append(str);

    }

    CreateDom();


    //initCss...........................
    function initCss() {
        $page3.find('.section').css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
        })

        $page3.find('.secCir').css({
            margin: '0 auto',
            width: 120,
            height: 120,
            'border-radius': '0%',
            'box-shadow': '5px 5px 10px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
        }).find('img').css({
            width: 120,
        })

        $page3.find('.secTxt').css({
            'font-size': '18px',
            'opacity': 0,
        })
    }

    initCss();


    function appendIcon(num) {
        if (num == 1) {
            $page3.append('<img class="sun" src="img/icon/1/sun.png">');
            $page3.append('<img class="tree" src="img/icon/1/tree.png">');
            $page3.append('<div class="txt">海滨海岛</div>');
            $page3.append('<div class="des">吹吹海风潜潜水<br>不知不觉被晒黑</div>');

            $page3.find(".sun")
                .velocity({
                    top: '18%',
                    left: '18%',
                }, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity({'rotateZ': 360}, {duration: 2000, loop: true});

            $page3.find(".tree").delay(100)
                .velocity({
                    scale: 2,
                    top: '42%',
                    left: '42%',
                }, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', {loop: true});

            $page3.find(".txt").delay(200)
                .velocity({
                    bottom: 50,
                    left: '50%',
                    'translateX': '-50%',
                }, 0)
                .velocity('transition.bounceDownIn', 1000, ease)


            $page3.find(".des").delay(300)
                .velocity({
                    top: '12%',
                    left: '50%',
                }, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', 1000, ease)

        } else if (num == 2) {
            $page3.append('<img class="cloud" src="img/icon/1/cloud.png">');
            $page3.append('<img class="mountain" src="img/icon/1/mountain.png">');
            $page3.append('<div class="txt">海滨海岛</div>');
            $page3.append('<div class="des">吹吹海风潜潜水<br>不知不觉被晒黑</div>');
        }


    }

    function page3In(num) {
        picNum = num;
        //动态设置图片...............
        $page3.find('img').attr('src', 'img/' + num + '.png');

        //放大
        $page3.find('.secCir').velocity({
            scale: 7,
        }, 1000, ease, function () {
            //加载动态图
            appendIcon(picNum);

            //第三页换第四页............
            GM.pageIndex = 3;
            setTimeout(function () {
                DoPageChange(2, 3, 1000);
            }, 5000)
        });

    };
    window.page3In = page3In;


    function page3Out() {
    };
    window.page3Out = page3Out;
})()
