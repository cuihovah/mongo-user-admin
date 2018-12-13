
module.exports = async (req, res, next) => {
    try {
        res.code = 200;
        next();  
    } catch (err) {
        res.code = 500;
        next();
    }
}