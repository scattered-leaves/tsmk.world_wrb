function cmd(){
    const ws = new WebSocket("ws://localhost:8887");
    ws.onopen = function ()
    {
        ws.send("{\"use\": \"logon\",\"key\": \"key\",\"username\": \"Scattered_leaves\",\"pas\": \"sss\"}")
        ws.send("{ \"use\": \"addcmd\"}")
    }
    ws.onmessage = function (src)
    {

        document.createElement("p").appendChild(document.createTextNode(src.data));

    }
}
