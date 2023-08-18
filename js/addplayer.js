function main(a) {
    all(a)
}
let ws;
function sleep(time) {
    var todate = (new Date).getTime() + time;

    while (1) {
        if((new Date).getTime() > todate)
        {
            return;
        }

    }
}
function up() {

    let formData = new FormData(document.getElementById("froms"));

    if (formData.get("zb") == "yes" && formData.get("name") != "" && formData.get("mcname") != "" && formData.get("mcuuid") != "" && formData.get("qq") != "") {
        console.log("dl")
        infol("正在提交")
        let X = new XMLHttpRequest();
        X.open('post', "/addplayer/up.php", true);
        var s = X.send(formData);

        X.onload = function (params) {
            
            console.log( X.responseText);
            var s =  X.responseText;
            info(s);
            setTimeout(() => {
                if (X.responseText === "成功提交") {
                    console.log("yes");
                }
                document.getElementById("infodiv").style.visibility = "hidden";
                document.getElementById("info").innerText = "正在提交";
            }, 1000);

        }
    }else{
        info("请填写完整")
    }



}


function infol(mesg) {
    document.getElementById("infodiv").style.visibility = "visible";

    document.getElementById("info").innerText = mesg;
}
function info(mesg) {
    document.getElementById("infodiv").style.visibility = "visible";

    document.getElementById("info").innerText = mesg;
    setTimeout(() => {
        document.getElementById("infodiv").style.visibility = "hidden";   
    }, 1000);
}