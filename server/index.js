var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var { join } = require("node:path");
var { Server } = require("socket.io");  //Server module
var io = new Server(server);
var path = require("path");
path.basename("/Users/briannahawkins/Desktop/cisc-3140-project-3/");

app.get('/', (req, res) => {
    res.sendFile(app.use(express.static(path.join(__dirname, "client")), "index.html"), (err) => {
        if (err) {
            res.writeHead(404, "Content Type: text/html");
            return res.end("404 Not Found");
        }
    });
});

io.on("connection", (socket) => {
    console.log(`A user connected at ${new Date().toLocaleTimeString}.`);
    socket.on("disconnect", () => {
        console.log(`A user disconnected at ${new Date().toLocaleTimeString}.`);
    })
})

server.listen(3000, () => {
    console.log("server listening on port 3000");
});
module.exports = app;
return this.router;