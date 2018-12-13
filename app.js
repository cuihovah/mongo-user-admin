
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const response = require('./modules/middlewares/postmiddlewares/response');
const {
    getUsers,
    getUsersByDB,
    login,
    logout,
    updateUserRoles,
} = require('./modules/controllers/services/services');

const filters = require('./modules/controllers/filters/filters');
const dbAdmin = require('./modules/middlewares/premiddlewares/admin_db');
const entry = require('./modules/middlewares/premiddlewares/entry');
const loginSession = require('./modules/middlewares/postmiddlewares/session').login;
const session = require('./modules/middlewares/premiddlewares/session');

app.use(bodyParser.json({type: 'application/json', limit: '20480kb'}));
app.use(bodyParser.urlencoded({extended: true, limit:'20480kb'}));

setInterval(require('./modules/timers/reset').timer, 60 * 1000);
app.use('/', express.static(path.resolve('./dist')));
app.use(entry);
app.post('/sessions', login, loginSession);
app.delete('/sessions', logout);
app.use(cookieParser());
app.use(session);
app.use(dbAdmin);
app.get('/users', getUsers);
app.get('/dbs/:db_name/users', filters.getUsersByDB, getUsersByDB);
app.put('/dbs/:db_name/users/:user', filters.getUsersByDB, updateUserRoles);
 
// Use connect method to connect to the server
app.use(response);

app.listen(9999)

