const { Ok } = require('./response/Ok');
const { NotFound } = require('./response/NotFound');

// Define global response types
// Whice are available for controllers
function defineResponseTypes(res) {

    // Just some syntactic sugar
    global.Ok = (text) => Ok(res, text);
    global.NotFound = () => NotFound(res);
}

module.exports = {
    defineResponseTypes
};
