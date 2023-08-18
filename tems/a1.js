



function r(){

    var s = new FormData();
    s.append("variant","slim");
    var f = new FormData(document.getElementById("fr"));
    f.append("variant","slim");
    var xh = new XMLHttpRequest();
    xh.open("post" , "https://api.minecraftservices.com/minecraft/profile/skins" , true);
    xh.send(s)
    
}