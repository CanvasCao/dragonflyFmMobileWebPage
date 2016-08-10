/**
 * Created by Administrator on 2016/6/21.
 */
(function (w, d, $, undefined) {
    var controller = {};

    controller.getProducts = function () {
        $.ajax({
            type: "post",
            url: 'http://n1.jimi.la/apps_T1/getOpenApiUrl.php',
//                url: 'package.json',
            data: GM.form,
            dataType: "jsonp",
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback: "jsonpcallback",
            success: function (data) {
                console.log(JSON.stringify(data));
                var defaultArr = [{
                    "pname": "资生堂亲肤净透卸妆霜",
                    "url": "www.jd.com",
                    "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/images/qinfu.jpg",
                    "online_price": "189.00"
                }, {
                    "pname": "资生堂洗颜专科柔澈泡沫洁面乳",
                    "url": "www.jd.com",
                    "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/proImg/image_20160325_56f4d0e0b990f.jpg",
                    "online_price": "45.00"
                }, {
                    "pname": "资生堂悦薇珀翡焕活洁面膏",
                    "url": "www.jd.com",
                    "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/proImg/image_20160325_56f4b757544c6.jpg",
                    "online_price": "285.00"
                }, {
                    "pname": "资生堂亲肤净透卸妆霜",
                    "url": "www.jd.com",
                    "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/images/qinfu.jpg",
                    "online_price": "189.00"
                }, {
                    "pname": "资生堂洗颜专科柔澈泡沫洁面乳",
                    "url": "www.jd.com",
                    "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/proImg/image_20160325_56f4d0e0b990f.jpg",
                    "online_price": "45.00"
                }, {
                    "pname": "资生堂悦薇珀翡焕活洁面膏",
                    "url": "www.jd.com",
                    "imgUrl": "http://7xo2me.com1.z0.glb.clouddn.com/proImg/image_20160325_56f4b757544c6.jpg",
                    "online_price": "285.00"
                }];

                GM.products = data || defaultArr;
                //GM.products=defaultArr;
                var pageIndex = 5;//下标
                var $page = GM.$pages.eq(pageIndex);
                $page.find('.stage').each(function (i, e) {
                    $(e).find('.sec img').attr({src: GM.products[i].imgUrl});
                    $(e).find('.sec .text').html(GM.products[i].pname);
                    $(e).click(function(){
                        window.open('http://'+GM.products[i].url);
                    })

                });

            },
            error: function (err) {
                console.log('ERROR!')
                console.log(err);
            }
        });
    }
    w.controller = controller;
})(window, document, $);
