function NotFound(res) {
    res.writeHead(404);
    res.end("Not found");
}

module.exports = {
    NotFound
};
