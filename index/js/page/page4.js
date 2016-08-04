(function () {

    var pageIndex = 3;//下标
    var $page = GM.$pages.eq(pageIndex);
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

        $page.append(str);

    }

    CreateDom();


    //initCss...........................
    function initCss() {
        $page.find('.section').css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
        })

        $page.find('.secCir').css({
            margin: '0 auto',
            width: 120,
            height: 120,
            'border-radius': '0%',
            'box-shadow': '5px 5px 10px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
        }).find('img').css({
            width: 120,
        })

        $page.find('.secTxt').css({
            'font-size': '18px',
            'opacity': 0,
        })
    }

    initCss();


    function appendIcon(num) {
        if (num == 1) {
            $page.append('<img class="sun" src="img/icon/1/sun.png">');
            $page.append('<img class="tree" src="img/icon/1/tree.png">');
            $page.append('<div class="txt">海滨海岛</div>');
            $page.append('<div class="des">吹吹海风潜潜水<br>不知不觉被晒黑</div>');

            $page.find(".sun")
                .velocity({
                    top: '18%',
                    left: '18%',
                }, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity({'rotateZ': 360}, {duration: 2000, loop: true});

            $page.find(".tree").delay(100)
                .velocity({
                    top: '42%',
                    left: '42%',
                }, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', {loop: true});

            $page.find(".txt").delay(200)
                .velocity({
                    bottom: 50,
                    left: '50%',
                    'translateX': '-50%',
                }, 0)
                .velocity('transition.bounceDownIn', 1000, ease)


            $page.find(".des").delay(300)
                .velocity({
                    top: '12%',
                    left: '50%',
                }, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', 1000, ease)

        } else if (num == 2) {
            $page.append('<img class="cloud" src="img/icon/2/cloud.png">');
            $page.append('<img class="mountain" src="img/icon/2/mountain.png">');
            $page.append('<div class="txt">海滨海岛</div>');
            $page.append('<div class="des">吹吹海风潜潜水<br>不知不觉被晒黑</div>');
        }


    }




    function In(num) {
        picNum = num||1;
        //动态设置图片...............
        $page.find('.secImg').attr('src', 'img/bg/' + picNum + '.png');

        //放大
        $page.find('.secCir').velocity({
            scale: 7,
        }, 1000, ease, function () {
            //加载动态图
            appendIcon(picNum);

            //第三页换第四页............
            setTimeout(function () {
                DoPageChange(GM.pageIndex+1);
            }, 5000)
        });
    }

    AnimateInArr[pageIndex] = In;

    function Out() {
    }

})()
