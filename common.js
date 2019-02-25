/*
*
*    2018/11/15
*
* */
function IsPC(flag){
    /*----------------判断PC端和手机端---------------------*/
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
$(function() {

    //根字节变化
    var w = document.documentElement.clientWidth;          // 获取浏览器窗口文档显示区域的宽度，不包括滚动条。
    if (w <= 640) {
        document.documentElement.style.fontSize = 20/375*w + 'px';          //给html赋值font-size，设计稿750*1334，计算倍数为设计稿宽度750/2
    } else{
        document.documentElement.style.fontSize = '20px';
    }
    window.onresize = function(){          // 在窗口或框架被调整大小时发生，在窗口大小改变之后，触发对应事件。
        w = document.documentElement.clientWidth;
        if (w <= 640) {
            document.documentElement.style.fontSize = 20/375*w + 'px';
        } else{
            document.documentElement.style.fontSize = '20px';
        }
    }

})



