window.onload = () => {
    /*
    var script = document.createElement("script");
    script.setAttribute("src", "/socket.io/socket.io.js");
    */
    var form = document.getElementsByTagName("form")[0];
    var input = document.getElementsByName("message")[0];
    var numMessagesSent = 0;
    var numMessagesChanged = true;
    var io = require("socket.io-client");
    const socket = io('http://localhost:5000');
    console.log("we have reached this code");

    socket.on("connect", () => {
        const engine = socket.io.engine;
        console.log(engine.transport.name);
    });

    submitButton.addEventListener("submit", onSend = () => {
        socket.emit("Hello");
        /*
        try {
            if (numMessagesChanged) {
                form.insertAdjacentElement("afterbegin", document.createElement("p"));
            }
            console.log(document.getElementsByTagName("p"));
            document.getElementsByTagName("p")[numMessagesSent].innerText = "";
            e.preventDefault();
            if (input.value == null) {
                throw new Error("Message body is empty.");
            }
            else {
                //document.getElementsByTagName("p")[numMessagesSent].innerText = input.value;
                alert("Message sent!");
                numMessagesChanged = true;
                //numMessagesSent++;
            }
        }
        catch (err) {
            document.getElementsByTagName("p")[numMessagesSent].innerText = err.message;
            numMessagesChanged = false;
        }
        */
    });

    

    socket.on("chat message", (msg) => {
        if (numMessagesChanged) {
            document.getElementsByTagName("p")[numMessagesSent].innerText = msg;
            numMessagesSent++;
        }
    });
}