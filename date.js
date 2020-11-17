"use strict"
Date.prototype.Format = function (fmt) {/*说明：时间格式  >   参数:格式(yyyy-MM-dd hh:mm:ss) > 返回值：时间字符串*/
    var fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
    var m = {
        "yyyy": this.getFullYear(), //年
        "MM": this.getMonth() + 1, //月份
        "dd": this.getDate(), //日
        "hh": this.getHours(), //小时
        "mm": this.getMinutes(), //分
        "ss": this.getSeconds(), //秒
        "qq": Math.floor((this.getMonth() + 3) / 3), //季度
        "ssss": this.getMilliseconds() //毫秒
    };
    for (var ev in m) {
        fmt = fmt.replace(ev, (m[ev] >= 10 ? m[ev] : "0" + m[ev]));
    }
    return fmt;
}
Date.prototype.Days = function () {/*获取当前月份有多少天*/
    var getFullYear = this.getFullYear()
    var getMonth = this.getMonth() + 1

    var hDate = new Date(getFullYear, getMonth, 1);

    var days = new Date(hDate.getTime() - 86400000).getDate();

    return days
}