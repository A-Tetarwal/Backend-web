const http = require("http");

// create server
// http.createServer([options][, requestListener])
const server = http.createServer((req, res) =>{
    res.end("Hello world");
})

server.listen(3000);