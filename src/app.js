/*jslint node: true */
'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const user = require('./router/user');
const writingPost = require('./router/writingPost');
//express
const app = express();
//variable
const port = 3000; //port for server
let server;

//app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
  'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());

//router
app.use('/user', user);
app.use('/post', writingPost);

//This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + config.db);
});

function runServer() {
  const PORT = process.env.PORT || port;

  return new Promise((resolve, reject) => {
    server = app.
    listen(port, () => {
      console.info('Server started on  the port ' + port);
      resolve(server);
    }).on("error", (err) => {
      reject(err);
    });
  });
};

function stopServer() {
  return new Promise((resolve, reject) => {
    console.log('Seerver stopped');
    server.close((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve()
    });
  });
};


if (require.main === module) {
  runServer().catch(err => console.error(err));
}

//mongoose.connect(config.db);

module.exports = {
  app,
  runServer,
  stopServer
};