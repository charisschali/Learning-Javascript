const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
const morgan = require('morgan');

const lionRouter = require('./lions')
const tigerRouter = require('./tigers')

app.use(morgan('dev'));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/lions', lionRouter);
app.use('/tigers', tigerRouter);

app.use((err, req, res, next) => {
   if (err){
      console.log(err.message)
      res.status(500).send(err)
   }
});

module.exports = app;