const middleware = require('./util/middleware');
const express = require('express');
require('express-async-errors');

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(middleware.requestLogger);
}
const dsoRouter = require('./controllers/dsos');
app.use('/dsos', dsoRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;

