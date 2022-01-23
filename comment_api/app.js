const config = require('./util/config');
const logger = require('./util/logger');
const middleware = require('./util/middleware');

const express = require('express');
require('express-async-errors');
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');
const commentsRouter = require('./controllers/comments');

logger.info('Connecting to MongoDB');
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB');
  })
  .catch(error => logger.error(error));

app.use(express.json());
if (process.env.NODE_ENV !== 'test') {
  app.use(middleware.requestLogger);
}

app.use('/comments', commentsRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;