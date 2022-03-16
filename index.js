const http = require('http');

const requestListener = function (req, res) {
    let message;
    console.log(`Request: ${req.url}`)

    switch (req.url) {
        case '/helloworld':
            message = 'Oh, you found another Hello, World!'
            break;
        default:
            message = 'Hello, World!'
            break;
    }
 
    res.writeHead(200);
    res.end(message);
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log("Server is listening on http://localhost:8080/")