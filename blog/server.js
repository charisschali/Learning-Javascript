const express =  require('express');
const app = express();
const api = require('./api/api');
const err = require('./middlewares/err')

// setup the app middleware
require('./middlewares/appMiddleware')(app);

// setup the api
app.use('/api/', api);

// set up global error handling
app.use(err())

// export the app for testing
module.exports = app;