var uurrllint = 0;


function all(a) {//主函数
    uurrllint = a;
    header_Clouda();

}


function header_Clouda() {//导航栏提示块初始化


    this.collef = 209 + 100 * uurrllint;//提示块初始位置
    this.colwid = 40;//提示块初始大小


    if (this.uurrllint == 5) {//提示块初始大小
        this.colwid = 80;
    }


    document.getElementById("a" + uurrllint).style.color = "#6cf";//初始化导航栏当前页面文字颜色
    document.getElementById("div1").style.width = this.colwid + "px";//初始化导航栏提示块长度
    document.getElementById("div1").style.left = this.collef + "px";//初始化提示块位置
}



function header_Clouds() {//动态导航栏提示块
    var e = event; //获取鼠标坐标
    var s = e.pageX;//鼠标坐标x
    var a = e.pageY;//鼠标坐标y
    for (Navigation_bar_a = 1; Navigation_bar_a < 6; Navigation_bar_a++) {
        document.getElementById("a" + Navigation_bar_a).style.color = "#ccc";
    }//重置导航栏文字颜色


    document.getElementById("a" + this.uurrllint).style.color = "#6cf";//重置导航栏当前页面文字颜色
    document.getElementById("div1").style.width = colwid + "px";//重置导航栏提示块长度
    document.getElementById("div1").style.left = this.collef + "px";//重置提示块位置



    if (a <= 66 && s > 209) {//条件：鼠标处于导航栏中
        document.getElementById("div1").style.width = "40px";//重置导航栏提示块长度
        if (s > 209 && s < 359) {
            document.getElementById("div1").style.left = "309px";//设置位置
            document.getElementById("a1").style.color = "#6cf";//设置颜色
        }
        else if (s > 360 && s < 459) {
            document.getElementById("div1").style.left = "409px";//设置位置
            document.getElementById("a2").style.color = "#6cf";//设置颜色
        }
        else if (s > 460 && s < 559) {
            document.getElementById("div1").style.left = "509px";//设置位置
            document.getElementById("a3").style.color = "#6cf";//设置颜色
        }
        else if (s > 560 && s < 659) {
            document.getElementById("div1").style.left = "609px";//设置位置
            document.getElementById("a4").style.color = "#6cf";//设置颜色
        }
        else if (s > 660 && s < 819) {//文字有四字，故改为80px
            document.getElementById("div1").style.left = "709px";//设置位置
            document.getElementById("a5").style.color = "#6cf";//设置颜色
            document.getElementById("div1").style.width = "80px";//设置特殊大小
        }
    }
}


function uurrll(inter) {//获取当前url
    console.log("run_ing")
    var ingurl = window.location.pathname;//获取原始url
    var vars = ingurl.split("/");//根据“/"分割url
    return vars[inter];//返回处理过的url
}


window.onmousemove = function () {//鼠标移动时触发
    header_Clouds();
}