const http = require('http');

// load variables from .env file
require('dotenv').config();

// get the App instance
const App = require('./src/App')()

let port = 80;

if (typeof process.env.PORT !== 'undefined') {
    port = parseInt(process.env.PORT)
}

App.run(http.createServer, port);
