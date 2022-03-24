const { helloWorldController } = require('./helloworld');
const { notFoundController } = require('./notfound');

function indexController(req, res) {
    
    // Using that syntactic sugar we defined in types/response here :)
    Ok('Hello, World!');
};

const moduleExports = module.exports = indexController;
moduleExports.helloWorldController = helloWorldController;
moduleExports.notFoundController = notFoundController;
