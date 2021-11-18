const express = require('express');
const sequelize = require('./db');
const bodyparser = require('body-parser');
const db = require("./db");
const user = require('./controllers/userController');
const zoos = require('./controllers/zooKeeperController');
const app = express();


app.use(express.json());

app.use('/user', user);
app.use('/zoo', zoos);

// app.use(require('./middleware/validate-session'));

db.authenticate()
    .then(() => db.sync({ force: true })) // => {force: true}
    .then(() => {
        app.listen(3000, () =>
            console.log(`[Server: ] App is listening on Port ${3000}`)
        );
    })
    .catch((err) => {
        console.log(`[Server: ] Server Crashed. Error is = ${err}`);
        console.error(err);
    });