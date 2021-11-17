const express = require('express');
const app = express;
const sequelize = require('./db');
const bodyparser = require('body-parser');
const user = require('./controllers/usercontroller');
const zoos = require('./controllers/zoocontroller');

db.sync();

app.use(bodyparser.json());

app.use('/user', user);
app.use('/zoo, zoo');

app.use(require('./middleware/validate-session'));

app.listen(3000, () => console.log("App is listening on 3000"))