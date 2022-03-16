const { Ok } = require('../types/response/ok')

function helloWorldController(req, res) {
    Ok(res, 'Oh, you found another Hello, World!');
}

module.exports = {
    helloWorldController
}