const getUsersByDB = async (req, res, next) => {
    if (req.params.db_name == 'admin') {
        res.code = 403;
    }
    next();
}

module.exports = {
    getUsersByDB,
}