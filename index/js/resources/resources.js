/**
 * Created by Administrator on 2016/8/4.
 */
function Resources(resourceJson, callback) {
    this.imgs = [];
    this.resourceJson = resourceJson;
    this.callback = callback;

    this.init();
}


Resources.prototype = {
    init: function () {
        var that = this;

        $.ajax({
            type: "get",
            url: that.resourceJson,
            success: function (data) {
                //dataֱ���Ƕ��� ����Ҫjson.parse
                console.log(JSON.stringify(data));

                var alreayLoadNumber = 0;
                [].forEach.call(data.images, function (e, i, array) {
                    var imgObj = e;
                    var image = new Image();
                    image.src = imgObj.src;
                    image.index = i;

                    image.onload = function () {
                        alreayLoadNumber++;
                        that.imgs[imgObj.name] = this;//thisָimage����

                        //�ص��߼����ⲿ �ڲ������ж�.....
                        console.log(alreayLoadNumber);
                        that.callback(alreayLoadNumber, array.length, that.imgs);

                    }
                })

            },
            error:function(){
                console.log('ERROR');

            }
        })
    }
}