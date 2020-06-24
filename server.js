const http = require('http');
const port = 3000;
// const hostname = '127.0.0.1';

var introduction = {
    "name": "konpei",
    "kg": "haisys",
    "hobby": "baseball"
}

let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(introduction));
});

server.listen(port);
// console.log("Server running on port 8080");


