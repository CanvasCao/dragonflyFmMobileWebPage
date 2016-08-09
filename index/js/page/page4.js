(function () {

    var pageIndex = 3;//下标
    var $page = GM.$pages.eq(pageIndex);
    var winH = GM.winH;
    var winW = GM.winW;
    var picNum;
    var ease = 'easeInOutQuart';
    var timer = null;
    var timer2 = null;


    //createDom...............
    function CreateDom() {
        var str = "<div class='section'>" +
            " <div class='secCir'><img class='secImg'/></div>" +
            "<div class='secTxt'><img/></div>" +
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
            width: winW / 2,
        })

        $page.find('.secCir').css({
            margin: '0 auto 5px',
            width: winW / 4,
            height: winW / 4,
            'border-radius': '0%',
            'box-shadow': '5px 5px 10px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
        }).find('img').css({
            width: '100%',
        })

        $page.find('.secTxt').css({
            margin: '0 auto',
            'opacity': 1,
            width: winW / 5,
        }).find('img').css({
            width: '100%',
        })
    }

    initCss();


    function appendIcon(num) {
        var delay = 0;
        if (num == 1) {
            $page.append('<img class="sun" src="img/icon/1/sun.png" width="30%">');
            $page.append('<img class="tree" src="img/icon/1/tree.png"  width="45%">');
            $page.append('<img class="des" src="img/page4/txt1.png"  width="50%"/>');
            $page.append('<img class="uv1" src="img/icon/1/uv1.png"  width="8%"/>');
            $page.append('<img class="uv2" src="img/icon/1/uv1.png"  width="8%"/>');
            $page.append('<img class="uv3" src="img/icon/1/uv1.png"  width="8%"/>');
            $page.append('<img class="uv4" src="img/icon/1/uv1.png"  width="8%"/>');

            $page.find(".sun")
                .css({
                    top: '23%',
                    left: '6%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)
            //.velocity({'rotateZ': 360}, {duration: 2000, loop: true});

            $page.find(".tree").delay(delay += 50)
                .css({
                    top: '64%',
                    left: '45%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing');

            $page.find(".des").delay(delay += 50)
                .css({
                    top: '12%',
                    left: '40%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', 1000, ease)


            $page.find('.uv1').delay(delay += 1400).css({
                top: '38%',
                left: '38%',
            }).velocity({rotateZ: -30,}, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .delay(150).velocity({left: '+=2%', top: '+=2%'}, {loop: true, duration: 0, delay: 400});


            $page.find('.uv2').delay(delay += 50).css({
                top: '40%',
                left: '24%',
            }).velocity({rotateZ: -15,}, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .delay(100).velocity({left: '+=2%', top: '+=2%'}, {loop: true, duration: 0, delay: 800});

            $page.find('.uv3').delay(delay += 50).css({
                top: '40%',
                left: '12%',
            }).velocity({rotateZ: 0,}, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .delay(50).velocity({left: '+=2%', top: '+=2%'}, {loop: true, duration: 0, delay: 400});

            $page.find('.uv4').delay(delay += 50).css({
                top: '33%',
                left: '48%',
            }).velocity({rotateZ: -45,}, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity({left: '+=2%', top: '+=2%'}, {loop: true, duration: 0, delay: 800});


        }
        else if (num == 2) {
            $page.append('<img class="cloud" src="img/icon/2/cloud.png" width="20%">');
            $page.append('<img class="mountain" src="img/icon/2/mountain.png"  width="95%">');
            $page.append('<img class="des" src="img/page4/txt2.png"  width="60%"/>');
            $page.append('<img class="dry1" src="img/icon/2/dry1.png"  width="50%"/>');


            $page.find(".mountain")
                .css({
                    top: '64%',
                    left: '5%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".des").delay(delay += 50)
                .css({
                    top: '12%',
                    left: '30%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', 1000, ease)

            $page.find(".cloud").delay(delay += 50)
                .css({
                    top: '38%',
                    left: '34%',
                }).velocity('transition.bounceLeftIn', 1000, ease)


            $page.find(".dry1").delay(delay)
                .css({
                    top: '34%',
                    left: '59%',
                }).velocity('transition.bounceRightIn', 1000, ease, function () {
                    timer = setInterval(function () {
                        $page.find(".cloud").delay(500).velocity({left: '-=8%'}, 0)
                        $page.find(".dry1").delay(0).velocity({left: '-=8%'}, 0)
                    }, 1000)
                    //$page.find(".dry1").delay(500).velocity({left:'-=5%'},{loop:true,duration:0,delay:500})
                })


        }
        else if (num == 3) {
            $page.append('<img class="body" src="img/icon/3/body.png" width="25%">');
            $page.append('<img class="des" src="img/page4/txt3.png"  width="50%"/>');

            $page.append('<img class="uv1" src="img/icon/1/uv1.png"  width="12%"/>');
            $page.append('<img class="uv2" src="img/icon/1/uv1.png"  width="12%"/>');
            $page.append('<img class="uv3" src="img/icon/1/uv1.png"  width="12%"/>');
            $page.append('<img class="uv4" src="img/icon/1/uv1.png"  width="12%"/>');


            $page.find(".body")
                .css({
                    top: '47%',
                    left: '10%',
                })
                .velocity('transition.bounceLeftIn', 1000, ease, function () {
                    timer2 = setInterval(function () {
                        $page.find(".body")
                            .delay(500).velocity({left: '+=3%'}, 0)
                            .delay(500).velocity({left: '+=3%'}, 0)
                            .delay(500).velocity({left: '-=2%'}, 0)
                    }, 1600)
                })


            $page.find(".des").delay(delay += 50)
                .css({
                    top: '12%',
                    left: '30%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', 1000, ease)


            $page.find(".uv1").delay(delay += 50)
                .css({
                    top: '44%',
                    left: '40%',
                }).velocity('transition.bounceDownIn', 1000, ease)


            $page.find(".uv2").delay(delay += 50)
                .css({
                    top: '44%',
                    left: '55%',
                }).velocity('transition.bounceDownIn', 1000, ease)


            $page.find(".uv3").delay(delay += 50)
                .css({
                    top: '44%',
                    left: '70%',
                }).velocity('transition.bounceDownIn', 1000, ease)


            $page.find(".uv4").delay(delay += 50)
                .css({
                    top: '44%',
                    left: '85%',
                }).velocity('transition.bounceDownIn', 1000, ease, function () {
                    //.delay(50).velocity({top: '-=5%'}, {loop: true, duration: 0, delay: 800});

                    move3();
                    timer = setInterval(function () {
                        move3();
                    }, 1000);

                    function move3() {
                        $page.find(".uv1")
                            .delay(0).velocity({left: '-=2%', top: '+=4%'}, 0)
                            .delay(200).velocity({left: '-=2%', top: '-=4%'}, 0);
                        $page.find(".uv2")
                            .delay(400).velocity({left: '-=2%', top: '+=4%'}, 0)
                            .delay(200).velocity({left: '-=2%', top: '-=4%'}, 0);
                        $page.find(".uv3")
                            .delay(600).velocity({left: '-=2%', top: '+=4%'}, 0)
                            .delay(200).velocity({left: '-=2%', top: '-=4%'}, 0);
                        $page.find(".uv4")
                            .delay(800).velocity({left: '-=2%', top: '+=4%'}, 0)
                            .delay(200).velocity({left: '-=2%', top: '-=4%'}, 0);
                    }
                })


        }
        else if (num == 4) {
            $page.append('<img class="building" src="img/icon/4/building.png" width="70%">');
            $page.append('<img class="des" src="img/page4/txt4.png"  width="50%"/>');

            $page.append('<img class="frog1" src="img/icon/4/1.png"  width="35%"/>');
            $page.append('<img class="frog2" src="img/icon/4/2.png"  width="35%"/>');
            $page.append('<img class="frog3" src="img/icon/4/3.png"  width="15%"/>');


            $page.find(".building")
                .css({
                    top: '50%',
                    left: '16%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".des").delay(delay += 50)
                .css({
                    top: '12%',
                    left: '25%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', 1000, ease)


            $page.find(".frog1").delay(delay += 50)
                .css({
                    top: '35%',
                    left: '33%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".frog2").delay(delay += 50)
                .css({
                    top: '35%',
                    left: '33%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".frog3").delay(delay += 50)
                .css({
                    top: '35%',
                    left: '45%',
                })
                .velocity('transition.bounceDownIn', 1000, ease, function () {
                    $page.find(".frog1").velocity({top: '+=1%'}, {loop: true, delay: 0, duration: 2000});
                    $page.find(".frog2").delay(400).velocity({top: '+=1%'}, {loop: true, delay: 0, duration: 2000});
                    $page.find(".frog3").delay(800).velocity({top: '-=1%'}, {loop: true, delay: 0, duration: 2000});
                })


        }
        else if (num == 5) {
            $page.append('<img class="wet1" src="img/icon/5/wet.png" width="12%">');
            $page.append('<img class="des" src="img/page4/txt5.png"  width="50%"/>');

            $page.append('<img class="house" src="img/icon/5/house.png"  width="55%"/>');
            $page.append('<img class="water1" src="img/icon/5/water.png"  width="75%"/>');
            $page.append('<img class="water2" src="img/icon/5/water.png"  width="75%"/>');


            $page.find(".house")
                .css({
                    top: '50%',
                    left: '23%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".water1").delay(delay += 50)
                .css({
                    top: '73%',
                    left: '13%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".water2").delay(delay += 50)
                .css({
                    top: '83%',
                    left: '13%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".des").delay(delay += 50)
                .css({
                    top: '12%',
                    left: '25%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', 1000, ease)

            $page.find(".wet1").delay(delay += 50)
                .css({
                    top: '28%',
                    left: '25%',
                })
                .velocity({rotateZ: 10,}, 0)
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity({left: '+=2%', top: '-=2%'}, {
                    loop: true,
                    duration: 0,
                    delay: 400
                })


        }
        else if (num == 6) {
            $page.append('<img class="countryside" src="img/icon/6/countryside.png" width="80%">');
            $page.append('<img class="des" src="img/page4/txt6.png"  width="50%"/>');
            $page.append('<img class="nature1" src="img/icon/6/nature1.png"  width="70%"/>');
            $page.append('<img class="nature2" src="img/icon/6/nature1.png"  width="70%"/>');


            $page.find(".countryside")
                .css({
                    top: '45%',
                    left: '10%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".des").delay(delay += 50)
                .css({
                    top: '12%',
                    left: '25%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)
                .velocity('callout.swing', 1000, ease)

            $page.find(".nature1").delay(delay += 50)
                .css({
                    top: '70%',
                    left: '0%',
                })
                .velocity('transition.bounceDownIn', 1000, ease)

            $page.find(".nature2").delay(delay += 50)
                .css({
                    top: '70%',
                    left: '30%',
                })
                .velocity('transition.bounceDownIn', 1000, ease, function () {


                    $page.find(".nature1").velocity({left: '-=3%'}, {loop: true, ease: ease, duration: 2000});
                    $page.find(".nature2").delay(400).velocity({left: '+=3%'}, {loop: true, ease: ease, duration: 2000})
                })

        }


    }


    function In(num) {
        var audioLengthArray = [null, 4, 6, 4, 4, 3, 3];

        picNum = num || 1;

        GM.form.envment = picNum;
        controller.getProducts()


        //动态设置图片...............
        $page.find('.secImg').attr('src', 'img/page4/' + picNum + '.png');

        //放大
        $page.find('.secCir').delay(200).velocity({
            scaleX: 4,
            scaleY: 8,
        }, 'slow', ease, function () {
            //加载动态图
            appendIcon(picNum);


            //$('audio').eq(picNum - 1)[0].load();
            //读字
            setTimeout(function () {
                $('audio').eq(picNum - 1)[0].play();
            }, 1000);


            //第三页换第四页............
            setTimeout(function () {
                console.log(GM.form);
                DoPageChange(GM.pageIndex + 1);
            }, (audioLengthArray[picNum] + 2) * 1000)
        });
    }

    AnimateInArr[pageIndex] = In;

    function Out() {
        clearInterval(timer);
        delete(timer);
        clearInterval(timer2);
        delete(timer2);
    }

    AnimateOutArr[pageIndex] = Out;

})()
