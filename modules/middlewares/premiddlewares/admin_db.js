const MongoClient = require('mongodb').MongoClient;

module.exports = async (req, res, next) => {
    try {
	if (res.code >= 400) {
		return next();
	}
        const url = req.session.url;
        const dbName = req.session.dbName;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        req.db = db;
        req.client = client;
        req.db_url = req.session.url;
        req.db_name = req.session.dbName;
        next();  
    } catch (err) {
        res.code = 500;
        next();
    }
}
