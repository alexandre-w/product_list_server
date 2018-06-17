const express = require('express');
const app = express();
const api = require('./api/api') ;
const err = require('./middleware/err');

const middleware = require('./middleware/middleware')(app);

app.use('/api', api)
app.use(err());

module.exports = app ;


