/**
 * Created by Administrator on 2016/6/21.
 */
(function (w, d, $, undefined) {
    var controller = {};

    controller.getProducts = function () {

        $.ajax({
            type: "post",
            url: 'http://n1.jimi.la/openApiUrl/getOpenApiUrl.php',
//                url: 'package.json',
            data: GM.form,
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback: "jsonpcallback",
            success: function (data) {
                console.log(JSON.stringify(data));

                localStorage.setItem('jimiProducts', JSON.stringify(data));

                //GM.products=defaultArr;
                var pageIndex = 5;//下标
                var $page = GM.$pages.eq(pageIndex);
                $page.find('.stage').each(function (i, e) {
                    $(e).find('.sec').css({opacity: 0});
                    $(e).find('.sec img').attr({src: data.data[i].imgUrl});
                    $(e).find('.sec .text').html(data.data[i].pname);
                    $(e).click(function () {
                        window.location.href = data.data[i].url;
                    })
                });

            },
            error: function (err) {
                console.log('ERROR!')
                console.log(err);
            }
        });
    }


    controller.dadian = function () {
        $.ajax({
            type: "get",
            url: 'http://n1.jimi.la/openApiUrl/AddActiveVisitTimes.com.php?aid=1',
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback: "jsonpcallback",
            success: function (data) {
                console.log(JSON.stringify(data));

                GM.visitId = data.visitId;

                console.log(GM.visitId);
            },
            error: function (err) {
                console.log('ERROR!');
                console.log(err);
            }
        });
    }

    controller.postAnswer = function (data) {
        $.ajax({
            type: "post",
            url: 'http://n1.jimi.la/openApiUrl/postOpenApiAnswer.php',
            dataType: "jsonp",
            data: data,
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback: "jsonpcallback",
            success: function (data) {
                console.log(JSON.stringify(data));


                console.log(GM.form.envment);
                if (GM.form.envment) {
                    controller.getProducts();
                }
            },
            error: function (err) {
                console.log('ERROR!');
                console.log(err);
            }
        });

    }
    w.controller = controller;
})(window, document, $);
