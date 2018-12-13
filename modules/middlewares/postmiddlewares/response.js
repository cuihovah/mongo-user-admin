
module.exports = async (req, res) => {
    res.status(res.code);
    if (res.code >= 400) {
        return res.end();
    }
    if (req.client && typeof req.client.close === 'function') {
        req.client.close();
    }
    return res.json(res.body);
}