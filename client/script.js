window.onload = () => {
    var submitButton = document.getElementsByName("submit")[0];
    var numMessagesSent = 0;
    var numMessagesChanged = true;

    submitButton.addEventListener("click", onSend = () => {
        try {
            if (numMessagesChanged) {
                document.getElementsByTagName("form")[0].insertAdjacentElement("afterbegin", document.createElement("p"));
            }
            console.log(document.getElementsByTagName("p"));
            document.getElementsByTagName("p")[numMessagesSent].innerText = "";
            if (document.getElementsByName("message")[0].getAttribute("value") == null) {
                throw new Error("Message body is empty.");
            }
            else {
                document.getElementsByTagName("p")[numMessagesSent].innerText = document.getElementsByName("message")[0].getAttribute("value");
                alert("Message sent!");
                numMessagesChanged = true;
                numMessagesSent++;
            }
        }
        catch (err) {
            document.getElementsByTagName("p")[numMessagesSent].innerText = err.message;
            numMessagesChanged = false;
        }
    })
}