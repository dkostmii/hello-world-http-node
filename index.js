const http = require('http');

const indexController = require('./controllers')
const { helloWorldController } = indexController

const requestListener = function (req, res) {
    console.log(`Request: ${req.url}`)

    switch (req.url) {
        case '/helloworld':
            helloWorldController(req, res);
            break;
        default:
            indexController(req, res);
            break;
    }
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log("Server is listening on http://localhost:8080/")