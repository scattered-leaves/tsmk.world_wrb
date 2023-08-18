function initi()
{
    const Http = new XMLHttpRequest();
    const url='/sb.json';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        var js = Http.responseText;
        console.log(js);
        var j = JSON.parse(js);
        const a = Math.floor(Math.random() * j.l + 1);
        console.log(j.d[a]);
    }
}
window.onload = initi;