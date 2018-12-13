const config = require('config');
const MongoClient = require('mongodb').MongoClient;
let db = null;
 
// Use connect method to connect to the server
MongoClient.connect(config.get('MONGODB').url, function(err, client) {
    db = client.db(config.get('MONGODB').dbName);
});

const timer = async () => {
    if (db !== null) {
        let expires = Date.now();
        let users = await db.collection('role').find({
            expires: {$lte: expires}
        }).toArray();
        /* 性能不好，技术债 */
        for (let ix in users) {
            let user = users[ix];
            let url = user.url;
            let dbName = user.db_name;
            let client = await MongoClient.connect(url);
            let db = client.db(dbName);
            let result = await db.collection('system.users').updateOne({
                db: user.db,
                user: user.user,
            }, {$set: {
                roles: user.roles
            }});
        }
        await db.collection('role').removeMany({
            expires: {$lte: expires}
        });
    }
};

module.exports = {
    timer: timer,
    db: () => {
        return db; 
    },
}