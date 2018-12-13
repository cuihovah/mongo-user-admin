const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.DBSSID;
        let decoded = await jwt.verify(token, 'cui');
        req.session = decoded;
        next();
    } catch (err) {
        res.code = 401;
        next();
    }
}
