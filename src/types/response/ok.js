function Ok(res, text) {
    res.writeHead(200);
    res.end(text);
}

module.exports = {
    Ok
};