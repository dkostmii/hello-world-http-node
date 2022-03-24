const indexController = require('./controllers')
const { helloWorldController } = indexController
const { notFoundController } = indexController


// Router selects appropriate controller by URL
function Router(req, res) {

    switch (req.url) {
        
        // EXAMPLE: http://localhost/helloworld
        case '/helloworld':
            helloWorldController(req, res); // <---- Matches this
            break;

        case '/':
            indexController(req, res);
            break;

        // NotFound goes the last
        default:
            notFoundController(req, res);
            break;
    }
}


module.exports = {
    Router
}
