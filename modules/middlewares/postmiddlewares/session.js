const jwt = require('jsonwebtoken');
const MongoClient = require('mongodb').MongoClient;

const login = async (req, res) => {
    try {
        const url = res.body.url;
        const dbName = res.body.dbName;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        client.close();
        let token = await jwt.sign(res.body, 'cui');
        res.cookie('DBSSID', token);
        res.status(200).end();
    } catch (err) {
        res.code = 401;
        res.status(401).end();
    }
}



module.exports = {
    login,
}

