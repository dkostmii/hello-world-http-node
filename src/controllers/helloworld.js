function helloWorldController(req, res) {
    
    // Using that syntactic sugar we defined in types/response here :)
    Ok('Oh, you found another Hello, World!');
}

module.exports = {
    helloWorldController
};
