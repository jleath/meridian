const config = require('./util/config');
const middleware = require('./util/middleware');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('./util/logger');
const dsoRouter = require('./controllers/dsos');
const commentsRouter = require('./controllers/comments');

require('express-async-errors');

logger.info('Connecting to MongoDB');
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch(error => logger.error(error));

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV !== 'test') {
  app.use(middleware.requestLogger);
}
app.use('/dsos', dsoRouter);
app.use('/comments', commentsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;

