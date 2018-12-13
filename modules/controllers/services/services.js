
const getUsers = async (req, res, next) => {
    if (res.code >= 400) {
        return next();
    }
    let users = await req.db.collection('system.users').
        find({}).
        project({db: 1, user: 1, roles: 1}).
        toArray();
    res.body = users;
    next();
}

const getUsersByDB = async (req, res, next) => {
    if (res.code >= 400) {
        return next();
    }
    let users = await req.db.collection('system.users').
        find({
            'db': req.params.db_name,
        }).
        project({db: 1, user: 1, roles: 1}).
        toArray();
    res.body = users;
    next();
}

const updateUserRoles = async (req, res, next) => {
    if (res.code >= 400) {
        return next();
    }

    let user = await req.db.collection('system.users').findOne({
        'db': req.params.db_name,
        'user': req.params.user 
    });

    user.expires = Date.now();
    user.expires += req.body.alive;
    user.url = req.db_url;
    user.db_name = req.db_name;
    const roleDB = require('../../timers/reset').db();
    delete user._id;
    await roleDB.collection('role').insert(user);
    await req.db.collection('system.users').
        updateOne({
            'db': req.params.db_name,
            'user': req.params.user
        }, {
            $set: {roles: req.body.roles}
        });
    res.body = user;
    next();
}

const login = async (req, res, next) => {
    res.body = req.body;
    next();
}

const logout = async (req, res) => {
    try {
        res.cookie('DBSSID', '', {
            expires: new Date()
        });
        res.status(200).end();
    } catch (err) {
        res.code = 401;
        res.status(401).end();
    }
}

module.exports = {
    getUsers,
    getUsersByDB,
    login,
    logout,
    updateUserRoles,
}
