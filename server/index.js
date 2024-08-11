var express = require("express");
var router = express.Router();
var app = express();
var http = require("http");
var server = http.createServer(app, (req, res) => {
    res.setHeader("Content Type", "application/javascript");
});
//var { join } = require("node:path");
var { Server } = require("socket.io");  //Server module
var io = new Server(server);
var path = require("path");
path.basename("/Users/briannahawkins/Desktop/cisc-3140-project-3/client");

app.use = (req, res, next) => {
    //console.log(req.method);
    next = () => console.log("we have reached this code");
    next();
}

app.use(express.static("js"));


app.get('/', (req, res) => {
    res.sendFile("index.html", {root: "/Users/briannahawkins/Desktop/cisc-3140-project-3/client/"}), (err) => {
        if (err) {
            console.log("Error sending HTML file.");
        }
        else {
            console.log("It's working! :)");
        }
    }
});

io.on("connection", (socket) => {
    console.log(`A user connected at ${new Date().toLocaleTimeString()}.`);
    socket.on("disconnect", () => {
        console.log(`A user disconnected at ${new Date().toLocaleTimeString()}.`);
    })
})

server.listen(3000, () => {
    console.log("server listening on port 3000");
});
module.exports = app;
module.exports = router;