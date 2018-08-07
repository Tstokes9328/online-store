require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

//Environmental Vairables
let {
    CONNECTION_STRING
    } = process.env;

//Connection To Database w/ Massive
massive(CONNECTION_STRING).then(db => {
    console.log('Database Connected')
    app.set('db', db)
});

app.listen(3005, () => console.log('Connected on port 3005'));