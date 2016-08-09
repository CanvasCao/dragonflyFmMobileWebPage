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
            jsonp: "callback",//���ݸ�����������ҳ��ģ����Ի��jsonp�ص��������Ĳ�����(һ��Ĭ��Ϊ:callback)
            jsonpCallback: "jsonpcallback",
            success: function (data) {
                console.log(JSON.stringify(data));
                GM.products = data;
            },
            error: function (err) {
                console.log('ERROR!')
                console.log(err);
            }
        });
    }

    w.controller = controller;
})(window, document, $);
