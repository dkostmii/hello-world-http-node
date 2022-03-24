const { defineResponseTypes } = require('./types');
const { Router } = require('./Router');


function App() {
    
    const requestListener = function (req, res) {
        // Define global response types (Ok() and NotFound())
        defineResponseTypes(res);
        
        // Router selects appropriate controller by URL
        Router(req, res);
        
        // Using console as logger -_-
        console.log(`${res.statusCode} ${req.method}: ${req.url}`);
    }

    return {
        // createServer from Nodejs 'http' module
        run: (createServer, port) => {

            // 1. Ensure that App is not running
            if (App.running) {
                console.warn('Application is already running. Doing nothing.');
                return;
            }

            // 2. Run it
            const server = createServer(requestListener);
            server.listen(port);
            console.log(`Server is listening on http://localhost:${port}/`);

            // 3. Set the switch
            App.running = true;
        }
    }
}


module.exports = App;
