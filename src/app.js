/*jslint node: true */
  'use strict';
  
  const express = require('express');
  const bodyParser = require('body-parser');
  const morgan = require('morgan');
  const methodOverride = require('method-override');
  const mongoose = require('mongoose');

  const app = express();

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, ()=>console.info('Server started on  the port '+PORT));

  app.use(morgan('dev')); // log every request to the console
  app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); // parse application/json
  app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
  app.use(methodOverride());


  mongoose.connect(config.db);

//This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', ()=> {
  console.log('Mongoose default connection open to ' + config.db);
});

  module.exports= app;