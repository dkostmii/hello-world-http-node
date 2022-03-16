const { helloWorldController } = require('./helloworld')
const { Ok } = require('../types/response/ok')


function indexController(req, res) {
    Ok(res, 'Hello, Wolrd!');
}

const moduleExports = module.exports = indexController;
moduleExports.helloWorldController = helloWorldController;
